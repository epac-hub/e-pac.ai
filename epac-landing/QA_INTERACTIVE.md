# QA — sonido del logo y carga móvil

Revisión 10-19-2026. Se conserva la portada espacial de e-pac.ai: logo ePAC. original restaurado, centro, blanco/negro y copyright. No hay secciones, scrolling, casas, paisajes ni nuevo texto comercial.

| Comprobación | Resultado y evidencia |
|---|---|
| TypeScript y build | pnpm check y pnpm build completos, sin errores; git diff --check limpio |
| Centro y ausencia de scroll | 1440×900, 390×844, 844×390, 320×568 y 3840×2160: logo cargado/centrado, documento no supera viewport, un h1 y cero videos |
| Vuelo real de la escena | WebGL nativo con fotogramas/bitmap cambiantes; pausa conserva frame y reanudación lo incrementa |
| Sonido sin consentimiento | Hover apagado: contador 0, AudioContext uninitialized y cero solicitudes de la pista ambiental |
| Hover autorizado | Tras activar sonido: AudioContext running y efecto iniciado; entrada/movimiento/salida modifican envolvente, filtro y panning |
| Activación del logo | Foco/click nativo cubren teclado/touch; equivalente de activación aumentó contador de efecto de 1 a 2 |
| Apagar sonido | No aumenta contador al activar logo; soundActive false y contexto suspended. La primera comprobación fija a 400 ms capturó el evento aún pendiente; espera acotada confirma la suspensión, sin debilitar el requisito de silencio |
| Movimiento reducido | Escena pausada; control deshabilitado y activarlo no cambia frame. Se corrigió la posibilidad previa de reanudar bajo preferencia reducida |
| Fallback | WebGL forzado a no disponible: Canvas2D animado y funcional |
| Carga inicial | PERF.md y JSON registran reducción del grafo JS inicial con el mismo método gzip; logos responsivos. No se mide ni promete porcentaje de tiempo/fps/Core Web Vitals |
| Publicación | Pendiente hasta confirmar el commit exacto y el HTML/assets HTTPS de e-pac.ai |

## Descripción de la visualización

El campo de estrellas es una visualización artística generativa: puntos/estelas con posiciones y profundidad aleatorias hacia la cámara, perspectiva y parallax. No representa un catálogo astronómico, datos científicos ni velocidades físicas. Su resolución es adaptativa; no se publican KPIs, gráficos de datos ni una promesa universal de fps/4K.

## Evidencia y límites

QA-evidence/space-interactive-runtime.json guarda layout, avance, pausa, consentimiento/hover/apagado, reduced motion y fallback. reduced-motion-guard.json comprueba el control bajo esa preferencia. mobile-load-baseline.json y payload-final.json son archivos medidos, no tiempos de usuarios. Las pruebas usan el navegador Sandbox existente, no dispositivos iOS/Android físicos; no se afirma una auditoría completa WCAG ni rendimiento RUM.

La revisión read-only señaló dos observaciones: el evento de suspensión se confirmó de forma acotada con audio realmente apagado; el control de movimiento reducido se corrigió y volvió a probarse. No se presenta como fallo de silencio un estado transitorio antes de la confirmación.
