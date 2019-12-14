---
title: "Darsteller"
draft: false
next: "/doku/ausloeser"
nextTitle: "Auslöser"
---

Darsteller sind Charaktere und Objekte innerhalb der Szene mit denen der Spielcharakter interagieren kann.

## Darsteller hinzufügen

Um einen Darsteller zur Szene hinzuzufügen, klickt man auf den _**+** Knopf_ in der oberen linken Ecke der _Editor Werkzeugleiste_ und dann auf _Darsteller_ (alternativ auch mit der **A** Taste). Danach kann man den Darsteller in einer beliebigen Szene an einer beliebigen Position platzieren.

<img src="/img/screenshots/add-actor.gif" style="width:300px"/>

Die _Editor Seitenleiste_ wechselt anschließend zu den Darsteller Einstellungen wo man unter anderem den Darstellernamen angeben, die Darstellerposition festlegen (alternativ auch via Drag & Drop möglich), das Aussehen des Darstellers durch Angabe eines [Sprite-Sheet](/doku/sprites) einstellen, die Blickrichtung des Darstellers angeben, die Bewegungsgeschwindigkeit bestimmen und ein Ereignisskript entwerfen kann. Letzteres wird immer dann ausgeführt wenn der Spielcharakter mit diesem Darsteller interagiert.

## Bewegungsart

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
