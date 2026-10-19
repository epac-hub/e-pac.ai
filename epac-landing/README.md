# ePAC — portada espacial conservada

Una sola pantalla negra con el wordmark circular ePAC. centrado y copyright discreto, conservando la portada pública elegida por el usuario. Se mejora el campo estelar con una escena Three.js verdadera: profundidad perspectiva, movimiento basado en tiempo, parallax sutil, estelas cercanas discretas y fallback Canvas2D. No hay paisajes costeros, casas, slogans nuevos, paneles o scrolling.

El logo original se conserva; la restauración de nitidez validada es un derivado 1920×1920 convertido a WebP lossless. SOURCES.md registra su procedencia y la distinción entre original y restauración. Los controles discretos permiten pausar la escena y activar el audio original; no hay autoplay de audio. Respeta reduced motion y pestañas ocultas.

## Desarrollo

```bash
corepack pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
```

React, TypeScript, Vite, Three.js y GSAP. El build renderiza HTML estático, y sólo conserva en dist/media la pista espacial utilizada, sin borrar los recursos originales de public. La única ruta está en public/manus-routes.json. La escena se adapta a viewport y DPR; no requiere un archivo MP4 ni superresolución para dibujar las estrellas.

## Publicación

Destino: https://e-pac.ai. GitHub Pages usa epac-hub/e-pac.ai, main y raíz. Preservar CNAME, 404, logos originales y directorios históricos. El código editable se guarda en epac-landing y el build se copia a la raíz. Integrar cambios remotos sin force-push y verificar commit exacto, HTML, assets HTTPS y movimiento real. QA_SPACE.md documenta la evidencia de esta versión.
