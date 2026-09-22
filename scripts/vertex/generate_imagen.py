#!/usr/bin/env python3
"""Generate exactly one image with a Google image model on Vertex AI."""

from __future__ import annotations

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import google.auth
from google import genai
from google.genai.types import GenerateContentConfig, HttpOptions, ImageConfig, Modality, Part


DEFAULT_PROJECT_ID = "gen-lang-client-0646355490"
DEFAULT_REGION = "global"
DEFAULT_MODEL_ID = "gemini-2.5-flash-image"
DEFAULT_GENERATION_COUNT = 1
DEFAULT_LOG_PATH = Path("logs/vertex-generation.jsonl")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate one PNG through Vertex AI and record provenance."
    )
    parser.add_argument("--project-id", default=DEFAULT_PROJECT_ID)
    parser.add_argument("--region", default=DEFAULT_REGION)
    parser.add_argument("--model-id", default=DEFAULT_MODEL_ID)
    parser.add_argument("--prompt", required=True)
    parser.add_argument("--aspect-ratio", default=None)
    parser.add_argument("--reference-image", type=Path)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--log", type=Path, default=DEFAULT_LOG_PATH)
    return parser.parse_args()


def append_log(path: Path, record: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as log_file:
        log_file.write(json.dumps(record, ensure_ascii=False) + "\n")


def main() -> int:
    args = parse_args()
    generated_at = datetime.now(timezone.utc).isoformat()
    api_host = (
        "aiplatform.googleapis.com"
        if args.region == "global"
        else f"{args.region}-aiplatform.googleapis.com"
    )
    endpoint = (
        f"https://{api_host}/v1/projects/"
        f"{args.project_id}/locations/{args.region}/publishers/google/models/"
        f"{args.model_id}:generateContent"
    )
    record: dict[str, Any] = {
        "generated_at": generated_at,
        "provider": "Google Cloud Vertex AI",
        "project_id": args.project_id,
        "region": args.region,
        "model_id": args.model_id,
        "endpoint": endpoint,
        "prompt": args.prompt,
        "aspect_ratio": args.aspect_ratio,
        "reference_image_used": args.reference_image is not None,
        "reference_image": str(args.reference_image.resolve()) if args.reference_image else None,
        "generation_count": DEFAULT_GENERATION_COUNT,
        "output_file": str(args.output.resolve()),
        "request_status": "started",
        "result_status": "pending",
        "request_id": None,
    }

    try:
        credentials, adc_project_id = google.auth.default()
        record["authentication"] = "Application Default Credentials"
        record["credential_type"] = type(credentials).__name__
        record["adc_project_matches_request_project"] = (
            adc_project_id == args.project_id
        )

        client = genai.Client(
            vertexai=True,
            project=args.project_id,
            location=args.region,
            credentials=credentials,
            http_options=HttpOptions(api_version="v1"),
        )
        response = client.models.generate_content(
            model=args.model_id,
            contents=(
                [Part.from_bytes(data=args.reference_image.read_bytes(), mime_type="image/png"), args.prompt]
                if args.reference_image else args.prompt
            ),
            config=GenerateContentConfig(
                candidate_count=DEFAULT_GENERATION_COUNT,
                response_modalities=[Modality.TEXT, Modality.IMAGE],
                image_config=(ImageConfig(aspect_ratio=args.aspect_ratio) if args.aspect_ratio else None),
            ),
        )

        candidates = response.candidates or []
        image_parts = [
            part
            for candidate in candidates
            for part in (candidate.content.parts if candidate.content else [])
            if part.inline_data and part.inline_data.data
        ]
        if len(image_parts) != DEFAULT_GENERATION_COUNT:
            raise RuntimeError(
                f"Expected one generated image, received {len(image_parts)}."
            )

        image_bytes = image_parts[0].inline_data.data
        if not image_bytes.startswith(b"\x89PNG\r\n\x1a\n"):
            raise RuntimeError(
                "The model returned image data that is not a PNG file "
                f"(MIME type: {image_parts[0].inline_data.mime_type})."
            )

        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_bytes(image_bytes)
        record["request_status"] = "completed"
        record["result_status"] = "success"
        record["request_id"] = response.response_id
        record["model_version"] = response.model_version
        record["output_bytes"] = args.output.stat().st_size
        return_code = 0
    except Exception as error:  # Record one failed call without retrying.
        record["request_status"] = "completed"
        record["result_status"] = "failed"
        record["error_type"] = type(error).__name__
        record["error_message"] = str(error)
        return_code = 1
    finally:
        append_log(args.log, record)

    return return_code


if __name__ == "__main__":
    raise SystemExit(main())
