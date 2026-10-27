# 015 · Envío de consultas con EmailJS

**Estado:** implementada; verificación operativa pendiente

## Qué hace

Reemplaza el endpoint de Formspree por EmailJS para entregar por correo las consultas del formulario de presupuesto. El sitio envía el servicio, la plantilla y la clave pública desde el navegador; no hay backend propio ni claves privadas en el repositorio.

## Por qué

EAD necesitaba un canal de correo propio, con una plantilla controlada por el negocio y sin depender de la cuenta de Formspree. EmailJS permite mantener el sitio estático en GitHub Pages y conservar los canales alternativos de WhatsApp, teléfono y correo directo.

## Criterios de aceptación

- [x] El formulario envía `service_id`, `template_id` y `user_id` (clave pública) a EmailJS mediante el SDK oficial.
- [x] La configuración pública vive en `src/data/site.ts`; no se versiona ninguna clave privada.
- [x] La plantilla recibe asunto, nombre, localidad, empresa, medio de contacto, dato de contacto, equipo, necesidad, marca, modelo, número de pieza, urgencia, descripción, Reply-To y mensaje completo.
- [x] Los campos opcionales vacíos se completan con “No informada/No informado” para evitar condicionales en la plantilla.
- [x] Los valores ingresados por el usuario se escapan antes de enviarse a la plantilla HTML.
- [x] Sólo se informa éxito después de una respuesta 2xx de EmailJS.
- [x] Los errores 400/422, 401/403/451, 429, 5xx, timeout y fallo de red muestran mensajes distintos y preservan el borrador.
- [x] Sin JavaScript no se simula el envío por correo; se ofrecen WhatsApp, correo directo y teléfono.
- [x] Los tests bloquean `api.emailjs.com` y cubren éxito, errores, timeout, red y fallback sin JavaScript.
- [x] La web no persiste la consulta en base propia, `localStorage` ni analítica.
- [x] La interfaz informa que EmailJS procesa la consulta para entregarla por correo.

## Variables de plantilla

| Variable | Contenido |
| --- | --- |
| `subject` | Asunto generado por el sitio |
| `name` | Nombre |
| `locality` | Localidad |
| `company` | Empresa o “No informada” |
| `contact_method` | WhatsApp, Teléfono o Correo |
| `contact_detail` | Teléfono o correo para responder |
| `equipment_type` | Equipo o producto |
| `need` | Necesidad principal |
| `brand` | Marca o “No informada” |
| `model` | Modelo o “No informado” |
| `part_number` | Número de pieza o “No informado” |
| `urgency` | Urgencia o “Sin especificar” |
| `description` | Descripción |
| `reply_to` | Correo para Reply-To |
| `message` | Mensaje completo en texto plano |

La plantilla debe usar `{{subject}}` como asunto, `{{reply_to}}` como Reply-To y el destino fijo `adm201364@gmail.com` en el panel. Los campos opcionales nunca llegan vacíos.

## Fuera de alcance

- No se mantiene un backend propio ni un CRM.
- No se adjuntan archivos desde el formulario.
- No se configura captcha adicional; EmailJS aplica sus controles del lado del servicio.
- No se afirma entrega en la bandeja del destinatario: sólo aceptación por parte de EmailJS.

## Pendiente operativo

- Confirmar en el panel de EmailJS que el destino es `adm201364@gmail.com`.
- Verificar que la plantilla usa las variables documentadas y que el asunto es `{{subject}}`.
- Autorizar los orígenes del sitio en EmailJS (producción y desarrollo local si corresponde).
- Realizar una consulta sintética y confirmar su recepción.
