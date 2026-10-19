# QA Culebra — 10-19-2026

## Checklist de la revisión
- [x] Header completo retirado del DOM: logo pequeño, ePAC y Contact. Bloque del footer izquierdo retirado. H1, título y metadata usan Elliot Pacheco sin Beauchamp.
- [x] Logo ep. principal original, línea profesional, CTA, dominio y controles conservados; misma composición de una pantalla, sin secciones adicionales.
- [x] Casa aprobada preservada como volumen bajo con vidrio, terrazas, cantilever y borde luminoso. Domo eliminado en el fotograma editado y en muestras del film a 0.4, 3 y 5.5 s.
- [x] Paisaje inspirado en Culebra basado en fuente fotográfica/oficial: mar turquesa, colinas tropicales bajas y costa rocosa. No se presenta la casa como una propiedad real existente.
- [x] Toma de dron con movimiento y parallax; archivo preparado con setpts=PTS/1.5 para más rapidez. Dos formatos de aproximadamente 4.084 s y 1.1 MB cada uno, cifras exactas en SOURCES.md.
- [x] pnpm check, pnpm build, git diff --check y comprobación de assets/HTML ejecutados sin fallos. El build usa ep-culebra, no ep-futures; no contiene header, bloque izquierdo ni Beauchamp.
- [x] Prueba CDP en la pestaña existente: 1440×900, 390×844, 320×568, 844×390 y 1440×400. Documento igual al viewport; logo/nombre/CTA/footer dentro de sus límites y sin solapamiento del CTA con controles. Cero elementos tachados y cero secciones/canvas.
- [x] WebM real en estado playing, sin error ni pausa; currentTime avanzó de 1.579955 a 3.582482 durante 2 s de prueba.
- [x] Captura oficial 1440×900 inspeccionada: sin domo, sin elementos rojos, mismo concepto y paisaje tropical. La captura sólo prueba composición; la reproducción se comprobó por separado.

## Descripción de visuales y límites
El logo es identidad original, no un KPI. La película es una casa conceptual AI en paisaje inspirado en Culebra; no una fotografía documental de una propiedad. Grano/cursor son decoración, sin datos. No hay gráficas, comparativas o métricas numéricas en la landing. No se afirma compatibilidad universal, certificación WCAG ni Core Web Vitals medidos.

Evidencia local: QA-evidence/culebra-runtime.json, culebra-media.json y culebra-test.log. Los QA anteriores son históricos. Esta revisión se guarda en el repositorio del proyecto y se muestra en Preview; el dominio público y DNS/CNAME permanecen sin cambios.
