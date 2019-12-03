---
title: "Actors"
draft: false
next: "/docs/triggers"
nextTitle: "Triggers"
---

Actors are the characters and objects in your scene that you can interact with.

## Adding an Actor

To add an actor to a scene click the _**+** button_ in the _Editor Tools_ and select _Actor_ from the menu (alternatively press the **A** key), then click on the scene and position where you wish to place the actor.

<img src="/img/screenshots/add-actor.gif" style="width:300px"/>

The _Editor Sidebar_ will switch to show the actor settings where you can give the actor a name for easier navigation later, reposition the actor (which you can also do with drag and drop), set the [sprite sheet](/docs/sprites), initial direction, the movement type and create a script that will play when the player interacts with the actor.

## Movement Type

There are a few different movement types available to choose, the one you should use will depend on how you want the actor to behave as the player is walking around the scene and interacting with it.

- **Static** - The actor will display a single frame from the selected spritesheet.  
  If the sprite sheet contains more than one frame you will be given the option to choose which frame to display, this can be modified later using an _Actor: Set Animation Frame_ event. Sprite sheets with multiple frames also enable the ability to optionally animate the actor by cycling through each of the frames at a specified speed, the speed can also be modified with an _Actor: Set Animation Speed_ event.\
  \
  The actor will only ever face in the initial direction (unless the direction is modified later using a script). If the player interacts with this actor it will not change direction. Useful for things like signposts or other stationary objects.

- **Face Interaction** - The actor will start facing in the initial direction but when the player interacts with the actor it will turn to face the player before it's script plays. Useful for simple characters to make them more responsive to the player's actions.

- **Random Rotation** - The actor will start in the initial direction but will randomly change direction at set intervals. Useful to show characters who are looking around their surroundings.

- **Random Movement** - The actor will randomly change direction and move around the scene at set intervals. Useful for characters who are searching an area. Actors can block the player's movement so be careful not to use this movement type around tight spaces where the player might get stuck waiting for the actor to move out of the way.

_Note_ If the actor uses a static sprite sheet (i.e. containing only a single frame of animation) then the only movement type available will be static and the inputs for choosing the movement type and initial direction won't appear.

## Frame Limits

Due to hardware limitations only **25 unique frames** of animation can be allocated to actors in each scene. Where possible use static or non animated sprite sheets to decrease the number of frames used. Another way to reduce the frame count is to reuse the same sprite for multiple actors in the scene, reusing the same sprite sheet will not count towards the scene frame total.

## Scripting

Actors can have two scripts attached to them, _On Interact_ and _On Init_, you can toggle between which script is being edited by using the tabs in the _Editor Sidebar_ while the actor is selected.

The _On Interact_ script will be run any time a player stands next to the actor and presses the _A_ button.

The _On Init_ script can be used to have events run as soon as the scene is loaded, they will execute before any events in the scene's _On Init_ script.

When the actor is selected click the _Add Event button_ in the _Editor Sidebar_ to open the event menu and start building a script.

For more information see the documentation for [Scripting](/docs/scripting).
