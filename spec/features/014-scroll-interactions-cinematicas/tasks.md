# 014 · Tareas

- [x] 1. Documentar la feature y su plan técnico.
- [x] 2. Ampliar `motion.ts` con salida de hero, scrub, índices, footer y progreso por `clip-path`.
- [x] 3. Implementar interacciones de puntero: foco, arrastre de imágenes y botones magnéticos.
- [x] 4. Actualizar estilos de hero, títulos, galería, servicios, navegación y footer.
- [x] 5. Marcar componentes con los atributos `data-*` necesarios.
- [x] 6. Verificar reduced motion, fallback sin JS y overflow horizontal.
- [x] 7. Ejecutar `npm run quality` y revisar capturas desktop/móvil.

## Validación manual

- Desktop 1440 × 900 y Pixel 5: hero, servicios, galería, contacto, menú móvil y footer revisados.
- `prefers-reduced-motion`: sin `motion-ready`, contenido visible y sin desplazamientos ligados al scroll.
- JavaScript desactivado: contenido y formulario visibles.
- Sin overflow horizontal en reposo ni durante el scroll.
- E2E: 56 aprobados y 2 omitidos.
