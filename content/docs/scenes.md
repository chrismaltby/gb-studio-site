---
title: "Scenes"
draft: false
next: "/docs/player"
nextTitle: "The Player"
---

A scene is a single screen of your game, it can contain multiple [actors](/docs/actors) and [triggers](/docs/triggers). A game is typically made-up of many scenes connected together with triggers using the _Change Scene_ event.

## Adding a Scene
Click the _**+** button_ in the _Editor Tools_ and select _Scene_ from the menu. Click on any empty space in the _Project Viewport_ to place the new scene.

<img src="/img/screenshots/add-scene.gif" style="width:300px"/>

You can use the _Editor Sidebar_ to give your scene a name and a background from your project's assets. See the documentation for [Backgrounds](/docs/backgrounds) for more information on adding background images.

## Scene Properties
- **Name** - Names your scene. Useful for locating your scene with the search bar.
- **Type** - Lets you choose from the list of gamemodes. A scene's type cannot be changed in-game.
- **Background** - Lets you choose a background from the `assets/backgrounds` folder.
- **Add Notes** - Adds an editor-only text field to your scene.

## Navigation
Navigation is a list that shows every Actor and Trigger inside the scene. Clicking any name in the list will select that object and show its properties in the _Editor Sidebar_.

## Scripting
To start building a script, select a scene and click the _Add Event button_ in the _Editor Sidebar_ to open the event menu. Select an event to add it to the script.

For more information see the documentation for [Scripting](/docs/scripting).

## Adding Collision to a Scene
Select the _Collision Tool_ from the _Editor Tools_. There are 6 collision types that can be added.

- **Solid** collision stops colliding actors from entering a tile on all sides.  
- **Top/Bottom/Left/Right** collision stops colliding actors from entering a tile from a specific side, useful for one-way collision and semi-solid platforms.

Each tile can hold a maximum of 1 ladder and 3 collision sides. Adding 4 collision sides will replace the sides with a single solid block. Ladders will not replace existing collision when placed on top of other collision.

**Warning:** Changing the background of a scene to a differently-sized background will remove all collisions from a scene.

## Colorizing a Scene
Select the _Colorizer Tool_ from the _Editor Tools_. There are 6 palettes types that can be added to a scene with Color Mode enabled. Palettes can be adjusted in Settings.

The palettes used in the _Colorizer Tool_ can be swapped out for existing palettes (such as the UI palette) by long-clicking on a palette.

For more information about the drawing mode used for the _Colorize Tool_ and the _Collision Tool_, see [Keyboard Shortcuts](/docs/keyboard-shortcuts).

## Scene Limits
There are several limits that GB Studio has put in place to keep game performance consistent, and to minimize visual bugs.

Each scene can have a maxmimum of 30 actors, 25 unique actor sprite frames, and 30 triggers. You can check this information by selecting a scene and looking for the gray bar under your scene that reads: ``A: 0/30 F: 0/25 T: 0/30``. The letters on this bar represent the following:
- ``A:`` represents the number of actors that the scene is using.
- ``F:`` represents the number of unique frames that each actor is using in their sprite sheet.
- ``T:`` represents the number of triggers that the scene isusing.

### Actor Limits
Each scene can have a maximum of 30 actors. Ideally, there should never be more than 10 actors within a 20 x 18 tile boundary, equivalent to ``160px x 144px``. Clustering more than 10 actors together in a scene will cause some actors to become invisible in-game. GB Studio will warn you if it thinks this will be the case for a scene:  

<img src ="https://user-images.githubusercontent.com/16776042/94731004-03c44100-035c-11eb-917f-c0589052e604.png" style="width:300px"/>  

You can address this message by moving or deleting actors so no more than 10 will be seen in a 20 x 18 tile boundary. You can use the [Eraser Tool](/docs/keyboard-shortcuts/#Game-World) to delete actors. Actors will still become invisible if more than 10 actors move into the screenspace after the scene starts.

### Frame Limits
Each scene can have a maximum of 25 unique sprite frames. Read more about frame limits on the [Actors](/docs/actors/#Frame-Limits) page.

### Trigger Limits
Each scene can have a maximum of 30 triggers. Each trigger has its collision checked actively during gameplay, even when it's not being touched. Performance issues start to arise above 30 triggers. You can use the [Eraser Tool](/docs/keyboard-shortcuts/#Game-World) to delete triggers.
