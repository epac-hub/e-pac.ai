# Medición de carga — 10-19-2026

Se optimizó la portada espacial sin cambiar la composición o el vuelo. Los valores se calculan sobre el grafo de imports estáticos del build y gzip Python con el mismo método antes/después. Son payloads de archivos, no mediciones de tiempo, fps, Lighthouse o usuarios reales.

| Métrica | Antes | Después | Alcance |
|---|---:|---:|---|
| JavaScript inicial, bytes | 791833 | 214617 | Imports estáticos necesarios para iniciar la app |
| JavaScript inicial, bytes gzip | 221950 | 67770 | Compresión reproducible; reducción calculada 69.46609597% |
| Logo descargado, bytes | 480200 | 74544 o 163956 | Srcset 640/960 según viewport y DPR; se conserva también 1920 como respaldo |

La reducción proviene de eliminar Three.js y GSAP de la ruta activa, no de suprimir la escena. WebGL nativo conserva puntos, estelas, perspectiva y dos draw calls; permanece el fallback Canvas2D. Las versiones de logo se redimensionan sin recorte y se codifican lossless; el archivo fuente restaurado y original no se cambian. El audio del hover es procedural y no añade un archivo descargable. La pista ambiental sólo se solicita al activar sonido.

El límite DPR móvil pasa de 1.5 a 1.25, manteniendo densidad/velocidad. No se presenta ese ajuste como una mejora de fps: no hay mediciones de dispositivos físicos ni RUM. No se inventa un porcentaje de mejora de tiempo de carga. La advertencia anterior de chunk >500 kB desapareció en el build nuevo.

`tools/measure-initial-payload.py --output QA-evidence/payload-current.json` replica la medición y comprueba un presupuesto de 100000 bytes gzip iniciales. QA-evidence/mobile-load-baseline.json y mobile-load-after.json guardan la evidencia. El presupuesto es una guardia interna de archivos, no una promesa de Core Web Vitals.
