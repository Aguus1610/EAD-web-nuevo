# Tech stack y convenciones

## Tecnologías

- **Lenguaje:** TypeScript en modo estricto, HTML semántico y CSS moderno.
- **Framework / runtime:** Astro ejecutado con Node.js LTS; salida estática para las páginas públicas.
- **Estilos:** Tailwind CSS con tokens propios y una hoja global pequeña para tipografía, accesibilidad y elementos base.
- **Contenido:** colecciones de contenido de Astro y módulos de datos TypeScript validados por esquema.
- **Base de datos:** no aplica en la primera versión; la web no almacena solicitudes ni datos personales.
- **Contacto:** enlaces directos y generación local de mensajes estructurados para WhatsApp, con correo y teléfono como alternativas.
- **Tests:** Vitest para utilidades; Playwright para navegación, formularios, responsive y accesibilidad; auditoría automática con axe cuando corresponda.
- **Despliegue:** build estático en una plataforma compatible con CDN, HTTPS, dominio personalizado y despliegue desde Git.

## Archivos / módulos clave

- `src/data/site.ts` — identidad, ubicación, canales de contacto, redes, horarios, cobertura y datos pendientes de confirmación.
- `src/data/navigation.ts` — navegación principal, enlaces del footer y llamadas a la acción.
- `src/content.config.ts` — esquemas de servicios, trabajos y contenido editorial.
- `src/data/services.ts` — fichas tipadas de servicios publicables.
- `src/content/projects/` — trabajos reales y sus metadatos.
- `src/components/` — componentes presentacionales y de interacción reutilizables.
- `src/layouts/BaseLayout.astro` — documento base, metadatos, header, main y footer.
- `src/lib/contact.ts` — sanitización y construcción de enlaces de WhatsApp, correo y teléfono.
- `src/lib/seo.ts` — títulos, descripciones, canonical, Open Graph y datos estructurados.
- `src/lib/instagram.ts` — contratos y validación pura de respuestas oficiales de Instagram.
- `scripts/import-instagram.ts` — importación local y explícita hacia borradores ignorados.
- `src/styles/global.css` — tokens CSS, estilos base, foco, selección y preferencias de movimiento.
- `public/assets/brand/` — logos entregados por EAD Oleohidráulica.
- `public/assets/projects/` — fotografías optimizadas de trabajos reales.
- `tests/e2e/` — recorridos de navegación, contacto y visualización responsive.

## Comandos

- `npm run dev` — arranca el entorno local.
- `npm run typecheck` — valida TypeScript y plantillas Astro.
- `npm run test` — ejecuta los tests unitarios.
- `npm run test:e2e` — ejecuta Playwright en los viewports definidos.
- `npm run lint` — revisa estilo, tipos y errores estáticos.
- `npm run format:check` — comprueba el formato sin modificar archivos.
- `npm run build` — compila la salida de producción.
- `npm run preview` — inspecciona localmente el build.
- `npm run instagram:import -- <url>` — prepara un borrador privado desde una publicación seleccionada cuando exista acceso oficial.

## Modelo de datos / dominio

- `SiteConfig` — nombre comercial, descripción, domicilio, localidad, provincia, país, coordenadas opcionales, horario, correo, teléfono, WhatsApp, Instagram y área de servicio. Los campos críticos de lanzamiento no pueden quedar vacíos.
- `Service` — identificador, título, resumen, problema que resuelve, capacidades, proceso, aplicaciones, imagen opcional, orden y llamada a la acción.
- `ProductCategory` — categoría, descripción, ejemplos aprobados, marcas asociadas y leyenda de disponibilidad bajo consulta.
- `Brand` — nombre, logo, texto de relación comercial aprobado, URL oficial opcional y reglas de presentación.
- `Project` — slug, título, fecha, categoría, equipo, problema inicial, intervención, resultado, narrativa, medios locales, fuente opcional, destacado y autorización de publicación.
- `QuoteRequest` — estructura temporal en el navegador con nombre, empresa opcional, localidad, medio de contacto, tipo de equipo, marca/modelo opcionales, necesidad, urgencia y consentimiento. No se persiste en la web; Formspree la procesa cuando el usuario solicita el envío por correo.
- `SeoMeta` — título, descripción, imagen social, canonical, indexación y datos estructurados por página.

## Convenciones

- Componentes en `PascalCase`; variables, utilidades y propiedades en `camelCase`; slugs en `kebab-case`.
- Una sola fuente de verdad para contactos, dirección, horarios, nombres de marcas y textos legales.
- Contenido visible en español; nombres de API y código en inglés cuando mejoren consistencia técnica.
- Cada página debe tener un único `h1`, orden jerárquico de encabezados y regiones semánticas claras.
- Toda imagen informativa requiere `alt`; las decorativas usan `alt=""` y no duplican información accesible.
- Los formularios validan en cliente, muestran errores junto al campo, preservan los datos ante fallos y nunca bloquean el acceso a WhatsApp o correo.
- Las tarjetas repetidas se generan desde datos o contenido; no se duplican manualmente en distintas páginas.
- Las URLs públicas son legibles, estables y sin parámetros innecesarios.
- Toda feature debe incluir criterios de aceptación, pruebas o una validación manual documentada.
- Antes de publicar, revisar ortografía, afirmaciones comerciales, derechos de uso de imágenes y datos de contacto.

## Estilo visual

- **Paleta base:** azul noche industrial, azul acero, blanco, grises neutros y dorado técnico como acento controlado.
- **Marcas asociadas:** los colores oficiales de Hidro-Grubert y Palfinger aparecen solo en sus logos y contextos de marca; no se fuerzan sobre toda la identidad de EAD.
- **Logos EAD:** usar la versión blanca sobre fondos oscuros y la versión negra sobre fondos claros; conservar área de seguridad y proporción.
- **Tipografías:** una sans serif robusta para títulos y una sans serif altamente legible para texto; usar fuentes locales o del sistema cuando sea posible.
- **Layout:** ancho de lectura controlado, grillas fluidas, espacios amplios, bordes discretos y jerarquía visual clara.
- **Responsive:** mobile-first; puntos de control mínimos en 360 px, 768 px, 1024 px y 1440 px.
- **Movimiento:** transiciones breves y funcionales; respetar `prefers-reduced-motion` y evitar animaciones que retrasen la lectura.
- **Fotografía:** imágenes reales, nítidas y consistentes; no deformar equipos ni aplicar filtros que oculten el estado del trabajo.

## Límites duros

- No cambiar ni recrear los logos suministrados; deben utilizarse como archivos originales.
- No afirmar “representante oficial”, “servicio oficial”, garantía o exclusividad con una redacción distinta de la aprobada por el responsable del negocio.
- No inventar especificaciones, modelos, capacidades de carga, precios, disponibilidad o resultados técnicos.
- No cargar datos personales de clientes, matrículas, patentes o información sensible en proyectos públicos sin autorización.
- No añadir cookies, píxeles, mapas embebidos, videos externos o analítica invasiva por defecto.
- No almacenar solicitudes de presupuesto en `localStorage`, archivos públicos o servicios no aprobados.
- No incluir secretos en código cliente ni en el repositorio.
- No consultar Instagram durante el build ni conservar URLs de su CDN como assets públicos.
- No instalar dependencias para resolver algo que Astro, TypeScript o CSS nativo resuelven de forma simple.
- No aceptar un build con errores de tipos, enlaces rotos, destinos de contacto vacíos o fallas críticas de accesibilidad.
