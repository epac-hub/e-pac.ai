# ePAC — QA de la corrección 10-19-2026

## Resultado visual e implementación
La portada ya no presenta nueve tarjetas técnicas ni tres tarjetas promocionales de proveedores. El hero es una película original Seedance a pantalla completa, con ePAC dominante, nombre profesional visible y una acción principal. El recorrido alterna cine oscuro con biografía y contacto marfil de alto contraste. Se conservaron las nueve técnicas solicitadas como comportamientos, con trazabilidad discreta en el pie.

Se ejecutaron TypeScript estricto, compilación Vite y render estático React. Las referencias locales de HTML, poster, clips WebM/MP4 y CNAME original se comprobaron. No hay clientes, métricas, resultados ni testimonios inventados. La biografía declara contexto profesional proporcionado por el usuario.

## Evidencia de reproducción y scroll
Se detectó un error real de decodificación H.264 en el navegador de prueba: PIPELINE_ERROR_DECODE. Un estado `playing` sin avance temporal no se aceptó como prueba. Se añadieron WebM/VP9 y MP4 alternativo. La comprobación CDP usó la pestaña existente activada, no un navegador nuevo ni una visibilidad simulada.

| Comprobación | Resultado observado |
|---|---|
| Film en pestaña activa | visibilityState visible; estado playing; paused false; readyState 4. |
| Avance temporal del film | currentTime 2.935937 s → 5.0026 s en dos muestras separadas por dos segundos; no se usó Play film manual en esa ejecución. |
| Pausa visual | paused true, poster visible, cero canvases WebGL y áreas en grid al apagar motion. |
| Audio opt-in | aria-pressed true tras user gesture de diagnóstico; se volvió a apagar. No se declara una prueba auditiva de altavoces. |
| Horizontal real | transform matrix(1,0,0,1,-605,0), indicador 02 / 04 en muestra de mitad de recorrido. |
| Pasos fijados | Build. activo, 03 / 03 tras salto a la tercera fase. Se corrigió un reset incorrecto a 01 al entrar con un salto de navegación. |
| Portales | clipPath none en contenido de focus/approach; clipPath circle(150% at 50% 50%) sólo en capa decorativa. |
| Narrativa secundaria | Clip Higgsfield en estado playing al entrar a approach. |
| Desbordamiento y altura | Sin desbordamiento horizontal del documento a 1280×1100; escenas fijadas de 1016px llenan el viewport útil bajo header de 84px. |

Pruebas reproducibles: tools/verify-cinematic-runtime.py y tools/verify-scroll-runtime.py. Los JSON de resultados y el informe Gemini se conservan en QA-evidence. La prueba es de ese navegador/viewport, no cobertura universal.

## Revisión visual de producción Gemini
El script privado de Gemini se ejecutó sobre las capturas 1440×900 y 390×844. Señaló microcopy inferior pequeño, interferencia del reflejo con texto/CTA y predominio del logotipo sobre el motivo. Se aumentó el texto inferior móvil y se reforzó el fondo del CTA y la sombra del texto secundario sin ocultar la película. El logotipo dominante es intencional; no se adopta como requisito que el anillo tenga más jerarquía que ePAC. La ausencia de estrellas en el hero no es una omisión: el sistema de partículas se integra en focus, no sobre la película.

El análisis temporal del clip generado encontró luz animada pero cámara fija. Se añadió push/reframing digital continuo con FFmpeg; no se atribuye movimiento óptico al modelo. El poster se extrajo del clip editado. Capturas estáticas no prueban movimiento ni audio; por eso se comprobó avance temporal del video.

## Checklist
- [x] TypeScript estricto y build estático ejecutados sin errores.
- [x] Identidad, contenido breve y retiro del catálogo técnico verificados en HTML/capturas.
- [x] Nueva película Seedance generada, editada y reproducida con avance temporal observado.
- [x] WebM y MP4 reales, poster auténtico, escena Higgsfield y soundtrack existente.
- [x] Cursor, magnetismo, shader simplex, 2000 puntos GPU e icosaedro secundario inspeccionados.
- [x] Horizontal, tercer paso y portales sin ocultamiento de contenido observados en runtime.
- [x] Desktop/móvil revisados; contenido natural sin motion y WebGL no pesado en touch.
- [x] Revisión solo lectura integrada; fallback sin IntersectionObserver corregido para pausa fuera de vista.
- [x] Preferencias, foco visible, skip link, controles semánticos y diálogo de procedencia conservados.
- [x] Audio opt-in activado por gesto de diagnóstico; ninguna clave se incorpora al cliente.
- [ ] Publicación del commit exacto y contenido HTTPS de e-pac.ai: pendiente de confirmación externa.

## Descripción de visualizaciones
No hay gráficos estadísticos, KPIs ni resultados de negocio. Todos los elementos son decorativos o estados de navegación.

| Visual | Descripción | Límite de interpretación |
|---|---|---|
| Película hero | Escultura ficticia, luz lavanda rotatoria y encuadre digital editado. | Arte de marca; no persona ni lugar real, ni prueba de desempeño. |
| 2000 estrellas | Puntos GPU con impulso al scroll en el bloque de focus. | 2000 es parámetro de implementación, no métrica empresarial. |
| Fondo GLSL | Campo simplex de tonos oscuros/lavanda animado. | Decorativo, sin significado numérico. |
| Icosaedro secundario | Objeto distorsionado responsivo al cursor en approach. | Ilustración abstracta, no modelo científico o representación personal. |
| Áreas y línea de progreso | Cuatro categorías profesionales y avance del scroll horizontal. | Estado de navegación, no KPI; progreso calculado por ScrollTrigger. |
| 01–03 de enfoque | Paso actual de una narrativa de trabajo. | Posicionamiento profesional, no proceso auditado o resultado prometido. |
| Barras de audio | Estado visual del soundtrack opt-in. | Animación indicativa, no analizador de espectro. |

## Límites
No se afirma cumplimiento WCAG, métricas Core Web Vitals, frame rate en hardware de gama baja ni cobertura de lectores de pantalla. El bundle Three.js/R3F sigue lazy-load sólo para movimiento en desktop fine-pointer, con aviso de tamaño en el build. Autoplay depende de la política del navegador y dispone de recuperación Play film y poster. El correo abre el cliente de email del visitante, no envía un formulario a un servidor.
