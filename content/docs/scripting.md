---
title: "Scripting Events"
draft: false
next: "/docs/assets"
nextTitle: "Assets"
---

Scripting events allow you to dynamically control parts of your game based on interactions from the player. Use them to connect scenes together, to give dialogue to your characters or to create cutscenes.

When either a scene, an actor or a trigger is selected in the _World Editor_, the _Editor Sidebar_ will contain an _Add Event_ button at the bottom right corner, click this to add new events. If any events have already been defined they will be listed here with the topmost event being the first that will be run.

When adding events to actors they will run when the player stands next to that actor and presses the interact button. Events on triggers run when the player stands on top of the trigger which is useful for creating doorways between scenes. Events on scenes run as soon as that scene is loaded which is useful for configuring the scene based on values of variables or to kick off a cutscene.

## Add Events

After clicking the _Add Event_ button a menu will appear to choose the event to add. If you start typing you can filter this list or you can scroll through it to find what you're looking for. Click an event or press the _Enter_ key to add the highlighted event to your script.

## Copy / Paste

Clicking the down arrow next to an event name in a script shows a dropdown menu where you can copy an event to your clipboard. Clicking this on another event allows you to paste the clipboard event either before or after the selected one or to just paste the values from the first event into the second.

## Text Events

- **Text: Display Dialogue**  
  Show a dialogue box with up to three lines of text, 18 characters per line (16 on the third line), at the bottom of the game screen. This will likely be the most used script command for interacting with actors in your game.  
  When text is shown the dialogue box will slide up from the bottom of the screen and will slide down after it has been shown, using the _+_ button you can create a dialogue sequence which will only close after the last message has been displayed.  
  <img src="/img/events/display-dialogue.png" class="event-preview" />
  <img src="/img/events/display-dialogue-preview.png" class="event-preview" />

- **Text: Display Multiple Choice**  
  Present two options to player allowing them to make a choice, will set the specified variable to _true_ if the first option is chosen and to _false_ if the second option is chosen.  
  <img src="/img/events/display-multiple-choice.png" class="event-preview" />
  <img src="/img/events/display-multiple-choice-preview.png" class="event-preview" />

- **Text: Set Animation Speed**  
  Set the speed that dialogue boxes appear and disappear and how fast text appears within the box.
  <img src="/img/events/text-animation-speed.png" class="event-preview" />

## Scene Events

- **Scene: Switch Scene**  
  Transition to a new scene with player at a specified position and direction. A connection line will be drawn between the source of the event and the destination scene with a <img src="/img/screenshots/destination-end.png" style="height:12px"/> icon appearing at the destination position. It's possible to drag this icon around and between scenes to modify the event.  
  <img src="/img/events/switch-scene.png" class="event-preview" />
  <img src="/img/events/switch-scene-preview.png" class="event-preview" />

- **Scene: Store Current On Stack**
  Store the current scene and player state on to the scene stack, this allows you to return to this exact location later using the _Scene Restore_ events. A common use of this event would be to include in a script just before a _Switch Scene_ event to open a menu scene, in the menu scene you could wait for the player to press a close button and then use the _Restore Previous From Stack_ event to return to where the player opened the menu.  
  <img src="/img/events/scene-stack-push.png" class="event-preview" />

* **Scene: Restore First From Stack**  
  <img src="/img/events/scene-stack-pop.png" class="event-preview" />

* **Scene: Restore Previous From Stack**  
  <img src="/img/events/scene-stack-pop-all.png" class="event-preview" />

- **Scene: Empty Scene Stack**  
  <img src="/img/events/scene-stack-clear.png" class="event-preview" />

## Variable Events

- **Set Variable To 'True'**  
  Set the value of the specified variable to _true_.  
  <img src="/img/events/variable-true.png" class="event-preview" />

- **Reset Variable To 'False'**  
  Set the value of the specified variable to _false_.  
  <img src="/img/events/variable-false.png" class="event-preview" />

- **Set Variable To Value**  
  Set the specified variable to a defined value.  
  <img src="/img/events/variable-value.png" class="event-preview" />

- **Increment Variable By 1**  
  Increase the value of the specified value by one, up to a maximum of _255_. If the value was previously _false_ it will now be _1_ (and also _true_), if it was previously _true_ it will now be _2_.  
  <img src="/img/events/variable-increment.png" class="event-preview" />

- **Decrement Variable By 1**  
  Decrease the value of the specified value by one, down to a minimum of _0_. If the value was previously _true_ it will now be _0_ (and also _false_).  
  <img src="/img/events/variable-decrement.png" class="event-preview" />

- **Variable Math Functions**  
  Allows you to perform various maths functions on a variable to add/subtract/multiply/divide/modulus a value/variable/random number.  
  <img src="/img/events/variable-math.png" class="event-preview" />

* **Reset All Variables**  
  Reset all variables used by your project back to _false_.  
  <img src="/img/events/variable-reset-all.png" class="event-preview" />

