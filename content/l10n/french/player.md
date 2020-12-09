---
title: "The Player"
draft: false
next: "/docs/actors"
nextTitle: "Actors"
---

## Start Position

The player starting position is indicated in the game world view by the <img src="/img/screenshots/player-start.png" style="height:12px"/> icon.

Clicking in the background between scenes switches the sidebar back to the Project Editor where you'll have options to set the player starting scene, position, direction and [sprite sheet](/docs/sprites).

You can also change the player start position by dragging the <img src="/img/screenshots/player-start.png" style="height:12px"/> icon and can even drag between scenes.

## Scripting

Most actor script events can also be applied to the player. In addition you can use _Set Player Sprite Sheet_ event to change the graphics used for the player character mid-game. Changing the sprite sheet will persist between scenes so remember to switch the sprite back if it was supposed to be temporary.

When switching between scenes the player will always become visible at the scene start location regardless of previous visibility options. if you want the player to be hidden on a scene e.g when showing a title screen or cutscene add a _Player Hide_ event to the scene's _On Init_ script.
