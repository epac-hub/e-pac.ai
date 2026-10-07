# e-pac.ai
ePAC, LLC — e-pac.ai

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html`, `404.html`, `assets/`, `manus-storage/`, `og-image.png` | Sitio principal: compilación publicada de la experiencia galáctica creada en Manus. |
| `landing/` | Landing original de ePAC, LLC. |
| `experience/` | Compilación anterior de la experiencia interactiva. |
| `galactic-demo/` | Código fuente React/TypeScript de un checkpoint anterior de Manus (`69dc9e65`). Es más antiguo que el sitio publicado. |

`404.html` es una copia de `index.html` para que GitHub Pages sirva las rutas internas (`/about`, `/work`, `/case-study/...`).

El sitio funciona en la raíz de un dominio y en `epac-hub.github.io/e-pac.ai/`: el cargador de `index.html` define `window.__EPAC_BASE__` y el paquete JavaScript lo usa como base del enrutador y de los archivos de `manus-storage/`.

Se retiraron del HTML el runtime, la analítica (Umami, Plausible) y el manifiesto de Manus.
