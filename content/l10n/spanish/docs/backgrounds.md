---
title: "Backgrounds"
draft: false
next: "/docs/ui-elements"
nextTitle: "UI Elements"
---

Cada escena necesita de un fondo que defina como se debe mostrar. Puedes añadir fondos a tu juego incluyendo ficheros PNG al directorio `assets/backgrounds` de tu proyecto.

## Requirimientos

Los ficheros PNG de fondos solo pueden contener estos cuatro colores:

<div><div class="Swatch" style="background:#071821;"></div><div class="SwatchLabel">#071821</div></div>
<div><div class="Swatch" style="background:#306850;"></div><div class="SwatchLabel">#306850</div></div>
<div><div class="Swatch" style="background:#86c06c;"></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style="background:#e0f8cf;"></div><div class="SwatchLabel">#e0f8cf</div></div>

<div class="InfoBox">
Descarga la paleta de colores para los fondo ya preparada para las aplicaciones:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>

Los colores que uses que no coincidan con los cuatro colores indicados se convertiran a los colores permitidos más próximos. A diferencia de los sprites, no se puede usar el color `#65ff00` en los fondos.

Los fondos están dividiso en tilesets de `8px`x `8px` y el tamaño total debe ser múltiplo de `8px` tanto a lo alto como a lo ancho. Un fondo tiene un tamaño mínimo de `160px` x `144px` (el tamaño de la pantalla) y no puede sobrepasar los `256px` x `256px`.

El fondo no puede contener más de **192** tiles únicos de `8px` x `8px` debido a las limitaciones de memoria. Eso quiere decir que aunque uses el tamaño mínimo de pantalla deberías repetir al menos la mitad de los tiles. Donde sea posible repetir tiles en imágenes, se agruparán y reducida el tamaño total del juego. Se recomienda usar un editor de tiles como [Tiled](https://www.mapeditor.org/) para asegurarte de que tus fondos cumplen con el tamaño correcto.
