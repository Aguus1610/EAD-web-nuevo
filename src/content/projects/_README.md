# Proyectos

Cada trabajo aprobado se agrega como `slug-descriptivo.md`. Las imágenes se guardan en
`public/assets/projects/<slug>/` con nombres descriptivos en minúsculas y formato optimizado.

Antes de publicar:

- Confirmar `publicationApproved: true` con el responsable de EAD.
- Revisar rostros, patentes, documentos, nombres y marcas de clientes.
- Escribir un texto alternativo específico para cada imagen.
- Usar únicamente slugs de `src/data/services.ts` en `relatedServices`.
- Si el origen es Instagram, importar primero con `npm run instagram:import -- <url>` y revisar el borrador ignorado en `.sync-temp/instagram-drafts/`.
- No copiar URLs de `media_url`, `thumbnail_url`, CDN de Instagram o Facebook al contenido público.
- Confirmar hechos técnicos, privacidad y textos alternativos antes de mover assets a `public/assets/projects/<slug>/`.

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
    width: 1200
    height: 800
    caption: ""
    position: "50% 50%"
reel:
  permalink: "https://www.instagram.com/reel/SHORTCODE/"
  cover:
    src: "/assets/projects/slug/reel-cover.webp"
    alt: ""
    width: 1080
    height: 1350
source:
  platform: "instagram"
  mediaId: ""
  shortcode: ""
  permalink: "https://www.instagram.com/p/SHORTCODE/"
  publishedAt: "YYYY-MM-DDTHH:mm:ss.sssZ"
  mediaType: "CAROUSEL_ALBUM"
  caption: |-
    Texto original de la publicación.
relatedServices: []
featured: false
publicationApproved: false
---

Descripción editorial ampliada del trabajo. Debe distinguir hechos confirmados de contexto general.
```

Los bloques `source` y `reel` son opcionales. Ningún archivo con `publicationApproved: false` debe incorporarse a esta colección; los borradores permanecen en `.sync-temp` hasta completar la revisión.
