# 008 · Contacto y solicitud de presupuesto

**Estado:** implementada

## Qué hace

Crea una página de contacto y un formulario guiado que organiza la consulta del cliente y genera un mensaje estructurado para WhatsApp sin almacenar datos en la web. También ofrece teléfono, correo, Instagram, dirección, horario y enlace externo de ubicación cuando esos datos estén confirmados.

## Por qué

El objetivo comercial principal es recibir consultas útiles. Pedir la información adecuada desde el comienzo reduce intercambios innecesarios y permite que el visitante elija el canal que le resulte más cómodo.

## Criterios de aceptación

- [ ] La página muestra únicamente datos de contacto confirmados y centralizados.
- [ ] El formulario solicita nombre, localidad, medio de contacto, tipo de equipo o producto, necesidad y descripción; empresa, marca, modelo y urgencia son opcionales.
- [ ] Los campos obligatorios tienen etiqueta, ayuda, validación y mensaje de error accesible.
- [ ] Al enviar, se genera un enlace de WhatsApp con mensaje legible, codificado y sin perder los datos ingresados.
- [ ] Si WhatsApp no está configurado, el usuario conserva alternativas de teléfono o correo y el formulario no simula un envío exitoso.
- [ ] El formulario informa que la solicitud no constituye diagnóstico, aceptación del trabajo ni presupuesto definitivo.
- [ ] La web no persiste la solicitud en base de datos, `localStorage`, analítica ni servicios externos.
- [ ] La dirección dispone de un enlace explícito “Abrir ubicación” y no carga un mapa de terceros automáticamente.
- [ ] Los botones de teléfono, correo, WhatsApp e Instagram tienen nombres accesibles y destinos válidos.
- [ ] El recorrido completo funciona con teclado y en móvil sin zoom forzado ni campos fuera de pantalla.

## Fuera de alcance

- No se envían correos desde backend ni se almacenan leads en un CRM.
- No se suben fotografías o archivos desde el formulario en la primera versión; se invita a enviarlos por el canal elegido.
- No se calculan precios, plazos, compatibilidad ni disponibilidad automáticamente.
