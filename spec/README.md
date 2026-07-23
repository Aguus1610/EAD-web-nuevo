# spec/ — EAD Oleohidráulica

> Documentación de desarrollo dirigido por especificación para el sitio institucional y comercial de EAD Oleohidráulica. Primero se valida la especificación, luego el plan, después las tareas y solo entonces se modifica el código.
>
> **Cómo usar esta documentación:** la carpeta `constitution/` fija las reglas estables del proyecto. Cada carpeta de `features/` representa una capacidad entregable y contiene su alcance, enfoque técnico y checklist. No se implementa una feature sin revisar sus tres archivos.

## Estructura

```
spec/
├── constitution/
│   ├── mission.md
│   ├── tech-stack.md
│   └── roadmap.md
└── features/
    ├── 001-base-tecnica-sistema-visual/
    ├── 002-navegacion-layout-global/
    ├── 003-pagina-inicio-conversion/
    ├── 004-empresa-confianza/
    ├── 005-servicios-oleohidraulicos/
    ├── 006-productos-marcas/
    ├── 007-portfolio-trabajos/
    ├── 008-contacto-presupuesto/
    ├── 009-seo-local-contenido/
    └── 010-calidad-despliegue-medicion/
```

La constitución manda: si una feature contradice la misión, los límites comerciales, la arquitectura o las reglas de marca, se replantea la feature y no se ignora la constitución.

## Flujo para una feature nueva

1. Crear `features/NNN-nombre-feature/` con el siguiente número libre.
2. Escribir o actualizar `spec.md` con el comportamiento visible y criterios verificables.
3. Escribir `plan.md` con el enfoque técnico, archivos afectados, decisiones y riesgos.
4. Desglosar el trabajo en `tasks.md` y ejecutar una tarea concreta por vez.
5. Validar lint, tipos, tests, build, responsive y accesibilidad según corresponda.
6. Revisar el resultado con EAD Oleohidráulica antes de marcar la feature como implementada.
7. Actualizar `constitution/roadmap.md` y conservar trazabilidad entre spec, código y pruebas.

> Cualquier información comercial todavía no confirmada debe permanecer centralizada como dato pendiente y nunca convertirse en texto público inventado.
