---
title: "Skript-Ereignisse"
draft: false
next: "/doku/eigene-ereignisse"
nextTitle: "Selbsterstellte Ereignisse"
---

Skript-Ereignisse erlauben es dir Bestandteile deines Spiels dynamisch durch Spielerinteraktion zu beeinflussen. Nutze diese Ereignisse um Szenen zu verbinden, Dialogue zu ermöglichen oder Zwischensequenzen zu erstellen.

Falls Szene, Akteur oder Auslöser im _Welteditor_ ausgewählt wurde, so findet sich ein _Ereignis hinzufügen_ Knopf unten rechts in der _Seitenleiste_. Drücke auf diesen Knopf um Ereignisse hinzuzufügen. Falls an dieser Stelle schon Ereignisse aufgelistet sind, so werden diese Ereignisse von oben nach unten, eins nach dem anderen, ausgeführt.

Falls Ereignisse einem Akteur hinzugefügt werden, dann werden diese Ereignisse typischerweise dann ausgeführt, wenn der Spielercharakter sich in nächster Nähe zu diesem Akteur befindet und den Interaktionsknopf drückt. Ereignisse auf Auslösern werden ausgeführt sobald der Spielercharakter sich direkt über einem Auslöser befindet. Dieses Verhalten ist nützlich wenn man einen Türauslöser basteln möchte, mit welchem sich der Spieler zwischen zwei Szenen hin und herbewegen möchte. Ereignisse in der Seitenleiste der Szene selbst werden ausgelöst sobald diese Szene durch den Spielercharakter betreten wird. Das ist nützlich wenn man bestimmte Einstellungen tätigen möchte sobald die Szene geladen wird. Beispiele sind Zwischensequenzen oder die Berechnung von Variablen.

## Ereignis hinzufügen

Nach dem Klicken auf dem _Ereignis hinzufügen_ Knopf wird ein Menü zum Auswählen des Ereignisses in der oberen Mitte des GBStudio Fensters geöffnet. Durch das Angeben von Suchbegriffen kann man die Ereignisliste nach passenden Einträgen filtern lassen. Alternativ kann man mit dem Mausrad durch die anzeigte Liste scrollen. Klicke das Event mit der Maus an oder drücke die _Enter_ Taste auf der Tastatur um das ausgewählte Ereignis deinem Skript hinzuzufügen.

## Kopieren / Einfügen

Klicke auf den nach unten gerichteten Pfeil, welches sich rechts neben dem Ereignisnamen befindet, um eine DropDown-Liste anzuzeigen. Darin kann man das Ereignis auf die Zwischenablage hineinkopieren. Bei einem anderen Ereignis kann man dann das kopierte Ereignis hineinkopieren, entweder vor oder nach dem markierten Ereignis. Ebenfalls kann man auch nur die selbsteingestellten Werte eines Ereignisses kopieren und in ein identisches Ereignis hineinkopieren.

<span class="new">Neu in 1.2.0</span>

Du kannst nun auch die _Alt_ Taste gedrückt halten um alle _Ereignis hinzufügen_ in _Ereignis einfügen_ Knöpfe zu verwandeln. Nun kannst du bequem Ereignisse direkt am untersten Ende deines Skriptes einfügen.

## Text Ereignisse

- **Text: Dialog Anzeigen**
  Zeigt eine Dialogbox mit bis zu drei Zeilen Text am unteren Ende des Spielbildschirms an. Es können bis zu 18 Zeichen pro Zeile ausgegeben werden (also insgesamt 52 Zeichen). Dieses Ereignis wird häufig verwendet um Interaktionen zwischen Aktoren zu ermöglichen. Beim Einblenden des Textes wird die Dialogbox von unten aus in den Spielbildschirm reingeschoben und anschließend nach unten hinausgeschoben.
  <img src="/img/events/display-dialogue.png" class="event-preview" />
  <img src="/img/events/display-dialogue-preview.png" class="event-preview" />
  <br />

  - Durch den _+_ Knopf kannst du zusätzliche Dialogboxen mit je 3 Zeilen Text hinzufügen. Die Dialogbox bleibt in diesem Fall geöffnet bis die letzte Textpassage angezeigt wurde.
    <span class="new">Neu in 1.2.0</span>
  - Du kannst den Wert von Variablen in einer Dialogbox ausgeben in dem du die Kennung der Variable nutzt (Beispiel: `$L0$` für eine lokale Variable und `$182$` für die globale Variable 182).
  - Du kannst optional auch ein Avatarbild an der linken Ecke der Dialogbox anzeigen lassen indem du auf _Avatar Hinzufügen_ klickst und das entsprechende Bild auswählst. Du kannst jedes Sprite im Spielverzeichnis dafür nutzen, welches ein einzelndes Frame beinhaltet (`16px` x `16px`). Das Setzen eines Avatars reduziert die Anzahl darstellbarer Zeichen auf 16 Zeichen auf allen 3 Zeilen.

