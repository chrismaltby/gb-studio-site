---
title: "Baue Dein Spiel"
draft: false
next: "/doku/einstellungen"
nextTitle: "Einstellungen"
---

## Spielen

Clicking the _Play button_ in the top right of the _Project Editor_ window will start a build of your game and once complete will open a new window where you can play your game. See [Keyboard Shortcuts](/docs/keyboard-shortcuts) for details on how to play your game in the _Play Window_.

## Baustation

Man kommt in die Baustation indem man in der oberen _Projektnavigation_ auf _Ansicht_ geht und auf _Bauen und Ausführen_ klickt. Dort kann man das Protokoll des Projekt-Bauprozesses finden. Zu dieser Oberfläche gelangt man auch wenn man auf den _Start_ Knopf drückt während der Bauprozess noch im Gange ist. Diese Oberfläche listet auch aufgetretene Fehler während des Bauprozesses auf und gibt die nötigen Hinweise um diese zu beheben.

## Als ROM bauen

Durch Klicken des _Exportieren Als..._ Knopfs in der oberen rechten Ecke des Editors und anschließendes Auswählen der _ROM exportieren_ Option kann das Spiel gebaut werden. Diese Option erstellt eine ROM Datei innerhalb des Projektordners in einem Build-Unterverzeichnis unter `$PROJEKT_STAMMVERZEICHNIS/build/rom/game.gb`. Man kann diese ROM Datei dann mit jedem kompatiblen Emulator wie beispielsweise [OpenEMU](https://openemu.org/) oder [KiGB](http://kigb.emuunlim.com/downloads.htm) öffnen und spielen.

## Bauen und für das Web nutzen

Durch Klicken des _Exportieren Als..._ Knopfs in der oberen rechten Ecke des Editors und anschließendes Auswählen der _Web exportieren_ Option kann eine HTML5 web build Version des Spiels gebaut werden. Den erstellten Ordner findet man dann unter `$PROJEKT_STAMMVERZEICHNIS/build/web`. Man kann diesen Ordner dann anschließend auf jedem Webserver hochladen, auf die `index.html` Seite navigieren und das Spiel von dort aus starten. Falls die Seite durch ein Smartphone oder Tablet aufgerufen wird, dann wird auch eine Touchscreen-Steuerung bereitgestellt.

Falls man den `build/web` Ordner als ZIP-Datei verpackt, dann kann diese Datei direkt auf [Itch.io](https://itch.io) hochgeladen werden um das gebaute Spiel als HTML-Spieleanwendung zu veröffentlichen. In diesem Fall ist es empfohlen die Größe des Ansichtsfensters auf `480px` x `432px` zu setzen.

## Fehlerbehebung

Falls auf einem macOS Betriebssystem Schwierigkeiten bestehen das Spiel über den GB Studio Editor zu spielen oder zu bauen, dann müssen die Command Line Tools von Apple noch installiert werden. Dazu öffnet man `Applications/Terminal.app` und gibt den folgenden Befehl ein:

```
xcode-select --install
```

Für das Windows Betriebssystem sollte man nach Bedarf die GB Studio Anwendung zur Whitelist des Antivirenprogramms hinzufügen damit der Bauprozess ohne Probleme ausgeführt werden kann.
