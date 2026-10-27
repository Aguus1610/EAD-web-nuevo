# 013 · Plan — Identidad visual corporativa

## Enfoque técnico

1. **Tokens únicos en `src/styles/global.css`** (Tailwind v4 `@theme`): paleta del portfolio (`deep`, `blue`, `yellow`, `light`, `ink`), tipografía Arial y espaciados. Los nombres anteriores (`navy-*`, `steel-*`, `gold-*`) se eliminan por completo.
2. **Clases utilitarias personalizadas** para los recursos gráficos del portfolio: rejilla técnica plana, tarjetas industriales planas, títulos con barra azul/amarillo, etiquetas técnicas, esquinas rectas y diagonales de acento.
3. **Sustitución de clases en todos los componentes y páginas** con un mapeo deliberado:
   - `navy-*` → `deep-*` (fondos oscuros y títulos), `text-navy-950` sobre amarillo → `text-ink-900`
   - `steel-*` → `blue-600` (acentos e íconos) o `light-*`/`deep-700` (bordes)
   - `gold-*` → `yellow-400/500` (CTAs y acentos)
   - `gray-*` → `ink-900/700/500` (texto) y `light-*` (superficies)
4. **Eliminación de efectos** que contradicen el portfolio: `shimmer-gold`, `fluid-particle`, `industrial-grain`, `hero-title-glow`, glow de la barra de lectura, animación `grid-breathe`, gradientes en barras y sombras pesadas.
5. **Logo intacto**: `BrandLogo.astro` sigue usando los PNG originales; la versión clara en header/footer/hero, la oscura sobre fondos claros.

## Archivos afectados

- `src/styles/global.css` — reescritura del sistema de diseño.
- `src/layouts/BaseLayout.astro` — barra de lectura y script de scroll.
- `src/components/ui/*` — ButtonLink, SectionHeading, PhotoFrame, BrandLogo (sin cambios de assets), Container, ServiceIcon, ProductIcon.
- `src/components/navigation/*` — Header, DesktopNav, MobileNav, Footer, Breadcrumbs, SkipLink, SocialLinks, ContactLinks.
- `src/components/sections/*` — todas las secciones (hero, tarjetas, formulario, galerías, CTA).
- `src/pages/*` — clases sueltas y estilos inline de páginas.

## Decisiones

- El amarillo se usa solo en CTAs, etiquetas sobre azul e íconos; nunca como fondo dominante ni texto sobre blanco.
- Íconos pequeños sobre fondo claro usan azul intenso (el amarillo no alcanza contraste AA sobre blanco).
- Esquinas rectas (0–2 px) en todos los componentes; la diagonal aparece como acento puntual (corner triangle, barra inclinada), no como efecto decorativo repetido.
- Se conservan las animaciones funcionales de reveal, contadores y dibujo de íconos por ser discretas y progresivas.

## Riesgos

- **Presupuesto CSS**: `check:build` limita el CSS a 100 KB por archivo; se eliminan keyframes y bloques muertos para compensar.
- **Tests e2e**: dependen de clases estructurales (`photo-frame`, `#quote-form`, `main > section`); no se renombran.
- **Contraste**: se verifican los pares críticos (amarillo/azul profundo, azul intenso/blanco, texto sobre gris claro).