- **Text: Mehrfachauswahl Anzeigen**
  Zeigt zwei Optionen an, was es dem Spieler erlaubt eine Entscheidung zu fällen. Durch die Entscheidung wird eine ausgewählte Variable auf _Wahr_ setzen falls die erste Option gewählt wird. Die zweite Option setzt die Variable auf _Falsch_.
  <img src="/img/events/display-multiple-choice.png" class="event-preview" />
  <img src="/img/events/display-multiple-choice-preview.png" class="event-preview" />

- **Text: Menü Anzeigen** <span class="new">Neu in 1.2.0</span>
  Zeigt ein Menü aus mehreren Optionen an welche eine ausgewählte Variable je nach Entscheidung einem bestimmten Wert zuordnet. Jede Option hat eine maximale Zeichenlänge von `6` Zeichen. Mehrere Anordnungsmöglichkeiten sind gegeben: `Menü` (siehe unten) zeigt einen einzelnen Menübereich an der rechten Bildschirmhälfte an und listet die Optionen von oben nach unten auf während `Dialog` die gesamte untere Bildschirmbreite beansprucht und die Optionen zweispaltig anzeigt. Du kannst optional auch einstellen, dass der `B` Knopf das Menü schließt und die Variable auf `0` setzt. Ebenfalls kannst du einstellen, dass die letzte Option des Menüs die Variable auf `B` setzt.
  <img src="/img/events/menu.png" class="event-preview" />
  <img src="/img/events/menu-preview.png" class="event-preview" />

* **Text: Animationsgeschwindigkeit Festlegen**
  Stelle das Tempo ein mit welcher die Dialogboxen geöffnet, die Texte angezeigt und die Dialogboxen anschließend wieder geschlossen werden.
  <img src="/img/events/text-animation-speed.png" class="event-preview" />

## Szenen Ereignisse

- **Szene: Szene Wechseln**
  Wechselt die Szene und setzt den Spieler an eine definierte Position und Richtung. Eine Verbindungslinie wird zwischen der Szene wo dieses Ereignis einsetzt und der Szene welches im Ereignis ausgewählt wurde gezogen. Die Zielposition innerhalb der Zielszene wird mit einem <img src="/img/screenshots/destination-end.png" style="height:12px"/> Symbol versehen. Es ist möglich dieses Symbol nachträglich zu verschieben, ob in der Zielszene selbst oder über andere Szenen hinweg.
  <img src="/img/events/switch-scene.png" class="event-preview" />
  <img src="/img/events/switch-scene-preview.png" class="event-preview" />

- **Szene: Speicher Derzeitigen Szenenzustand Auf Stapel**
  Lege die derzeitige Szene und Position des Spielers auf den Szenenstapel. Dadurch ist es später möglich mithilfe des _Szene Zurückgeben_ Ereignisses zur exakt selben Szene und Position zurückzukehren. Eine übliche Anwendung dieses Ereignisses setzt die anschließende Verwendung des _Szene Wechseln_ Ereignisses voraus um zu eine Szene zu wechseln, die als Menü dient. Innerhalb dieser Menü-Szene kann man dann mithilfe des _Szene Zurückgeben_ Ereignisses zur gespeicherten Szene des Szenenstapels zurückkehren und somit wird die Menü-Szene verlassen.
  <img src="/img/events/scene-stack-push.png" class="event-preview" />

- **Szene: Gebe Vorherigen Szenenzustand Vom Stapel Zurück**
  Wechselt zur letzten gespeicherten Szene im Szenenstapel mit einer ausgewählten Einblendegeschwindigkeit. Beim Wechsel wird die Szene vom Szenenstapel entfernt, daher wird das erneute Ausführen des Ereignisses die nächstletzte gespeicherte Szene im Szenenstapel zum Wechseln verwendet.
  <img src="/img/events/scene-stack-pop.png" class="event-preview" />

- **Szene: Gebe Allerersten Szenenzustand Vom Stapel Zurück**
  Wechselt zur Szene im Szenenstapel, welche als allererstes gespeichert wurde. Als Anwendungsbeispiel dient ein tief geschachteltes Menü-Szenensystem. Durch dieses Ereignis kann man direkt zur Spielszene zurückkehren ohne die vorherigen Menü-Szenen in Betracht zu ziehen. Zusätzlich wird der gesamte Szenenstapel geleert, daher kann man dieses Ereignis nicht zweimal aneinanderreihen.
  <img src="/img/events/scene-stack-pop-all.png" class="event-preview" />

