# Procedencia — portada espacial de e-pac.ai

El usuario eligió conservar la portada espacial pública de https://e-pac.ai el 10-19-2026. Su fuente es index.html de epac-hub/e-pac.ai, commit fcfc9503d9b79f69fac82ac528121374eff56c11, conservado en design-notes/space-original/index.html. Se mantienen negro, estrellas en avance, círculo ePAC. serif blanco, copyright y pista espacial.

## Marca

PNG original: brand/epac-logo.png del repositorio; SHA-256 013a68fa148edd8bdd2111b6c2d9bf8899c8034bad4696a104c29934c44663b1. Se conserva en public/brand/epac-logo-original.png. La restauración revisada de 1920×1920 (job_m_603b7d93b4e3) mantiene ePAC., punto, serif, círculo y colores. Es un derivado restaurado, no el original byte por byte ni un SVG. WebP de 1920 es lossless. Versiones 640/960 se redimensionan con Lanczos sin recorte y codifican WebP lossless; srcset elige por viewport y DPR. No se rediseña el logo.

## Escena y sonidos

StarFlight.tsx es código original editable de WebGL nativo con proyección perspectiva 3D, posiciones/tiempo de estrellas, shaders, parallax y estelas; no stock, filmación, mapa astronómico ni video AI. Reemplaza Three.js en la ruta activa para reducir payload; Canvas2D conserva el fallback. La resolución es adaptativa, sin promesas de 4K o fps universales. La visualización es artística, no una representación científica de estrellas/velocidades.

space-ambient.mp3 se copia sin cambios desde manus-storage/ambient-space_659e307d.mp3 del repositorio aprobado. No se inventa un recibo de generación. Audio requiere activación explícita. useSpaceAudio.ts sintetiza efectos originales con ruido filtrado, oscilador suave y panning/envolventes de Web Audio; no usa clips externos, voces, música nueva ni archivos de stock. Hover, foco y activación del logo sólo producen efectos después de activar sonido; ocultar la página o desactivar audio silencia la experiencia.

## Medición y publicación

PERF.md y QA-evidence registran el payload inicial antes/después con el mismo método gzip. No son mediciones de tiempo de carga, fps o Core Web Vitals de usuarios reales. Metadatos corporativos conservan los valores aportados por el sitio público; no se presenta una verificación independiente de credenciales.

Publicación en https://e-pac.ai por GitHub Pages con CNAME, 404, originales e históricos preservados. El artifact de Claude y las propuestas de Culebra no se usan. No se copia ningún vínculo privado de sesión al código público.
