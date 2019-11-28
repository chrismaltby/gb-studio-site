---
title: "Scripting Events"
draft: false
next: "/docs/custom-events"
nextTitle: "Custom Events"
---

Scripting events allow you to dynamically control parts of your game based on interactions from the player. Use them to connect scenes together, to give dialogue to your characters or to create cutscenes.

When either a scene, an actor or a trigger is selected in the _World Editor_, the _Editor Sidebar_ will contain an _Add Event_ button at the bottom right corner, click this to add new events. If any events have already been defined they will be listed here with the topmost event being the first that will be run.

When adding events to actors they will run when the player stands next to that actor and presses the interact button. Events on triggers run when the player stands on top of the trigger which is useful for creating doorways between scenes. Events on scenes run as soon as that scene is loaded which is useful for configuring the scene based on values of variables or to kick off a cutscene.

## Add Events

After clicking the _Add Event_ button a menu will appear to choose the event to add. If you start typing you can filter this list or you can scroll through it to find what you're looking for. Click an event or press the _Enter_ key to add the highlighted event to your script.

## Copy / Paste

Clicking the down arrow next to an event name in a script shows a dropdown menu where you can copy an event to your clipboard. Clicking this on another event allows you to paste the clipboard event either before or after the selected one or to just paste the values from the first event into the second.

<span class="new">New in 1.2.0</span>

You can also hold the _Alt_ key to turn all _Add Event_ buttons into _Paste Event_ buttons allowing you to easily paste events into control flow branches.

## Text Events

- **Text: Display Dialogue**  
  Show a dialogue box with up to three lines of text, 18 characters per line (and a total of 52 characters), at the bottom of the game screen. This will likely be the most used script command for interacting with actors in your game.  
  When text is shown the dialogue box will slide up from the bottom of the screen and will slide down after it has been shown.  
  <img src="/img/events/display-dialogue.png" class="event-preview" />
  <img src="/img/events/display-dialogue-preview.png" class="event-preview" />
  <br />

  - Using the _+_ button you can create a dialogue sequence which will only close after the last message has been displayed.

  <span class="new">New in 1.2.0</span>

  - You can display the value of any variables in a text box by using the variable's identifier shown in the variable selector (e.g. `$L0$` for local variable 0 and `$182$` for global variable 182).
  - You can optionally display an avatar image on the left hand side of the dialogue box by clicking _Add Avatar_ and selecting an image to use. You are able to pick any sprite within your game that contains only a single frame (`16px` x `16px`). Setting an avatar will reduce the amount of characters per line available to 16 on all lines.

- **Text: Display Multiple Choice**  
  Present two options to player allowing them to make a choice, will set the specified variable to _true_ if the first option is chosen and to _false_ if the second option is chosen.  
  <img src="/img/events/display-multiple-choice.png" class="event-preview" />
  <img src="/img/events/display-multiple-choice-preview.png" class="event-preview" />

- **Text: Set Animation Speed**  
  Set the speed that dialogue boxes appear and disappear and how fast text appears within the box.
  <img src="/img/events/text-animation-speed.png" class="event-preview" />

## Scene Events

- **Scene: Change Scene**  
  Transition to a new scene with player at a specified position and direction. A connection line will be drawn between the source of the event and the destination scene with a <img src="/img/screenshots/destination-end.png" style="height:12px"/> icon appearing at the destination position. It's possible to drag this icon around and between scenes to modify the event.  
  <img src="/img/events/switch-scene.png" class="event-preview" />
  <img src="/img/events/switch-scene-preview.png" class="event-preview" />

- **Scene: Store Current On Stack**  
  Store the current scene and player state on to the scene stack, this allows you to return to this exact location later using the _Scene Restore_ events. A common use of this event would be to include in a script just before a _Change Scene_ event to open a menu scene, in the menu scene you could wait for the player to press a close button and then use the _Restore Previous From Stack_ event to return to where the player opened the menu.  
  <img src="/img/events/scene-stack-push.png" class="event-preview" />

- **Scene: Restore Previous From Stack**  
  Transition to the last stored scene from the scene stack using the specified fade speed. The previous scene will then be removed from the stack so the next time this event is used it will transition to the scene before that.  
  <img src="/img/events/scene-stack-pop.png" class="event-preview" />

- **Scene: Restore First From Stack**  
  Transition the very first scene stored on the stack, for instance if you had multiple levels of menu scenes you could use this to imediately return to the game scene. This event will cause the scene stack to become empty.  
  <img src="/img/events/scene-stack-pop-all.png" class="event-preview" />

- **Scene: Empty Scene Stack**  
  Clears the scene stack so that no previous scenes can be restored.  
  <img src="/img/events/scene-stack-clear.png" class="event-preview" />

## Variable Events

- **Variable: Set To 'True'**  
  Set the value of the specified variable to _true_.  
  <img src="/img/events/variable-true.png" class="event-preview" />

- **Variable: Set To 'False'**  
  Set the value of the specified variable to _false_.  
  <img src="/img/events/variable-false.png" class="event-preview" />

- **Variable: Set To Value**  
  Set the specified variable to a defined value.  
  <img src="/img/events/variable-value.png" class="event-preview" />

