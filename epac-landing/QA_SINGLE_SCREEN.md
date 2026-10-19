# ePAC — QA de la única pantalla aérea

## Resultado verificado — 10-19-2026
La vista previa contiene una única composición aérea fotorrealista: ePAC, nombre, línea profesional, contacto y controles integrados en el viewport. No hay secciones debajo, tarjetas, anclas de exploración, ScrollTrigger, Lenis o WebGL montado. La costa es un visual AI ficticio, no una grabación de Puerto Rico.

## Checklist
- [x] TypeScript estricto y build estático React/Vite correctos.
- [x] HTML inicial significativo: nombre/CTA presentes, sin section, focus-track o leyenda Scroll to.
- [x] Cero secciones y cero canvases en el montaje; el build no emite CosmicScene.
- [x] Documento de idéntico ancho y altura al viewport en los cinco casos medidos, sin scrolling.
- [x] Header, nombre, título, línea profesional, CTA y controles dentro del viewport y sin superposición entre header/identidad o CTA/borde inferior.
- [x] WebM reproducido desde una carga limpia en pestaña visible: playing, paused false, error null; currentTime avanzó de 5.860476 a 7.864556 s en dos muestras separadas por dos segundos.
- [x] Poster auténtico y alternativa H.264 baseline/MP4; medios optimizados, fuente relativa al origen.
- [x] Capturas completas de escritorio 1440×900 y móvil 390×844 inspeccionadas; fotografía aérea visible y texto legible.
- [x] Audio permanece opt-in; reduced-motion y pausa conservan la imagen de respaldo.
- [x] No publicación nueva en e-pac.ai en esta revisión; se entrega vista previa para revisar la composición.

| Caso medido | Viewport | Documento | Resultado |
|---|---|---|---|
| Escritorio | 1440×900 | 1440×900 | Una pantalla, sin desbordamiento. |
| Móvil | 390×844 | 390×844 | Una pantalla, contenido esencial visible. |
| Móvil compacto | 320×568 | 320×568 | Una pantalla, sin cortes ni superposición del CTA. |
| Horizontal | 844×390 | 844×390 | Una pantalla con tipografía adaptada a poca altura. |
| Escritorio bajo | 1440×400 | 1440×400 | Una pantalla, header y controles no tapan el contenido. |

Prueba reproducible: tools/verify-single-screen.py conecta al navegador Sandbox existente por CDP, activa la pestaña, recarga sin caché, mide rectángulos y compara el tiempo del video. No lanza otro navegador. Evidencia completa: QA-evidence/single-screen-runtime.json.

## Descripción de visualizaciones
No hay gráficos estadísticos, dashboards ni KPIs. El film aéreo es arte de marca; las medidas anteriores son controles técnicos, no resultados empresariales.

| Elemento | Descripción | Límite |
|---|---|---|
| Film aéreo | Vista costera AI, arquitectura moderna, agua y luz natural a pantalla completa. | No lugar ni inmueble real verificado. |
| Cursor/anillos de puntero | Dot/ring/trail discreto y botones magnéticos en desktop. | Affordance de interacción, no objeto protagonista o gráfico de datos. |
| Barras de audio | Estado del soundtrack opt-in. | No analizador de audio ni métrica. |
| Borde/interfaz de vidrio | Marco fino y controles translúcidos. | Decoración, sin significado numérico. |

## Límites
No se mide frame rate en equipos de gama baja, Core Web Vitals, uso de lectores de pantalla ni WCAG completo. Autoplay sigue dependiendo de la política del navegador y tiene recuperación manual. El CTA abre el cliente de correo, no envía un formulario automáticamente. Esta versión se mantiene en Preview para revisión antes de publicarla.
