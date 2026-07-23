# 008 · Contacto y solicitud de presupuesto — Plan

## Enfoque

Implementar un formulario cliente con validación tipada y generación de URL de WhatsApp. Mantener siempre canales alternativos y no presentar la apertura de una aplicación externa como un envío confirmado. La ubicación se abrirá mediante un enlace externo explícito para proteger rendimiento y privacidad.

## Implementación

1. Completar y validar los campos críticos de `src/data/site.ts` antes del lanzamiento.
2. Definir `QuoteRequest` y validadores puros en `src/lib/contact.ts`.
3. Implementar `ContactCard.astro`, `BusinessHours.astro`, `LocationLink.astro` y el componente interactivo `QuoteForm`.
4. Crear `src/pages/contacto.astro` con introducción, canales, formulario, aclaraciones y ubicación.
5. Generar mensajes contextualizados por origen, servicio, producto o proyecto cuando esos parámetros existan.
6. Implementar estados de validación, apertura de WhatsApp, copia de mensaje y fallback de correo.
7. Añadir tests unitarios de codificación y Playwright para teclado, errores, móvil y destinos reales.

## Decisiones

- **WhatsApp como transferencia, no como backend** — evita almacenar datos y utiliza un canal comercial habitual.
- **Sin carga automática de mapa** — mejora privacidad y rendimiento; el usuario decide abrir el proveedor externo.
- **Fallback visible** — ningún fallo de una aplicación externa debe dejar al visitante sin forma de contacto.
- **Campos breves y relevantes** — se descarta un formulario técnico extenso que aumente abandono.

## Riesgos

- **Número de WhatsApp no confirmado** — tratarlo como bloqueo de producción y no renderizar enlaces inválidos.
- **Mensajes demasiado largos** — limitar campos, resumir etiquetas y probar URLs en navegadores móviles.
- **Confusión entre solicitud y presupuesto** — incluir aclaración visible antes del envío y en el mensaje generado.
