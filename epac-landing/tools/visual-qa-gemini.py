#!/usr/bin/env python3
"""Optional pre-publish visual review with Google AI Studio's Gemini API.

Usage: python3 tools/visual-qa-gemini.py screenshot-dark.png screenshot-light.png
Requires: pip install google-genai; GEMINI_API_KEY in the local environment.
The screenshots and model output are review evidence, not proof of WCAG compliance.
Never put the key in Vite environment variables or static site files.
"""

import os
import sys
from pathlib import Path

from google import genai
from google.genai import types

MODEL = "gemini-3.8-flash"
PROMPT = (
    "You are reviewing rendered screenshots of an interactive portfolio site. "
    "For each image, identify only visible issues with headline legibility, starfield visibility, "
    "storytelling text, video/graphic occlusion, color contrast and layout clipping. "
    "Distinguish direct observations from items that cannot be determined in a static screenshot "
    "(such as playback and scrolling speed). Give at most five precise corrections; "
    "if there are no visible problems, say so. Do not invent unseen features or claim WCAG compliance."
)


def main() -> int:
    paths = [Path(arg) for arg in sys.argv[1:]]
    if not paths or any(not path.is_file() for path in paths):
        print("Usage: python3 tools/visual-qa-gemini.py <screenshot.png> [more.png]", file=sys.stderr)
        return 2
    key = os.getenv("GEMINI_API_KEY")
    if not key:
        print("GEMINI_API_KEY is missing; no network call made.", file=sys.stderr)
        return 2

    contents = [PROMPT]
    for path in paths:
        mime = "image/jpeg" if path.suffix.lower() in (".jpg", ".jpeg") else "image/png"
        contents.extend([f"Screenshot {path.name}:", types.Part.from_bytes(data=path.read_bytes(), mime_type=mime)])
    client = genai.Client(api_key=key)
    response = client.models.generate_content(model=MODEL, contents=contents)
    if not response.text:
        print("Gemini returned no textual findings.", file=sys.stderr)
        return 1
    print(response.text)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
