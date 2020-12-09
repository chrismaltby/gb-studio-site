---
title: "Scripting Events"
draft: false
next: "/docs/custom-events"
nextTitle: "Custom Events"
---

Scripting events allow you to control parts of your game based on interactions from the player. They can be used to connect scenes together, change variables, give dialogue to characters, and more.

Scripts can be added to scenes, actors, or triggers. Selecting one of these objects will update the _World Editor_ to show the script of the selected object in the _Editor Sidebar_. 

To start building a script, select an object and click the _Add Event button_ in the _Editor Sidebar_ to open the event menu. Select an event to add it to the script. The topmost event is the first event to be run for that script.

# Adding Events

After clicking the _Add Event_ button, a menu will appear to choose the event to add. If you start typing you can filter this list or you can scroll through it to find what you're looking for. Click an event or press the _Enter_ key to add the highlighted event to your script.

To copy an event, click the down arrow next to an event. All scripts have this same down arrow for copying/pasting. Clicking the down arrow on another event allows you to paste the clipboard event either before or after the selected one. You also have the option to paste the values from the first event into the second.

As a shortcut for pasting, you can press the _Alt_ key to turn all _Add Event_ buttons into _Paste Event_ buttons.

# Types of Scripts

There are multiple script tabs to choose from the _Editor Sidebar_ depending on which object you have currently selected.



## Scene Scripts

These scripts can be accessed in the _Editor Sidebar_ by selecting a scene in your project.

### On Init

This script will run once at the beginning of the Scene. The Scene On Init script is always run after the On Init script for Actors in the Scene.

### On Player Hit

This script runs when the player is hit by an actor belonging to a collision group.

## Actor Scripts

These scripts can be accessed in the _Editor Sidebar_ by clicking an Actor in your project or using the Navigation list in each scene.

### On Init

This script will run once at the beginning of the Scene. Actors in a Scene will always run their On Init script before their Scene's On Init script.

### On Interact

Standing the Player next to an Actor and pressing the **A** button will cause the Player to "interact" with the Actor. Interacting with an Actor will begin this script. In Shoot 'Em Up scenes, interacting can additionally be done by colliding with the Actor.

This script is often used for dialogue, using the "Text: Display Dialogue" event.

Enabling a collision group for an actor will convert this script to _On Hit: Player_, which looks for Player collision rather than Player interaction. This behaviour is identical to _On Interact_ in Shoot 'Em Up scenes.

### On Hit

This script runs when the Actor is hit by another Actor or Projectile belonging to a collision group.

### On Update

This script is run once every frame, and can only be added to non-player Actors.

## Trigger Scripts

Trigger scripts only have an "On Trigger" script. The player must be inside the trigger to start this script. This is often used for creating doorways between scenes.

# Event Glossary

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

- **Text: Display Menu**  
  Display a menu of multiple options and set the specified variable to the value of the chosen option. Each menu item has a maximum length of `6` characters.  
  Multiple layouts are provided, `Menu` (shown below) displays as a single column on the right hand side of the game screen and `Dialogue` displays a full width dialogue box with two columns. You can optionally set the `B` button to close the menu setting the variable to `0` and can also make the last menu item return `0` when selected.  
  <img src="/img/events/menu.png" class="event-preview" />
  <img src="/img/events/menu-preview.png" class="event-preview" />

* **Text: Set Animation Speed**  
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

Your game has 512 variables that can be shared across all the scripts in your game. <span class="new">New in 1.2.0</span> Additionally every _Actor_, _Trigger_ and _Scene_ has 4 local variables that can only be accessed by that specific entity. Local variables are useful for keeping track of state specific to an entity such as how many times you have spoken to a character or if a treasure chest is open or closed.

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

- **Variable: Set Flags**  
  Set the value of a variable by enabling individual bits of the 8-bit number. Allows 8 true/false values to be stored within a single variable. Setting the flags will replace the previous value of the variable.  
  <img src="/img/events/variable-flags-set.png" class="event-preview" />

- **Variable: Add Flags**  
  Set selected flags to true on a variable. All unselected flags will keep their previous value.
  <img src="/img/events/variable-flags-add.png" class="event-preview" />

- **Variable: Clear Flags**  
  Set selected flags to false on a variable. All unselected flags will keep their previous value.
  <img src="/img/events/variable-flags-clear.png" class="event-preview" />

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

- **If Variable Has Flag**  
  Conditionally execute part of the script if the specified variable has the chosen flag set as true.  
  <img src="/img/events/if-variable-flag.png" class="event-preview" />

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

- **Switch**  
  Conditionally execute from multiple options depending on the value of the specified variable. First choose how many options you want to compare the variable against, then set the values to compare and what scripts to execute when the value is matched.  
  <img src="/img/events/switch.png" class="event-preview" />

- **Loop Forever**  
  Execute part of the script in a loop forever. Remember to break out of the loop otherwise the player will become stuck at this point. You can use a _Stop Script_ or _Change Scene_ event to stop the loop.  
  <img src="/img/events/loop.png" class="event-preview" />

