# Procedencia de contenido y medios — corrección 10-19-2026

## Contenido profesional
El nombre Elliot Pacheco Beauchamp, su contexto en Puerto Rico, emprendimiento sanitario, farmacia comunitaria, defensa de política pública, operaciones, compliance y automatización proceden del perfil proporcionado por el usuario. No se presentan como afirmaciones públicas verificadas independientemente. La página identifica la biografía como contexto profesional proporcionado por Elliot Pacheco Beauchamp. El correo elliotpac@gmail.com procede de su contexto de cuenta proporcionado. No hay clientes, resultados, métricas, certificaciones ni testimonios inventados.

## Nueva película cinematográfica
Generación ejecutada en esta tarea el 10-19-2026 con Manus generate_video, modelo seedance-2-5; resultado confirmado en el trabajo job_m_614e4658e6a4. Prompt: escena abstracta ficticia de una escultura circular, superficies reflectantes, luz lavanda móvil y desplazamiento de cámara continuo; sin personas, lugares reales ni logotipos generados. El recurso no es una imagen de Puerto Rico ni una persona real.

Original: public/media/epac-cinematic-original.mp4. ffprobe: H.264, 1280×720, 24 fps, 8.041667 segundos, 4,444,279 bytes. La revisión temporal del original detectó luz rotatoria pero encuadre fijo; no se atribuye al modelo un desplazamiento óptico de cámara no observado. Versión web: public/media/epac-cinematic.mp4, editada con FFmpeg zoompan para un push digital suave y reframing lateral que vuelve al encuadre inicial, codificada con libx264, CRF21, yuv420p y faststart: 998,118 bytes. La luz animada del modelo se conserva. Poster auténtico: public/media/epac-cinematic-poster.webp extraído a 1.5 segundos de la versión editada. La imagen social se actualiza con ese mismo fotograma, sin nuevos claims.

Se añadió una variante VP9/WebM para resolver un error de decodificación H.264 observado en el navegador de prueba: public/media/epac-cinematic.webm, 592,455 bytes. El clip narrativo tiene también public/media/higgsfield.webm, 168,503 bytes. El elemento video ofrece WebM primero y MP4 como alternativa nativa. La prueba de pestaña activa confirmó avance temporal y ausencia de pausa en el hero compatible; no se infiere compatibilidad universal a partir de una sola prueba.

## Medios reutilizados
Fuente: epac-hub/e-pac.ai, commit original ecad7ea inspeccionado el 10-18-2026. Los créditos de proveedor de estos recursos son declarados por el repositorio; no se reconstruyeron recibos originales.

| Recurso | Evidencia y uso |
|---|---|
| manus-storage/higgsfield-web_9f6a141d.mp4 → public/media/higgsfield.mp4 | Documentación del repositorio identifica Higgsfield/Kling v3.0; ffprobe H.264, 1280×720, 5.041667 s. Se conserva como visual secundario del enfoque, no hero principal. |
| public/media/higgsfield-poster.webp | Fotograma real a 2 segundos del clip Higgsfield, extraído en esta corrección. |
| manus-storage/ambient-space_659e307d.mp3 → public/media/ambient.mp3 | Recurso AI existente según el repositorio; MP3 44.1 kHz estéreo, 176.352583 s medidos. No hay prompt/recibo original. Audio siempre opt-in. |
| public/media/seedance.mp4 y antiguos posters | Se conservan por historial; el antiguo clip de astronautas no se utiliza como nueva película de apertura. |

## Referencias oficiales consultadas 10-18-2026
Seedance: https://seed.bytedance.com/en/seedance. Higgsfield: https://higgsfield.ai/. Gemini image understanding: https://ai.google.dev/gemini-api/docs/image-understanding. No se reproducen benchmarks ni cifras promocionales de proveedores.

## Revisión de producción
El script privado tools/visual-qa-gemini.py usa Gemini para revisar capturas reales; requiere google-genai y GEMINI_API_KEY solo en entorno de producción del agente, nunca en el navegador. Las observaciones ejecutadas se registran en QA.md. Una captura no prueba reproducción continua, rendimiento, audio o cumplimiento WCAG.
