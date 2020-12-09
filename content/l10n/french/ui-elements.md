---
title: "UI Elements"
draft: false
next: "/docs/music"
nextTitle: "Music"
---

Your project contains a number of files in `assets/ui` with fixed file names that define parts of your game's user interface. Editing these files allows you to change the default font, set the window frame and modify the selection cursor.

If you remove any of the files in the ui folder they will be replaced with the default assets the next time you build your game allowing you to revert any unwanted changes.

## ascii.png

Edit this file to change the game's font when talking to actors in your game.

<img src="/img/ui/ascii.png" class="HelpSprite" style="width:384px; height:auto;"/>

## frame.png

The game engine uses [9-slice scaling](https://en.wikipedia.org/wiki/9-slice_scaling) of this image to create the frame around text boxes. Editing this image will allow you to change the frame design or set it to a solid color.

<img src="/img/ui/frame.png" class="HelpSprite" style="width:72px; height:auto;"/>

## cursor.png

This image is used as a selection cursor when showing multiple choice options in your game.

<img src="/img/ui/cursor.png" class="HelpSprite" style="width:24px; height:auto;"/>

## emotes.png

This image used to define the look of the emote bubbles that can be shown above actors using scripting. Each bubble is `16px` x `16px` in size and the each bubble represents _Shock_, _Question_, _Love_, _Pause_, _Anger_, _Sweat_, _Music_ and _Sleep_ in that order left to right.

<img src="/img/ui/emotes.png" class="HelpSprite" style="width:384px; height:auto;"/>

## Requirements

With the exception of `emotes.png` which follows the standard sprite requirements, UI PNGs must only contain the following four colors:

<div><div class="Swatch" style="background:#071821;"></div><div class="SwatchLabel">#071821</div></div>
<div><div class="Swatch" style="background:#306850;"></div><div class="SwatchLabel">#306850</div></div>
<div><div class="Swatch" style="background:#86c06c;"></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style="background:#e0f8cf;"></div><div class="SwatchLabel">#e0f8cf</div></div>

<div class="InfoBox">
Download the GB Studio Palette Swatches for:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>
