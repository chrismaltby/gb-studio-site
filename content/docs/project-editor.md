---
title: "The Project Editor"
draft: false
next: "/docs/scenes"
nextTitle: "Scenes"
---

The default view for the _Project Editor_ as shown below is the _Game World_. This is where you can create your game by combining scenes, adding actors and triggers then building scripting events to add interactions.

<img title="The Project Editor" src="/img/screenshots/project-editor-v3.png" width="1258">

Use the _Editor Tools_ to switch between Select, Add, Erase, Collision, and Color Drawing modes.

By default, your project's properties are shown in the _Editor Sidebar_ on the right. Here you can set the project name and choose the starting scene. This project view is also where initial values for the Player actor are set. See the page on [The Player](/docs/player) for more information on the Player.

To look at project properties again from the _Editor Sidebar_, click on any empty space between scenes.

## Editor Tools

**Select tool:** Clicking any scenes, actors, or triggers will update the _Editor Sidebar_ to show the properties and scripts for the item you selected. You can switch back to the Project's properties by clicking outside of a scene.

**Add tool:** You are given the choice of adding a new Actor, Trigger or Scene. After clicking any of the 3 options, your mouse cursor will be loaded with a new item. You can place the new item by clicking inside the Project Editor, and cancel the action by pressing Escape or selecting another tool from _Editor Tools_.

**Erase tool:** All collisions, actors, and triggers will be removed when clicked. Scenes are not affected by _Erase mode_. To delete a scene, use _Select mode_ and click the scene's background. In the _Editor Sidebar_ click the down arrow at the top to reveal the "Delete Scene" button. All erase actions can be undone by pressing Control Z.

**Collision tool:** Allows you to add collisions to any type of scene using GB Studio's _Drawing mode_.

**Colorize tool:** Allows each tile to be given a different palette to use in place of GB Studio's default palette. The _Colorize tool_ also uses GB Studio's _Drawing mode_. The palettes used here are determined in the _Palette_ tab in the _Project Editor_.

See the documentation on [Keyboard Shortcuts](/docs/keyboard-shortcuts) for editor tool shortcuts.

## Project Views

Using the _Project View Button_ you can switch between different views of your project and its assets. 

**Game World:** Create your game by combining scenes, actors and triggers.  
**Sprites:** Edit your sprites and create animations.  
**Backgrounds:** Preview your background assets.  
**Music:** Preview and edit (hUGEDriver only) your music files.  
**Palettes:** Edit your palettes for GBC games.  
**Dialogue Review:** Preview and edit all the text in your game.  
**Build and Run:** View logs of progress while building your game.  
**Settings:** Change your project's settings such as default sprites, color palettes and keyboard controls.  

See the documentation on [Assets](/docs/assets) for more information on how to add new assets.
