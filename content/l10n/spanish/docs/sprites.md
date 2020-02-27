---
title: "Sprites"
draft: false
next: "/docs/backgrounds"
nextTitle: "Backgrounds"
---

Los sprites son gráficos usados para personajes u objetos del juego. Para añadir sprites debes incluir los ficheros PNG en el directorio assets/sprites.

## Requisitos

Los sprites deben ser imágenes en formato PNG de solo cuatro colores:

<div><div class="Swatch" style="background:#071821;"></div><div class="SwatchLabel">#071821</div></div>
<div><div class="Swatch" style="background:#86c06c;"></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style="background:#e0f8cf;"></div><div class="SwatchLabel">#e0f8cf</div></div>
<div><div class="Swatch" style="background:#65ff00;"></div><div class="SwatchLabel">#65ff00</div></div>

<div class="InfoBox">
Descarga la paleta de cuatro colores para:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>


El color #65ff00 se usa para representar el color transparente y sera invisible sobre el fondo. Esto se puede comprobar directamente en el proyecto al usar ese sprite en cualquier personaje u objeto.

Si en la imagen existe algún color que no coincide con los cuatro códigos hexadecimales descritos más arriba, se usará el color más cercano. A diferencia de los fondos, el color #306850 no puede ser usado en sprites.

Un sprite consiste en uno o más frames de '16px' x '16px' ordenados en una fila. Un sprite con un solo frame tendrá el tamaño de '16px' x '16px' y uno con tres frames tendrá el tamaño de '48px' x '16px'.

## Sprites estáticos

Para sprites que solo necesitan un solo frame (como un poste o cartel) crea un fichero PNG de '16px' x '16px' como el siguiente:

<img src="/img/sprites/cat.png" class="HelpSprite" />

## Sprites animados

Si quieres que un sprite tenga una animación puedes hacer una imagen de dos frames de '32px' x '16px' hasta una de 25 frames de '400px' x '16px'. Si usas ese sprite en un actor podrás seleccionar el frame que quieres mostrar por defecto y configurar una velocidad entre frames.

<img src="/img/sprites/fire.png" class="HelpSprite" />

## Actor

Para crear un sprite para mirar en las cuatro direcciones, crea una imagen de '48px' x '16px' donde el primer frame mire hacia abajo, el segundo arriba y el tercero a la derecha. La cuarta dirección la genera GB Studio reflejando el tercer frame para que mire a la izquierda y no tiene porque ser creada en el sprite.

<img src="/img/sprites/npc001.png" class="HelpSprite" />

## Actor animado

Si quieres usar un sprite con movimiento que sea usado en un personaje debes crear una imagen de '96px' x '16px' con seis frames. Dos mirando abajo, dos arriba y dos a la derecha.

Debes tener en cuenta el límite de 25 frames. Si no usas animaciones intenta ahorrar frames usando sprites estáticos.

<img src="/img/sprites/player.png" class="HelpSprite" />
