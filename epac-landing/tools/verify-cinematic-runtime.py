#!/usr/bin/env python3
"""Check the existing Sandbox browser tab via CDP; never launches a browser."""
import argparse
import asyncio
import json
import urllib.request
from pathlib import Path
import websockets

async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--origin', required=True)
    parser.add_argument('--output', required=True)
    args = parser.parse_args()
    pages = json.load(urllib.request.urlopen('http://127.0.0.1:9222/json/list'))
    page = next(item for item in pages if item.get('type') == 'page' and item.get('url', '').startswith(args.origin))
    async with websockets.connect(page['webSocketDebuggerUrl']) as ws:
        sequence = 0
        async def call(method, params=None):
            nonlocal sequence
            sequence += 1
            current = sequence
            await ws.send(json.dumps({'id': current, 'method': method, 'params': params or {}}))
            while True:
                message = json.loads(await ws.recv())
                if message.get('id') == current:
                    if 'error' in message:
                        raise RuntimeError(message['error'])
                    return message.get('result', {})
        async def evaluate(expression, gesture=False):
            result = await call('Runtime.evaluate', {'expression': expression, 'returnByValue': True, 'awaitPromise': True, 'userGesture': gesture})
            if 'exceptionDetails' in result:
                raise RuntimeError(result['exceptionDetails'])
            return result['result'].get('value')
        await call('Page.bringToFront')
        await evaluate("if(document.querySelector('.motion-control').getAttribute('aria-pressed')==='false')document.querySelector('.motion-control').click();window.scrollTo(0,0)")
        await asyncio.sleep(2)
        used_fallback = await evaluate("document.querySelector('.hero-film').dataset.playback === 'blocked'")
        if used_fallback:
            await evaluate("document.querySelector('.hero-film .film-replay').click()", gesture=True)
            await asyncio.sleep(1)
        initial = await evaluate("({visibility:document.visibilityState,playback:document.querySelector('.hero-film').dataset.playback,time:document.querySelector('.hero-film video').currentTime,paused:document.querySelector('.hero-film video').paused,ready:document.querySelector('.hero-film video').readyState,overflow:document.documentElement.scrollWidth>innerWidth,viewport:[innerWidth,innerHeight],stageHeights:[...document.querySelectorAll('#focus,#approach')].map(e=>({id:e.id,height:e.offsetHeight}))})")
        await asyncio.sleep(2)
        advanced = await evaluate("({time:document.querySelector('.hero-film video').currentTime,paused:document.querySelector('.hero-film video').paused,playback:document.querySelector('.hero-film').dataset.playback})")
        await evaluate("document.querySelector('.motion-control').click()")
        await asyncio.sleep(0.3)
        paused = await evaluate("({paused:document.querySelector('.hero-film video').paused,state:document.querySelector('.hero-film').dataset.playback,canvases:document.querySelectorAll('canvas').length,focusLayout:getComputedStyle(document.querySelector('.focus-track')).display})")
        await evaluate("document.querySelector('.motion-control').click()")
        await asyncio.sleep(0.5)
        await evaluate("document.querySelector('.audio-control').click()", gesture=True)
        await asyncio.sleep(2)
        audio = await evaluate("({pressed:document.querySelector('.audio-control').getAttribute('aria-pressed'),status:document.querySelector('.audio-status').textContent})")
        if audio['pressed'] == 'true':
            await evaluate("document.querySelector('.audio-control').click()", gesture=True)
        result = {'url': page['url'], 'manual_play_fallback_used': used_fallback, 'initial': initial, 'after_two_seconds': advanced, 'motion_off': paused, 'audio_after_user_gesture': audio}
        Path(args.output).write_text(json.dumps(result, indent=2) + '\n')
        print(json.dumps(result, indent=2))
        assert initial['visibility'] == 'visible', 'The selected tab is not active.'
        assert initial['playback'] == 'playing' and not initial['paused'], 'Hero film did not play.'
        assert advanced['time'] != initial['time'] and not advanced['paused'], 'Film time did not advance.'
        assert not initial['overflow'], 'Document width overflow.'
        assert paused['paused'] and paused['canvases'] == 0, 'Motion-off did not pause/unmount effects.'

if __name__ == '__main__':
    asyncio.run(main())
