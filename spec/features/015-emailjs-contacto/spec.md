# 015 · Envío de consultas con EmailJS

**Estado:** implementada; envío aceptado por EmailJS, recepción en Gmail pendiente de verificar (28/10/2026)

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

## Direcciones de correo

- `siteConfig.email` (`hydropampa@hotmail.com`) es el correo público que se muestra en el sitio.
- `siteConfig.adminEmail` (`adm201364@gmail.com`) es el destino interno del formulario y se fija en la plantilla de EmailJS. La separación es intencional.
- El navegador no envía el destinatario en `template_params`; `reply_to` sólo define la dirección de respuesta.

## Verificación operativa (28/10/2026)

- Consulta sintética enviada desde `https://aguus1610.github.io/EAD-web-nuevo/contacto/`.
- EmailJS respondió `200 OK` en ~1,7 s y la interfaz mostró el estado de éxito.
- El correo no apareció en `adm201364@gmail.com` según la revisión de EAD.
- Se repitió la prueba con **WhatsApp** como medio de contacto (`reply_to` = Gmail interno); EmailJS también respondió `200 OK` y la recepción sigue pendiente.
- Si la prueba de WhatsApp llega y la de Correo no, revisar si la plantilla usa `{{reply_to}}` como destinatario en lugar de `adm201364@gmail.com`.
- Un `200` sólo confirma que EmailJS aceptó la solicitud; no garantiza la entrega al destinatario.

## Pendiente operativo

- Revisar en el panel de EmailJS **History** el registro de la consulta sintética y el error exacto, si existe.
- Confirmar que el campo **To Email** de la plantilla es `adm201364@gmail.com` (no `{{to_email}}` ni otro marcador vacío).
- Verificar que la plantilla usa las variables documentadas, que el asunto es `{{subject}}` y que Reply-To es `{{reply_to}}`.
- Revisar la conexión del servicio Gmail: si aparece `412`, `insufficient authentication scopes` o `Invalid grant`, desconectar y reconectar la cuenta aceptando “Send email on your behalf”.
- Revisar Spam/All Mail, la lista de Suppressions y la cuota del plan.
- Confirmar la recepción de una nueva consulta sintética antes de cerrar la feature.
