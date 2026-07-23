# 002 · Navegación y layout global

**Estado:** implementada

## Qué hace

Crea la estructura común de todas las páginas: encabezado, navegación de escritorio y móvil, acceso rápido a presupuesto, pie de página, enlace para saltar al contenido, migas de pan cuando correspondan y estados accesibles de navegación.

## Por qué

Los visitantes deben comprender de inmediato dónde están, qué ofrece el taller y cómo contactarlo. Una navegación consistente reduce fricción, mejora la experiencia móvil y evita que cada página implemente sus propios patrones.

## Criterios de aceptación

- [x] El header muestra el logo adecuado según el fondo, enlaces principales y una llamada a la acción visible.
- [x] La navegación móvil puede abrirse, cerrarse y recorrerse completamente con teclado.
- [x] El menú informa de manera accesible su estado expandido y devuelve el foco de forma predecible.
- [x] El enlace "Saltar al contenido" aparece al recibir foco y conduce al `main`.
- [x] El footer incluye identidad, navegación, servicios principales, datos confirmados, redes y una leyenda comercial prudente.
- [x] Los enlaces activos se distinguen sin depender únicamente del color.
- [x] Ningún enlace de contacto se renderiza si su dato correspondiente está vacío.
- [x] Header y footer funcionan sin superposición ni desbordes desde 360 px hasta 1440 px.
- [x] La navegación permanece utilizable con JavaScript deshabilitado, excepto la mejora del menú móvil.

## Fuera de alcance

- El contenido detallado de las páginas se desarrolla en features posteriores.
- No se implementa buscador interno ni mega menú.
- No se añade barra promocional, chat flotante de terceros ni selector de idioma.
