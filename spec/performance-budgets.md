# Presupuestos de rendimiento

`npm run check:build` bloquea el lanzamiento cuando el build supera estos límites sin comprimir:

| Recurso | Por archivo | Total |
| --- | ---: | ---: |
| JavaScript | 100 KB | 150 KB |
| CSS | 100 KB | 120 KB |
| HTML | 200 KB | 700 KB |
| PNG | 400 KB | 1 MB |
| WebP compartido | 320 KB | 8,5 MB |
| Build compartido (sin archivo de proyectos) | — | 10 MB |
| Archivo de proyectos (assets + páginas) | — | 20 MB |
| Página de proyecto individual | 1,4 MB | — |

Los logos conservan sus archivos originales, declaran dimensiones y usan carga diferida fuera del
encabezado. No se descargan fuentes externas ni se carga contenido de terceros automáticamente.

Los límites de WebP y del build son holgados a propósito: el archivo de proyectos puede crecer sin
comprometer el resto del sitio, y cada ficha individual queda acotada para no degradar la primera carga.