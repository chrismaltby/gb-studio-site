---
title: "Custom Events"
draft: false
next: "/docs/assets"
nextTitle: "Assets"
---

<span class="new">New in 1.2.0</span>

_Custom Events_ allow you to create reusable procedures in your game that can be used across any of your scripts.

Clicking in the background between scenes switches the sidebar back to the _Project Editor_ which will list any _Custom Events_ in your project along with a button to _Create Custom Event_.

Once you've given your _Custom Event_ a name you can start building a script in the same way you would for _Actors_, _Triggers_ and _Scenes_.

## Parameters

Whenever you add an event that reads a _Variable_ it will get added to the list of input parameters for the _Custom Event_, where you are able to give that input a memorable name. Events that affect _Actors_ will, by default, apply to the player but if you use the actor selector you will be able to set the event to read the _Actor_ value from an input parameter also.

For example the following custom event makes `Actor A` rotate in a circle.

<img src="/img/screenshots/custom-event-dance.png" class="event-preview" />

This custom event can then be used within _Actor_, _Trigger_ and _Scene_ scripts where it will appear as follows.

<img src="/img/events/custom-event.png" class="event-preview" />

If you ever want to edit the _Custom Event_ you can return to it using the list on the _Project Editor_ or by selecting _Edit Custom Event_ from the event dropdown menu.

<img src="/img/screenshots/custom-event-edit.png" class="event-preview" />
