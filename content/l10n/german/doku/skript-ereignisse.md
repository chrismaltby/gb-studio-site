---
title: "Skript-Ereignisse"
draft: false
next: "/doku/eigene-ereignisse"
nextTitle: "Selbsterstellte Ereignisse"
---

Skript-Ereignisse erlauben es dir Bestandteile deines Spiels dynamisch durch Spielerinteraktion zu beeinflussen. Nutze diese Ereignisse um Szenen zu verbinden, Dialogue zu ermöglichen oder Zwischensequenzen zu erstellen.

Falls Szene, Darsteller oder Auslöser im _Welteditor_ ausgewählt wurde, so findet sich ein _Ereignis hinzufügen_ Knopf unten rechts in der _Seitenleiste_. Drücke auf diesen Knopf um Ereignisse hinzuzufügen. Falls an dieser Stelle schon Ereignisse aufgelistet sind, so werden diese Ereignisse von oben nach unten, eins nach dem anderen, ausgeführt.

Falls Ereignisse einem Darsteller hinzugefügt werden, dann werden diese Ereignisse typischerweise dann ausgeführt, sobald der Spielercharakter sich in nächster Nähe zu diesem Darsteller befindet und den Interaktionsknopf drückt. Ereignisse auf Auslösern werden ausgeführt sobald der Spielercharakter sich direkt über einem Auslöser befindet. Dieses Verhalten ist nützlich wenn man einen Türauslöser basteln möchte, mit welchem sich der Spieler zwischen zwei Szenen hin- und herbewegen möchte. Ereignisse in der Seitenleiste der Szene werden ausgelöst sobald der Spielercharakter sich in der Szene befindet. Das ist nützlich wenn man bestimmte Einstellungen tätigen möchte sobald die Szene geladen wird. Beispiele sind Zwischensequenzen oder die Vorberechnung von Variablen.

## Ereignis hinzufügen

Nach dem Klicken auf dem _Ereignis hinzufügen_ Knopf wird ein Menü zum Auswählen des Ereignisses in der oberen Mitte des GBStudio Fensters geöffnet. Durch das Angeben von Suchbegriffen kann man die Ereignisliste nach passenden Einträgen filtern lassen. Alternativ kann man mit dem Mausrad durch die angezeigte Liste scrollen. Klicke das gewünschte Ereignis mit der Maus an oder drücke die _Enter_ Taste auf der Tastatur um das ausgewählte Ereignis deinem Skript hinzuzufügen.

## Kopieren / Einfügen

Klicke auf den nach unten gerichteten Pfeil, welches sich rechts neben dem Ereignisnamen befindet, um eine DropDown-Liste anzuzeigen. Darin kann man das jeweilige Ereignis auf die Zwischenablage hineinkopieren. Bei einem anderen Ereignis kann man dann das kopierte Ereignis hineinkopieren, entweder vor oder nach dem markierten Ereignis. Ebenfalls kann man auch nur die vorher konfigurierten Werte eines Ereignisses kopieren und in ein identisches Ereignis hineinkopieren.

<span class="new">Neu in 1.2.0</span>

Du kannst nun auch die _Alt_ Taste gedrückt halten um alle _Ereignis hinzufügen_ Knöpfe in _Ereignis einfügen_ Knöpfe zu verwandeln. Nun kannst du bequem Ereignisse direkt am untersten Ende deines Skriptes einfügen.

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

Dein Spiel hat einen Speicher von 512 voneinander unabhängige Variablen auf welche all deine Skripte Zugriff haben. <span class="new">Neu in 1.2.0</span> Ebenfalls besitzt jeder _Darsteller_, _Auslöser_ und _Szene_ 4 lokale Variablen, auf welche nur die jeweilige Instanz Zugriff hat. Lokale Variablen sind nützlich um bestimmte Zustände der Instanz festzuhalten. Als Beispiele dient die Anzahl an Gesprächsinteraktionen mit einem Darsteller oder ob eine Schatzkiste bereits durch den Spieler geöffnet wurde oder nicht.

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

