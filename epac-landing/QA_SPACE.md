# QA — portada espacial conservada de e-pac.ai

Fecha: 10-19-2026. Esta versión conserva la portada negra espacial del commit fcfc9503d9b79f69fac82ac528121374eff56c11, no las composiciones costeras descartadas. Publicación pendiente de confirmar en este registro.

## Checklist ejecutado

- [x] Logo ePAC. con letras/punto/círculo/serif y composición preservados; original conservado y restauración 1920×1920 revisada visualmente. Conversión WebP lossless con igualdad de píxeles.
- [x] Pantalla negra única, logo centrado, copyright discreto y dos controles mínimos. Sin casas, costa, MP4, paneles, nuevos slogans/CTA ni scrolling.
- [x] Escena Three.js real con cámara perspectiva y profundidad. Avance basado en tiempo, parallax y estelas discretas. Imágenes consecutivas cambiaron durante el vuelo.
- [x] Pausa sin reiniciar el renderer ni las posiciones. Contador estable al pausar y creciente al reanudar. Reduced motion detuvo el dibujo animado.
- [x] Audio apagado por defecto. play() se resolvió tras la acción explícita de activación; desactivación disponible.
- [x] Fallback Canvas2D verificado bloqueando WebGL en la misma pestaña del navegador existente; escena y contador siguieron funcionando.
- [x] Centro, logo cargado y ausencia de overflow verificados en 1440×900, 390×844, 844×390, 320×568 y 3840×2160. En la última prueba el canvas dibujó 3840×2160; no equivale a garantía de fps o 4K fijo en cualquier dispositivo.
- [x] pnpm check, pnpm build y git diff --check completos. Build estático contiene la composición espacial y sólo space-ambient.mp3 en dist/media. No se eliminaron los archivos fuente costeros del usuario.
- [x] Una revisión de integración read-only concluyó sin bloqueantes.
- [ ] Confirmar el commit construido por GitHub Pages, el HTML público y los assets HTTPS en https://e-pac.ai.

## Visualización

El campo de estrellas es una visualización artística procedural, no un mapa astronómico ni una representación de posiciones/velocidades científicas. Los puntos y estelas comunican profundidad y avance espacial, conservando fondo negro y protagonismo de la marca. La densidad y el DPR son parámetros de diseño adaptativos, no KPIs ni cifras empresariales. No hay datos cuantitativos, gráficas, resultados o credenciales inventados.

## Evidencia y límites

QA-evidence/space-runtime.json y tools/verify-space-runtime.py contienen las mediciones y el procedimiento de centro, raster, pausa, audio, reduced motion y fallback usando el navegador existente. Las capturas oficiales de escritorio/móvil verifican composición, no miden rendimiento ni prueban movimiento por sí solas. La verificación no garantiza rendimiento para todos los dispositivos. Vite emitió una advertencia no bloqueante de chunk mayor a 500 kB; no un error de compilación.

Se preservan CNAME, 404, PNG originales y directorios históricos del repositorio público. La publicación sólo se marcará completa cuando el commit exacto y el HTML del dominio sean confirmados.
