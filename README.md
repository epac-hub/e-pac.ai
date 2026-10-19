# e-pac.ai
ePAC, LLC — e-pac.ai

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html`, `assets/`, `media/`, `favicon.svg`, `og-image.png` | Portada ePAC corregida el 10-19-2026: cine full-bleed, diseño minimalista marfil/oscuro y reproducción WebM/MP4 verificada. React/TypeScript con HTML estático significativo. |
| `epac-landing/` | Editable source, pinned build toolchain, content/media provenance and QA for the current landing page. |
| `404.html`, historical hashed assets, `manus-storage/` | Preserved previous site and deep-link fallback; no historical paths were deleted. |
| `landing/` | Landing original de ePAC, LLC. |
| `experience/` | Compilación de la experiencia interactiva generada desde `galactic-demo/`, con base `/e-pac.ai/experience/`. |
| `galactic-demo/` | Código fuente React/TypeScript de la experiencia (ver `PRODUCTION_WORKFLOW.md`). |

Las notas de `404.html` y del cargador `window.__EPAC_BASE__` siguientes describen el sitio histórico conservado, no el nuevo build de la raíz. El build actual y sus pruebas están documentados en `epac-landing/README.md` y `epac-landing/QA.md`.

`404.html` es una copia de `index.html` para que GitHub Pages sirva las rutas internas (`/about`, `/work`, `/case-study/...`).

El sitio funciona en la raíz de un dominio y en `epac-hub.github.io/e-pac.ai/`: el cargador de `index.html` define `window.__EPAC_BASE__` y el paquete JavaScript lo usa como base del enrutador y de los archivos de `manus-storage/`.

Se retiraron del HTML el runtime, la analítica (Umami, Plausible) y el manifiesto de Manus.

## Dominio

El archivo `CNAME` conecta GitHub Pages con `e-pac.ai`. El dominio se compró en Lovable (registrador: Name.com) y su DNS se edita en Lovable: Workspace settings → Workspace domains → Configure → DNS records. Debe contener:

| Tipo | Nombre | Valor |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `epac-hub.github.io` |