- **Variable: Increment By 1**  
  Increase the value of the specified value by one, up to a maximum of _255_. If the value was previously _false_ it will now be _1_ (and also _true_), if it was previously _true_ it will now be _2_.  
  <img src="/img/events/variable-increment.png" class="event-preview" />

- **Variable: Decrement By 1**  
  Decrease the value of the specified value by one, down to a minimum of _0_. If the value was previously _true_ it will now be _0_ (and also _false_).  
  <img src="/img/events/variable-decrement.png" class="event-preview" />

- **Variable: Math Functions**  
  Allows you to perform various maths functions on a variable to add/subtract/multiply/divide/modulus a value/variable/random number.  
  _Note:_ Variables have max values of 255 and will wrap if increased above 255 or below 0.  
  <img src="/img/events/variable-math.png" class="event-preview" />

- **Variable: Reset All Variables To 'False'**  
  Reset all variables used by your project back to _false_.  
  <img src="/img/events/variable-reset-all.png" class="event-preview" />

## Control Flow Events

- **If Variable Is 'True'**  
  Conditionally execute part of the script if the specified variable is set to _true_.  
  <img src="/img/events/if-true.png" class="event-preview" />

- **If Variable Is 'False'**  
  Conditionally execute part of the script if the specified variable is _false_.  
  <img src="/img/events/if-false.png" class="event-preview" />

- **If Variable Compare With Value**  
  Conditionally execute part of the script if the specified variable matches a rule, such as "Equal To", "Greater Than" or "Less Than" against a value.  
  <img src="/img/events/if-variable-value.png" class="event-preview" />

- **If Variable Compare With Variable**  
  Conditionally execute part of the script if the specified variable matches a rule, such as "Equal To", "Greater Than" or "Less Than" against a second variable.  
  <img src="/img/events/if-variable-variable.png" class="event-preview" />

- **If Joypad Input Pressed**  
  Conditionally execute part of the script if the specified joypad input is currently pressed. Will not wait for user input so use directly after a _Joypad Input: Pause Script Until Pressed_ event if waiting is required. Event will only execute once, if you wish to run a script every time a button is pressed use _Joypad Input: Attach Script To Button_ instead.
  <img src="/img/events/if-joypad-input.png" class="event-preview" />

- **If Actor At Position**  
  Conditionally execute part of the script if the specified actor is at a certain position in the scene.  
  <img src="/img/events/if-actor-position.png" class="event-preview" />

- **If Actor Facing Direction**  
  Conditionally execute part of the script if the specified actor is facing a certain direction.  
  <img src="/img/events/if-actor-direction.png" class="event-preview" />

- **If Game Data Saved**  
  Conditionally execute part of the script if there is a saved game available.  
  <img src="/img/events/if-game-saved.png" class="event-preview" />

- **Loop Forever**  
  Execute part of the script in a loop forever. Remember to break out of the loop otherwise the player will become stuck at this point. You can use a _Stop Script_ or _Change Scene_ event to stop the loop.  
  <img src="/img/events/loop.png" class="event-preview" />

- **Event Group**  
  Provides no functionality but allows you to group a sequence of events together and give them a label (using the _Rename Event_ option on the event menu) and collapse the events into a single block.  
  <img src="/img/events/event-group.png" class="event-preview" />

- **Script: Stop**  
  Stops the current script from running.  
  <img src="/img/events/script-stop.png" class="event-preview" />

## Camera Events

- **Camera: Move To**  
  Move the camera to a specifed position in the scene.  
  <img src="/img/events/camera-move-to.png" class="event-preview" />

- **Camera: Lock To Player**  
  Move the camera back to focusing on the player, locking into position when the player moves.  
  <img src="/img/events/camera-lock-to-player.png" class="event-preview" />

- **Camera: Shake**  
  Shake camera effect for up to 10 seconds.  
  <img src="/img/events/camera-shake.png" class="event-preview" />

## Screen Events

- **Screen: Fade In**  
  Fade the scene to a white screen.  
  <img src="/img/events/screen-fade-in.png" class="event-preview" />

- **Screen: Fade Out**  
  Fade the scene in from a white screen.  
  <img src="/img/events/screen-fade-out.png" class="event-preview" />

## Actor Events

- **Actor: Set Direction**  
  Set the facing direction of the specified actor.  
  <img src="/img/events/actor-set-direction.png" class="event-preview" />
  <img src="/img/events/actor-set-direction-preview.png" class="event-preview" />

- **Actor: Set Position**  
  Set the position in the scene of the specified actor.  
  <img src="/img/events/actor-position.png" class="event-preview" />

- **Actor: Set Position Using Variables**  
  Set the position in the scene of the specified actor from the values of two variables.  
  <img src="/img/events/actor-position-variables.png" class="event-preview" />

- **Actor: Set Relative Position**  
  Set the position in the scene of the specified actor relative to their current position.  
  <img src="/img/events/actor-relative-position.png" class="event-preview" />

- **Actor: Move To**  
  Make the actor walk to a specified position in the scene. Actor will ignore all collisions along path so combine multiple of these events if you need to specify an exact path avoiding obstacles in the scene.  
  <img src="/img/events/actor-move-to.png" class="event-preview" />

