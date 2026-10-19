# QA — ePAC / marca ep. auténtica

Fecha: 10-19-2026. Esta evidencia corresponde a la portada nueva con el logo original de Elliot, no a las versiones rechazadas ni al sitio público anterior.

## Checklist ejecutado

- [x] Logo encontrado en la carpeta personal ELLIOT PACHECO - LOGO de Dropbox y visualmente inspeccionado. Archivo del build byte-for-byte igual al original; SHA-256 registrado en SOURCES.md.
- [x] Una sola ruta /; ausencia de secciones adicionales y canvas en el DOM. HTML estático incluye el nombre y el logo originales, sin el slogan Vision. With purpose. ni el skyline epac-aerial.
- [x] pnpm check, pnpm build y git diff --check: ejecución exitosa después de los cambios de composición, metadata y estilos.
- [x] Documento igual al viewport en todas las medidas probadas: 1440×900, 390×844, 320×568, 844×390 y 1440×400. Rectángulos de header, logo, nombre, descripción, CTA y footer dentro del viewport, sin solapamientos del header/footer con el contenido. Cero scrolling horizontal o vertical en estas medidas.
- [x] Reproducción real de ep-futures.webm en la pestaña existente: state playing, paused false, error null. currentTime cambió de 6.022815 a 0.008454 después de 2 s, cruzando el reinicio del loop de 8 s. No se interpreta una captura estática como prueba de cine.
- [x] Capturas oficiales desktop y móvil revisadas: marca original visible, film arquitectural protagonista, nombre/contacto legibles; no otra ciudad de apartamentos ni pantalla de catálogo.
- [x] Metadata y favicon utilizan el logo original; logoUrl es un CDN HTTPS real. Las rutas de medios son relativas al sitio.
- [x] auto_publish false confirmado en configuración. Repositorio público epac-hub/e-pac.ai sin cambios de esta revisión. No modificación de DNS/CNAME.

## Descripción de los visuales

| Visual | Descripción y límite |
|---|---|
| Logo ep. | Imagen original personal blanca sobre negro; círculo y letras preservados. Es identidad de marca, no un KPI o dato numérico. |
| Película | Concepto AI fotorrealista de estructura escultórica en una costa de basalto. Cámara aérea y agua en movimiento; no una propiedad o localización real afirmada. |
| Grano/cursor | Decoración sutil, no datos; el cursor se desactiva en móvil/reduced motion. No hay gráficos, KPIs, métricas inventadas ni comparativas. |
| Audio | Ambient.mp3 existente, opt-in; se mantienen controles de reproducción. No incluye narración o afirmaciones profesionales. |

## Evidencia y límites
QA-evidence/authentic-logo-runtime.json contiene medidas y estados. tools/verify-single-screen.py utiliza la pestaña existente, sin iniciar otro navegador. Las capturas oficiales muestran el layout pero normalizan la opacidad/entrada; la reproducción se verificó separadamente. Los controles CinematicVideo conservan muted inline, poster, recuperación Play y reduced motion; no se afirma compatibilidad universal, cumplimiento WCAG certificado, Core Web Vitals medidos ni publicación del dominio de esta versión.
