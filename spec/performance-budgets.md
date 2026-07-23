# Presupuestos de rendimiento

`npm run check:build` bloquea el lanzamiento cuando el build supera estos límites sin comprimir:

| Recurso | Por archivo | Total |
| --- | ---: | ---: |
| JavaScript | 100 KB | 150 KB |
| CSS | 100 KB | 120 KB |
| HTML | 200 KB | 700 KB |
| PNG | 400 KB | 1 MB |
| WebP | 300 KB | 1,5 MB |
| Build completo | — | 2,5 MB |

Los logos conservan sus archivos originales, declaran dimensiones y usan carga diferida fuera del
encabezado. No se descargan fuentes externas ni se carga contenido de terceros automáticamente.
