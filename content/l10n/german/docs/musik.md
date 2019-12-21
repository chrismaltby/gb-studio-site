---
title: "Musik"
draft: false
next: "/docs/soundeffekte"
nextTitle: "Soundeffekte"
aliases:
    - /de/docs/music
---

# Einstieg

[GBT Player](https://github.com/AntonioND/gbt-player) ist ein Treiber welches .MOD Dateien akzeptiert und diese dann in ein Format konvertiert, mit welchem der Gameboy etwas anfangen kann. Du kannst Software verwenden wie beispielsweise [**OpenMPT**](https://openmpt.org/) (für Windows, obwohl es auch für Wine-Betriebssysteme klappt) oder [**MilkyTracker**](https://milkytracker.titandemo.org/) (funktioniert nativ für die verschiedensten Systeme) um .MOD Trackerdateien zu komponieren. Aber natürlich kannst du auch auf andere Software zurückgreifen, welche .MOD Dateien bearbeiten können wie [**BassoonTracker**](https://www.stef.be/bassoontracker/) (web-basierend), [**ProTracker**](https://16-bits.org/pt.php), und viele andere.

# Erste Schritte

1. Erstelle ein leeres GB Studio Project, finde die Datei `assets/music/template.mod` und öffne dies mit der Trackersoftware deiner Wahl.
   - **Du musst genau diese Datei bearbeiten, denn nur in dieser sind alle Instrumente schon vorkonfiguriert.**
   - MilkyTracker-Nutzer sollten die Datei als.XM Datei abspeichern. MilkyTracker korruptiert die Musikdatei falls diese als .MOD abgespeichert wird. Du musst die Trackerdatei (wenn du MilkyTracker verwendest) jedesmal als .MOD exportieren, wenn du diese im Spiel testen möchtest.
2. Du kannst die Beispielmusik darin entfernen, jedoch **MUSST** du alle gespeicherten Instrumente und sonstige Einstellungen unberührt lassen.
3. Nutze die weiter unten aufgeführte Instrumentenliste um dir die passenden Soundbeispiele durchzuschauen. Die Änderung der Soundbeispiele im Tracker hat **keine** Auswirkungen auf die Musikwiedergabe in GB Studio, denn die Soundbeispiele sind nur rekonstruiert damit du ungefähr abschätzen kannst, wie diese klingen werden.

Falls fertig, solltest du die .MOD Dateien im `assets/music` Ordner deines Projektes abspeichern. **Teste deine Musikdateien regemäßig im Spiel um rechtzeitig auf musikalische Unterschiede reagieren zu können.** (Nicht in der Musikvorschau innerhalb des Editors!)

Wir haben es hier immernoch mit einem Tracker zu tun. Ich werde dir nun einen kurzen Überblick geben wie man mit so einem Tracker arbeitet:

```
C-5 01 v64 ...
--- -- --- ---
 |   |  |   |
 |   |  |   +-- Effekt-Spalte (Lautstärkeregelung, Akkorde, Panning, usw.)
 |   |  +------ Lautstärkewert, das ist aber unnötig für .MOD  omit this
 |   |          (Die meisten Beispiele ignorieren diese Spalte und setzen stattdessen drei Punkte)
 |   +--------- Instrument
 +------------- Musiknote und Oktave (Eine C-Note in der 5. Octave. Der Gedankenstrich könnte auch ein # sein, wie zum Beispiel: C#, D#)
```

So sieht eine typische Zeile im Tracker aus. Reihen können leer sein, oder nur teilweise befüllt (mit nur einem Effekt als Beispiel). Es gibt insgesamt vier dieser Spalten.

Jedes Dokumentenbeispiel, welches mit `ModPlug Tracker MOD` beginnt, kann man so herauskopieren und direkt in OpenMPT hineinkopieren. Wenn du also Trackerspalten kopierst und diese in einem Text-Editor einfügst, dann sieht es auch genau so aus wie hier.

# Wichtige Einschränkungen

Es dürfen **NUR** 4 Musikkanäle in deiner .MOD Datei geben. Falls mehr oder weniger, wird die .MOD Datei nicht richtig konvertiert.

**Das ist eine ursprüngliche Einschränkung des originalen Gameboys, welches nur 4x mehrstimmige Kanäle gleichzeitig unterstützen konnte.**

Darüber hinaus kannst du nur spezielle Instrumente für bestimmte Kanäle verwenden. Darunter ist eine Tabelle aufgeführt, welche dir zeigt wo du welche Instrumente verwenden kannst. Der Grund ist auch, weil der Gameboy die Instrumenten-Vergabe auch mittels Kanäle löst. Dieses Verhalten ist fest im Silikon des Chips geschrieben und kann somit nicht geändert werden.

| Kanalnummer # | Soundtyp   | Notenskala1<sup>1</sup> | Instrumente | Effekte               |
| ------------- | ---------- | ----------------------- | ----------- | --------------------- |
| Kanal 1 & 2   | Puls       | C3 bis B8               | 1-4         | 0, B, C, D, E8, EC, F |
| Kanal 3       | Wellenform | C3 bis B8               | 8-15        | 0, E8 und EC          |
| Kanal 4       | Rauschen   | Nur C5                  | 16-31       | B, C, D, E8, EC, F    |

_<sup>1</sup> Diese Notenskala ist für Tracker welche die Musiknoten im Bereich C1 bis C8 darstellen, beispielsweise OpenMPT. Falls du einen Tracker verwendest, welches noch tiefere Noten wie C0 darstellen kann (wie MilkyTracker), dann ist die Notenskala eine Oktave tiefer als in der Tabelle angegeben. (Somit ist die Skala von C3 bis B8 in OpenMPT genau dieselbe wie C2 bis B7 in Milky)._

# Lautstärke-Einschränkungen

Kanäle 1, 2 und 4 unterstützen nur einen Viertel des gesamten Lautstärkebereichs welche Trackerprogramme angeben können. (also von 0h bis 40h). Die unterstützten Lautstärkewerte sind folgendes:

`00, 04, 08, 0C, 10, 14, 18, 1C, 20, 24, 28, 2C, 30, 34, 38, 3C`

Jeder andere, beliebige Lautstärkewert wird auf den nächstgültigen Wert gerundet. (z.B. C40, der Standardlautstärkewert, wird automatisch zu C3C abgerundet)

**Lautstärkewerte über C40 werden in keinster Weise unterstützt und werden fehlerbehaftet verarbeitet und konvertiert.**

Obwohl im Tracker die Lautstärke bei jeder Note zurückgesetzt wird, ist dies bei der Konvertierung nicht der Fall. Mal angenommen wir hätten diesen Fallbeispiel:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C..|
|...........|
|E-502......|
```

Im Tracker wird die E-5 Musiknote in voller Lautstärke wiedergegeben obwohl zuvor ein C00 (auf dem Bild: C..) Effekt abgespielt wurde.

Im Spiel jedoch wirst du die E-5 Musiknote nicht hören könne. Grund dafür ist, dass die C00 auch weiterhin bestehen bleibt bis ein weiterer Cxx Effekt dieses überschreibt. Grundsätzlich musst du folgendes tun:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C..|
|...........|
|E-502...C40|
```

Das trifft bei jeder Lautstärkeeinstellung zu. Falls du eine Note mit C24 Lautstärke hast, welches almählich auf beispielsweise C18 reduziert wird, dann musst du immernoch bei jeder Note den Lautstärkewert angleichen. Die letzte Lautstärkeeinstellung gibt sprichwörtlich den Ton an.

Währenddessen hat es Kanal 3 noch schlimmer. Dieser hat eine beschränkte Lautstärkeneinstellung von **nur** `00, 10, 20, 40`. Zusätzlich musst du bei jeder Lautstärkenänderung auch noch Instrument und Musiknote angeben, die Ausnahme ist der `C00` Lautstärkewert. Hier ein Beispiel:

```
ModPlug Tracker MOD
|C-511...C40|
|...........|
|...........|
|...........|
|........C20|
|...........|
|G-511...C40|

```

Das obige Beispiel hat eine ungültige Lautstärkeveränderung auf C20 und wird somit auch nicht mitkonvertiert.

```
ModPlug Tracker MOD
|C-511...C40|
|...........|
|...........|
|...........|
|C-511...C20|
|...........|
|G-511...C40|
```

Durch Angabe von Musiknote und Instrument ist diese Lautstärkeveränderung nun gültig!

# Verfügbare Instrumente

Die Nummern auf dieser Liste repräsentieren die Basis10 Nummern, welches jedes dieser Instrumente im OpenMPT-Programm nutzen. Neben dieser Nummern (eingeklammert) steht noch die Basis16 Variante für MilkyTracker Nutzer.

Die Impuls-Kanäle haben Zugriff auf 4 Instrumente (nummeriert von 1 bis 4):

1. 25% Impuls
2. 50% Impuls (auch genannt: Rechteck-Impuls)
3. 75% Impuls (invertierter 25% Impuls)
4. 12.5% PuImpulsls

Instrumente 5 bis 7 wurden absichtlich ausgelassen.

Das Wellenform-Kanal hat Zugriff auf 8 Instrumente (nummeriert von 8 bis 15):

8. Buzzy (Quellencode nennt es “willkürlich :P”)
9. Ringy (sehr nützlich for SFX)
10. (A) Sync Saw
11. (B) Ring Saw
12. (C) Octave Pulse + Triangle
13. (D) Sawtooth
14. (E) Square
15. (F) Sine

Die meisten Instrumente kann der Rausch-Kanal verwenden, jedoch nur zum Teil wie das Rauschen im Gameboy ausgegeben wird. Instrumente 16 bis 23 verwenden ein periodisches (sich wiederholendes) Rauschen in verschiedenen Tonhöhen während Instrumente 24 bis 32 ein nahezu zufälliges Rauschen in verschiedenen Tohnhöhen verwenden.

Die Spitznamen und Beschreibungen neben den Instrumenten sind nicht als offizielle Bezeichnungen des GBT Players zu verstehen, sondern sollen lediglich dafür sorgen, dass man diese Rauschinstrumente leichter von einander unterscheiden kann.

Periodisches Rauschen:

16. (10) "zittern" - Ein Rechteck-Impuls mit zufälliger Pulsbreite
17. (11) "knurren" - Derselbe Rechteck-Impuls jedoch schneller
18. (12) "motorisch" - Derselbe Rechteck-Impuls jedoch noch schneller
19. (13) "Tiefton" - Klingt wie D5
20. (14) "Unterton" - Klingt wie E5 + halber zusätzlicher Erhöhung
21. (15) "mittelmäßig" - Klingt wie B5 + halber zusätzlicher Erhöhung
22. (16) "Hochton" - Klingt wie D6 + halber zusätzlicher Erhöhung
23. (17) "schrill" - Klingt wie D7

Pseudo-zufälliges Rauschen:

24. (18) "Erdbeben" - Ein dünner Rechteck-Impuls mit zufälliger Pulsbreite
25. (19) "Raumschiff" - Derselbe Rechteck-Impuls jedoch schneller
26. (1A) "Ozean" - Derselbe Rechteck-Impuls jedoch noch schneller
27. (1B) "Kratzen" - Selbsterklärend
28. (1C) "defektähnlich" - Ähnelt einer ziemlich sauberen Rauschstörung und unvergleichlich mit anderen Instrumenten
29. (1D) "Vulkan" - Ein Impuls mit einer sich rasch ändernden Pulsbreite
30. (1E) "Kreischen" - Dieselbe Wellenform jedoch schneller
31. (1F) "statisch" - Dieselbe Wellenform jedoch noch schneller

Es gibt kein Instrument über der 31, welche vom GBT Spieler gelesen und interpretiert werden kann.

# Unterstützte Effekte

| EFFEKT  |         NAME         | BEMERKUNG                                                                                                                                                                                                                                                                                  |
| :-----: | :------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0xy** |        Akkord        | Mit `x` 2. Musiknote und `y` 3. Musiknote als Halbtöne. Du solltest das Instrument bestimmen wenn du diesen Effekt verwendest.                                                                                                                                                             |
| **Bxx** |        Sprung        | Springt zu einer bestimmten Stelle (Pattern) innerhalb des Musikstücks, die angegebene Zahl ist hierfür `xx`.                                                                                                                                                                              |
| **Cxx** |      Lautstärke      | Stellt die Lautstärke um auf `xx`. Siehe **Lautstärke-Einschränkungen** für weitere Informationen.                                                                                                                                                                                         |
| **Dxx** |   Pattern Abbruch    | Springt frühzeitig zum nächsten Musikabschnitt, womit `xx` die Reihe des nächsten Abschnitts ist, wohin das Musikstück springt. Wenn dieser Effekt am Ende eines Abschnitts eingesetzt wird, dann bricht die Musik sofort ab aufgrund von fehlerhafter Verwendung. Bitte darauf aufpassen! |
| **E8x** |         Pan          | Setzt den Panning-Wert auf `x`. `0-3` = Links, `4-B` = Mittig, `C-F` = Rechts                                                                                                                                                                                                              |
| **ECx** |     Notenkürzung     | Beendet den gespielten Musikton kurzeitig nach `x` Ticks. `0 < x < Abspielgeschwindigkeit-1`                                                                                                                                                                                               |
| **Fxx** | Musiktempo festlegen | Setzt den Tempo auf `xx`. Unterstützte Werte sind `01` bis `1F`. Der Wert gibt an wieviele Frames eine spezifische Trackerreihe gespielt wird, ehe es die nächste Reihe spielt. Das Einstellen des BPM-Tempos hat keinerlei Auswirkung bei der Konvertierung.                              |

## Musiktempo-Tabelle

| Fxx Wert (im Tracker) | BPM (im Tracker) | BPM (im Spiel) |
| --------------------- | ---------------- | -------------- |
| **F01<sup>1</sup>**   | 750 BPM          | 900 BPM        |
| **F02<sup>1</sup>**   | 375 BPM          | 450 BPM        |
| **F03<sup>1</sup>**   | 250 BPM          | 300 BPM        |
| **F04<sup>1</sup>**   | 187.5 BPM        | 225 BPM        |
| F05                   | 150 BPM          | 150 BPM        |
| F06                   | 125 BPM          | 128.57 BPM     |
| F07                   | 107.14 BPM       | 112.50 BPM     |
| F08                   | 93.75 BPM        | 100 BPM        |
| F09                   | 83.33 BPM        | 90 BPM         |
| F0A                   | 75 BPM           | 81.82 BPM      |

Die Tabelle ist nicht vollständig und zeigt bloß die schnellsten Tempo-Einstellungen. Hier wird veranschaulicht wie sehr sich das Musiktempo zwischen Spiel und Tracker unterscheiden können. Diese sind zwar zum Teil nicht allzu bemerkbar, aber vorallem bei F01 bis F04 sollte man hier aufpassen.

Du magst festgestellt haben, dass der Wert des F-Effekts bei Umwandlung in eine Dezimalzahl bloß ein Geschwindigkeitsteiler ist. Somit dividiert F03 die BPM um 3. (`750 / 3 = 250`, oder `900 / 3 = 300`)

Durch die Tatsache wie GB Studio aufgebaut ist, ist ein 60Hertz F05 Effekt, welches im Spiel selbst als 180BPM abgespielt wird, unmöglich.

_Zwar nicht direkt im Bezug auf GB Studio, hat der GBT Player einen Bitschalter namens `-speed` welches BPM anders verarbeitet, aber dadurch einen F96-Effekt für jedes Tempo vorschreibt. Grund dafür ist, weil es sonst keine interne Konvertierung tätigen kann, womit es das Geschwindigkeitstempo näher bestimmen könnte. Das ist auch der Grund wieso F01 bis F04 beides F96 in beiden Modis voraussetzt, es gibt keine andere Alternative als Tracker-Tempo._

**1. Werte, welche durch eine 1 gekennzeichnet sind, setzen einen F96 Effekt voraus, um die Musiktöne insofern zu straffen damit man beispielsweise eine BPM von 150 nach Konvertierung erreichen kann.** Dieser F96-Effekt kann sorglos entfernt werden sobald man mit dem Musikstück fertig ist, da GBT es gar nicht mitkonvertiert. Seine Existenzberechtigung ist nur insofern begründet damit man die BPM so beschleunigt, damit das Tempo dem eigentlichen Spieltempo entspricht.

# Tipps und Tricks

Dieser Abschnitt spricht ein paar GBT Tricks an, damit eure Musikstücke noch besser klingen als sonst.

### **1. High Speed**

Wenn F01 bis F04 als Tempo verwendet wird, dann kannst du eine bessere Detailgenauigkeit erreichen wenn du mit Lautstärkeveränderungen arbeitest. Das heißt mit einem ausreichenden Tempo kannst du wohldefinierte Soundtiefen erstellen und beispielsweise auch ein Einkanal-Echo simulieren. (So etwas wird gleich vorgeführt.)

Mit diesem Trick kannst du schlagzeugartige Töne simulieren, welche besser klingen als primitive Steinzeitbongos.

Hier ist ein Beispiel einer kleinen Trommel bei einem Tempo von F02, was dich positiv ansprechen könnte.

```
ModPlug Tracker MOD
|C-526...C40
|C-527...C28
|........C20
|........C18
|........C10
|........C08
|........C04
|........C..
(Im Rausch-Kanal 4)
```

Falls das Soundbeispiel für deinen Geschmack zu lang ist, dann kannst du es von unten aus kürzer stutzen.

Du kannst es auch für Musiktöne oder sonstiges verwenden, wie Stakkato und eingespielte Flötentöne.

**Falls du es in deinen Musikstücken implementierst, dann solltest du beachten, dass die GB Sound Hardware einen komischen Bug hat. Die Rauschwelle des vierten Kanals könnte bei einer Lautstärkeänderung versehentlich zurückgesetzt werden, womit ein kratziger Ton in manchen Emulatoren oder sogar auf richtigen Gameboys verursacht werden könnte.**

### **2. Einkanal-Echos**

Das funktioniert mit den meisten Tempo-Einstellungen. Dies ist nützlich wenn du eine Melodie über einem schallenden Ostinato erklingen möchtest... oder ähnliches.

Zur Veranschaulichung werde ich versuchen es so darzustellen ansteller eines Tracker-Layouts:

```
A _ B _ C _ E _ G _ E _ C _ B _
Ohne Einkanal-Echo

    +-----+ +-----+ +-----+
A _ B a C b E c G e E g C e B c
+-----+ +-----+ +-----+ +-----+

Mit Einkanal-Echo (Kleingeschriebene Musiknoten sind das Echo)
```

Schau wie jede kleingeschriebene Musiknote die Note annimmt wie sein großer Bruder drei Musiknoten dahinter? So funktioniert der Trick. Der coole Echo-Effekt wird erzeugt, wenn nach einer kleinen Weile der gleiche Ton mit einer leiseren Lautstärke wiederholt wird.

Ich kann es schlecht in Prosa ausformulieren, daher empfehle ich euch das folgende Video von **explod2a03** welcher es in einem besseren Beispiel erklärt und zudem noch mit [Hörbeispiel](https://www.youtube.com/watch?v=6GI9gngTn_Y).

Die beste Art dies im Tracker zu implementieren ist es einen Kanal zu nutzen, welcher zu der Zeit unbenutzt ist. Kopiere die Musiknotensequenz hinein und verzögere es um 3 Zeilen (oder wieviele du auch haben möchtest), danach rechtsklick auf die Auswahl und anschließend “Amplify…” auswählen. Zu guter Letzt setzt du die Amplitude auf einem Wert kleiner als 50% ein.

Daraufhin müsstest du zwei Kanäle haben, die sich "abwechseln". Selektiere den gesamten Echo-Kanal von oben bis unten, rechtsklicke dann den Kanal mit welchem du die Echos zusammenführen möchtest und wähle "Paste Special" aus. Danach auf "Mix Paste" (Es sollte einen Tastenkürzel existieren, welches du auswendig lernen kannst falls du vor hast diesen Einkanal-Echo öfters zu implementieren.

### 3. Schnelle Lautstärke-Hüllkurven

Bist du in Eile? Kein Problem, dieser simple Trick kreiert dir lineare Hüllkurven:

1. Wähle zwei Lautstärkewerte / C-Werter unterschiedlicher Musiknoten (im selben Kanal) und zudem noch alles dazwischen aus.
2. Rechtsklick und mit der Maus über "Interpolate" auf "Effect column" gehen
3. und auf "Effect column" klicken.
4. Du hast es geschafft.

Du magst dich wundern wie das nun im Spiel sich anhört; Nun ja, es wird fast genauso ausgegeben. Die Lautstärkewerte, welches es nicht abspielen kann, werden einfach passend gerundet.

# Häufig gestellte Fragen

**F: Kann ich damit MP3-Dateien verwenden?**

A: Nö.

**F: Ich habe diese .MOD Datei online gefunden. Kann ich diese benutzen?**

A: Höchstwahrscheinlich nicht. Deine .MOD Datei muss gezielt auf die Einschränkungen hin abgestimmt sein und zudem muss die Datei selbst noch auf `template.mod` basieren, welches die Vorkonfigurationen (wie vorkonfigurierte Soundsamples und Kanaldefinitionen) besitzt.

**F: Hilfe, wie stoppe ich die Wiedergabe von einem Musikton?**

A: Spiele entweder einen anderen Ton im selben Kanal ab oder wenn du den Musikton gänzlich verstummen lassen möchtest, nutze den `C00` Effekt.

**F: Meine Musikdatei hört sich im Spiel voll komisch an obwohl es im Editor doch korrekt ausgegeben wurde! Wo liegt das Problem?**

A: Dafür existieren womöglich mehrere Gründe. **Bitte stelle sicher, dass die Musikdatei auch sämtliche oben beschriebene Einschränkungen beherzigt** (um es kurz zu fassen: nur unterstützte Effekte verwenden, Kanaleinschränkungen wie Lautstärke und Instrumentenwahl beherzigen, erlaubte Musiknotenskala beachten, usw).

Falls du den **MilkyTracker** verwendest, so kann es sein, dass dieser die Klangwiedergabe einer .MOD Datei zerstören kann. Um dieses Problem zu umgehen solltest du es als `.XM` abspeichern, das von MilkyTracker nativ unterstützte Format. Bist du mit der Bearbeitung fertig, kannst du die `.XM` Datei anschließend als `.MOD` Datei exportieren und in GB Studio verwenden.

**F: Mein Musiktempo is vollkommen falsch! Es ist im Spiel viel schneller als im Tracker!**

A: Falls du mit `Fxx` Effekten zwischen **zwischen `F01` und `F05`** arbeitest, dann musst du die Umkonvertierung von 50Hertz auf 60Hertz beachten. Das .MOD Format war ursprünglich für europäische Computer gedacht, welche mit 50Hertz arbeiten während der Gameboy selbst mit 60Hertz arbeitet. **Eine Art um dies entgegenzuwirken ist es die BPM auf 150 zu setzen anstelle von 125.** Fallst du mit OpenMPT arbeitest (was aufgrund von Gründen die BPM nicht setzen), so existiert der `F96` Effekt um dir auszuhelfen. Nutze diesen Effekt aber so früh wie möglich im Song.

**F: Kann ich diese Sprachaufnahme hier irgendwie im Spiel verwenden?**

A: Nein, nicht in GBT.

LSDj und viele fortgeschrittene Musiktreiber des Gameboys können zwar solche Formen von Musik unterstützen, aber die bloße Wiedergabe erfordert eine enorme Last an Datenkalkulation und Manipulierung (das heißt zu der Zeit kann nur Musik gespielt werden während die gesamte Applikation eingefriert bleibt).

**F: Kann ich auch ein anderes Programm nutzen um meine Musikdateien zu komponieren?**

A: Falls die Applikation auch nativ in .MOD exportieren kann, dann kannst du es gerne versuchen! Falls nein, dann musst du es anschließend in einem Tracker umschreiben, welches die Musikdatei als .MOD Datei abspeichern kann.

**F: Kann ich MIDI Dateien verwenden?**

A: OpenMPT kann zwar MIDI Dateien öffnen, aber es erfordert eine Menge Mühen diese MIDI Kanäle in nur vier Kanäle hinein zu kürzen und dann noch auf die Einschränkungen zu achten. Es ist öfters einfacher die Töne von Hand einzugeben weil man dadurch eine bessere Kontrolle erhält was wo abgespielt wird. Es bleibt letztendlich dir überlassen, ob die Mühen sich auszahlen eine MIDI Datei zu transkribieren oder was eigenes auf die Beine zu stellen.

**F: Das klingt ja mega mühseelig. Gibt es für mich auch Alternativen?**

A: Zum jetzigen Zeitpunkt dieses Beitrags, nicht das ich wüsste. In Zukunft ist es sicherlich möglich einfach Musik zu komponieren wenn speziell ausgerichtete Tracker und Hilfsmittel für GB Studio veröffentlicht werden. Bis zu diesem Zeitpunkt jedoch verbleibt uns nur die mühseelige Arbeit wie wir sie jetzt gerade kennen.

Du kannst aber gerne mit einen nicht-GB Studio konformen Musikstück starten, um dich mit der Arbeit mit Trackern auseinanderzusetzen. Das zumindest gibt dir die nötige Voraussetzung um mit Trackern Musikstücke deiner Wahl anzufertigen. Mit und ohne Einschränkungen. So denke ich es zumindest…

Es gibt einen Hyperlink in der Tipps-und-Tricks Sektion was dich in OpenMPT einführt, ich schlage vor du ziehst dir das mal rein!

**Q: Ich habe einen D00 Effekt im letzten Musikabschnitt verwendet, um zum Musikbeginn zurückzuspulen, aber im Spiel glitched es nach dem ersten Durchspielen?**

A: Nutze stattdessen den `Bxx` Effekt. Die Verwendung des D00 Effekts im allerletzten Abschnitt lässt den GBT funktional stolpern weil es denkt es gäbe noch mehr nach dem Song. Es liest danach nur noch Schrott was es so in seinem Speicher-Cache findet.

**F: Ich nutze OpenMPT und manche Noten werden rot markiert und klingen tiefer/höher als sonst!**

A: Gehe zum “General” Reiter unter "New File, Open undSave" Schaltflächen. Betätige den großen Knopf neben dem Namensfeld mit der Option "MOD (ProTracker), 4 channels". Danach deaktiviere **ProTracker 1/2 Mode (MOD)** und **Amiga Frequency Limits.** Diese Änderung ist üblich da das Format eigentlich dafür verwendet wird um auch für Amiga Computer tauglich zu sein. Amiga hat nämlich Frequenzbegrenzungen die für uns gleichgültig sind.

**F: Die Musik beginnt mit schrottigem Rauschen.**

A: Falls du Kanal 1 und 2 nicht von Anfang an verwendest, dann bietet es sich an das du diese mit dem `C00` Effekt stummschaltest.

**Q: Kann ich auch Soundeffekte abspielen während Musik läuft?**

A: Ab der Version 1.2 hast du nun die Möglichkeit Musik als auch Sounds gleichzeitig abspielen zu lassen. Je nach Art und Natur des Soundtyps musst du jedoch darauf achten welche der 4 Musikkanäle deine Musik in Anspruch nimmt, da die Kanäle von Musik und Sound sich gegenseitig stören können.

## Allgemeine Hinweise

- **Stelle sicher, dass du regelmäßig speicherst und dir auch Sicherheitskopien erstellst. Sogenannte Autosaves erstellt OpenMPT von selbst.** Das Anlegen von Sicherheitskopien ist zwar in allen Arbeitsbereichen löblich aber hier ist es besonders wichtig und daher wichtig es hier nochmals zu erwähnen.
- [**Falls du irgendwo stecken bleibst, dann zögere nicht im Discord Server unter dem Kanal `#music-help` jemanden um Hilfe zu bitten.**](https://discord.gg/v9xAJCJ) Üblicherweise geistern dort eine Menge Leuten rum, die dir eventuell aushelfen können.
- **Probiere deine Musikdateien öfters im Spiel selbst aus.** Sie werden nicht 1:1 so klingen wie im Tracker und die eingebaute Musikvorschau im GB Studio Editor spielt direkt die .MOD Datei ab als diese Gameboy-tauglich zu kompilieren.
- **Fange mit simplen Melodien an!** Springe nicht Hals über Kopf in Beethoven Rekonstruktionen hinein denn überverkomplizierte Erstanfänge schrecken einem ab und frustriert nur.
- **Hab keine Angst vor Fehler! Verzichte auf Perfektion!** Ich krieg dauernd diese nichtssagenden Tipps aber es ist um so mehr von Relevanz als du glaubst. Dein erster Song wird nicht gut sein und das ist auch okay. Du wirst bei einer Implementierung versagen und vielleicht wirst du auch die Schuld an die vielen Einschränkungen schieben. Aber früher oder später jonglierst du an den Einschränkungen vorbei, findest neue fantastische Wege deine Musik im Tracker auszudrücken. Du entwickelst eine löbliche Begeisterung.
- **OpenMPT hat eine Dokumentation (leider auf Englisch).** [Hier ist der Link](https://wiki.openmpt.org/Tutorial:_Getting_Started) falls du englisch verstehen kannst.
- [**Hier ist die Dokumentation des GBT Players (leider auf Englisch).**](https://github.com/AntonioND/gbt-player)