## Control Flow Events

- **If Variable Is 'True'**  
  Conditionally execute part of the script if the specified variable is set to _true_.  
  <img src="/img/events/if-true.png" class="event-preview" />

- **If Variable Is 'False'**  
  Conditionally execute part of the script if the specified variable is _false_.  
  <img src="/img/events/if-false.png" class="event-preview" />

- **If Variable Compare Value**  
  Conditionally execute part of the script if the specified variable matches a rule, such as "Equal To", "Greater Than" or "Less Than" against a value.  
  <img src="/img/events/if-variable-value.png" class="event-preview" />

- **If Variable Compare Variable**  
  Conditionally execute part of the script if the specified variable matches a rule, such as "Equal To", "Greater Than" or "Less Than" against a second variable.  
  <img src="/img/events/if-variable-variable.png" class="event-preview" />

* **If Joypad Input Pressed**  
  Conditionally execute part of the script if the specified joypad input is currently pressed. Will not wait for user input so use directly after a _Await Joypad Input_ event if waiting is required.  
  <img src="/img/events/if-joypad-input.png" class="event-preview" />

* **If Actor At Position**  
  Conditionally execute part of the script if the specified actor is at a certain position in the scene.  
  <img src="/img/events/if-actor-position.png" class="event-preview" />

* **If Actor Facing Direction**  
  Conditionally execute part of the script if the specified actor is facing a certain direction.  
  <img src="/img/events/if-actor-direction.png" class="event-preview" />

- **Loop Forever**  
  Execute part of the script in a loop forever. Remember to break out of the loop otherwise the player will become stuck at this point. You can use a _Stop Script_ or _Switch Scene_ event to stop the loop.  
  <img src="/img/events/loop.png" class="event-preview" />

- **Stop Script**  
  Stops the current script from running.  
  <img src="/img/events/script-stop.png" class="event-preview" />

## Camera Events

- **Camera Move To**  
  Move the camera to a specifed position in the scene.

- **Camera Lock To Player**  
  Move the camera back to focusing on the player, locking into position when the player moves.

- **Camera Shake**  
  Shake camera effect for up to 10 seconds.

- **Fade In**  
  Fade the scene to a white screen.

- **Fade Out**  
  Fade the scene in from a white screen.

## Actor Events

- **Actor Set Direction**  
  Set the facing direction of the specified actor.  
  <img src="/img/events/actor-set-direction.png" class="event-preview" />
  <img src="/img/events/actor-set-direction-preview.png" class="event-preview" />

- **Actor Set Position**  
  Set the position in the scene of the specified actor.

- **Actor Move To**  
  Make the actor walk to a specified position in the scene. Actor will ignore all collisions along path so combine multiple of these events if you need to specify an exact path avoiding obstacles in the scene.

- **Push Actor**  
  Push an actor in the direction the player is currently facing. By default pushes by one tile, but can optionally slide until a collision occurs.

- **Actor Emote Bubble**  
  Display an emote bubble above the specified actor from one of _Shock_, _Question_, _Love_, _Pause_, _Anger_, _Sweat_, _Music_ and _Sleep_. You can change the graphics used for these bubbles by editing the [UI Elements](/docs/ui-elements#emotes-png) of your game.  
  <img src="/img/events/actor-emote.png" class="event-preview" />
  <img src="/img/events/actor-emote-preview.png" class="event-preview" />

- **Show Actor**  
  Unhide a previously hidden actor.

- **Hide Actor**  
  Hide an actor so it is no longer visible. Hidden actors will no longer cause collisions and will not be able to be interacted with.

## Sprite Events

- **Set Player Sprite Sheet**  
  Change the player sprite sheet from the default defined in the _Project Editor_. Changes to the player sprite sheet will persist between scene transitions so make sure to change it back if the change was supposed to be temporary.

- **Show Sprites**  
  Show all sprites that were previously hidden.

- **Hide Sprites**  
  Hide all sprites in scene. Can be useful to create cutscenes where the player should not be visible by adding to a scene's starting script.

## Overlay Events

- **Show Overlay**  
  Show either a black or white window over the top of the current game screen. Can be used to obscure and then reveal parts of the scene background for example on the sample project logo screen.

- **Hide Overlay**  
  Hides the screen overlay.

- **Overlay Move To**  
  Moves the overlay to a new position on the screen.

## Input Events

- **Await Joypad Input**  
  Pauses the script until one of the specified joypad inputs are pressed.

## Music Events

- **Play Music**  
  Plays a music file, optionally looping the file when finished.  
  <img src="/img/events/music-play.png" class="event-preview" />

- **Stop Music**  
  Stops any currently playing music.  
  <img src="/img/events/music-stop.png" class="event-preview" />

## Timing Events

- **Wait**  
  Pause script for up to 10 seconds.  
  <img src="/img/events/wait.png" class="event-preview" />
