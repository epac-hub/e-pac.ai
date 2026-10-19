import { useEffect, useRef, useState } from 'react';

type AudioWindow = Window & { webkitAudioContext?: typeof AudioContext };
type Effect = { noise: AudioBufferSourceNode; tone: OscillatorNode; gain: GainNode; filter: BiquadFilterNode; panner: StereoPannerNode | null };
type SoundGraph = { context: AudioContext; audio: HTMLAudioElement; source: MediaElementAudioSourceNode; master: GainNode; ambience: GainNode; noiseBuffer: AudioBuffer; effect: Effect | null };

export function useSpaceAudio() {
  const graph = useRef<SoundGraph | null>(null);
  const intent = useRef(false);
  const request = useRef(0);
  const lastEffect = useRef(-Infinity);
  const stopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [playing, setPlaying] = useState(false);
  const [status, setStatus] = useState('');
  const [effectCount, setEffectCount] = useState(0);
  const [contextState, setContextState] = useState('uninitialized');

  function getGraph() {
    if (graph.current) return graph.current;
    const Constructor = window.AudioContext || (window as AudioWindow).webkitAudioContext;
    if (!Constructor) throw new Error('Web Audio unavailable');
    const context = new Constructor();
    const master = context.createGain();
    master.gain.value = 0;
    master.connect(context.destination);
    const audio = new Audio(`${import.meta.env.BASE_URL}media/space-ambient.mp3`);
    audio.loop = true;
    audio.preload = 'none';
    const source = context.createMediaElementSource(audio);
    const ambience = context.createGain();
    ambience.gain.value = 0.18;
    source.connect(ambience).connect(master);
    const noiseBuffer = context.createBuffer(1, Math.ceil(context.sampleRate * 0.8), context.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let index = 0; index < data.length; index += 1) data[index] = Math.random() * 2 - 1;
    graph.current = { context, audio, source, master, ambience, noiseBuffer, effect: null };
    context.onstatechange = () => setContextState(context.state);
    setContextState(context.state);
    return graph.current;
  }

  function silenceEffect() {
    const current = graph.current;
    const effect = current?.effect;
    if (!current || !effect) return;
    const now = current.context.currentTime;
    effect.gain.gain.cancelScheduledValues(now);
    effect.gain.gain.setTargetAtTime(0, now, 0.04);
    try { effect.noise.stop(now + 0.14); effect.tone.stop(now + 0.14); } catch { /* Already ended. */ }
  }

  function startPlayback() {
    const id = ++request.current;
    try {
      const current = getGraph();
      if (stopTimer.current) clearTimeout(stopTimer.current);
      // Both calls happen directly in the consent click for Safari/Chrome.
      const resume = current.context.resume();
      const play = current.audio.play();
      void Promise.all([resume, play]).then(() => {
        if (id !== request.current || !intent.current || document.hidden) return;
        const now = current.context.currentTime;
        current.master.gain.cancelScheduledValues(now);
        current.master.gain.setTargetAtTime(1, now, 0.15);
        setPlaying(true);
        setStatus('');
      }).catch(() => {
        if (id !== request.current) return;
        intent.current = false;
        current.audio.pause();
        current.master.gain.value = 0;
        void current.context.suspend();
        setPlaying(false);
        setStatus('Sound could not play. Check your browser audio settings.');
      });
    } catch {
      intent.current = false;
      setPlaying(false);
      setStatus('Interactive sound is unavailable in this browser.');
    }
  }

  function toggle() {
    if (!intent.current) {
      intent.current = true;
      setStatus('');
      startPlayback();
      return;
    }
    intent.current = false;
    request.current += 1;
    setPlaying(false);
    setStatus('');
    silenceEffect();
    const current = graph.current;
    if (!current) return;
    const now = current.context.currentTime;
    current.master.gain.cancelScheduledValues(now);
    current.master.gain.setTargetAtTime(0, now, 0.06);
    stopTimer.current = setTimeout(() => {
      if (!intent.current) { current.audio.pause(); void current.context.suspend(); }
    }, 280);
  }

  function trigger() {
    const current = graph.current;
    if (!intent.current || !playing || document.hidden || !current || current.context.state !== 'running') return;
    if (performance.now() - lastEffect.current < 650) return;
    lastEffect.current = performance.now();
    silenceEffect();
    const context = current.context;
    const now = context.currentTime;
    const noise = context.createBufferSource();
    noise.buffer = current.noiseBuffer;
    const filter = context.createBiquadFilter();
    filter.type = 'bandpass'; filter.frequency.value = 1250; filter.Q.value = 0.65;
    const tone = context.createOscillator();
    tone.type = 'sine'; tone.frequency.setValueAtTime(164, now); tone.frequency.exponentialRampToValueAtTime(112, now + 0.55);
    const toneGain = context.createGain(); toneGain.gain.value = 0.12;
    const gain = context.createGain();
    gain.gain.setValueAtTime(0, now); gain.gain.linearRampToValueAtTime(0.055, now + 0.12); gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
    const panner = typeof context.createStereoPanner === 'function' ? context.createStereoPanner() : null;
    noise.connect(filter).connect(gain); tone.connect(toneGain).connect(gain);
    if (panner) gain.connect(panner).connect(current.master); else gain.connect(current.master);
    const effect = { noise, tone, gain, filter, panner };
    current.effect = effect;
    noise.onended = () => {
      noise.disconnect(); tone.disconnect(); toneGain.disconnect(); filter.disconnect(); gain.disconnect(); panner?.disconnect();
      if (current.effect === effect) current.effect = null;
    };
    noise.start(now); tone.start(now); noise.stop(now + 0.72); tone.stop(now + 0.72);
    setEffectCount((count) => count + 1);
  }

  function move(horizontal: number, vertical: number) {
    const current = graph.current;
    const effect = current?.effect;
    if (!intent.current || !playing || !current || !effect) return;
    const now = current.context.currentTime;
    effect.panner?.pan.setTargetAtTime(Math.max(-0.65, Math.min(0.65, horizontal * 1.3)), now, 0.08);
    effect.filter.frequency.setTargetAtTime(1250 + vertical * 650, now, 0.08);
  }

  useEffect(() => {
    const visibility = () => {
      const current = graph.current;
      if (document.hidden) {
        request.current += 1;
        silenceEffect();
        if (current) {
          current.master.gain.cancelScheduledValues(current.context.currentTime);
          current.master.gain.value = 0; current.audio.pause(); void current.context.suspend();
        }
        setPlaying(false);
      } else if (intent.current) startPlayback();
    };
    document.addEventListener('visibilitychange', visibility);
    return () => {
      document.removeEventListener('visibilitychange', visibility);
      intent.current = false; request.current += 1;
      if (stopTimer.current) clearTimeout(stopTimer.current);
      const current = graph.current;
      if (current) {
        current.context.onstatechange = null; current.master.gain.value = 0; current.audio.pause();
        current.audio.removeAttribute('src'); current.audio.load(); current.source.disconnect();
        void current.context.close(); graph.current = null;
      }
    };
  }, []);

  return { playing, status, effectCount, contextState, toggle, trigger, move, leave: silenceEffect };
}
