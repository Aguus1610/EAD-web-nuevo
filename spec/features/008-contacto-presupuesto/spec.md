# 008 · Contacto y solicitud de presupuesto

**Estado:** implementada; verificación operativa pendiente

## Qué hace

Crea una página de contacto y un formulario guiado que organiza la consulta del cliente y la envía por correo mediante Formspree. También permite transferir el mensaje a WhatsApp y ofrece teléfono, correo, Instagram, dirección, horario y enlace externo de ubicación cuando esos datos estén confirmados.

## Por qué

El objetivo comercial principal es recibir consultas útiles. Pedir la información adecuada desde el comienzo reduce intercambios innecesarios y permite que el visitante elija el canal que le resulte más cómodo.

## Criterios de aceptación

- [x] La página muestra únicamente datos de contacto confirmados y centralizados.
- [x] El formulario solicita nombre, localidad, medio de contacto, tipo de equipo o producto, necesidad y descripción; empresa, marca, modelo y urgencia son opcionales.
- [x] Los campos obligatorios tienen etiqueta, ayuda, validación y mensaje de error accesible.
- [x] Al enviar, la consulta se entrega al endpoint confirmado de Formspree y sólo se informa éxito después de una respuesta válida del servicio.
- [x] El usuario puede abrir en WhatsApp un mensaje legible, codificado y sin perder los datos ingresados.
- [x] Si Formspree o WhatsApp no están disponibles, el usuario conserva alternativas de teléfono o correo y el formulario no simula un envío exitoso.
- [x] El formulario informa que la solicitud no constituye diagnóstico, aceptación del trabajo ni presupuesto definitivo.
- [x] La notificación usa un asunto identificable y un mensaje de texto estructurado, sin depender de plantillas HTML no disponibles en Formspree Free.
- [x] La web no persiste la solicitud en una base propia, `localStorage` ni analítica, e informa que Formspree procesa y puede almacenar la consulta para entregarla por correo.
- [x] La dirección dispone de un enlace explícito “Abrir ubicación” y no carga un mapa de terceros automáticamente.
- [x] Los botones de teléfono, correo, WhatsApp e Instagram tienen nombres accesibles y destinos válidos.
- [x] El recorrido completo funciona con teclado y en móvil sin zoom forzado ni campos fuera de pantalla.

## Fuera de alcance

- No se mantiene un backend propio ni se almacenan leads en un CRM administrado por EAD.
- No se suben fotografías o archivos desde el formulario en la primera versión; se invita a enviarlos por el canal elegido.
- No se calculan precios, plazos, compatibilidad ni disponibilidad automáticamente.
