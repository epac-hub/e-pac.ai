# e-pac.ai
ePAC, LLC — e-pac.ai

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html`, `404.html`, `assets/`, `manus-storage/`, `og-image.png` | Sitio principal: copia de la compilación publicada en Manus (`galacticweb-g4c3g6qm.manus.space`, paquete `index-unmr3uUx.js`). |
| `landing/` | Landing original de ePAC, LLC. |
| `experience/` | Compilación de la experiencia interactiva generada desde `galactic-demo/`, con base `/e-pac.ai/experience/`. |
| `galactic-demo/` | Código fuente React/TypeScript de la experiencia (ver `PRODUCTION_WORKFLOW.md`). |

`404.html` es una copia de `index.html` para que GitHub Pages sirva las rutas internas (`/about`, `/work`, `/case-study/...`).

El sitio funciona en la raíz de un dominio y en `epac-hub.github.io/e-pac.ai/`: el cargador de `index.html` define `window.__EPAC_BASE__` y el paquete JavaScript lo usa como base del enrutador y de los archivos de `manus-storage/`.

Se retiraron del HTML el runtime, la analítica (Umami, Plausible) y el manifiesto de Manus.
