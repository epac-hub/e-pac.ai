# ePAC — portada espacial

Una sola pantalla negra con estrellas en avance, logo ePAC. central y copyright discreto. No hay scrolling, nuevas secciones, slogans, casas o paisajes. Se conserva la marca aprobada; srcset 640/960/1920 elige una versión adecuada sin recortar o rediseñar el logo.

## Interacción y carga

Active el icono de sonido para escuchar la pista ambiental existente. Después, pasar el cursor por el logo produce un whoosh espacial sutil; el movimiento modifica su posición estéreo/filtro y salir lo desvanece. El logo admite foco/activación por teclado y toque. Ni hover ni toque del logo activan audio sin consentimiento. Desactivar sonido u ocultar la pestaña silencia también los efectos.

Los efectos son Web Audio procedural y no necesitan un archivo extra. El motor WebGL nativo conserva la perspectiva y el vuelo 3D con dos draw calls, sustituyendo la biblioteca pesada en la ruta activa. Sigue habiendo fallback Canvas2D, pausa estable, reduced motion y adaptación DPR móvil. PERF.md registra payloads antes/después sin prometer tiempos o fps no medidos.

## Desarrollo y pruebas

```bash
corepack pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
python3 tools/measure-initial-payload.py --output QA-evidence/payload-current.json
```

La prueba tools/verify-space-runtime.py se conecta al navegador Sandbox existente (no lanza otro), comprueba tamaños/layout/vuelo/pausa/fallback y sonido sin consentimiento, hover autorizado y apagado. El build renderiza HTML estático, conserva sólo el audio espacial activo en dist/media y no borra fuentes o archivos históricos.

## Publicación

https://e-pac.ai mediante epac-hub/e-pac.ai, GitHub Pages main/raíz. Preservar CNAME, 404, logos originales e históricos. Código editable en epac-landing. QA_INTERACTIVE.md y PERF.md documentan la versión; no confundir Preview/checkpoint con publicación confirmada.