- **Szene: Leere Szenenstapel**
  Entfernt alle gespeicherten Szenen im Szenenstapel. Somit ist es anschließend nicht mehr möglich in einer der zuvor gespeicherten Szenen zurückzukehren.
  <img src="/img/events/scene-stack-clear.png" class="event-preview" />

## Variablen Ereignisse

Dein Spiel hat einen Speicher von 512 voneinander unabhängige Variablen auf welche all deine Skripte Zugriff haben. <span class="new">Neu in 1.2.0</span> Ebenfalls besitzt jeder _Akteur_, _Auslöser_ und _Szene_ 4 lokale Variablen, auf welche nur die jeweilige Instanz Zugriff hat. Lokale Variablen sind nützlich um bestimmte Zustände der Instanz festzuhalten. Als Beispiele dient die Anzahl an Gesprächsinteraktionen mit einem Akteur oder ob eine Schatzkiste bereits durch den Spieler geöffnet wurde oder nicht.

- **Variable: Auf 'Wahr' Setzen**
  Setzt eine festgelegte Variable auf _Wahr_.
  <img src="/img/events/variable-true.png" class="event-preview" />

- **Variable: Auf 'Falsch' Setzen**
  Setzt eine festgelegte Variable auf _Falsch_.
  <img src="/img/events/variable-false.png" class="event-preview" />

- **Variable: Auf Wert Setzen**
  Setzt eine festgelegte Variable auf einen bestimmten Wert.
  <img src="/img/events/variable-value.png" class="event-preview" />

- **Variabel: Inkrementieren Um 1**
  Erhöht den derzeitigen Wert einer festgelegten Variable um 1 mit einem Maximalwert von _255_. Falls der Wert zuvor auf _Falsch_ war, so wird der Wert nun auf _1_ gesetzt (somit auch: _Wahr_). Falls der Wert zuvor auf _Wahr_ war, so wird der Wert nun auf _2_ gesetzt.
  <img src="/img/events/variable-increment.png" class="event-preview" />

- **Variabel: Dekrementieren Um 1**
  Verringert den derzeitigen Wert einer festgelegten Variable um 1 mit einem Minimalwert von _0_. Falls der Wert zuvor auf _Wahr_ war, so wird der Wert nun auf _0_ gesetzt (somit auch: _Falsch_).
  <img src="/img/events/variable-decrement.png" class="event-preview" />

- **Variable: Mathematische Funktionen**
  Erlaubt die Verwendung von mathematischen Grundberechnungen einer festgelegten Variable um diesen mit Werten/Variablenwerten/Zufallswerten zu Addieren/Subtrahieren/Dividieren/Multiplizieren/Moduloberechnen.
  _Hinweis:_ Variablen haben einen Maximalwert von 255 und brechen um falls der Wert höher ist als 255 oder niedriger ist als 0.
  <img src="/img/events/variable-math.png" class="event-preview" />

- **Variable: Bitschalter Setzen** <span class="new">Neu in 1.2.0</span>
  Ermöglicht das Ansprechen individueller Bits einer Variablen welche aus 8Bits besteht. Somit kann man innerhalb dieser Bitschalter-Variable 8 voneinander unabhängige Wahr/Falsch Zustände festhalten. Dieses Ereignis überschreibt den vorherigen Variablenwert der festgelegten Variable.
  <img src="/img/events/variable-flags-set.png" class="event-preview" />

- **Variable: Bitschalter Hinzufügen** <span class="new"eu in 1.2.0</span>
  Setze die Zustände der ausgewählten Bitschalter innerhalb einer festgelegten Bitschalter-Variable auf _Wahr_. Alle nicht ausgewählten Bitschalter derselben Bitschalter-Variable behalten ihren vorherigen Zustand bei. Das heißt, dass Bitschalter, die nicht ausgewählt wurden, _nicht_ implizit auf Falsch gesetzt werden. Diese werden einfach ignoriert.
  <img src="/img/events/variable-flags-add.png" class="event-preview" />

- **Variable: Bitschalter Löschen** <span class="new">Neu in 1.2.0</span>
  Setze die Zustände der ausgewählten Bitschalter innerhalb einer festgelegten Bitschalter-Variable auf _Falsch_. Alle nicht ausgewählten Bitschalter derselben Bitschalter-Variable behalten ihren vorherigen Zustand bei. Das heißt, dass Bitschalter, die nicht ausgewählt wurden, _nicht_ implizit auf Wahr gesetzt werden. Diese werden einfach ignoriert.
  <img src="/img/events/variable-flags-clear.png" class="event-preview" />