- **Label: Define / Label: Goto**  
  Define markers in your script using _Label: Define_ giving the label a name and jump to markers using _Label: Goto_.  
  _Note:_ The name must be identical for the define/goto event pair to work. **Use with care!**
  <img src="/img/events/label-goto.png" class="event-preview" />

- **Event Group**  
  Provides no in game functionality but allows you to group a sequence of events together and give them a label (using the _Rename Event_ option on the event menu) and collapse the events into a single block.  
  <img src="/img/events/event-group.png" class="event-preview" />

- **Script: Stop**  
  Stops the current script from running.  
  <img src="/img/events/script-stop.png" class="event-preview" />

- **Disable Else**  
  If you don't require an _Else_ branch in any of your control flow events you can now disable it by selecting _Disable Else_ from the event dropdown menu. The same menu can be used to restore an _Else_ branch if needed at a later time.
  <img src="/img/events/disable-else.png" class="event-preview" />

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

- **Actor: Set Direction Using Variable**  
  Set the facing direction of the specified actor from the value of a variable.  
  
  <img src="/img/events/actor-direction-variables.png" class="event-preview" />  
  
  | Direction |	Value |
  | --------- |	----- |
  | Down      | 1 |
  | Right     | 2 |
  | Up        | 3 |
  | Left      | 4 |
  
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

- **Actor: Store Position In Variables**  
  Store the current position of an actor into two variables.  
  <img src="/img/events/actor-store-position.png" class="event-preview" />

- **Actor: Store Direction In Variable**  
  Store the current direction of an actor into a variable.  
  
  <img src="/img/events/actor-store-direction.png" class="event-preview" />  
  
  | Direction |	Value |
  | --------- |	----- |
  | Down      | 1 |
  | Right     | 2 |
  | Up        | 3 |
  | Left      | 4 |
  
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

- **Actor: Set Animation Frame Using Variable**  
  Set the current animation frame of the specified actor to the value of a variable.  
  <img src="/img/events/actor-set-frame-variable.png" class="event-preview" />

- **Actor: Set Animation Speed**  
  Set the animation speed of the specified actor.  
  <img src="/img/events/actor-animation-speed.png" class="event-preview" />

- **Actor: Set Movement Speed**  
  Set the movement speed of the specified actor.  
  <img src="/img/events/actor-movement-speed.png" class="event-preview" />

- **Actor: Set Player Sprite Sheet**  
  Change the player sprite sheet from the default defined in the _Project Editor_. Changes to the player sprite sheet will persist between scene transitions so make sure to change it back if the change was supposed to be temporary.  
  <img src="/img/events/actor-player-spritesheet.png" class="event-preview" />

- **Actor: Collisions Disable**  
  Prevent collisions from affecting the selected actor. If a scene actor is selected then the player will be able to walk through them, if the player is selected then you will be able to walk through all actors and collisions in the scene.  
  _Note:_ While collisions are disabled it is still posible to interact with the actor.  
  <img src="/img/events/actor-collisions-disable.png" class="event-preview" />

- **Actor: Collisions Enable**  
  Reenable collisions on the selected actor.  
  <img src="/img/events/actor-collisions-enable.png" class="event-preview" />

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
  Plays a music .mod file, optionally looping the file when finished. If you play a new song while another song is playing, the old song will stop automatically.  
  <img src="/img/events/music-play.png" class="event-preview" />

- **Music: Stop**  
  Stops any currently playing music. Put this before a Music: Play Track event to restart the same song from the beginning.  
  <img src="/img/events/music-stop.png" class="event-preview" />

## Sound Events

- **Sound: Play Effect**  
  Play a sound effect, choose from playing a beep with a given pitch, a tone with a given frequency or cymbal crash. Using [Custom Events](/docs/custom-events) you can combine multiple effects into a single reusable event to make jingles.  
  <img src="/img/events/sound-tone.png" class="event-preview" />
  <img src="/img/events/sound-beep.png" class="event-preview" />
  <img src="/img/events/sound-crash.png" class="event-preview" />

## Timing Events

- **Wait**  
  Pause script for up to 10 seconds.  
  <img src="/img/events/wait.png" class="event-preview" />

- **Timer: Set Timer Script**  
  Execute the specified script repeatedly after a time interval. The script will keep running in the background until a _Disable Timer Script_ event is called or the scene is changed using a _Change Scene_ event.
  <img src="/img/events/timer-set.png" class="event-preview" />

- **Timer: Restart Timer**  
  Reset the countdown timer back to zero. The script will call again after the time specified originally.  
  <img src="/img/events/timer-restart.png" class="event-preview" />

- **Timer: Disable Timer Script**  
  Remove the timer script so it will no longer be called.  
  <img src="/img/events/timer-disable.png" class="event-preview" />

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

## Miscellaneous Events

- **Comment**
  Allows you to leave notes within your scripts. Provides no functionality in-game. The text you type automatically gets set in the event title, so you can collapse the comment and still read its content.
  <img src="/img/events/comment.png" class="event-preview" />  
  You can also use the event dropdown menu to disable and reenable any event.  
  Disabled events will be skipped when run in game.  
  <img src="/img/events/event-disable-menu.png" class="event-preview" />
  <img src="/img/events/event-disabled.png" class="event-preview" />