- **Actor: Move Relative**  
  Make the actor walk to a position relative to their current position.  
  <img src="/img/events/actor-relative-move.png" class="event-preview" />

- **Actor: Move To Using Variables**  
  Make the actor walk to a position from the values of two variables.  
  <img src="/img/events/actor-move-to-variables.png" class="event-preview" />

- **Actor: Store Position In Variables** <span class="new">New in 1.1.0</span>  
  Store the current position of an actor into two variables.  
  <img src="/img/events/actor-store-position.png" class="event-preview" />

- **Actor: Push Away From Player**  
  Push an actor in the direction the player is currently facing. By default pushes by one tile, but can optionally slide until a collision occurs.  
  <img src="/img/events/actor-push.png" class="event-preview" />

- **Actor: Emote Bubble**  
  Display an emote bubble above the specified actor from one of _Shock_, _Question_, _Love_, _Pause_, _Anger_, _Sweat_, _Music_ and _Sleep_. You can change the graphics used for these bubbles by editing the [UI Elements](/docs/ui-elements#emotes-png) of your game.  
  <img src="/img/events/actor-emote.png" class="event-preview" />
  <img src="/img/events/actor-emote-preview.png" class="event-preview" />

- **Actor: Set Animation Frame**  
  Set the current animation frame of the specified actor.  
  <img src="/img/events/actor-set-frame.png" class="event-preview" />

- **Actor: Set Animation Speed**  
  Set the animation speed of the specified actor.  
  <img src="/img/events/actor-animation-speed.png" class="event-preview" />

- **Actor: Set Movement Speed**  
  Set the movement speed of the specified actor.  
  <img src="/img/events/actor-movement-speed.png" class="event-preview" />

- **Actor: Set Player Sprite Sheet**  
  Change the player sprite sheet from the default defined in the _Project Editor_. Changes to the player sprite sheet will persist between scene transitions so make sure to change it back if the change was supposed to be temporary.  
  <img src="/img/events/actor-player-spritesheet.png" class="event-preview" />

- **Actor: Invoke Script**  
  Call the script on another actor in the scene as if the player had interacted with that actor.  
  <img src="/img/events/actor-invoke.png" class="event-preview" />

- **Actor: Hide**  
  Hide an actor so it is no longer visible. Hidden actors will no longer cause collisions and will not be able to be interacted with. You can hide the player on a Scene Start Script to make menu and title screens.  
  <img src="/img/events/actor-hide.png" class="event-preview" />

- **Actor: Show**  
  Unhide a previously hidden actor.  
  <img src="/img/events/actor-show.png" class="event-preview" />

## Sprite Events

- **Sprites: Hide All**  
  Hide all sprites in scene. Can be useful to create cutscenes where the player should not be visible by adding to a scene's starting script.  
  <img src="/img/events/sprites-hide.png" class="event-preview" />

- **Sprites: Show All**  
  Show all sprites that were previously hidden.  
  <img src="/img/events/sprites-show.png" class="event-preview" />

## Overlay Events

- **Overlay: Show**  
  Show either a black or white window over the top of the current game screen. Can be used to obscure and then reveal parts of the scene background for example on the sample project logo screen.  
  <img src="/img/events/overlay-show.png" class="event-preview" />

- **Overlay: Hide**  
  Hides the screen overlay.  
  <img src="/img/events/overlay-hide.png" class="event-preview" />

- **Overlay: Move To**  
  Moves the overlay to a new position on the screen.  
  <img src="/img/events/overlay-move-to.png" class="event-preview" />

## Input Events

- **Joypad Input: Pause Script Until Pressed**  
  Pauses the script until one of the specified joypad inputs are pressed.  
  <img src="/img/events/joypad-pause.png" class="event-preview" />

- **Joypad Input: Attach Script To Button**  
  Execute the specified script any time a joypad input button is pressed. If you attach scripts to a direction button or the _A_ button the scripts will override the default game actions.  
  <img src="/img/events/joypad-attach.png" class="event-preview" />

- **Joypad Input: Remove Attached Script**  
  Remove an attached script from a joypad input button restoring the default functionality of the button.  
  <img src="/img/events/joypad-attach.png" class="event-preview" />

## Music Events

- **Music: Play Track**  
  Plays a music file, optionally looping the file when finished.  
  <img src="/img/events/music-play.png" class="event-preview" />

- **Music: Stop**  
  Stops any currently playing music.  
  <img src="/img/events/music-stop.png" class="event-preview" />

## Timing Events

- **Wait**  
  Pause script for up to 10 seconds.  
  <img src="/img/events/wait.png" class="event-preview" />

## Game Data Events

- **Game Data: Save**  
  Save the current game data.  
  <img src="/img/events/data-save.png" class="event-preview" />

- **Game Data: Load**  
  Load the previously saved game data.  
  <img src="/img/events/data-load.png" class="event-preview" />

- **Game Data: Clear**  
  Remove any previously saved game data.  
  <img src="/img/events/data-clear.png" class="event-preview" />
