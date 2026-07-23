# 002 · Navegación y layout global — Plan

## Enfoque

Construir el layout con HTML semántico y componentes Astro, utilizando JavaScript mínimo solo para el menú móvil. Los enlaces y grupos de navegación provendrán de `src/data/navigation.ts`, mientras los canales de contacto se resolverán desde `SiteConfig`.

## Implementación

1. Definir rutas y grupos de enlaces en `src/data/navigation.ts`.
2. Implementar `Header.astro`, `DesktopNav.astro`, `MobileNav.astro` y `SkipLink.astro`.
3. Implementar la interacción del menú móvil con gestión de foco, Escape, atributos ARIA y cierre al navegar.
4. Implementar `Footer.astro`, `ContactLinks.astro`, `SocialLinks.astro` y `Breadcrumbs.astro`.
5. Integrar header, `main`, breadcrumbs opcionales y footer en `src/layouts/BaseLayout.astro`.
6. Añadir pruebas Playwright de teclado, estados activos, viewports y enlaces de contacto condicionales.

## Decisiones

- **JavaScript mínimo y localizado** — la navegación principal sigue siendo contenido HTML; se descarta un framework cliente global.
- **CTA primaria a presupuesto** — mantiene una acción consistente en todas las páginas sin competir con el contenido.
- **Datos centralizados** — evita divergencias entre header, footer y páginas de contacto.
- **Footer informativo pero compacto** — ofrece confianza y rutas útiles sin repetir la página de inicio completa.

## Riesgos

- **Menú móvil con foco atrapado o perdido** — cubrir apertura, cierre, Escape y retorno de foco con pruebas automáticas.
- **Demasiados enlaces en pantalla pequeña** — limitar el primer nivel y agrupar enlaces secundarios en el footer.
- **Contacto todavía incompleto** — ocultar canales no configurados y mantener un bloqueo de lanzamiento visible en la configuración.
