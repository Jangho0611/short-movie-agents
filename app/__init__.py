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

import logging
import os

import google.auth

from app.agent import root_agent

# Only default to Vertex AI credentials/config when ADC is actually available.
# Without it (e.g. running locally with just an AI Studio API key), skip this
# so google.auth.default() doesn't crash the whole app on import.
try:
    _, project_id = google.auth.default()
    os.environ.setdefault("GOOGLE_CLOUD_PROJECT", project_id)
    os.environ.setdefault("GOOGLE_CLOUD_LOCATION", "global")
    os.environ.setdefault("GOOGLE_GENAI_USE_VERTEXAI", "True")
except Exception as e:
    logging.warning(
        "Google Cloud ADC not found; skipping Vertex AI defaults. "
        f"Set GOOGLE_API_KEY to use AI Studio instead. ({e})"
    )
