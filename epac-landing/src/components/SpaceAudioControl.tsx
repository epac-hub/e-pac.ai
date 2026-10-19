type Props = { playing: boolean; status: string; onToggle: () => void };

export default function SpaceAudioControl({ playing, status, onToggle }: Props) {
  return (
    <button type="button" className="audio-control" aria-label={playing ? 'Turn sound off' : 'Turn sound on'} aria-pressed={playing} onClick={onToggle}>
      <span className="audio-bars" aria-hidden="true"><span className="audio-bar" /><span className="audio-bar" /><span className="audio-bar" /></span>
      <span className="audio-label">Sound {playing ? 'on' : 'off'}</span>
      <span className="audio-status" role="status" aria-live="polite">{status}</span>
    </button>
  );
}
