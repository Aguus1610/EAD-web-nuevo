# Roadmap

## Hecho ✅

1. **001 · Base técnica y sistema visual** — proyecto Astro creado, TypeScript strict configurado, Tailwind v4 integrado, estructura de carpetas completa, datos globales en `src/data/site.ts`, tokens visuales en `global.css`, primitivas de interfaz (Container, ButtonLink, SectionHeading, BrandLogo), layout base con metadatos y skip link, página de verificación visual con logos y paleta, tests unitarios iniciales, build estático funcional.
2. **002 · Navegación y layout global** — header sticky con logo responsive, navegación de escritorio con estado activo, menú móvil accesible con gestión de foco (aria-expanded, Escape, cierre al navegar), skip link, footer con identidad/contacto/redes/breadcrumbs opcionales, integración completa en BaseLayout. typecheck 0 errores, build 0 errores.
3. **003 · Página de inicio orientada a conversión** — Hero con h1 y CTA primaria/secundaria, TrustBar con experiencia, ServiceHighlights con 4 tarjetas, BrandRepresentation con logos originales, FeaturedProjects con estado vacío honesto, LocationSummary con dirección y horario, FinalCta oscura con teléfono y CTA. 0 errores typecheck, build 0 errores.
4. **004 · Empresa y señales de confianza** — Página `/empresa` con intro institucional, indicadores de experiencia (render condicional de años), proceso de trabajo en 4 pasos con tarjetas numeradas, galería con estado vacío, contexto de ubicación con datos de contacto desde siteConfig, CTA final. 0 errores typecheck, build 0 errores.
5. **005 · Servicios oleohidráulicos** — Página `/servicios` con índice de 4 áreas. Fichas individuales en `/servicios/[slug]` via getStaticPaths: reparacion-integral, instalaciones, mantenimiento, repuestos. Cada ficha con descripción, alcance y CTA. Datos tipados en src/data/services.ts. 0 errores typecheck, build 0 errores (7 páginas).
6. **006 · Productos y marcas representadas** — relación oficial y categorías centralizadas, consultas contextuales, logos originales y validación responsive con Playwright.
8. **008 · Contacto y solicitud de presupuesto** — canales confirmados, ubicación externa, formulario accesible, validación tipada, envío mediante Formspree, mensaje de WhatsApp, copia y alternativas sin persistencia propia.
9. **009 · SEO local y contenido compartible** — GitHub Pages bajo `/EAD-web`, canonical, Open Graph, Twitter Cards, JSON-LD, sitemap, robots, 404 y pruebas de unicidad y rutas.
10. **010 · Calidad, despliegue y medición** — CI/CD, suite completa, accesibilidad, presupuestos, validación de lanzamiento, política sin analítica, rollback y despliegue verificado en GitHub Pages.
11. **011 · Fotografía real e iconografía** — catálogo tipado de 22 fotografías autorizadas, encabezados y registros contextuales, galería rotativa, iconos específicos para servicios y productos, 404 simplificada y presupuestos de carga validados.

## Bloqueado

7. **007 · Portfolio de trabajos reales** — infraestructura, filtros, galería, esquema de autorización y fichas terminados. Faltan proyectos reales, imágenes y autorización de publicación.
12. **012 · Importación oficial de Instagram para portfolio** — cliente, borradores privados, esquema, presentación y consentimiento de Reels preparados. La activación queda pendiente de acceso oficial y revisión de trabajos reales.

## Backlog / ideas 💡
- **Testimonios verificados** — incorporar reseñas reales con permiso, fuente y fecha cuando EAD disponga de ellas.
- **Preguntas frecuentes** — responder dudas comerciales recurrentes basadas en consultas reales, sin convertirlas en asesoramiento técnico riesgoso.
- **Contenido de mantenimiento preventivo** — publicar guías breves y prudentes que ayuden a captar búsquedas sin sustituir una inspección profesional.

> Cada feature nueva se crea como `features/NNN-nombre-feature/` con `spec.md`, `plan.md` y `tasks.md` antes de tocar código.
