# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import logging as std_logging
import os

import google.auth
from fastapi import FastAPI
from google.adk.cli.fast_api import get_fast_api_app
from google.cloud import logging as google_cloud_logging
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider, export

from app.utils.gcs import create_bucket_if_not_exists
from app.utils.tracing import CloudTraceLoggingSpanExporter
from app.utils.typing import Feedback

allow_origins = (
    os.getenv("ALLOW_ORIGINS", "").split(",")
    if os.getenv("ALLOW_ORIGINS")
    else None
)

# GCP integrations (Cloud Logging, Cloud Storage, Cloud Trace) require
# Application Default Credentials. When running locally with only an AI
# Studio API key, ADC is unavailable, so fall back to plain local logging
# and skip the GCS bucket / Cloud Trace setup instead of crashing on import.
bucket_name = None
try:
    _, project_id = google.auth.default()
    logging_client = google_cloud_logging.Client()
    logger = logging_client.logger(__name__)

    bucket_name = f"gs://{project_id}-short-movie-agents-logs-data"
    create_bucket_if_not_exists(
        bucket_name=bucket_name, project=project_id, location="europe-west4"
    )

    provider = TracerProvider()
    processor = export.BatchSpanProcessor(CloudTraceLoggingSpanExporter())
    provider.add_span_processor(processor)
    trace.set_tracer_provider(provider)
except Exception as e:
    std_logging.warning(
        "Google Cloud credentials not found or GCP init failed; "
        f"running with local logging only (Cloud Logging/Storage/Trace disabled): {e}"
    )

    class _LocalLogger:
        """Drop-in stand-in for google.cloud.logging's Logger.log_struct."""

        def __init__(self, name: str) -> None:
            self._logger = std_logging.getLogger(name)

        def log_struct(self, info: dict, severity: str = "INFO") -> None:
            level = std_logging.getLevelName(severity)
            self._logger.log(level if isinstance(level, int) else std_logging.INFO, info)

    logger = _LocalLogger(__name__)
    bucket_name = None

AGENT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# In-memory session configuration - no persistent storage
session_service_uri = None

app: FastAPI = get_fast_api_app(
    agents_dir=AGENT_DIR,
    web=True,
    artifact_service_uri=bucket_name,
    allow_origins=allow_origins,
    session_service_uri=session_service_uri,
)
app.title = "short-movie-agents"
app.description = "API for interacting with the short-movie-agents"


@app.post("/feedback")
def collect_feedback(feedback: Feedback) -> dict[str, str]:
    """Collect and log feedback.

    Args:
        feedback: The feedback data to log

    Returns:
        Success message
    """
    logger.log_struct(feedback.model_dump(), severity="INFO")
    return {"status": "success"}


# Main execution
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
