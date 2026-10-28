# 017 — Redacción integral de contenidos — Plan

## Dirección

Contenido útil, concreto y cercano: voseo rioplatense uniforme, frases que describen equipos y trabajos reales en lugar de repetir una fórmula, y una página de Empresa que cuente qué es el taller, qué hace, con qué instalaciones y cómo trabaja. Todo lo que se afirma surge de los datos confirmados por EAD; lo no confirmado sigue bajo «consulta».

## Implementación

1. Actualizar `src/data/site.ts`: 25 años de experiencia, descripción para SEO/JSON-LD y relación comercial «Servicio técnico oficial de Hidro-Grubert y Palfinger».
2. Reescribir `src/data/about.ts`: intro de cinco párrafos, seis highlights, proceso en cuatro etapas con voz directa, galería, ubicación con dos párrafos y CTA en voseo.
3. Actualizar `src/data/home.ts`: título y subtítulo del hero, barra de confianza, marcas, proyectos, ubicación y CTA final.
4. Expandir `src/data/services.ts`: los cuatro servicios ganan descripciones de dos o tres párrafos y alcances concretos (equipos y componentes reales).
5. Expandir `src/data/craneLines.ts` y `src/data/brands.ts`: descripciones de líneas y marcas.
6. Completar `src/data/productCategories.ts`: resúmenes en voseo y ejemplos por categoría.
7. Ajustar textos de páginas: Servicios (índice y fichas), Productos, Contacto, Trabajos, Empresa (metadescripción) y 404.
8. Pasar a voseo los textos de componentes: ServiceHighlights, FeaturedProjects, TrustBar, LocationSummary, BrandCard, ProductCategoryCard, ProjectGallery, InstagramReel y QuoteForm (incluidos mensajes de estado del script, conservando las subcadenas aseradas por los tests e2e).
9. Pasar a voseo los mensajes de error de `src/lib/contact.ts` y actualizar `src/lib/contact.test.ts`.
10. Crear la carpeta de feature 017, actualizar el roadmap y ejecutar `npm run quality`.

## Decisiones

- **Voseo uniforme** — elegido por EAD; las etiquetas neutras (infinitivos en botones) se conservan.
- **25 años** — cifra confirmada; se refleja en `site.ts` para que toda la web la tome de una sola fuente.
- **«Servicio técnico oficial»** — refleja mejor el cartel y los sellos de las fotos que «representante oficial».
- **Empresa sin componentes nuevos** — se enriquecen las secciones existentes (intro, trayectoria, proceso, galería, ubicación, CTA) sin tocar la arquitectura.
- **Garantía** — se menciona como «garantía sobre el trabajo realizado», con condiciones definidas en el presupuesto.
- **Ejemplos de producto** — categorías de componentes e implementos, sin afirmar stock.

## Riesgos

- **Tests que aseran texto** — mitigado: se conservan «Nuestro taller», «Ruta interrumpida», las etiquetas del formulario y las subcadenas de estado; los errores de `lib/contact.ts` se actualizan junto con su test.
- **Longitud de metadescripciones** — se mantienen dentro de límites razonables.
- **Afirmaciones nuevas** — cada dato agregado fue confirmado por EAD y se registra en el spec.
