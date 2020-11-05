---
title: "Palettes"
draft: false
next: "/docs/music"
nextTitle: "Music"
---
By default, all GB Studio projects are limited to display in 4 different shades of green. To enable color mode, go to _Settings_ and click _Enable Color Mode_.

![GB Color mode enabled in Settings window]()

Enabling color mode remaps the default shades of green to 4 new colors in a palette.

Lightest
<div><div class="Swatch" style="background:#e0f8cf;"></div><div class="SwatchLabel">#e0f8cf</div></div>
<div><div class="Swatch" style="background:#86c06c;"></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style="background:#306850;"></div><div class="SwatchLabel">#306850</div></div>
<div><div class="Swatch" style="background:#071821;"></div><div class="SwatchLabel">#071821</div></div>
Darkest

Click the "Edit Palettes" button or use the drop-down navigator to access the _Palettes_ tab to start editing palettes.

![Palette Editor Window]()

Once color mode is enabled, the default palettes for backgrounds, sprites, and UI will be shown on the Settings window, and the Colorizer tool will be enabled.

As with all sprites, the 3rd darkest color (normally #306850) is not used in favor of transparency. Use the sprite-only color #65ff00 to indicate transparency. 

<div><div class="Swatch" style="background:#65ff00;"></div><div class="SwatchLabel">#65ff00</div></div>

<img title="Color Game" src="/img/screenshots/color-game.png" width="592">

## Enabling Color Mode

<img title="Color Palette" src="/img/screenshots/color-palette.png" width="513">

## How to create color-ready graphics
- Ensure [Backgrounds](/docs/backgrounds) use 4-color greenscale just like non-color graphics
- Ensure [Sprites](/docs/sprites) use 3-color greenscale with #65FF00 for transparency just like non-color graphics

In order to map a GB graphic to a new palette, all assets have to use the default GB palette. GB Studio can remaps the green GB colors to the palette of your choosing.

This also means that games can use one sprite with different palette settings to save on sprite frames in a scene.

## Types of Palettes

- Actor Palettes
- Background Palettes
- UI Palettes

## Changing Palettes

Click on the color you wish to replace. Using the pop-up box, choose the colour values you want, or enter a hex color value and click _Convert Hex_ to match the closest available color.

<img title="Color Palette Edit" src="/img/screenshots/color-palette-edit.png" width="513">

### Adding Palettes

### Deleting Palettes

### Restoring Palette Defaults

You can always click _Restore Default_ to the get the original palette back again.
