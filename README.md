# EAD Oleohidráulica — Sitio institucional y comercial

Sitio web publicitario de EAD Oleohidráulica (Colonia Barón, La Pampa). Presenta servicios,
representaciones comerciales (Hidro-Grubert y Palfinger), productos bajo consulta y un formulario de
solicitud de presupuesto por correo o WhatsApp. Construido con Astro, TypeScript estricto y Tailwind CSS.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Arranca el servidor local |
| `npm run build` | Compila el sitio para producción en `dist/` |
| `npm run preview` | Sirve localmente la compilación de producción |
| `npm run typecheck` | Valida TypeScript y plantillas Astro |
| `npm run lint` | Revisa tipos y errores estáticos |
| `npm test` | Ejecuta los tests unitarios (Vitest) |
| `npm run test:e2e` | Ejecuta los recorridos end-to-end (Playwright) |
| `npm run check:build` | Verifica los presupuestos de tamaño del build |
| `npm run validate:launch` | Valida datos de lanzamiento, canonical y assets |
| `npm run quality` | Pipeline completo de calidad (typecheck + lint + test + build + validaciones + e2e) |
| `npm run instagram:import -- <url>` | Prepara un borrador privado desde una publicación de Instagram (requiere token local) |

## Estructura

- `src/components/` — componentes de interfaz, navegación, tarjetas, formularios y secciones
- `src/layouts/` — layout base con metadatos, navegación y pie de página
- `src/pages/` — páginas públicas y rutas del sitio
- `src/content/` — colecciones de contenido validadas por esquema (`src/content.config.ts`)
- `src/data/` — datos del negocio, contactos, marcas, líneas de grúas y configuración centralizada
- `src/lib/` — utilidades puras para SEO, formato, validación y enlaces de contacto
- `src/styles/` — tokens, estilos globales y reglas de accesibilidad
- `public/assets/brand/` — logos originales suministrados; no deben redibujarse ni recolorearse
- `tests/e2e/` — pruebas de navegación, contacto, responsive y accesibilidad
- `spec/` — constitución, features, planes y tareas SDD

## Convenciones y proceso

- Proceso dirigido por especificación: cada feature se documenta en `spec/features/` (`spec.md`,
  `plan.md`, `tasks.md`) antes de tocar código. Ver `spec/README.md` y `spec/constitution/`.
- Datos comerciales y de contacto centralizados en `src/data/site.ts`; no duplicarlos en componentes.
- Todo contenido estructurado se valida por esquema antes del build.
- Ninguna afirmación comercial (experiencia, representaciones, disponibilidad) se inventa: proviene de
  datos aprobados por EAD Oleohidráulica.