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

# Actor Properties
Once an actor has been selected, the _Editor Sidebar_ will show the actor's properties.

## General Properties
These are properties that apply to all actors:
- Name
- X and Y (Position)
- Sprite Sheet
- Pin to Screen
- Collision Group
- Add Notes
- Navigation
- Scripts

### Name
Giving your actors a *name* helps organize them in your project. An actor's name will be visible in any drop-down menu that asks you to pick an actor, such as the *Actor: Hide* event.

### Position
Your actor's _Position_ or _X and Y_ let you set the actor's starting position on the screen.  
X starts at zero from the left side of the scene and increases as your actor goes right.  
Y starts at zero from the top of the scene and increases as your actor goes down.

You can also click and drag an actor around with your mouse to move it.

### Sprite Sheet
The *Sprite Sheet* property lets you change the look of your actor. Read more about the different sprite sheet types on the [Sprites](/docs/sprites) page.

### Pin to Screen
When an actor is pinned, the actor will not move without a script, and does not create collisions with other actors in your scene.

Enabling this property will temporarily change your scene to be blacked-out, with a ``160px x 144px`` boundary in the top-left corner showing part of your original scene. Use your mouse to drag the actor to where you want it to be pinned to the screen. 

Select a different actor, the scene, or the project to return the blacked-out view of your scene to normal.

### Collision Groups
Actors can be given a collision group in the _Editor Sidebar_. When enabled, the option to run scripts based on collisions will appear in the _Editor Sidebar_. To learn more about On Hit scripts, see the documentation for [Scripting](/docs/scripting).

## Movement and Animation Properties
The following properties change your actor's animation and world-interaction logic:

- Movement Speed
- Movement Type (for actor sprite sheets)
- Animation Speed (for all animated sprites)
- Animate while stationary / Animate by cycling frames
- Initial Frame
- Direction (for actor sprite sheets)
- Sprite Type (for all animated sprites)

*Movement Speed* changes how fast an actor moves. The speed can be changed from Speed 1/2 (Slower) to Speed 4 (Faster). A static actor can still be moved using [scripted events.](/docs/scripting)

Most of the properties here are only available to some actors, depending on the type of sprite sheet they use. There are four types of sprite sheets:

_Static Sprites_ have 1 frame of animation. This is the only non-animated sprite sheet type.  
_Animated Sprites_ have anywhere from 2 to 25 frames of animation. No directions are associated with its frames.  
_Actor Sprite Sheets_ have 3 frames of animation: One to face up, one to face down, and one for facing right.  
_Animated Actor Sprite Sheets_ have 6 frames of animation, adding a 2nd frame to each direction of a regular Actor Sprite Sheet.  

You can read more about adding a specific type of sprite sheet on the [Sprites](/docs/sprites) page.

## Movement Types
The _Movement Type_ property lets you change how an actor moves. The one you should use depends on how you want the actor to behave when the player walks around the scene and interacts with it. There are 4 movement types:
- **Static** - The actor faces the same direction and stays in the same spot, unless it is told to move with [Scripting Events](/docs/scripting).  
Useful for things like signposts or other stationary objects.
- **Face Interaction** - The actor faces you when you interact with it. It does not move at random.  
Useful for simple characters to make them more responsive to the player's actions.
- **Random Rotation** - The actor will start in the initial direction but will randomly change direction at set intervals.  
Useful to show characters who are looking around their surroundings.
- **Random Movement** - The actor will randomly change direction and move around the scene at set intervals.  
Useful for characters who are searching an area. Actors can block the player's movement.

### Animation Speed
Animation speed changes how fast an animation is played back, from Speed 0 (Slower) to Speed 4 (Faster). Animation speed can also be set to "None" to prevent an actor from animating at all, even if they would normally animate from walking or changing direction.

### Animate while stationary / Animate by cycling frames
These two properties are checkboxes that appear in the same place. Your actor will animate on its own when this property is enabled.

For animated actor sprite sheets, "Animate while stationary" will play the two frames of the current direction they're facing. This creates a "running in place" effect.

For other animated actors, "Animate by cycling frames" will run through its sprite sheet in a loop. The Animation Speed property becomes visible on the _Editor Sidebar_ when this property is enabled.

### Direction
_Direction_ changes the starting direction of an actor. This is only available to actors with actor-type sprite sheets.

### Sprite Type
The actor's _Sprite Type_ property is a way to override the sprite sheet type without changing the sprite sheet asset itself. The current options for sprite type are:
- Static
- Actor

_Note_ If the actor uses a static sprite sheet (containing only a single frame of animation) then the only movement type available will be static, and the menus for choosing the movement type and initial direction won't appear.

### Initial Frame
This is the starting frame of an actor's animation, or the frame to display on a static actor.

## Other Properties
_Add Notes_ lets you write notes. These notes are only visible in GB Studio's _Editor Sidebar_ and can't be read in-game. This is identical to adding notes to scenes, triggers, and the project itself.

_Navigation_ will show you the scene that your actor belongs to.

_Scripting_ lets you make your actor respond to interactions with scripted events. To learn about how to script your actor, see the documentation for [Scripting](/docs/scripting).

# Limits
There are limits to how actors and their sprites can be used in GB Studio. These limits are to make sure your game appears as intended, as well as to keep your actor logic running smoothly.

## Actor Limits
A maximum of 30 actors can be added to a scene. However, there can only be 10 actors visible on-screen at once. The screen space is defined as a ``20 x 18`` tile boundary, equivalent to ``160px x 144px``. Read more about Actor Limits on the [Scenes](/docs/scenes/#Actor-Limits) page.

## Frame Limits
Due to hardware limitations only **25 unique frames** of animation can be allocated to actors in each scene. The limit on unique sprite frames is shared between all actors. When a scene has actors that use more than 25 unique sprite frames, some actors and UI elements may appear glitchy.

To stay under the 25 unique frame limit, use static or non animated sprite sheets when possible. You can also reuse the same sprite for multiple actors in the scene - reusing the same sprite sheet will not count towards the scene frame total.
