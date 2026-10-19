#!/usr/bin/env python3
"""Wait for the exact GitHub Pages release and verify its public HTML/media."""
import argparse
import hashlib
import json
import re
import subprocess
import time
import urllib.request
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('--commit', required=True)
parser.add_argument('--html', required=True)
parser.add_argument('--output', required=True)
args = parser.parse_args()
expected = Path(args.html).read_bytes()
deadline = time.monotonic() + 240
last = None
while time.monotonic() < deadline:
    raw = subprocess.check_output(['gh', 'api', 'repos/epac-hub/e-pac.ai/pages/builds/latest']).decode()
    build = json.loads(re.sub(r'\x1b\[[0-?]*[ -/]*[@-~]', '', raw))
    key = (build.get('status'), build.get('commit'))
    if key != last:
        print(f"Pages: status={key[0]} commit={key[1]}", flush=True)
        last = key
    if build.get('commit') == args.commit and build.get('status') == 'errored':
        raise RuntimeError(build.get('error'))
    if build.get('commit') == args.commit and build.get('status') == 'built':
        request = urllib.request.Request('https://e-pac.ai/', headers={'Cache-Control': 'no-cache', 'User-Agent': 'ePAC-release-verification'})
        try:
            with urllib.request.urlopen(request, timeout=20) as response:
                actual = response.read()
            if actual == expected:
                assets = []
                for path in ['/brand/epac-logo-restored.webp', '/brand/epac-logo-original.png', '/media/space-ambient.mp3', '/manus-routes.json', '/landing/', '/experience/']:
                    request = urllib.request.Request('https://e-pac.ai' + path, method='HEAD')
                    with urllib.request.urlopen(request, timeout=20) as response:
                        assets.append({'path': path, 'status': response.status, 'type': response.headers.get('Content-Type')})
                result = {'commit': args.commit, 'pages_status': build['status'], 'url': 'https://e-pac.ai/', 'html_sha256': hashlib.sha256(actual).hexdigest(), 'html_matches_local': True, 'assets': assets}
                Path(args.output).write_text(json.dumps(result, indent=2) + '\n')
                print(json.dumps(result, indent=2), flush=True)
                break
            print('Pages built; waiting for public HTML to match the new version.', flush=True)
        except Exception as exc:
            print(f'Public verification pending: {type(exc).__name__}: {exc}', flush=True)
    time.sleep(6)
else:
    raise TimeoutError('The exact public release was not confirmed within the bounded wait.')
