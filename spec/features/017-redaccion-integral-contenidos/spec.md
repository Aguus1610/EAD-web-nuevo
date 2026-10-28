# 017 — Redacción integral de contenidos

**Estado:** implementada; verificación completa (28/10/2026)

## Qué hace

Revisa y reescribe todos los textos visibles del sitio: páginas, datos de contenido, etiquetas de interfaz, mensajes del formulario de contacto, metadescripciones y microdatos. Unifica el tono en voseo rioplatense, elimina repeticiones y expande las descripciones, con foco en la página de Empresa, que pasa de tres párrafos genéricos a una presentación completa del taller.

## Por qué

El contenido anterior mezclaba formas de «usted» con voseo, repetía la misma fórmula de servicios en seis lugares y describía el taller con frases mínimas que no aprovechaban la evidencia disponible (fotografías reales, marcas representadas, trayectoria). Los textos cortos y precavidos no comunicaban la capacidad real ni invitaban a consultar.

## Datos confirmados por EAD (28/10/2026)

- **Trayectoria:** «más de 25 años en el rubro» (`siteConfig.yearsExperience` pasa de 15 a 25).
- **Relación con las marcas:** «Servicio técnico oficial de Hidro-Grubert y Palfinger» (reemplaza «Representante oficial»).
- **Instalaciones:** espacio para camiones y grúas montadas, bancos de trabajo y sector de armado, sector de prensado de mangueras de alta presión y diagnóstico con software oficial.
- **Cobertura:** atención en taller y a campo en La Pampa y la región.
- **Especialidades:** grúas articuladas Hidro-Grubert y Palfinger, hidroelevadores, equipos de batea y volcadores, bombas, cilindros y válvulas, comandos y tomas de fuerza, equipos agro e industriales.
- **Garantía:** «garantía sobre el trabajo realizado», con condiciones definidas en el presupuesto.
- **Tono:** voseo rioplatense uniforme («conocé», «escribinos», «podés», «consultá»).
- **Equipo:** se presenta por roles generales, sin nombres (los contactos quedan en la página de contacto).

## Criterios de aceptación

- [x] Todos los textos visibles usan voseo rioplatense de forma uniforme; no quedan formas de «usted» dirigidas al visitante.
- [x] La página de Empresa expande intro, trayectoria, proceso, galería, ubicación y CTA con los datos confirmados, sin agregar componentes ni secciones nuevas.
- [x] Los cuatro servicios describen equipos y componentes reales, alcance y forma de trabajo; los ejemplos de categorías de producto quedan completos.
- [x] La experiencia publicada dice «más de 25 años» y la relación comercial dice «Servicio técnico oficial de Hidro-Grubert y Palfinger».
- [x] El formulario de contacto y sus mensajes de estado y error usan voseo sin cambiar lógica, IDs ni textos aserados por los tests e2e.
- [x] Las metadescripciones de las páginas quedan actualizadas y con longitud razonable.
- [x] No se cambian precios, stock, certificaciones ni datos no confirmados.

## Fuera de alcance

- No se agregan secciones ni componentes nuevos a la página de Empresa.
- No se modifican imágenes, lógica de formulario, enlaces ni estructura técnica.
- No se tocan los textos editoriales internos (validaciones de `content.config.ts` y `_README.md`).

## Verificación

- `npm run quality` completo en verde.
- Revisión visual de Inicio, Empresa, Servicios (índice y fichas), Productos, Trabajos, Contacto y 404 en 390/1024/1440 px.
- Sin desbordes ni textos superpuestos en los encabezados ampliados.
