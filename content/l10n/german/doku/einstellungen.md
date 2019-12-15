---
title: "Einstellungen"
draft: false
---

<span class="new">Neu in 1.2.0</span>

In die Einstellungen gelangt man über der oberen _Projektnavigation_ unter _Ansicht_ und dann auf _Einstellungen_.

## GB Farboptionen

GB Studio hat eine begrenzte Unterstützung von Gameboy Color Funktionalitäten falls das Spiel auf kompatibler Hardware oder Emulatoren ausgeführt wird. Bislang gibt es zwei Optionen welche in den Einstellungen eingeschalten werden können:

- **Use Double Speed Mode (Improves CPU Performance)** - Erlaubt es der Spiel-Engine Gebrauch von der erhöhten CPU Leistung des Gameboy Colors zu machen. Dies bewirkt, dass Musikstörungen bei erhöhtem Leistungsaufwand vermieden werden und der Spielablauf trotz aufwendinger Skripte flüssiger wirkt.

- **Mit beutzerdefinierter Palette exportieren** - Erlaubt die Überschreibung der voreingestellten Farbpalette mit einer benutzerdefinierten Palette. Durch Klick auf eines der vier Farben können die Farbwerte für Rot, Grün und Blau eingegeben werden. Ebenso ist es möglich einen hexadezimalen Farbcode einzugeben und mithilfe des _Hex umwandeln_ Knopfs zur nächstmöglichen Farbe umzuwandeln.

<img title="Farbpalette" src="/img/screenshots/color-palette.png" width="513">

<img title="Farbpalette bearbeiten" src="/img/screenshots/color-palette-edit.png" width="513">

Durch die Nutzung einer eigenen Farbpalette kann man dem Spiel eine komplett andere Atmosphäre geben! Versuche herum zu experimentieren um den besten Effekt zu erzielen. Mithilfe des _Standard wiederherstellen_ Knopfs kann die ursprüngliche Farbpalette wiederhergestellt werden.

<img title="farbiges Spiel" src="/img/screenshots/color-game.png" width="592">

## Steuerung

Im Abschnitt _Steuerung_ kann man die voreingestellte Tastenbelegung ändern mit welchem man das Spiel im _Spielfenster_ oder als Web Build spielt.

Um die Steuerungsmöglichkeiten anzupassen, klickt man auf eines der Steuerungsfelder um dieses zu markieren und anschließend auf die gewünschte Taste um es zu registrieren. Um alle registrierten Tasten einer Steuerungsmöglichkeit zu entfernen, drückt man auf die _Rücktaste_ der Tastatur.

Um die voreingestellte Tastenbelegung wiederherzustellen, gibt es den _Standard wiederherstellen_ Knopf.

_Hinweis:_ Die Tastenbelegung unterscheidet zwischen Groß- und Kleinbuchstaben, daher ist es beispielweise bei der Taste _W_ ratsam, sowohl "W" als auch "w" auf die gleiche Steuerungsmöglichkeit zu registrieren.

<img title="Steuerung" src="/img/screenshots/controls.png" width="507">

## Modultyp

Im Abschnitt _Modultyp_ kann man zwischen verschiedenen Speicherbank Kontrollern wählen und ob eine Batterie beigefügt werden sollte wenn das Spiel auf ein physikalisches Modul exportiert wird. (Das Exportieren auf ein physikalisches Medium erfordert zusätzliche Hardware und Software.)

Falls man nichts über diese Einstellungsmöglichkeiten weiß, dann ist es ratsam die Voreinstellung beizubehalten (MBC5+RAM+BATTERY). Das erreicht man auch durch einen Klick auf den _Standard wiederherstellen_ Knopf.

## Eigener HTML Header

Im Abschnitt _Eigener HTML Header_ können zusätzliche Inhalte und spezielles Styling für den HTML `<head>` des Web Build hinzugefügt werden. Somit kann man eigene CSS Klassen definieren oder sogar von JavaScript Funktionen Gebrauch machen um die HTML Seite nach eigenen Wünschen anzupassen.
