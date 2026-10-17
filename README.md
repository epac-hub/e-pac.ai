# e-pac.ai
ePAC, LLC — e-pac.ai

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html`, `404.html` | Portada cinematográfica de ePAC: cinco escenas a pantalla completa (Apertura, Misión, Iniciativas, Principios, Contacto) con cortes entre ellas, sin desplazamiento largo. HTML, CSS y JavaScript sin compilación; usa los videos e imágenes de `manus-storage/`. |
| `assets/`, `manus-storage/`, `og-image.png` | Compilación anterior de Manus (ya no la carga la portada) y sus medios, que la portada reutiliza. |
| `landing/` | Landing original de ePAC, LLC. |
| `experience/` | Compilación de la experiencia interactiva generada desde `galactic-demo/`, con base `/e-pac.ai/experience/`. |
| `galactic-demo/` | Código fuente React/TypeScript de la experiencia (ver `PRODUCTION_WORKFLOW.md`). |

`404.html` es una copia de `index.html`, para que cualquier ruta desconocida muestre la portada.

La portada usa rutas relativas, así que funciona en `e-pac.ai` y en `epac-hub.github.io/e-pac.ai/`. Navegación: flechas del teclado, rueda, deslizar en el móvil o la barra de capítulos; avanza sola cada 9 segundos hasta el último capítulo.

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
