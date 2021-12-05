---
title: "Sprites"
draft: false
next: "/docs/backgrounds"
nextTitle: "Backgrounds"
---

Sprites are the graphics used by playable or interactive characters in your scenes. Add sprites to your game by including PNG files in your project's `assets/sprites` folder.

## Requirements

Sprite PNGs must only contain the following four colors:

<div><div class="Swatch" style="background:#071821;"></div><div class="SwatchLabel">#071821</div></div>
<div><div class="Swatch" style="background:#86c06c;"></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style="background:#e0f8cf;"></div><div class="SwatchLabel">#e0f8cf</div></div>
<div><div class="Swatch" style="background:#65ff00;"></div><div class="SwatchLabel">#65ff00</div></div>

<div class="InfoBox">
Download the GB Studio Palette Swatches for:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>

The color `#65ff00` is used to represent a transparent background in game and will be invisible in-game and in the _World Editor_.

Colors that are not one of the above hex codes will be matched to the nearest color. Unlike backgrounds, the color `#306850` can not be used in sprites.
