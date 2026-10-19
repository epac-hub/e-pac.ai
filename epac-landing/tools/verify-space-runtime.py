#!/usr/bin/env python3
"""Verify the existing Sandbox browser; never launch another browser."""
import argparse
import asyncio
import base64
import io
import json
import urllib.request
from pathlib import Path

import websockets
from PIL import Image, ImageChops

parser = argparse.ArgumentParser()
parser.add_argument('--origin', default='https://8328-iw7hwo01yps9dfkm7ax42-a7633fbe.us1.manus.computer')
parser.add_argument('--output', default='QA-evidence/space-runtime.json')
args = parser.parse_args()

async def main():
    pages = json.load(urllib.request.urlopen('http://127.0.0.1:9222/json/list'))
    page = next(p for p in pages if p.get('type') == 'page' and p.get('url', '').startswith(args.origin))
    result = {'origin': args.origin, 'layouts': []}
    async with websockets.connect(page['webSocketDebuggerUrl'], max_size=30_000_000) as socket:
        sequence = 0
        async def call(method, params=None):
            nonlocal sequence
            sequence += 1
            await socket.send(json.dumps({'id': sequence, 'method': method, 'params': params or {}}))
            while True:
                message = json.loads(await socket.recv())
                if message.get('id') == sequence:
                    if 'error' in message:
                        raise RuntimeError(message['error'])
                    return message.get('result', {})
        async def evaluate(expression, gesture=False):
            response = await call('Runtime.evaluate', {'expression': expression, 'returnByValue': True, 'awaitPromise': True, 'userGesture': gesture})
            if response.get('exceptionDetails'):
                raise RuntimeError(response['exceptionDetails'])
            return response.get('result', {}).get('value')
        async def capture():
            response = await call('Page.captureScreenshot', {'format': 'png'})
            return Image.open(io.BytesIO(base64.b64decode(response['data']))).convert('RGB')
        await call('Page.enable')
        await call('Runtime.enable')
        await call('Page.bringToFront')
        await call('Emulation.setFocusEmulationEnabled', {'enabled': True})
        await call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'no-preference'}]})
        await evaluate("localStorage.removeItem('epac-motion')")
        for width, height in [(1440,900),(390,844),(844,390),(320,568),(3840,2160)]:
            await call('Emulation.setDeviceMetricsOverride', {'width':width,'height':height,'deviceScaleFactor':1,'mobile':False})
            await call('Page.navigate', {'url': args.origin + '/'})
            await asyncio.sleep(2.2)
            layout = await evaluate("""(() => {
                const logo=document.querySelector('.logo'), canvas=document.querySelector('canvas');
                const r=logo.getBoundingClientRect();
                return {width:innerWidth,height:innerHeight,scrollWidth:document.documentElement.scrollWidth,scrollHeight:document.documentElement.scrollHeight,
                    logoLoaded:logo.complete && logo.naturalWidth>0,logoSource:logo.getAttribute('src'),logoCenterX:r.x+r.width/2,logoCenterY:r.y+r.height/2,
                    canvasWidth:canvas.width,canvasHeight:canvas.height,renderer:canvas.dataset.renderer,frame:Number(canvas.dataset.frame),motion:canvas.dataset.motion,
                    videos:document.querySelectorAll('video').length,headings:document.querySelectorAll('h1').length};
            })()""")
            assert layout['logoLoaded'] and layout['headings'] == 1 and layout['videos'] == 0, layout
            assert layout['scrollWidth'] <= width and layout['scrollHeight'] <= height, layout
            assert abs(layout['logoCenterX']-width/2)<2 and abs(layout['logoCenterY']-height/2)<2, layout
            assert layout['motion']=='playing' and layout['renderer']=='webgl', layout
            result['layouts'].append(layout)
            print('Layout OK:', width, height, layout['renderer'], 'frame',layout['frame'], flush=True)
        before = await capture()
        start = await evaluate("Number(document.querySelector('canvas').dataset.frame)")
        await asyncio.sleep(.8)
        after = await capture()
        end = await evaluate("Number(document.querySelector('canvas').dataset.frame)")
        assert end>start and ImageChops.difference(before,after).getbbox() is not None
        result['movement']={'before':start,'after':end,'raster_changed':True}
        await evaluate("document.querySelector('.motion-toggle').click()", True)
        await asyncio.sleep(.3)
        paused = await evaluate("({frame:Number(document.querySelector('canvas').dataset.frame),motion:document.querySelector('canvas').dataset.motion})")
        await asyncio.sleep(.6)
        still = await evaluate("Number(document.querySelector('canvas').dataset.frame)")
        assert paused['motion']=='paused' and still==paused['frame']
        await evaluate("document.querySelector('.motion-toggle').click()", True)
        await asyncio.sleep(.6)
        resumed = await evaluate("({frame:Number(document.querySelector('canvas').dataset.frame),motion:document.querySelector('canvas').dataset.motion})")
        assert resumed['motion']=='playing' and resumed['frame']>still
        result['pause']={'paused':paused,'unchanged_frame':still,'resumed':resumed}
        await call('Input.dispatchMouseEvent', {'type':'mouseMoved','x':5,'y':5})
        center = await evaluate("(() => {const r=document.querySelector('.logo-sound-surface').getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2};})()")
        await call('Input.dispatchMouseEvent', {'type':'mouseMoved',**center})
        await asyncio.sleep(.2)
        muted = await evaluate("({count:Number(document.querySelector('.space-home').dataset.soundEffectCount),context:document.querySelector('.space-home').dataset.audioContext,requests:performance.getEntriesByType('resource').filter(r=>r.name.includes('space-ambient.mp3')).length})")
        assert muted['count']==0 and muted['context']=='uninitialized' and muted['requests']==0, muted
        assert await evaluate("document.querySelector('.audio-control').getAttribute('aria-pressed')") == 'false'
        await evaluate("document.querySelector('.audio-control').click()", True)
        await asyncio.sleep(1.4)
        audio = await evaluate("document.querySelector('.audio-control').getAttribute('aria-pressed')")
        assert audio=='true', 'Audio play() did not resolve'
        await call('Input.dispatchMouseEvent', {'type':'mouseMoved','x':5,'y':5})
        await call('Input.dispatchMouseEvent', {'type':'mouseMoved',**center})
        await asyncio.sleep(.2)
        hover = await evaluate("({count:Number(document.querySelector('.space-home').dataset.soundEffectCount),context:document.querySelector('.space-home').dataset.audioContext})")
        assert hover['count']>muted['count'] and hover['context']=='running', hover
        await asyncio.sleep(.8)
        await evaluate("document.querySelector('.logo-sound-surface').click()", True)
        keyboard = await evaluate("Number(document.querySelector('.space-home').dataset.soundEffectCount)")
        assert keyboard>hover['count'], 'Keyboard/tap equivalent did not play'
        await evaluate("document.querySelector('.audio-control').click()", True)
        await asyncio.sleep(.4)
        await evaluate("document.querySelector('.logo-sound-surface').click()", True)
        stopped = await evaluate("({count:Number(document.querySelector('.space-home').dataset.soundEffectCount),context:document.querySelector('.space-home').dataset.audioContext,active:document.querySelector('.space-home').dataset.soundActive})")
        assert stopped['count']==keyboard and stopped['active']=='false', stopped
        for _ in range(10):
            if stopped['context']=='suspended': break
            await asyncio.sleep(.15)
            stopped = await evaluate("({count:Number(document.querySelector('.space-home').dataset.soundEffectCount),context:document.querySelector('.space-home').dataset.audioContext,active:document.querySelector('.space-home').dataset.soundActive})")
        assert stopped['count']==keyboard and stopped['active']=='false' and stopped['context']=='suspended', stopped
        result['audio']={'default_off':True,'explicit_activation_played':True,'muted_hover':muted,'active_hover':hover,'keyboard_tap_count':keyboard,'disabled_sound':stopped}
        await call('Emulation.setEmulatedMedia', {'features':[{'name':'prefers-reduced-motion','value':'reduce'}]})
        await asyncio.sleep(.4)
        reduced = await evaluate("({frame:Number(document.querySelector('canvas').dataset.frame),motion:document.querySelector('canvas').dataset.motion})")
        assert await evaluate("document.querySelector('.motion-toggle').disabled")
        await evaluate("document.querySelector('.motion-toggle').click()", True)
        await asyncio.sleep(.5)
        assert reduced['motion']=='paused' and reduced['frame']==await evaluate("Number(document.querySelector('canvas').dataset.frame)")
        result['reduced_motion']=reduced
        await call('Emulation.setEmulatedMedia', {'features':[{'name':'prefers-reduced-motion','value':'no-preference'}]})
        forced = await call('Page.addScriptToEvaluateOnNewDocument', {'source':"const original=HTMLCanvasElement.prototype.getContext; HTMLCanvasElement.prototype.getContext=function(kind,...rest){return kind.includes('webgl')?null:original.call(this,kind,...rest);};"})
        await call('Page.navigate', {'url':args.origin+'/'})
        await asyncio.sleep(2)
        fallback = await evaluate("({renderer:document.querySelector('canvas').dataset.renderer,frame:Number(document.querySelector('canvas').dataset.frame),motion:document.querySelector('canvas').dataset.motion})")
        assert fallback['renderer']=='canvas2d' and fallback['frame']>1 and fallback['motion']=='playing'
        result['fallback']=fallback
        await call('Page.removeScriptToEvaluateOnNewDocument', {'identifier':forced['identifier']})
        await call('Emulation.setDeviceMetricsOverride', {'width':1440,'height':900,'deviceScaleFactor':1,'mobile':False})
        await call('Page.navigate', {'url':args.origin+'/'})
        await call('Emulation.clearDeviceMetricsOverride')
        Path(args.output).parent.mkdir(parents=True, exist_ok=True)
        Path(args.output).write_text(json.dumps(result,indent=2)+'\n')
        print(json.dumps(result,indent=2),flush=True)

asyncio.run(main())