- **Variable: Alle Variablen Auf 'Falsch' Zurücksetzen**
  Setzt alle 512 im Spiel verwendete Variablen zurück auf den Wert _Falsch_ (somit auch: _0_).
  <img src="/img/events/variable-reset-all.png" class="event-preview" />

## Kontrollfluss Ereignisse

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

- **If Variable Has Flag** <span class="new">New in 1.2.0</span>  
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

- **Switch** <span class="new">New in 1.2.0</span>  
  Conditionally execute from multiple options depending on the value of the specified variable. First choose how many options you want to compare the variable against, then set the values to compare and what scripts to execute when the value is matched.  
  <img src="/img/events/switch.png" class="event-preview" />

- **Loop Forever**  
  Execute part of the script in a loop forever. Remember to break out of the loop otherwise the player will become stuck at this point. You can use a _Stop Script_ or _Change Scene_ event to stop the loop.  
  <img src="/img/events/loop.png" class="event-preview" />

- **Label: Define / Label: Goto** <span class="new">New in 1.2.0</span>  
  Define markers in your script using _Label: Define_ giving the label a name and jump to markers using _Label: Goto_.  
  _Note:_ The name must be identical for the define/goto event pair to work. **Use with care!**
  <img src="/img/events/label-goto.png" class="event-preview" />

- **Event Group**  
  Provides no in game functionality but allows you to group a sequence of events together and give them a label (using the _Rename Event_ option on the event menu) and collapse the events into a single block.  
  <img src="/img/events/event-group.png" class="event-preview" />

- **Script: Stop**  
  Stops the current script from running.  
  <img src="/img/events/script-stop.png" class="event-preview" />

- **Disable Else** <span class="new">New in 1.2.0</span>  
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

- **Actor: Set Direction Using Variable** <span class="new">New in 1.2.0</span>  
  Set the facing direction of the specified actor from the value of a variable.  
  <img src="/img/events/actor-direction-variables.png" class="event-preview" />

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

- **Actor: Store Direction In Variable** <span class="new">New in 1.2.0</span>  
  Store the current direction of an actor into a variable.  
  <img src="/img/events/actor-store-direction.png" class="event-preview" />

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

- **Actor: Set Animation Frame Using Variable** <span class="new">New in 1.2.0</span>  
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

- **Actor: Collisions Disable** <span class="new">New in 1.2.0</span>  
  Prevent collisions from affecting the selected actor. If a scene actor is selected then the player will be able to walk through them, if the player is selected then you will be able to walk through all actors and collisions in the scene.  
  _Note:_ While collisions are disabled it is still posible to interact with the actor.  
  <img src="/img/events/actor-collisions-disable.png" class="event-preview" />

- **Actor: Collisions Enable** <span class="new">New in 1.2.0</span>  
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
  Plays a music file, optionally looping the file when finished.  
  <img src="/img/events/music-play.png" class="event-preview" />

- **Music: Stop**  
  Stops any currently playing music.  
  <img src="/img/events/music-stop.png" class="event-preview" />

## Sound Events

- **Sound: Play Effect** <span class="new">New in 1.2.0</span>  
  Play a sound effect, choose from playing a beep with a given pitch, a tone with a given frequency or cymbal crash. Using [Custom Events](/docs/custom-events) you can combine multiple effects into a single reusable event to make jingles.  
  <img src="/img/events/sound-tone.png" class="event-preview" />
  <img src="/img/events/sound-beep.png" class="event-preview" />
  <img src="/img/events/sound-crash.png" class="event-preview" />

## Timing Events

- **Wait**  
  Pause script for up to 10 seconds.  
  <img src="/img/events/wait.png" class="event-preview" />

- **Timer: Set Timer Script** <span class="new">New in 1.2.0</span>  
  Execute the specified script repeatedly after a time interval. The script will keep running in the background until a _Disable Timer Script_ event is called or the scene is changed using a _Change Scene_ event.
  <img src="/img/events/timer-set.png" class="event-preview" />

- **Timer: Restart Timer** <span class="new">New in 1.2.0</span>  
  Reset the countdown timer back to zero. The script will call again after the time specified originally.  
  <img src="/img/events/timer-restart.png" class="event-preview" />

- **Timer: Disable Timer Script** <span class="new">New in 1.2.0</span>  
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

- **Comment** <span class="new">New in 1.2.0</span>  
  Provides no functionality in game but allows you to leave notes within your scripts. The text you type automatically gets set in the event title so you can collapse the comment and still read its content.
  <img src="/img/events/comment.png" class="event-preview" />  
  You can also use the event dropdown menu to disable and reenable any event.  
  Disabled events will be skipped when run in game.  
  <img src="/img/events/event-disable-menu.png" class="event-preview" />
  <img src="/img/events/event-disabled.png" class="event-preview" />
