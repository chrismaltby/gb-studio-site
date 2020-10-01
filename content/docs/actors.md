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

## Setting a Sprite
To add a sprite sheet to your actor, select your actor, and locate the drop-down menu for "Sprite Sheet" in the _Editor Sidebar_.

To learn more about the different types of Sprites you can add to your actor, see the [Sprites](/docs/sprites) page.

## Actor Properties
Once an actor has been selected, the _Editor Sidebar_ will show the actor's properties. Here are the properties you can change in the _Editor Sidebar_:
- Name
- X and Y
- Sprite Sheet
- Movement Type (actor sprite sheets only)
- Animate while stationary (animated actors only)
- Animate by cycling frames (animated sprites/static actors only)
- Direction (actor sprite sheets only)
- Movement Speed
- Animation Speed (animated actors/sprites only)
- Collision Group
- Add Notes
- Navigation
- Scripts

Giving your actors a *name* helps organize them in your project. An actor's name will be visible in any drop-down menu that asks you to pick an actor, such as the *Actor: Hide* event.

*X and Y* lets you set the actor's starting position. You can also click and drag an actor around with your mouse to move it.

*Sprite Sheet* lets you change the look of your actor. Read more about the different sprite sheet types on the [Sprites](/docs/sprites) page.

## Movement Types
The _Movement Type_ property lets you change how an actor moves. The one you should use depends on how you want the actor to behave when the player walks around the scene and interacts with it. There are 4 movement types:
- **Static** - The actor faces the same direction and stays in the same spot, unless it is told to change this with [Scripting Events](/docs/scripting).
Useful for things like signposts or other stationary objects.
- **Face Interaction** - The actor faces you when you interact with it. It does not move at random.
Useful for simple characters to make them more responsive to the player's actions.
- **Random Rotation** - The actor will start in the initial direction but will randomly change direction at set intervals.
Useful to show characters who are looking around their surroundings.
- **Random Movement** - The actor will randomly change direction and move around the scene at set intervals. Useful for characters who are searching an area. Actors can block the player's movement.

_Note_ If the actor uses a static sprite sheet (containing only a single frame of animation) then the only movement type available will be static, and the menus for choosing the movement type and initial direction won't appear.

_Animate while stationary_ is an option for actors with animated sprites. When used on the sample project actors, this creates a "running in place" effect. This is useful to make stationary actors more lively when combined with the _Face Interaction_ or _Random Rotation_ movement types.

_Animate by cycling frames_ is an option for static actors and animated sprites. Checking this box will make the actor animate by default, and will grant them the _Animation Speed_ property as well.

_Direction_ changes the starting direction of an actor. This is only available to actors with actor sprite sheets.

## Collision Groups
Actors can be given a collision group in the _Editor Sidebar_. When enabled, the option to run scripts based on collisions will appear in the _Editor Sidebar_. To learn more about On Hit scripts, see the documentation for [Scripting](/docs/scripting).

## Other Properties
_Add Notes_ lets you write notes. These notes are only visible in GB Studio's _Editor Sidebar_ and can't be read in-game. This is identical to adding notes to scenes, triggers, and the project itself.

_Navigation_ will show you the scene that your actor belongs to.

## Scripting
To learn about how to script your Actor, see the documentation for [Scripting](/docs/scripting).

## Actor Limits
A maximum of 30 actors can be added to a scene. However, there can only be 10 actors visible on-screen at once. The screen is defined as a ``160px x 144px`` boundary. Read more about Actor Limits on the [Scenes](/docs/scenes/#Actor-Limits) page.

## Frame Limits
Due to hardware limitations only **25 unique frames** of animation can be allocated to actors in each scene. The limit on unique sprite frames is shared between all actors. When a scene has actors that use more than 25 unique sprite frames, some actors and UI elements may appear glitchy.

To stay under the 25 unique frame limit, use static or non animated sprite sheets when possible. You can also reuse the same sprite for multiple actors in the scene - reusing the same sprite sheet will not count towards the scene frame total.
