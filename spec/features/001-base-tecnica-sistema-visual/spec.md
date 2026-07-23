# 001 · Base técnica y sistema visual

**Estado:** implementada

## Qué hace

Prepara un proyecto Astro tipado y mantenible con estructura de carpetas, configuración de calidad, datos globales, sistema de diseño inicial y carga correcta de los logos suministrados. La feature entrega una base navegable mínima que permite implementar las páginas siguientes sin duplicar decisiones técnicas o visuales.

## Por qué

La web necesita una arquitectura predecible antes de sumar contenido comercial. Definir desde el comienzo tipos, tokens, assets, validaciones y comandos reduce errores, evita inconsistencias y permite que cada nueva sección respete la identidad de EAD Oleohidráulica.

## Criterios de aceptación

- [ ] El proyecto arranca con `npm run dev` y compila con `npm run build` sin errores ni advertencias críticas.
- [ ] TypeScript está configurado en modo estricto y `npm run typecheck` finaliza correctamente.
- [ ] Existen scripts funcionales de lint, formato, tests unitarios, build y preview.
- [ ] La estructura definida en `constitution/tech-stack.md` existe y tiene responsabilidades claras.
- [ ] Los cuatro logos PNG suministrados están disponibles en `public/assets/brand/` con nombres estables y sin modificaciones visuales.
- [ ] Los tokens de color, tipografía, espaciado, bordes, sombras y ancho de contenido están centralizados.
- [ ] Existe una página mínima de verificación que muestra variantes de logo, tipografía, botones, enlaces, foco y contenedores en móvil y escritorio.
- [ ] Los datos globales del negocio se leen desde un módulo tipado y los campos de contacto todavía faltantes están marcados explícitamente.
- [ ] No se ha añadido base de datos, autenticación, CMS, analítica ni scripts de terceros.

## Fuera de alcance

- La navegación final, el footer comercial y las páginas completas se implementan en features posteriores.
- No se redactan todavía fichas definitivas de servicios, productos o proyectos.
- No se resuelven dominios, formularios, mapas ni despliegue de producción.
