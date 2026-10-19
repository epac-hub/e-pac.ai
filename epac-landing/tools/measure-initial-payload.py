#!/usr/bin/env python3
"""Measure static JS import graph; gzip is reproducible, not a network timing."""
import argparse
import gzip
import json
import re
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('--output', required=True)
parser.add_argument('--max-gzip-bytes', type=int, default=100000)
args = parser.parse_args()
html = Path('dist/index.html').read_text()
entry = re.search(r'<script[^>]+src="([^"]+)"', html).group(1)
seen = set()
def visit(url):
    path = Path('dist' + url) if url.startswith('/') else Path(url)
    if str(path) in seen or not path.is_file():
        return
    seen.add(str(path))
    for dependency in re.findall(r'(?:from|import)\s*[\"\']([^\"\']+\.js)[\"\']', path.read_text()):
        visit(dependency if dependency.startswith('/') else str(path.parent / dependency))
visit(entry)
rows = [{'path': path, 'bytes': Path(path).stat().st_size, 'gzip_bytes': len(gzip.compress(Path(path).read_bytes()))} for path in sorted(seen)]
result = {'initial_js': rows, 'initial_js_bytes': sum(row['bytes'] for row in rows), 'initial_js_gzip_bytes': sum(row['gzip_bytes'] for row in rows)}
Path(args.output).parent.mkdir(parents=True, exist_ok=True)
Path(args.output).write_text(json.dumps(result, indent=2) + '\n')
print(json.dumps(result, indent=2))
assert result['initial_js_gzip_bytes'] <= args.max_gzip_bytes, 'Initial payload budget exceeded'
