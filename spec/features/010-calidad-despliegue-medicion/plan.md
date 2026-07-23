# 010 · Calidad, despliegue y medición — Plan

## Enfoque

Consolidar la calidad en scripts reproducibles y CI. Auditar primero sin analítica y habilitar una solución privacy-first únicamente después de aprobar objetivos, proveedor y aviso correspondiente. El despliegue debe ser estático, reversible y verificar automáticamente los bloqueos comerciales definidos.

## Implementación

1. Completar suites Vitest y Playwright para utilidades, contenido, navegación, formularios y viewports.
2. Incorporar auditoría de accesibilidad y revisión manual documentada en `tests/` o checklist de release.
3. Definir presupuestos de imágenes, fuentes, JavaScript y estabilidad visual; optimizar componentes según resultados.
4. Crear workflow de CI para instalar con lockfile, ejecutar typecheck, lint, tests y build.
5. Configurar entorno de preview y producción con dominio, HTTPS, redirects, headers y cache adecuados.
6. Implementar un script de validación de lanzamiento para datos críticos, autorizaciones y destinos.
7. Evaluar e integrar analítica privacy-first con eventos mínimos, sin capturar parámetros sensibles ni contenido del formulario.
8. Documentar publicación, verificación, rollback y mantenimiento recurrente.

## Decisiones

- **CI como puerta de entrada** — evita desplegar cambios que no pasen las mismas validaciones locales.
- **Analítica opcional y posterior** — la web funciona plenamente sin rastreo; se descartan scripts invasivos por defecto.
- **Presupuestos de rendimiento** — permiten tomar decisiones objetivas sobre imágenes y JavaScript.
- **Validación comercial además de técnica** — un build correcto no debe publicar datos incompletos o material no autorizado.

## Riesgos

- **Auditorías verdes pero experiencia deficiente** — combinar automatización con revisión manual en dispositivos reales.
- **Scripts de terceros degradan privacidad o velocidad** — medir impacto y retirar cualquier proveedor que exceda el valor aportado.
- **Configuración de producción divergente** — usar variables tipadas, previews y un checklist repetible.
