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
import time

from google import genai
from google.adk.agents import Agent
from google.adk.tools import ToolContext
from google.genai import types

from .utils.utils import load_prompt_from_file

# Set logging
logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

# Configuration constants
MODEL = "gemini-2.5-flash"
VIDEO_MODEL = "veo-3.1-lite-generate-preview"
DESCRIPTION = "Agent responsible for creating videos based on a screenplay and storyboards"
ASPECT_RATIO = "9:16"

# Gemini API key mode: genai.Client() auto-detects GOOGLE_API_KEY / GEMINI_API_KEY
# from the environment, no GCP project/location or ADC required.
client = genai.Client()

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_DIR = os.path.join(PROJECT_ROOT, "output")


# Video generate tool
def video_generate(
    prompt: str, scene_number: int, tool_context: ToolContext
) -> list[str]:
    """Generate one short vertical (9:16) video clip for a single scene using Veo.

    Args:
        prompt: One complete English-language description of everything that
            should happen in this scene's video: visuals, camera shot/angle,
            movement, lighting/mood, and any spoken dialogue or sound to
            include (write it as "Audio: ..." at the end of the prompt).
            Example: "A golden retriever puppy chases a red ball across a
            sunlit park lawn, tracking shot, shallow depth of field, warm
            afternoon light, cinematic. Audio: excited panting and a child
            laughing."
        scene_number: The scene's position in the story, starting from 1.
            Example: 1

    Returns:
        A list of local file paths to the generated video clip(s), e.g.
        ["output/<session_id>/scene_1_0.mp4"], or an empty list if
        generation failed.
    """
    try:
        # Get session_id for the local output folder
        session_id = tool_context._invocation_context.session.id
        session_output_dir = os.path.join(OUTPUT_DIR, session_id)
        os.makedirs(session_output_dir, exist_ok=True)

        # Actual video generation
        logger.info(f"Generating video for scene {scene_number} with prompt: {prompt}")

        operation = client.models.generate_videos(
            model=VIDEO_MODEL,
            prompt=prompt,
            config=types.GenerateVideosConfig(
                aspect_ratio=ASPECT_RATIO,
                number_of_videos=1,
                duration_seconds=8,
            ),
        )

        while not operation.done:
            time.sleep(15)
            # Reassign: this is a fresh operation object with the latest
            # status/result, not an in-place update of the old one.
            operation = client.operations.get(operation)
            logger.info(f"Video generation operation: {operation}")

        # One-off full dump of the completed operation so the actual SDK
        # response shape can be inspected if fields ever shift again.
        logger.info(
            f"Video generation operation completed, full dump: "
            f"{operation.model_dump()}"
        )

        # The mldev (API key) response path populates both `.result` and
        # `.response` identically; `.result` matches the SDK's own
        # documented usage, `.response` is kept as a fallback.
        result = operation.result or operation.response
        generated_videos = result.generated_videos if result else None

        if generated_videos:
            logger.info(
                f"Generated {len(generated_videos)} video(s) for prompt: {prompt}"
            )
            saved_paths = []
            for video in generated_videos:
                # Veo (mldev/API-key mode) returns a remote `uri`, not
                # inline bytes — download before .save(), which only
                # works once `video_bytes` is populated.
                client.files.download(file=video.video)
                file_path = os.path.join(
                    session_output_dir, f"scene_{scene_number}.mp4"
                )
                video.video.save(file_path)
                saved_paths.append(file_path)
            return saved_paths
        else:
            logger.error(
                f"Generated no (0) video for prompt: {prompt}. "
                f"operation.error={operation.error}, "
                f"rai_media_filtered_count="
                f"{getattr(result, 'rai_media_filtered_count', None)}, "
                f"rai_media_filtered_reasons="
                f"{getattr(result, 'rai_media_filtered_reasons', None)}"
            )
            return []  # Return an empty list if no video
    except Exception as e:
        logger.error(f"Error generating a video for {prompt}: {e}")
        return []


# --- Video Agent ---
video_agent = None
try:
    video_agent = Agent(
        # Using a potentially different/cheaper model for a simple task
        model=MODEL,
        name="video_agent",
        description=(DESCRIPTION),
        instruction=load_prompt_from_file("video_agent.txt"),
        output_key="video",
        tools=[video_generate],
    )
    logger.info(f"✅ Agent '{video_agent.name}' created using model '{MODEL}'.")
except Exception as e:
    logger.error(
        f"❌ Could not create Storyboard agent. Check API Key ({MODEL}). Error: {e}"
    )
