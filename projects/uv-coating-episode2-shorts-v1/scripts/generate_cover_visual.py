#!/usr/bin/env python3
import argparse
from pathlib import Path

import google.auth
from google import genai
from google.genai import types


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('--prompt', required=True)
    parser.add_argument('--reference', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()

    credentials, _ = google.auth.default()
    client = genai.Client(
        vertexai=True,
        project='gen-lang-client-0646355490',
        location='global',
        credentials=credentials,
        http_options=types.HttpOptions(api_version='v1'),
    )
    response = client.models.generate_content(
        model='gemini-2.5-flash-image',
        contents=[
            types.Part.from_bytes(
                data=args.reference.read_bytes(), mime_type='image/png'
            ),
            types.Part.from_text(text=args.prompt),
        ],
        config=types.GenerateContentConfig(
            response_modalities=[types.Modality.TEXT, types.Modality.IMAGE],
        ),
    )
    for candidate in response.candidates or []:
        for part in candidate.content.parts if candidate.content else []:
            if part.inline_data and part.inline_data.data:
                args.output.parent.mkdir(parents=True, exist_ok=True)
                args.output.write_bytes(part.inline_data.data)
                return
    raise RuntimeError('Vertex returned no image.')


if __name__ == '__main__':
    main()
