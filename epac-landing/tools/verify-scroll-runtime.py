#!/usr/bin/env python3
"""Verify scrolling in the existing browser; no browser launch."""
import asyncio
import json
import urllib.request
from pathlib import Path
import websockets

async def main():
    pages = json.load(urllib.request.urlopen('http://127.0.0.1:9222/json/list'))
    page = next(p for p in pages if p.get('url', '').startswith('https://8328-'))
    sequence = 0
    async with websockets.connect(page['webSocketDebuggerUrl']) as ws:
        async def call(method, params):
            nonlocal sequence
            sequence += 1
            ident = sequence
            await ws.send(json.dumps({'id': ident, 'method': method, 'params': params}))
            while True:
                response = json.loads(await ws.recv())
                if response.get('id') == ident:
                    return response.get('result', {})
        async def evaluate(expression):
            result = await call('Runtime.evaluate', {'expression': expression, 'returnByValue': True})
            return result['result'].get('value')
        await call('Page.bringToFront', {})
        await evaluate('window.scrollTo(0,0)')
        await asyncio.sleep(1)
        await evaluate("(()=>{const e=document.querySelector('#focus'),t=document.querySelector('.focus-track'),v=document.querySelector('.focus-viewport');window.scrollTo(0,e.getBoundingClientRect().top+scrollY-84+(t.scrollWidth-v.clientWidth)*0.55)})()")
        await asyncio.sleep(1.5)
        focus = await evaluate("({transform:getComputedStyle(document.querySelector('.focus-track')).transform,count:document.querySelector('.focus-count').textContent,clipContent:getComputedStyle(document.querySelector('#focus')).clipPath,clipLayer:getComputedStyle(document.querySelector('.focus-portal')).clipPath})")
        await evaluate("window.scrollTo(0,document.querySelector('#approach').getBoundingClientRect().top+scrollY-84+430)")
        await asyncio.sleep(1.5)
        steps = await evaluate("({active:document.querySelector('.step-active h3').textContent,number:document.querySelector('.current-step').textContent,clipContent:getComputedStyle(document.querySelector('#approach')).clipPath,narrative:document.querySelector('.narrative-film').dataset.playback,scroll:scrollY})")
        await evaluate('window.scrollTo(0,0)')
        result = {'focus': focus, 'approach': steps}
        Path('QA-evidence/scroll-correction-10-19-2026.json').write_text(json.dumps(result, indent=2) + '\n')
        print(json.dumps(result, indent=2))
        assert focus['transform'] != 'none'
        assert focus['clipContent'] == 'none' and steps['clipContent'] == 'none'
        assert steps['active'] == 'Build.'

if __name__ == '__main__':
    asyncio.run(main())
