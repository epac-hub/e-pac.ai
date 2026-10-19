import { useCallback, useEffect, useState } from 'react';

export function useMotion() {
  const [hydrated, setHydrated] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const size = window.matchMedia('(min-width: 768px) and (pointer: fine)');
    const update = () => {
      setReduced(preference.matches);
      setDesktop(size.matches);
      let saved: string | null = null;
      try { saved = localStorage.getItem('epac-motion'); } catch { /* Storage can be blocked in embedded preview. */ }
      setEnabled(!preference.matches && saved !== 'off');
    };
    update();
    setHydrated(true);
    preference.addEventListener('change', update);
    size.addEventListener('change', update);
    return () => { preference.removeEventListener('change', update); size.removeEventListener('change', update); };
  }, []);

  const toggle = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setEnabled(false);
      return;
    }
    setEnabled((previous) => {
      const next = !previous;
      try { localStorage.setItem('epac-motion', next ? 'on' : 'off'); } catch { /* Controls still work without persistence. */ }
      return next;
    });
  }, []);

  return { hydrated, enabled, desktop, reduced, toggle };
}
