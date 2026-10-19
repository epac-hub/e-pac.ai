# ePAC — landing page cinematográfica minimalista

Corrección solicitada el 10-19-2026: película Seedance original visible a pantalla completa; perfil marfil breve; cuatro áreas conectadas; enfoque narrativo de tres pasos; contacto directo. Los efectos son comportamientos reales, no un catálogo de especificaciones. Los proveedores quedan en los detalles opcionales del pie.

## Desarrollo
Node, Corepack y pnpm@11.25.0. Ejecutar `corepack pnpm install --frozen-lockfile`, `pnpm dev` en 0.0.0.0:3000. `pnpm check` ejecuta TypeScript estricto. `pnpm build` compila el cliente y el render estático significativo de React en dist/index.html.

src/App.tsx: contenido; src/styles.css: diseño responsivo; src/components/CinematicVideo.tsx: autoplay muted controlado por visibilidad y preferencias, fallback Play film; CosmicScene.tsx: shader/partículas e icosaedro secundario; InteractionControls.tsx: cursor/magnetismo/audio; usePageMotion.ts: scroll/portales decorativos/pins; public/media: recursos reales.

## Medios y verificaciones
SOURCES.md documenta fuentes y distingue generación original de atribuciones declaradas por el repositorio. El film web incluye edición de encuadre digital; no se declara un movimiento óptico de cámara no observado. QA.md y QA-evidence contienen resultados ejecutados, con límites de capturas estáticas.

`tools/verify-cinematic-runtime.py` conecta al navegador Sandbox existente por CDP en 9222; nunca lanza un navegador adicional. Requiere Python y websockets y recibe `--origin` y `--output`. Comprueba pestaña visible, avance temporal, pausa/unmount de efectos y activación de audio con un user gesture de diagnóstico. `tools/visual-qa-gemini.py` requiere google-genai/GEMINI_API_KEY solo en el entorno privado; no expone claves en frontend. Las herramientas privadas no se ejecutan desde la web.

## Publicación
Sitio existente: epac-hub/e-pac.ai, GitHub Pages desde main/raíz, CNAME e-pac.ai. Copiar dist/. a la raíz sin borrar rutas históricas ni cambiar DNS/CNAME. Conservar fuente editable bajo epac-landing/. Revisar TypeScript/build, fuente, recursos, diff y cambios remotos antes de push. Confirmar Pages del commit exacto y HTML/medios públicos HTTPS: un push por sí solo no prueba la publicación.

No se añaden métricas, clientes, testimonios ni claims regulatorios inventados. El contexto profesional es proporcionado por el usuario.
