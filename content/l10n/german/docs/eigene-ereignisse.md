---
title: "Eigene Ereignisse"
draft: false
next: "/docs/ressourcen"
nextTitle: "Ressourcen"
aliases:
    - /de/docs/custom-events
---

<span class="new">Neu in 1.2.0</span>

Mithilfe von _Eigenen Ereignissen_ kann man Prozeduren (also eine Reihe von Ereignissen) für das Projekt zusammenstellen und diese als eigenständige Ereignisse wiederverwenden. Alle Szenen- und Darstellerskripte haben Zugriff auf diese _Eigenen Ereignisse_ und somit kann man diese Prozeduren zentral an einer Stelle bearbeiten und dadurch einfacher pflegen.

Durch das Klicken auf den Hintergrund des Editors (also die leere Großfläche zwischen den Szenen) wechselt die Seitenleiste zurück zu den _Projekteditor_ Einstellungen. Darin finden sich alle _Eigenen Ereignisse_ und darunter ein _Eigenes Ereignis hinzufügen_ Knopf.

Nachdem das _Eigene Ereignis_ einen Namen erhalten hat, kann man mit der Erstellung des Ereignisskripts beginnen. Dies unterscheidet sich nicht von der herkömmlichen Art und Weise wie Skripte für _Darsteller_, _Auslöser_ und _Szenen_ angelegt werden.

## Parameter

Immer wenn ein Ereignis hinzugefügt wird, welches eine festgelegte _Variable_ benötigt, so wird eine Variablenreferenz zu der Liste an Parametern des _Eigenen Ereignisses_ hinzugefügt. Die Variablenreferenzen können noch nach Belieben umbenannt werden damit die Übersicht nicht verloren geht. Ereignisse mit einem festgelegten _Darsteller_ sind standardmäßig auf den Spielercharakter gerichtet aber man kann auch eine Darstellerreferenz angeben und diese dann als Parameter behandeln. Die Liste an Parametern können bis zu 10 verschiedene Variablenreferenzen und bis zu 10 verschiedene Darstellerreferenzen in sich tragen.

Als Beispiel sorgt das darunter liegende _Eigene Ereignis_ dafür, dass `Darsteller A` sich im Kreis dreht.

<img src="/img/screenshots/custom-event-dance.png" class="event-preview" />

Dieses Eigene Ereignis kann dann als eigenständiges Ereignis in der Ereignisliste gefunden werden und dem _Darsteller-_, _Auslöser-_ und _Szenenskript_ hinzugefügt werden.  
_Hinweis:_ Es ist noch nicht möglich _Eigene Ereignisse_ in _Eigenen Ereignissen_ hinzuzufügen, da die Gefahr besteht, dass ein Ereignis sich selbst hinzufügt und somit unvorhersehbare Schäden verursacht.

<img src="/img/events/custom-event.png" class="event-preview" />

Falls das _Eigene Ereignis_ angepasst werden muss, dann kann man dies entweder im _Projekteditor_ tun indem man auf das jeweilige _Eigene Ereignis_ klickt, oder indem man im Dropdown-Menü die Option _Eigenes Ereignis bearbeiten_ auswählt wenn das Eigene Ereignis bereits einem Skript hinzugefügt wurde.

<img src="/img/screenshots/custom-event-edit.png" class="event-preview" />
