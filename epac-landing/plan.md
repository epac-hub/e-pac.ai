# ePAC — corrección integral del 10-19-2026

## Autorización y objetivo
El usuario rechazó la portada anterior por falta de claridad, minimalismo y presencia cinematográfica. Solicita arreglarla. Se mantiene la autorización anterior para sustituir el sitio e-pac.ai a través de epac-hub/e-pac.ai, sin cambiar DNS, CNAME ni borrar contenido histórico. No se reinicializa el proyecto.

## Dirección completa
Una portada editorial cinematográfica minimalista: película visible a pantalla completa, ePAC dominante, identificación inmediata de Elliot Pacheco Beauchamp y sus áreas profesionales, y una sola acción principal. No usar una esfera gigante como sustituto del video. El recorrido alterna cine oscuro con una superficie marfil clara, texto negro nítido, espacio intencional y menos adornos. La página presenta a ePAC; no es un catálogo de herramientas de desarrollo.

Eliminar de la portada las nueve tarjetas de especificaciones y las tres tarjetas promocionales de proveedores. Las nueve técnicas solicitadas permanecen como comportamiento real: cursor dot/ring/trail y diferencia; magnetismo elástico con brillo; icosaedro interactivo pequeño en la escena del enfoque; 2000 puntos GPU y shader simplex en el bloque oscuro; portales circulares solo sobre capas decorativas; audio espacial opt-in con fade; áreas que se desplazan horizontalmente al bajar; y tres pasos fijados con transición visible. El contenido nunca queda oculto por un clip-path. Seedance aporta la película de apertura; Higgsfield aporta la escena narrativa; Gemini hace revisión visual de producción. La trazabilidad de proveedores queda en un enlace discreto del pie y documentación, no ocupa el relato principal.

## Estructura y contenido
1. Hero full-bleed con película Seedance, ePAC como tipografía dominante, nombre completo, línea breve de áreas y acción a la identidad.
2. Perfil marfil, breve: entrepreneur, community-pharmacy owner, public-policy advocate en Puerto Rico, según contexto profesional proporcionado por el usuario. Sin clientes, métricas ni testimonios inventados.
3. Cuatro áreas profesionales en un recorrido horizontal compacto: healthcare, enterprise, public policy, technology. Cada una incluye una descripción breve, sin etiquetas repetidas ni diagramas innecesarios.
4. Enfoque de tres pasos con movimiento fijado corto, escena Higgsfield visible y pequeño objeto WebGL responsivo. Contacto y pie marfil simple.

Conservar el contenido público en inglés de la versión anterior. El idioma de esta tarea y la documentación de corrección es español. Email conservado del contexto proporcionado: elliotpac@gmail.com.

## Medios e implementación
React/TypeScript/Vite con render estático del HTML significativo e hidratación. Nueva película de marca abstracta cuando se genere correctamente; no simular fotografías de una persona real o lugar concreto. Mantener el clip Higgsfield existente solo si la revisión confirma utilidad. Video protagonista en escritorio y móvil con autoplay muted/playsInline, poster real y recuperación visible con acción play si el navegador impide autoplay. Preferencia reduced-motion y control manual desactivan la reproducción y efectos. Mobile conserva el cine mediante poster y/o video ligero; no cursor ni WebGL pesado.

src/App.tsx contiene la composición, src/styles.css el sistema minimalista responsivo, src/components/CinematicVideo.tsx la reproducción con pause/visibility y estado observable, src/components/CosmicScene.tsx el WebGL ya existente, src/components/InteractionControls.tsx cursor/magnetismo/audio, src/hooks/usePageMotion.ts los efectos sin ocultar texto, public/media los medios reales, tools/visual-qa-gemini.py la revisión privada. Ninguna credencial pasa al cliente.

## Sistema visual
Editorial de lujo técnico, no dashboard ni catálogo. Marfil #f4f3ef y casi negro #0b0b10 como superficies principales; lavanda #b79aff en acentos de luz, no en cada texto. Space Grotesk para ePAC/títulos y Manrope para texto. Texto principal mínimo de 15px, metadatos de 11–12px, longitud contenida. Una jerarquía fuerte por pantalla. Header transparente sobre cine, claro sobre marfil, enlaces mínimos. Pie alineado y centrado. Interacciones deliberadas y reversibles, contenido semántico siempre visible. Sin prometer rendimiento o cumplimiento no medido.

## Guardado y publicación
Ejecutar typecheck/build, una revisión solo lectura de la integración, y capturas dirigidas del hero escritorio y móvil para comprobar que el cine realmente se ve y el texto se entiende. Guardar versión en repositorio gestionado y copia editable en epac-hub/e-pac.ai/epac-landing. Copiar dist a la raíz sin operaciones destructivas; conservar CNAME, 404 y rutas históricas. Verificar build Pages del commit exacto y HTML público del dominio, no solo push exitoso.
