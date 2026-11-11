# 015 · Plan técnico

## Enfoque

El tema se resuelve con un atributo `data-theme` en `<html>` y variables CSS. Un script inline en el `<head>` aplica la preferencia antes del primer pintado para evitar parpadeos. Un módulo pequeño administra el botón, la persistencia y el `meta name="theme-color"`.

## Preferencia

- Clave de almacenamiento: `ead-theme`.
- Valores válidos: `light` y `dark`.
- Orden de resolución: preferencia guardada → `prefers-color-scheme` → claro.
- El control se oculta sin JavaScript para no ofrecer una acción inactiva.
- El cambio manual se guarda; si no hay preferencia guardada, los cambios del sistema se reflejan en vivo.

## Sistema visual

- Tokens nuevos para página, superficie, superficie elevada, texto, texto secundario, bordes y grilla.
- El tema claro conserva la paleta y las superficies actuales.
- El tema oscuro usa navy profundo, texto claro, bordes translúcidos y los mismos acentos azul/amarillo.
- Las utilidades de Tailwind usadas en superficies claras se reasignan mediante selectores `[data-theme='dark']`.
- Los botones amarillos, estados de formulario y chips activos conservan texto oscuro para no perder contraste.
- La barra de marcas se mantiene clara para exhibir los logos originales sin alterarlos.
- Los logos EAD del header intercambian entre la variante para fondo claro y la variante para fondo oscuro.
- La sección de marcas de Productos se muestra sobre una superficie clara continua, sin placas individuales detrás de cada logo.

## Componentes

- `BaseLayout`: script de arranque, `meta theme-color` y módulo de tema.
- `Header`: dos variantes de logo EAD y botón de tema.
- `ThemeToggle`: control con iconos sol/luna, `aria-pressed` y etiqueta dinámica.
- `MobileNav`, `Breadcrumbs`, `BrandCard` y estilos globales: adaptaciones de superficie y contraste.

## Riesgos y mitigaciones

- **FOUC:** el script del `<head>` define `data-theme` antes de renderizar el body.
- **Logos:** no se aplican filtros ni transformaciones cromáticas; se alternan archivos originales o se usa una superficie clara continua, sin placas individuales.
- **Contraste:** los acentos y los estados mantienen combinaciones texto/fondo verificadas manualmente.
- **E2E:** el botón no altera los contratos existentes de navegación, formularios ni overflow.
- **Persistencia:** `localStorage` se usa dentro de `try/catch` para navegadores con almacenamiento restringido.

## Validación

`npm run quality`, recorrido visual de las rutas principales en ambos temas, prueba de persistencia, recarga, cambio de sistema, reduced motion, JavaScript desactivado y overflow desktop/móvil.