- **Falls Variable 'Wahr' Ist**
  Führt den zugehörigen Skript aus, falls eine festgelegte Variable auf _Wahr_ gesetzt wurde.
  <img src="/img/events/if-true.png" class="event-preview" />

- **Falls Variable 'Falsch' Ist**
  Führt den zugehörigen Skript aus, falls eine festgelegte Variable auf _Falsch_ gesetzt wurde.
  <img src="/img/events/if-false.png" class="event-preview" />

- **Falls Variable Mit Wert Verglichen**
  Führt den zugehörigen Skript aus, falls der Wert einer festgelegten Variable "Größer", "Kleiner", "Gleich" ist als ein bestimmter Wert.
  <img src="/img/events/if-variable-value.png" class="event-preview" />

- **Falls Variable Mit Variable Verglichen**
  Führt den zugehörigen Skript aus, falls der Wert einer festgelegten Variable "Größer", "Kleiner", "Gleich" ist als eine andere Variable.
  <img src="/img/events/if-variable-variable.png" class="event-preview" />

- **Falls Variable Mit Bitschalter** <span class="new">Neu in 1.2.0</span>
  Führt den zugehörigen Skript aus, falls ein bestimmter Bitschalter einer festgelegten Variable auf _Wahr_ gesetzt wurde.
  <img src="/img/events/if-variable-flag.png" class="event-preview" />

- **Falls Joypad-Eingabe Gedrückt**
  Führt den zugehörigen Skript aus, falls zum derzeitigen Zeitpunkt ein bestimmter Input registriert wird. Dieses Ereignis wartet nicht aktiv auf eine Benutzer-Eingabe, deshalb sollte man dieses Ereignis direkt nach dem _Joypad-Eingabe: Skript Pausieren Bis Gedrückt_ Ereignis anknüpfen, falls das unbestimmte Warten auf Benutzer-Eingabe gewünscht ist. Dieses Ereignis ist zudem eine einmalige Abfrage. Falls gewünscht ist, dass ein Skript nach jedem bestimmten Input ausgeführt werden soll, dann ist es besser das _Joypad-Eingabe: Binde Skript An Eingabe_ Ereignis zu verwenden.
  <img src="/img/events/if-joypad-input.png" class="event-preview" />

- **Falls Darsteller An Position**
  Führt den zugehörigen Skript aus, falls ein festgelegter Darsteller sich an einer bestimmten Position innerhalb derselben Szene befindet.
  <img src="/img/events/if-actor-position.png" class="event-preview" />

- **Falls Blickrichtung Des Darstellers**
  Führt den zugehörigen Skript aus, falls ein festgelegter Darsteller in eine bestimmte Richtung blickt.
  <img src="/img/events/if-actor-direction.png" class="event-preview" />

- **Falls Spieldaten Gespeichert**
  Führt den zugehörigen Skript aus, falls ein gespeicherter Spielstand existiert.
  <img src="/img/events/if-game-saved.png" class="event-preview" />

- **Switch** <span class="new">Neu in 1.2.0</span>
  Führt den zugehörigen Skript aus, falls der Wert einer festgelegten Variable der gleiche ist wie eines der Werte innerhalb einer Reihe von Werten gleicht. Zuerst wird die Anzahl der zu vergleichenden Werte festgelegt, danach werden die unterschiedlichen Werte festgelegt. Zuletzt wird verglichen und bei Übereinstimmung entschieden welches Skript ausgeführt wird.
  <img src="/img/events/switch.png" class="event-preview" />

- **Endlos-Schleife**
  Führt den zugehörigen Skript in einer Endlos-Schleife aus. Um aus dieser Schleife herauszubrechen ist es notwendig von den Ereignissen _Skript: Anhalten_ und _Szene: Szene wechseln_ Gebrauch zu machen, sonst kann der Spieler das Spiel nicht fortsetzen.
  <img src="/img/events/loop.png" class="event-preview" />

