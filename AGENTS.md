# EAD Oleohidráulica — Sitio institucional y comercial

Sitio web publicitario para EAD Oleohidráulica, orientado a presentar capacidades, trabajos, productos y representaciones comerciales, y convertir visitas en consultas y solicitudes de presupuesto. El público principal son propietarios de equipos, empresas, talleres, productores y responsables de flotas que necesitan soluciones oleohidráulicas confiables.

## Stack

- Lenguaje: TypeScript en modo estricto
- Framework / runtime: Astro con Node.js LTS
- Base de datos: No aplica; el contenido público se mantiene en archivos tipados y colecciones de contenido
- Tests: Vitest para lógica y Playwright para recorridos críticos, responsive y accesibilidad

## Comandos

- `npm run dev` - arranca el servidor en local
- `npm run test` - ejecuta los tests unitarios
- `npm run test:e2e` - ejecuta los recorridos end-to-end
- `npm run lint` - revisa TypeScript, Astro y estilo antes de cada PR
- `npm run build` - compila el sitio para producción
- `npm run preview` - sirve localmente la compilación de producción

## Estructura del proyecto

- `src/components/` - componentes reutilizables de interfaz, navegación, tarjetas, formularios y secciones
- `src/layouts/` - layouts globales, metadatos, navegación y pie de página
- `src/pages/` - páginas públicas y rutas del sitio
- `src/content/` - trabajos, servicios y contenidos editoriales validados por esquema
- `src/data/` - datos globales del negocio, contactos, marcas, categorías y configuración
- `src/lib/` - utilidades puras para SEO, formato, validación y generación de enlaces de contacto
- `src/styles/` - tokens, estilos globales y reglas de accesibilidad
- `public/assets/brand/` - logos originales suministrados; no deben redibujarse ni recolorearse
- `tests/` - pruebas end-to-end, accesibilidad y regresión de recorridos críticos
- `spec/` - constitución, especificaciones, planes y tareas SDD

## Convenciones

- Usar `PascalCase` para componentes y tipos; `camelCase` para variables, funciones y propiedades.
- Mantener los tests unitarios junto a la utilidad probada cuando resulte claro; los recorridos completos van en `tests/e2e/`.
- Centralizar datos comerciales y de contacto en `src/data/site.ts`; no duplicarlos en componentes.
- Validar todo contenido estructurado mediante esquemas antes del build.
- Mantener el contenido visible en español rioplatense profesional, claro y sin errores ortográficos.
- Utilizar HTML semántico antes que componentes genéricos y conservar una jerarquía correcta de encabezados.
- Construir componentes pequeños, tipados y reutilizables; evitar componentes monolíticos de página completa.
- Toda llamada a la acción debe tener un destino real y configurable: WhatsApp, correo, teléfono o formulario.
- Las afirmaciones comerciales, años de experiencia, representaciones y disponibilidad de productos deben provenir de datos aprobados por EAD Oleohidráulica.
- Diseñar mobile-first y comprobar cada feature en móvil, tablet y escritorio.

## No hagas

- No modificar, deformar, recortar, recolorear ni recrear los logos de EAD Oleohidráulica, Hidro-Grubert o Palfinger.
- No inventar proyectos, testimonios, certificaciones, especificaciones técnicas, precios, stock, zonas de cobertura ni relaciones comerciales.
- No presentar la web como tienda en línea, sistema de gestión, portal de clientes o catálogo técnico oficial.
- No añadir una base de datos, autenticación, CMS o dependencia de gran tamaño sin justificarla y recibir aprobación.
- No subir archivos `.env*`, credenciales, claves de analítica ni datos personales al repositorio.
- No usar `any` en TypeScript sin una justificación localizada y documentada.
- No incorporar imágenes de stock que puedan confundirse con trabajos reales del taller.
- No publicar formularios o botones con destinos ficticios; los datos faltantes deben quedar señalados como bloqueo de lanzamiento.
- No habilitar rastreo, cookies no esenciales o scripts de terceros sin consentimiento y documentación.

## Flujo de trabajo

Antes de una tarea no trivial, propón un plan y espera mi OK.
Una tarea a la vez; al terminar, dime qué cambiaste para que lo revise.
Si no estás seguro al 80%, pregunta. No inventes.

## Documentación

- `spec/constitution/mission.md` - propósito, público, principios y límites del producto.
- `spec/constitution/tech-stack.md` - arquitectura, convenciones técnicas y reglas visuales.
- `spec/constitution/roadmap.md` - orden previsto de implementación.
- `spec/features/` - definición, plan y checklist de cada feature antes de tocar código.
