#!/usr/bin/env python3
"""Verify one-screen layout and real playback in the existing CDP browser."""
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
        async def call(method, params=None):
            nonlocal sequence
            sequence += 1
            current = sequence
            await ws.send(json.dumps({'id': current, 'method': method, 'params': params or {}}))
            while True:
                response = json.loads(await ws.recv())
                if response.get('id') == current:
                    if 'error' in response:
                        raise RuntimeError(response['error'])
                    return response.get('result', {})
        async def evaluate(expression):
            response = await call('Runtime.evaluate', {'expression': expression, 'returnByValue': True, 'awaitPromise': True})
            if 'exceptionDetails' in response:
                raise RuntimeError(response['exceptionDetails'])
            return response['result'].get('value')
        await call('Page.bringToFront')
        await call('Page.reload', {'ignoreCache': True})
        await asyncio.sleep(2)
        await evaluate("if(document.querySelector('.motion-control').getAttribute('aria-pressed')==='false')document.querySelector('.motion-control').click()")
        layouts = []
        for width, height in [(1440, 900), (390, 844), (320, 568), (844, 390), (1440, 400)]:
            await call('Emulation.setDeviceMetricsOverride', {'width': width, 'height': height, 'deviceScaleFactor': 1, 'mobile': width < 768})
            await asyncio.sleep(0.7)
            layout = await evaluate("(()=>{const selectors=['.signature-logo','.hero-copy','.hero-actions','.landing-bottom'];const rects=Object.fromEntries(selectors.map(s=>{const r=document.querySelector(s).getBoundingClientRect();return[s,{top:r.top,bottom:r.bottom,left:r.left,right:r.right}]}));return{viewport:[innerWidth,innerHeight],document:[document.documentElement.scrollWidth,document.documentElement.scrollHeight],rects,logo:document.querySelector('.signature-logo img').getAttribute('src'),title:document.querySelector('h1').textContent,hiddenTitle:document.querySelector('h1').classList.contains('sr-only'),removed:document.querySelectorAll('.site-header,.location-stack,.header-contact,.header-note').length,sections:document.querySelectorAll('main section').length,canvases:document.querySelectorAll('canvas').length}})()")
            layouts.append(layout)
            assert layout['document'][0] <= width and layout['document'][1] <= height, f'Page scrolls: {layout}'
            for selector, rect in layout['rects'].items():
                assert rect['top'] >= -1 and rect['bottom'] <= height + 1 and rect['left'] >= -1 and rect['right'] <= width + 1, f'Clipped {selector}: {layout}'
            assert layout['removed'] == 0 and layout['title'] == 'Elliot Pacheco'
            assert layout['rects']['.hero-actions']['bottom'] <= layout['rects']['.landing-bottom']['top'], f'Controls overlap: {layout}'
            assert layout['logo'].endswith('/brand/elliot-pacheco-original.png')
            assert layout['sections'] == 0 and layout['canvases'] == 0
            assert layout['hiddenTitle'], 'Nombre repetido visualmente'
            for selector in ('.signature-logo', '.hero-copy', '.hero-actions'):
                rect = layout['rects'][selector]
                assert abs((rect['left'] + rect['right']) / 2 - width / 2) < 2, f'Not horizontally centered: {selector}: {layout}'
            group_center = (layout['rects']['.signature-logo']['top'] + layout['rects']['.hero-actions']['bottom']) / 2
            assert abs(group_center - height / 2) < 3, f'Not vertically centered: {layout}'
        await call('Emulation.setDeviceMetricsOverride', {'width': 1440, 'height': 900, 'deviceScaleFactor': 1, 'mobile': False})
        ready = await evaluate("new Promise(resolve=>{let count=0;const timer=setInterval(()=>{const v=document.querySelector('.aerial-film video');if(v.videoWidth===3840&&!v.paused&&v.readyState>=2){clearInterval(timer);resolve(true)}else if(++count>=100){clearInterval(timer);resolve(false)}},100)})")
        before = await evaluate("({state:document.querySelector('.aerial-film').dataset.playback,quality:document.querySelector('.aerial-film').dataset.resolution,width:document.querySelector('.aerial-film video').videoWidth,height:document.querySelector('.aerial-film video').videoHeight,time:document.querySelector('.aerial-film video').currentTime,paused:document.querySelector('.aerial-film video').paused,source:document.querySelector('.aerial-film video').currentSrc,error:document.querySelector('.aerial-film video').error?.message||null})")
        await asyncio.sleep(2)
        after = await evaluate("({time:document.querySelector('.aerial-film video').currentTime,paused:document.querySelector('.aerial-film video').paused})")
        result = {'url': page['url'], 'layouts': layouts, 'film_before': before, 'film_after': after}
        Path('QA-evidence').mkdir(exist_ok=True)
        Path('QA-evidence/custom-3d-runtime.json').write_text(json.dumps(result, indent=2) + '\n')
        print(json.dumps(result, indent=2))
        assert ready and before['width'] == 3840 and before['height'] == 2160 and before['quality'] == '4k', f'4K playback unavailable: {before}'
        assert before['state'] == 'playing' and not before['paused'] and before['error'] is None
        assert after['time'] != before['time'] and not after['paused']

if __name__ == '__main__':
    asyncio.run(main())