- **Label: Label Definieren / Label: Springe Zu Label** <span class="new">Neu in 1.2.0</span>
  Definiert Markierungen im Skript mithilfe von _Label: Label Definieren_ und versieht diese Markierung mit einem Labelnamen. Es ist anschließend möglich im selben Skript zur vorhin definierten Markierung mithilfe von _Label: Springe Zu Label_ zurückzuspringen.
  _Hinweis:_ Der angegebene Labelname in beiden Ereignissen muss derselbe sein, damit das Zurückspringen funktioniert. **Mit Vorsicht zu genießen!**
  <img src="/img/events/label-goto.png" class="event-preview" />

- **Ereignisgruppe**
  Hat keinerlei Auswirkung auf das Spiel und dient zur Gruppierung einer Reihe von Ereignissen. Die Ereignisgruppe kann nach Belieben mithilfe der _Ereignis umbenennen_ Option benannt werden. Kann den innen liegenden Skript zusammenklappen.
  <img src="/img/events/event-group.png" class="event-preview" />

- **Skript: Anhalten**
  Hält den derzeitig ausgeführten Skript an.
  <img src="/img/events/script-stop.png" class="event-preview" />

- **Sonst-Zweig Deaktivieren** <span class="new">Neu in 1.2.0</span>
  Falls keine Verwendung für den _Sonst_ Zweig besteht oder gleichfalls bei allen anderen Kontrollfluss-Ereignissen besteht, dann kann dieser Zweig durch das Ereignis-Dropdown Menü ausgeschaltet werden. Ebenfalls kann der Sonst_Zweig zu einem späteren Zeitpunkt wieder aktiviert werden.
  <img src="/img/events/disable-else.png" class="event-preview" />

## Kamera Ereignisse

- **Kamera: Bewegen Zu Position**
  Bewegt die Kamera zu einer festgelegten Position innerhalb der Szene.
  <img src="/img/events/camera-move-to.png" class="event-preview" />

- **Kamera: An Spieler Binden**
  Bewegt die Kamera zurück zum Spielcharakter. Die Kamera bewegt sich nun mit dem Spielcharakter mit.
  <img src="/img/events/camera-lock-to-player.png" class="event-preview" />

- **Kamera: Rütteln**
  Rüttelt die Kamera in horizontaler Richtung für bis zu 10 Sekunden.
  <img src="/img/events/camera-shake.png" class="event-preview" />

## Bildschirm Ereignisse

- **Bildschirm: Einblenden**
  Blendet den Bildschirm allmählich weiß.
  <img src="/img/events/screen-fade-in.png" class="event-preview" />

- **Screen: Fade Out**
  Blendet den Bildschirm von komplett weißem Hintergrund zurück zur ursprünglichen Bildschirmausgabe.
  <img src="/img/events/screen-fade-out.png" class="event-preview" />

## Darsteller Ereignisse

- **Darsteller: Blickrichtung Festlegen**
  Setzt die Blickrichtung des festgelegten Darstellers.
  <img src="/img/events/actor-set-direction.png" class="event-preview" />
  <img src="/img/events/actor-set-direction-preview.png" class="event-preview" />

- **Darsteller: Blickrichtung Anhand Variable Festlegen** <span class="new">Neu in 1.2.0</span>
  Setzt die Blickrichtung des festgelegten Darstellers mithilfe eines Variablenwertes.
  <img src="/img/events/actor-direction-variables.png" class="event-preview" />

- **Darsteller: Position Festlegen**
  Setzt die Position des festgelegten Darstellers innerhalb einer Szene. Der Darsteller wird sofort zu der gesetzten Position teleportiert.
  <img src="/img/events/actor-position.png" class="event-preview" />

