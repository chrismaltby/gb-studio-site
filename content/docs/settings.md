---
title: "Settings"
draft: false
next: "/docs/engine-eject"
nextTitle: "Engine Eject"
---

Clicking the _Project View Button_ and selecting _Settings_ will take you to a list of your project's settings.

## GB Color Options

GB Studio has support for GB Color when your game is run on compatible hardware or emulators. Click the `Enable Color Mode` checkbox to enable.

<img title="Color" src="/img/screenshots/color-palette-v3.png" width="650" class="drop-shadow">

Once color mode is enabled you can select up to 8 Default Background Palettes and 8 Default Sprite Palettes, these are the palettes that every new scene in your game will use unless you specifically override them. See [Colorizing a Scene](/docs/scenes/#colorizing-a-scene) for how to use background palettes.

## Super GB Options

To enable support for Super GB click the `Enable Super GB Mode` checkbox.

<img title="SGB" src="/img/screenshots/sgb-mode.png" width="650" class="drop-shadow">

This mode will allow you to set a custom `256px × 224px` border image and color palette to use when your game is run on compatible hardware or emulators.

The first time you build your game after enabling this mode a default border image will be copied to your project in `assets/sgb/border.png`, edit this image to replace the border with your own.

## Default Player Sprites

Each _Scene Type_ can have a different player sprite sheet, use this section to replace the default spritesheet that will be used for each type. You can override the sprite sheet used for individual scenes by editing the scene's properties or by using scripts, see [The Player](http://localhost:1313/docs/player/#default-sprite-sheet).

<img title="Default Player Sprites" src="/img/screenshots/default-sprites.png" width="650" class="drop-shadow">


## Controls

The _Controls_ section allows you to override the default controls used when playing your game from a web build and the _Play Window_.

To edit the controls for a button click on the input box and while the input is highlighted type the key you wish to assign. To remove all the assigned keys click the input and then press the _Backspace_ key on your keyboard.

To reset to the original controls you can use the _Restore Default_ button.

<img title="Controls" src="/img/screenshots/controls-v3.png" width="650" class="drop-shadow">

## Cartridge Type

The _Cartridge Type_ section allows you to choose which Memory Bank Controller you want to use and if you want to enable Batteryless Saving for compatible Flash Carts.

If you don't know what these settings mean it's best to keep this as the default of MBC5, with Batteryless disabled which you can do by using the _Restore Default_ button.

## Custom HTML Header

You can use the _Custom HTML Header_ section to add content to the HTML `<head>` when generating a web build of your game. You can use this to add any custom CSS or Javascript you want to the web build HTML page.
