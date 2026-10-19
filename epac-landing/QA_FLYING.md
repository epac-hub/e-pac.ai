# QA flying hero — 10-19-2026

## Checklist de esta revisión
- [x] Casa, domo, terrazas, cantilever y luces de arquitectura eliminados de la escena nueva. Fotograma reconstruido y muestras del vuelo a 0.5, 4 y 7 s muestran sólo terreno, mar y playa. El App no monta los videos de casas anteriores.
- [x] Nuevo vuelo con desplazamiento real de cámara en el archivo, avance sobre agua y cambio de perspectiva; no un zoom CSS. Preparación con setpts=PTS/1.75, más rápida respecto a su original. La valoración estética de «realista»/impacto sigue siendo subjetiva; no se presenta como grabación documental de Culebra.
- [x] Logo original, nombre corto, línea profesional y CTA juntos en el centro horizontal y vertical; footer/control agrupados al centro inferior. Sin columna lateral, header, scrolling, secciones ni canvas.
- [x] Pantalla verificada en 1440×900, 390×844, 320×568, 844×390 y 1440×400: documento dentro del viewport, contenido sin recorte, CTA separado del footer y centros del bloque comprobados. Archivo de evidencia: QA-evidence/flying-runtime.json.
- [x] Salidas 4K medidas: MP4 y WebM 3840×2160, 30 fps, aproximadamente 4.633 s. Origen 1080p, mejorado a 4K por ByteDance/Higgsfield; no es generación ni captura 4K nativa.
- [x] Reproducción 4K real en navegador: videoWidth 3840, videoHeight 2160, estado playing, sin error ni pausa; currentTime 0.692696 → 2.697707 durante 2 s de prueba. Fuente HTTPS: /media/ep-flying-4k.webm. No se deduce reproducción a partir de una captura fija.
- [x] pnpm check, pnpm build y git diff --check ejecutados sin errores. HTML estático y assets correctos; Preview público verificado separadamente antes de entrega.

## Formatos medidos
| Archivo web | Dimensiones / fps | Duración | Bytes |
|---|---|---|---|
| ep-flying-4k.mp4 | 3840×2160 / 30 | 4.633333 s | 4,538,084 |
| ep-flying-4k.webm | 3840×2160 / 30 | 4.633000 s | 4,242,392 |
| ep-flying-mobile.mp4 | 1920×1080 / 30 | 4.633333 s | 1,467,174 |
| ep-flying-mobile.webm | 1920×1080 / 30 | 4.633000 s | 2,098,600 |

Selección 4K a partir de 1024 CSS px, salvo ahorro de datos; móvil/fallback usa variante ligera. No se afirma decodificación UHD universal ni se han medido Core Web Vitals. Audio sólo opt-in; pausa/reduced motion y tab oculta conservados.

## Descripción visual y límites
La película es una interpretación AI inspirada en la costa de Culebra, no evidencia de una propiedad, coordenada o grabación real. Logo ep. es identidad original; no métrica. Grano/cursor son decoración. No hay gráficas, KPIs ni cifras inventadas en la página. Captura oficial de composición inspeccionada, sin casa y con todo centrado; resolución y reproducción verificadas de forma independiente.

SOURCES.md registra referencias y generación/mejora. Los QA anteriores son históricos. Entrega en el mismo Preview; el repositorio público y DNS/CNAME no se modifican en esta revisión.