- **Darsteller: Position Anhand Variablen Festlegen**
  Setzt die Position des festgelegten Darstellers innerhalb einer Szene mithilfe von Variablenwerten. Der Darsteller wird sofort zu der gesetzten Position teleportiert.
  <img src="/img/events/actor-position-variables.png" class="event-preview" />

- **Darsteller: Relative Position Festlegen**
  Setzt die Position des festgelegten Darstellers relativ zu der derzeitigen Position des Darstellers. Der Darsteller wird sofort zu der gesetzten Position teleportiert.
  <img src="/img/events/actor-relative-position.png" class="event-preview" />

- **Darsteller: Bewegen Zu Position**
  Lässt den festgelegten Darsteller zu einer Position innerhalb der Szene laufen. Die durchlaufende Strecke ist wirkürrlich und nicht steuerbar, ebenso wird der Darsteller jegliche Kollisionshindernisse ignorieren. Falls erwünscht ist, dass der Darsteller eine bestimmte Strecke laufen soll, dann wäre es empfehlenswert mehrere dieser Ereignisse aneinanderzureihen und die Bewegungen schrittweise im Detail zu beschreiben.
  <img src="/img/events/actor-move-to.png" class="event-preview" />

- **Darsteller: Relativ Bewegen**
  Lässt den festgelegten Darsteller relativ zu seiner derzeitigen Position innerhalb der Szene laufen. Zuerst wird sich der Darsteller in horizontaler Richtung bewegen, anschließend in vertikaler Richtung.
  <img src="/img/events/actor-relative-move.png" class="event-preview" />

- **Darsteller: Bewegen Zu Position Anhand Variablen**
  Lässt den festgelegten Darsteller zu einer Position innerhalb der Szene mithilfe von Variablenwerten laufen.
  <img src="/img/events/actor-move-to-variables.png" class="event-preview" />

- **Darsteller: Position In Variablen Speichern**
  Speichert die derzeitige Position eines festgelegten Darstellers in zwei Variablen ab.
  <img src="/img/events/actor-store-position.png" class="event-preview" />

- **Darsteller: Blickrichtung In Variablen Speichern** <span class="new">Neu in 1.2.0</span>
  Speichert die derzeitige Blickrichtung eines festgelegten Darstellers in eine Variable ab.
  <img src="/img/events/actor-store-direction.png" class="event-preview" />

- **Darsteller: Von Spieler Wegschieben**
  Schiebt einen Darsteller in die derzeitige Blickrichtung des Spielers. Standardmäßig wird der Darsteller nur um eine Position geschoben, jedoch kann man optional auch einstellen, dass der Darsteller bis zur nächsten Kollision geschoben wird.
  <img src="/img/events/actor-push.png" class="event-preview" />

