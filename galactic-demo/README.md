# ePAC, LLC — experiencia interactiva

Código fuente de la experiencia React/TypeScript con GSAP, Three.js, Lenis y un relato que comienza automáticamente. Sincronizado desde el proyecto Manus `galactic-demo`, checkpoint `34fdce0c`.

## Desarrollo

```bash
pnpm install
pnpm run check
pnpm run dev
```

La entrada de desarrollo está en `client/`; las páginas visibles son Home y About. Los archivos de audio e imagen referenciados mediante `/manus-storage/` proceden del almacenamiento del proyecto Manus. **El código en GitHub, por sí solo, no publica ni incorpora esos archivos multimedia** en GitHub Pages.

Este directorio se agregó sin reemplazar el `index.html` de la raíz. Para servir esta experiencia fuera de Manus se necesita empaquetar el build y alojar los recursos multimedia correspondientes con rutas propias.
