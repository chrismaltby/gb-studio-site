---
title: "The Project Editor"
draft: false
next: "/docs/scenes"
nextTitle: "Scenes"
---

The default view for the _Project Editor_ as shown below is the _Game World_. This is where you can create your game by combining scenes, adding actors and triggers then building scripting events to add interactions.

<img title="The Project Editor" src="/img/screenshots/project-editor.png" width="1258">

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

## The Asset Viewer

You can search and preview all the assets in your game by using the _Project Navigator_'s drop-down list. Selecting _Sprites_, _Backgrounds_, _UI Elements_ or _Music_ will bring up the asset viewer for each type of asset.

<img title="The Asset Viewer" src="/img/screenshots/asset-viewer.png" width="1258">

The **?** button will bring up the documentation page for that type of asset.  
The searchbar will narrow down the list of assets to a specific file.  
Pressing _Edit_ will open the selected file using your system's default app setting.  

As with any window in GB Studio, your project assets folder can be opened with the folder button on the top right.

See the documentation on [Assets](/docs/assets) for more information on how to add new assets.