- **Darsteller: Emotions-Blase**
  Zeigt eine kleine Emotions-Blase über einem festgelegten Darsteller an. Die Emotionsgesten sind: _Shock/Ausrufezeichen_, _Question/Fragezeichen_, _Love/Herz_, _Pause/Dreipunkt_, _Anger/Zorn_, _Sweat/Schweißperle_, _Music/Musiknote_ and _Sleep/Schlaf_. Die angezeigten Symbole können verändert werden, indem die Grafikdatei [UI Elemente](/doku/ui-elemente#emotes-png) innerhalb der Spiel-Ressourcen bearbeitet wird.
  <img src="/img/events/actor-emote.png" class="event-preview" />
  <img src="/img/events/actor-emote-preview.png" class="event-preview" />

- **Darsteller: Animationsframe Festlegen**
  Setzt die derzeitig anzuzeigende Animationsframe eines festgelegten Darstellers.
  <img src="/img/events/actor-set-frame.png" class="event-preview" />

- **Darsteller: Animationsframe Anhand Variable Festlegen** <span class="new">Neu in 1.2.0</span>
  Setzt die derzeitig anzuzeigende Animationsframe eines festgelegten Darstellers mithilfe eines Variablenwertes.
  <img src="/img/events/actor-set-frame-variable.png" class="event-preview" />

- **Darsteller: Animationsgeschwindigkeit Festlegen**
  Setzt die Animationsgeschwindigkeit eines festgelegten Darstellers. Je höher der Wert, desto schneller die Geschwindigkeit.
  <img src="/img/events/actor-animation-speed.png" class="event-preview" />

- **Darsteller: Bewegungsgeschwindigkeit Festlegen**
  Setzt die Bewegungsgeschwindigkeit eines festgelegten Darstellers. Je höher der Wert, desto schneller die Geschwindigkeit.
  <img src="/img/events/actor-movement-speed.png" class="event-preview" />

- **Spieler: Setze Spieler Sprite-Sheet**
  Verändert das Spieler Sprite-Sheet und somit auch das Aussehen. Diese Änderung überschreibt auch das im _Projekteditor_ voreingestellte Sprite-Sheet und besteht auch wenn der Spieler die Szene wechselt. Falls diese Änderung nur temporär sein sollte, dann muss daran gedacht werden, dass das Sprite-Sheet an einer geeigneten Stelle auch zurückgeändert werden muss.
  <img src="/img/events/actor-player-spritesheet.png" class="event-preview" />

- **Darsteller: Kollisionen Ausschalten** <span class="new">Neu in 1.2.0</span>
  Verhindert für einen festgelegten Darsteller jegliche Kollisionen. Falls ein Szenendarsteller dafür festgelegt wurde, so kann der Spielercharakter nun durch diesen Szenendarsteller laufen. Falls der Spielercharakter dafür festgelegt wurde, so kann dieser nun durch alle sonstigen Darsteller und sogar durch alle Szenenbegrenzungen laufen.
  _Hinweis:_ Obwohl die Kollisionen für den festgelegten Darsteller ausgeschaltet wurden, so ist eine Interaktion mit diesem Darsteller immer noch möglich.
  <img src="/img/events/actor-collisions-disable.png" class="event-preview" />

- **Darsteller: Kollisionen Einschalten** <span class="new">Neu in 1.2.0</span>
  Schaltet für einen festgelegten Darsteller wieder Kollisionen ein falls dieser durch obiges Ereignis ausgeschalten wurde.
  <img src="/img/events/actor-collisions-enable.png" class="event-preview" />

- **Darsteller: Darsteller-Skript Aufrufen**
  Ruft den Interaktionsskript eines festgelegten Darsteller auf, welches sich auf derselben Szene befindet wie der Spielcharakter. Es wird simuliert, dass der Spielercharakter mit dem festgelegten Darsteller interagiert.
  <img src="/img/events/actor-invoke.png" class="event-preview" />

- **Darsteller: Ausblenden**
  Versteckt den Darsteller und somit ist dieser nun unsichtbar. Versteckte Darsteller können keine Kollisionen verursachen und der Spielercharakter kann nicht mehr mit ihnen interagieren. Es ist üblich den Spielercharakter innerhalb von Menüsystemen oder Zwischensequenzen auszublenden.
  <img src="/img/events/actor-hide.png" class="event-preview" />

- **Darsteller: Einblenden**
  Zeigt einen versteckten Darsteller wieder an.
  <img src="/img/events/actor-show.png" class="event-preview" />

## Sprite Ereignisse

- **Sprites: Alle Einblenden**
  Versteckt alle definierten Darsteller innerhalb der derzeitigen Szene. Für Zwischensequenzen ist es praktisch alle Darsteller auf einem Schlag zu verstecken.
  <img src="/img/events/sprites-hide.png" class="event-preview" />

- **Sprites: Show All**
  Zeigt alle versteckten Darsteller wieder an.
  <img src="/img/events/sprites-show.png" class="event-preview" />

## Überlagerung Ereignisse

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
