# Roadmap

## Hecho ✅

1. **001 · Base técnica y sistema visual** — proyecto Astro creado, TypeScript strict configurado, Tailwind v4 integrado, estructura de carpetas completa, datos globales en `src/data/site.ts`, tokens visuales en `global.css`, primitivas de interfaz (Container, ButtonLink, SectionHeading, BrandLogo), layout base con metadatos y skip link, página de verificación visual con logos y paleta, tests unitarios iniciales, build estático funcional.
2. **002 · Navegación y layout global** — header sticky con logo responsive, navegación de escritorio con estado activo, menú móvil accesible con gestión de foco (aria-expanded, Escape, cierre al navegar), skip link, footer con identidad/contacto/redes/breadcrumbs opcionales, integración completa en BaseLayout. typecheck 0 errores, build 0 errores.
3. **003 · Página de inicio orientada a conversión** — Hero con h1 y CTA primaria/secundaria, TrustBar con experiencia, ServiceHighlights con 4 tarjetas, BrandRepresentation con logos originales, FeaturedProjects con estado vacío honesto, LocationSummary con dirección y horario, FinalCta oscura con teléfono y CTA. 0 errores typecheck, build 0 errores.
4. **004 · Empresa y señales de confianza** — Página `/empresa` con intro institucional, indicadores de experiencia (render condicional de años), proceso de trabajo en 4 pasos con tarjetas numeradas, galería con estado vacío, contexto de ubicación con datos de contacto desde siteConfig, CTA final. 0 errores typecheck, build 0 errores.
5. **005 · Servicios oleohidráulicos** — Página `/servicios` con índice de 4 áreas. Fichas individuales en `/servicios/[slug]` via getStaticPaths: reparacion-integral, instalaciones, mantenimiento, repuestos. Cada ficha con descripción, alcance y CTA. Datos tipados en src/data/services.ts. 0 errores typecheck, build 0 errores (7 páginas).
6. **006 · Productos y marcas representadas** — relación oficial y categorías centralizadas, consultas contextuales, logos originales y validación responsive con Playwright.
8. **008 · Contacto y solicitud de presupuesto** — canales confirmados, ubicación externa, formulario accesible, validación tipada, envío por correo (Formspree, luego EmailJS en 015), mensaje de WhatsApp, copia y alternativas sin persistencia propia.
9. **009 · SEO local y contenido compartible** — GitHub Pages bajo `/EAD-web-nuevo`, canonical, Open Graph, Twitter Cards, JSON-LD, sitemap, robots, 404 y pruebas de unicidad y rutas.
10. **010 · Calidad, despliegue y medición** — CI/CD, suite completa, accesibilidad, presupuestos, validación de lanzamiento, política sin analítica, rollback y despliegue verificado en GitHub Pages.
11. **011 · Fotografía real e iconografía** — catálogo tipado de 22 fotografías autorizadas, encabezados y registros contextuales, galería rotativa, iconos específicos para servicios y productos, 404 simplificada y presupuestos de carga validados.
12. **013 · Adecuación a la identidad visual del portfolio** — paleta corporativa (azul profundo, azul intenso, amarillo, neutros), tipografía Arial, estética plana sin brillos ni partículas, esquinas rectas y detalles técnicos; logos originales intactos; contraste AA verificado; correcciones responsive 360–1440 px; `npm run quality` completo en verde (29 unitarios + 56 e2e).
13. **014 · Renovación fotográfica del taller** — 30 fotos iniciales y lote 2026-10-28 de 17 originales (9 publicados), catálogo de 42 WebP optimizados, reemplazo de 25 referencias rotas, retiro de fotos promocionales, cuatro patentes legibles pixeladas, prueba de existencia de archivos y presupuestos en verde (6,1 MB WebP / 7,3 MB build).
14. **015 · Envío de consultas con EmailJS** — SDK oficial en el navegador, configuración pública centralizada, plantilla con variables estructuradas, escape HTML, errores 400/403/429/451 y timeout, fallback sin JavaScript y suite e2e actualizada (30 unitarios + 58 e2e). Envío sintético aceptado con `200 OK` el 28/10/2026; recepción en `adm201364@gmail.com` pendiente de confirmar.
15. **016 · Encabezados con fotografía inmersiva** — PageHero y Hero usan la foto como fondo a sangre completa en el 55% derecho, con un degradado corto que libera el contenido del borde izquierdo; sin marco ni etiqueta visible; 404 intacta; encabezados de Servicios (`grua-palfinger-tecnico`) y Empresa (`servicio-a-campo`, nueva imagen 900×1600); contraste AA verificado, 31 unitarios y 58 e2e aprobados.
16. **017 · Redacción integral de contenidos** — reescritura completa en voseo rioplatense: Empresa expandida (historia, instalaciones, proceso, cobertura y garantía), servicios con alcances concretos, ejemplos por categoría de producto, formulario y mensajes en voseo; datos confirmados por EAD: más de 25 años y «Servicio técnico oficial de Hidro-Grubert y Palfinger».
17. **018 · Encabezado de inicio compacto** — el hero de Inicio pasa a presentar logo grande, «EAD Oleohidráulica» y «Enzo A. Deux» en menor tamaño, con subtítulo y CTA conservados; se retira el listado de áreas y se reduce el alto del encabezado.

## Bloqueado

7. **007 · Portfolio de trabajos reales** — infraestructura, filtros, galería, esquema de autorización y fichas terminados. Faltan proyectos reales, imágenes y autorización de publicación.
12. **012 · Importación oficial de Instagram para portfolio** — cliente, borradores privados, esquema, presentación y consentimiento de Reels preparados. La activación queda pendiente de acceso oficial y revisión de trabajos reales.

## Backlog / ideas 💡
- **Videos reales del taller y redes** — evaluar clips cortos alojados localmente (MP4/WebM + póster WebP) con consentimiento, subtítulos y presupuesto explícito; alternativa: embeds de Instagram al hacer clic. Pendiente de archivos o enlaces y decisión de formato.
- **Testimonios verificados** — incorporar reseñas reales con permiso, fuente y fecha cuando EAD disponga de ellas.
- **Preguntas frecuentes** — responder dudas comerciales recurrentes basadas en consultas reales, sin convertirlas en asesoramiento técnico riesgoso.
- **Contenido de mantenimiento preventivo** — publicar guías breves y prudentes que ayuden a captar búsquedas sin sustituir una inspección profesional.

> Cada feature nueva se crea como `features/NNN-nombre-feature/` con `spec.md`, `plan.md` y `tasks.md` antes de tocar código.
