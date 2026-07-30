# 012 · Importación oficial de Instagram para portfolio

**Estado:** infraestructura implementada; activación pendiente de acceso oficial y trabajos aprobados

## Qué hace

Prepara un flujo local para obtener publicaciones seleccionadas de la cuenta profesional de EAD mediante la API oficial de Instagram. Convierte fotos, carruseles y portadas de video en borradores editoriales privados, sin publicar automáticamente ni introducir dependencias de Meta en el build estático.

## Por qué

Las publicaciones existentes pueden servir como fuente documental para el portfolio, pero sus URLs de medios no son una base estable y sus textos no siempre contienen todos los hechos técnicos requeridos. La importación separa obtención, revisión y publicación.

## Criterios de aceptación de infraestructura

- [x] La API no se consulta durante `astro build`, CI ni la navegación pública.
- [x] El token sólo se lee desde variables de entorno locales ignoradas por Git.
- [x] El importador acepta enlaces seleccionados y valida que pertenezcan a Instagram.
- [x] El importador confirma que el token corresponda al usuario esperado.
- [x] Fotos y portadas se descargan y optimizan como WebP dentro de `.sync-temp`.
- [x] Carruseles conservan el orden de sus elementos.
- [x] Los borradores se crean con aprobación, privacidad, alt y hechos técnicos pendientes.
- [x] Ningún borrador modifica automáticamente contenido o assets públicos.
- [x] El esquema de proyectos conserva trazabilidad de la publicación original.
- [x] Las fichas admiten portada, fecha, narrativa Markdown, captions y Reel opcional.
- [x] Un Reel no contacta a Instagram hasta que el visitante solicita cargarlo.
- [x] Los presupuestos distinguen recursos compartidos del archivo de proyectos.

## Pendiente para activar

- Obtener un token oficial con `instagram_business_basic`.
- Seleccionar e importar publicaciones reales.
- Confirmar hechos técnicos, privacidad, alt y autorización de cada trabajo.
- Publicar únicamente los Markdown y assets aprobados.

## Fuera de alcance

- No se scrapea el sitio público de Instagram.
- No se sincronizan publicaciones automáticamente ni se escribe sobre `main`.
- No se publican likes, comentarios, métricas o datos de seguidores.
- No se descargan ni alojan videos completos en esta etapa.
- No se inventan fallas, intervenciones, resultados o datos de equipos.
