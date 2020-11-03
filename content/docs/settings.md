---
title: "Settings"
draft: false
next: "/docs/engine-eject"
nextTitle: "Engine Eject"
---

<span class="new">New in 1.2.0</span>

Clicking the _Project Navigator_ and selecting _Settings_ will take you to a list of your project's settings.

## GB Color Options

GB Studio has some support for GB Color features when your game is run on compatible hardware or emulators. There are two options currently available:

- **Use Double Speed Mode** - When enabled allows the game engine to make full use of the GB Color's increased CPU speed. Enabling this option helps prevent music skipping when transitioning between scenes.

- **Use Custom Color Palette** - When enabled allows the four colors in your game's color palette to be replaced. Read [palettes](/docs/palettes) for more information.

## Controls

The _Controls_ section allows you to override the default controls used when playing your game from a web build and the _Play Window_.

To edit the controls for a button click on the input box and while the input is highlighted type the key you wish to assign. To remove all the assigned keys click the input and then press the _Backspace_ key on your keyboard.

To reset to the original controls you can use the _Restore Default_ button.

<img title="Controls" src="/img/screenshots/controls.png" width="507">

## Cartridge Type

The _Cartridge Type_ section allows you to choose which Memory Bank Controller you want to use and if a battery will be included when exporting your game to a physical cartridge (requires additional hardware and software).

If you don't know what these settings mean it's best to keep this as the default of MBC5+RAM+BATTERY which you can do by using the _Restore Default_ button.

## Custom HTML Header

You can use the _Custom HTML Header_ section to add content to the HTML `<head>` when generating a web build of your game. You can use this to add any custom CSS or Javascript you want to the web build HTML page.
