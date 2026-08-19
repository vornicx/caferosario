# Archic QA — Café Rosario V19

## Build / hard gates
- `npm run check`: PASS
- `npm run build`: PASS
- 4 rutas generadas: PASS
- Rutas internas válidas: PASS
- Assets `/media/*` referenciados existen: PASS
- Dominio de producción inventado: NO
- Carta: HTML real; no usa la foto del menú en interfaz
- Logo: recurso limpio derivado del material original del negocio
- `prefers-reduced-motion`: presente

## Browser QA
Render local aislado en Chromium/Playwright, con assets locales embebidos y el iframe externo de Maps sustituido sólo durante la captura.

- Home desktop 1440 px: overflow 0 px; imágenes rotas 0; errores consola 0
- Home mobile 390 px: overflow 0 px; imágenes rotas 0; errores consola 0
- Carta desktop 1440 px: overflow 0 px; imágenes rotas 0; errores consola 0
- Carta mobile 390 px: overflow 0 px; imágenes rotas 0; errores consola 0
- Selector “momentos del día”: PASS
- Menú móvil abrir/cerrar + Escape: PASS

## Criterio Archic aplicado
La V19 prioriza especificidad del negocio sobre apariencia de lujo genérica. La mejora principal frente a V17/V18 es una dirección visual más viva: menos módulos tipo card, mayor jerarquía, hero fotográfico, categorías en franjas editoriales, carta previa útil y branding integrado sin repetir imágenes.

## Media provisional
Cinco fotografías son **concept media representativa** para validar la propuesta comercial: desayuno, ambiente social, interior, merienda y smoothies. No se presentan como fotografías reales del negocio. Si el cliente aprueba la dirección, cada slot se sustituirá por una fotografía propia equivalente realizada para Rosario.

La fotografía `rosario-real-original.jpg` sí corresponde al negocio y se mantiene como referencia real en Visítanos.

## Limitación honesta
La dirección puede considerarse client-ready como concepto, pero el nivel flagship final de fotografía/media queda pendiente de una sesión propia de 6–10 imágenes originales. La arquitectura y el sistema visual están preparados para sustituir los concept assets sin rediseñar el proyecto.
