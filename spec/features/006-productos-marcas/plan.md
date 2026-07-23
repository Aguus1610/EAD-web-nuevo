# 006 · Productos y marcas representadas — Plan

## Enfoque

Modelar productos como categorías comerciales, no como inventario. Separar `ProductCategory` y `Brand` para reutilizar logos y textos aprobados en portada, productos y footer. Las consultas se construirán con campos suficientes para que el taller pueda identificar la necesidad.

## Implementación

1. Definir `src/data/brands.ts` y `src/data/productCategories.ts` con tipos y validaciones.
2. Normalizar referencias a `hidro-grubert-logo.png` y `palfinger-logo.png` desde `public/assets/brand/`.
3. Implementar `BrandCard.astro`, `BrandLogo.astro`, `ProductCategoryCard.astro` y `AvailabilityNotice.astro`.
4. Crear `src/pages/productos.astro` con secciones de marcas, categorías y proceso de consulta.
5. Ampliar `src/lib/contact.ts` para generar consultas de repuestos con marca, modelo, número de pieza opcional y fotografía sugerida.
6. Añadir pruebas de logos, texto aprobado, enlaces y ausencia de patrones de e-commerce.

## Decisiones

- **Categorías en lugar de SKU** — refleja el alcance real de una web publicitaria y evita información de stock obsoleta.
- **Texto de relación comercial como dato bloqueado** — impide que un redactor o componente cambie el significado legal/comercial.
- **Identidad EAD dominante** — las marcas se presentan como relaciones y productos, no como propietarios del sitio.
- **Consulta guiada** — mejora la calidad del pedido sin prometer compatibilidad automática.

## Riesgos

- **Uso incorrecto de marcas** — conservar archivos, proporciones y redacción aprobada; revisar la publicación con el responsable.
- **Categorías demasiado amplias** — utilizar ejemplos solo cuando el taller confirme que los comercializa o gestiona.
- **Expectativa de compra inmediata** — repetir de forma clara y no invasiva que toda disponibilidad se confirma por consulta.
