# Proyectos

Cada trabajo aprobado se agrega como `slug-descriptivo.md`. Las imágenes se guardan en
`public/assets/projects/<slug>/` con nombres descriptivos en minúsculas y formato optimizado.

Antes de publicar:

- Confirmar `publicationApproved: true` con el responsable de EAD.
- Revisar rostros, patentes, documentos, nombres y marcas de clientes.
- Escribir un texto alternativo específico para cada imagen.
- Usar únicamente slugs de `src/data/services.ts` en `relatedServices`.

Plantilla de frontmatter:

```yaml
---
title: ""
category: ""
date: "YYYY-MM-DD"
summary: ""
equipment: ""
problem: ""
intervention: ""
result: ""
images:
  - src: "/assets/projects/slug/imagen.webp"
    alt: ""
relatedServices: []
featured: false
publicationApproved: false
---
```
