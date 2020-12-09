---
title: "Backgrounds"
draft: false
next: "/docs/ui-elements"
nextTitle: "UI Elements"
---

Each of your scenes requires a background image that defines how that scene should look. You can add backgrounds to your game by including PNG files in your project's `assets/backgrounds` folder.

## Color Requirements

Background PNGs must only contain the following four colors:

<div><div class="Swatch" style="background:#071821;"></div><div class="SwatchLabel">#071821</div></div>
<div><div class="Swatch" style="background:#306850;"></div><div class="SwatchLabel">#306850</div></div>
<div><div class="Swatch" style="background:#86c06c;"></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style="background:#e0f8cf;"></div><div class="SwatchLabel">#e0f8cf</div></div>

<div class="InfoBox">
Download the GB Studio Palette Swatches for:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>

Colors that are not one of the above hex codes will be matched to the nearest color. Unlike sprites, the color `#65ff00` can not be used in backgrounds.

## Size Requirements

- Backgrounds are divided into `8px`x `8px` tilesets so the total image size must be a multiple of `8px` in both width and height.
- A background has a minimum size of `160px` x `144px` (the GB screen size)
- Both the width and height of a background must be less than or equal to `2040px`.
- The width of the image multiplied by the height must be less than or equal to `1,048,320`. For example an image with the width `2016px` will have a max height of `520px` (because `2016 * 520 = 1048320`)

## Tile Requirements

An image can contain no more than **192** unique `8px` x `8px` tiles at once due to memory limits. This means that even using the smallest background size possible you must repeat about half of your tiles. Where possible repeat tiles between images as they will be grouped together saving on total game size. It is recommended to use a tile map editor such as [Tiled](https://www.mapeditor.org/) to ensure your backgrounds conform to the pixel grid.
