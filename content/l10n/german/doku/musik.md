---
title: "Music"
draft: false
next: "/docs/sound-effects"
nextTitle: "Sound Effects"
---

# Einstieg

Einstieg [GBT Player](https://github.com/AntonioND/gbt-player), ein Treiber welches .MOD Dateien akzeptiert und diese dann in ein Format konvertiert, mit welchem der Gameboy etwas anfangen kann. Du kannst Software verwenden wie beispielsweise [**OpenMPT**](https://openmpt.org/) (für Windows, obwohl es auch für Wine-Betriebssysteme klappt) oder [**MilkyTracker**](https://milkytracker.titandemo.org/) (funktioniert nativ für die verschiedensten Systeme) um .MOD Trackerdateien zu komponieren. Aber natürlich kannst du auch auf andere Software zurückgreifen, welche .MOD Dateien bearbeiten können wie [**BassoonTracker**](https://www.stef.be/bassoontracker/) (web-basierend), [**ProTracker**](https://16-bits.org/pt.php), und viele andere.

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

Die Puls-Kanäle haben Zugriff auf 4 Instrumente (nummeriert von 1 bis 4):

1. 25% Puls
2. 50% Puls (auch genannt: Rechteck-Puls)
3. 75% Puls (invertierter 25% Puls)
4. 12.5% Puls

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

16. (10) "zittern" - A square plus a pulse at random pulse widths
17. (11) "knurren" - The same waveform but faster
18. (12) "motorisch" - The same waveform but even faster
19. (13) "Tiefton" - Sounds like D5
20. (14) "Unterton" - Sounds like E5 + 50cents
21. (15) "mittelmäßig" - Sounds like B5 + 50cents
22. (16) "Hochton" - Sounds like D6 + 50cents
23. (17) "schrill" - Sounds like D7

Pseudo-zufälliges Rauschen:

24. (18) "earthquake" - A square with a thin pulse at random pulse widths
25. (19) "spaceship" - The same waveform but faster
26. (1A) "ocean" - The same waveform but even faster
27. (1B) "scratch" - You get the idea
28. (1C) "glitch" - A fairly clean white-noise sample, unrelated to other instruments
29. (1D) "volcano" - A pulse with rapidly changing pulse width
30. (1E) "scream" - The same waveform but faster
31. (1F) "static" - The same waveform but even faster

There are no GBT Player-readable instruments beyond 31.

# Effects

| EFFECT  |     NAME      | NOTES                                                                                                                                                                                                   |
| :-----: | :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **0xy** |   Arpeggio    | Where `x` = 2nd note, `y` = 3rd note, in semitones. You should set the instrument when using this effect.                                                                                               |
| **Bxx** |     Jump      | Jump to a specific position in the song, `xx`.                                                                                                                                                          |
| **Cxx** |    Volume     | Sets the volume to xx. See **volume limitations** for more info.                                                                                                                                        |
| **Dxx** | Pattern break | Jumps to the next pattern early, where `xx` is the row it should jump to in the next pattern. Using this on the last pattern will break the song by reading garbage data beyond the song.               |
| **E8x** |      Pan      | Set the panning to `x`. `0-3` = Left, `4-B` = Centre, `C-F` = Right                                                                                                                                     |
| **ECx** |   Note cut    | Cut the note after `x` ticks. `0 < x < speed-1`                                                                                                                                                         |
| **Fxx** |   Set speed   | Sets the song speed to `xx`. Valid values are `01` to `1F`. The value represents how many frames should the song wait before moving on to another row. Setting BPM speed has no effect upon conversion. |

## Speed Table

| Fxx Value (in tracker) | BPM (in tracker) | BPM (in game) |
| ---------------------- | ---------------- | ------------- |
| **F01<sup>1</sup>**    | 750 BPM          | 900 BPM       |
| **F02<sup>1</sup>**    | 375 BPM          | 450 BPM       |
| **F03<sup>1</sup>**    | 250 BPM          | 300 BPM       |
| **F04<sup>1</sup>**    | 187.5 BPM        | 225 BPM       |
| F05                    | 150 BPM          | 150 BPM       |
| F06                    | 125 BPM          | 128.57 BPM    |
| F07                    | 107.14 BPM       | 112.50 BPM    |
| F08                    | 93.75 BPM        | 100 BPM       |
| F09                    | 83.33 BPM        | 90 BPM        |
| F0A                    | 75 BPM           | 81.82 BPM     |

This is not a full table, it's just the top few speeds. It's here to highlight some of the speed discrepancies, albeit small to not be very noticeable, with the exception of the values marked with 1.

You might notice that the value of the F effect, when converted to decimal, is just the speed divisor. For instance, F03 divides the BPM by 3 (`750 / 3 = 250`, or `900 / 3 = 300`).

Because of how GB Studio is set up, a 60hz F05 effect, which would result in 180 BPM in-game, is impossible here.

_While not in GB Studio, GBT has a flag called `-speed` that will handle BPM differently, which would require F96 effects for every speed, as it won't handle any internal conversions to get the speed closer. This is the reason why F01 to F04 require F96 in both modes, there's no equivalent for it in tracker speed._

**1. Values marked with 1 require an additional F96 effect for the song to sound closer in speed when converted, or setting the song BPM to 150.** This F96 effect can be removed once you're done with your song, there won't be any difference as GBT ignores this -- It's only here to set the BPM to something closer to the in-game version.

# Tricks

This section will cover some tricks you can use with GBT to make it sound better than it should

### **1. High Speed**

By using F01 to F04, you can achieve much higher granularity when it comes to changing volumes and creating sounds of sorts. This means that with a high enough speed, you can create more varied bodies for sounds, with sort-of envelopes, or elaborate effects (like 1 channel echos, which I'll cover here in a moment).

This trick means you're going from drums that sound flimsy and primitive to something more impressive.

Here's an example of a Snare Drum, at speed F02, that might sound good for you.

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
(this is on the noise channel)
```

If this is longer than what you need, simply crop it starting from the bottom.

You can also use this for tones and stuff, like short staccato notes or flutes that fade in.

**If you do this, keep in mind the GB Sound hardware has an annoying bug that resets the phase of each waveform on a volume set, meaning you can get scratchy noise in a few emulators and also the real GB.**

### **2. One channel echoes**

This works on most speeds. This is useful for when you need a melody on top of some sort of echoing ostinato, or phrase, or whatever.

To illustrate it, I'm going to try illustrating it like this, instead of a tracker layout:

```
A _ B _ C _ E _ G _ E _ C _ B _
Without 1ch Echo

    +-----+ +-----+ +-----+
A _ B a C b E c G e E g C e B c
+-----+ +-----+ +-----+ +-----+

With 1ch Echo (lowercase notes are the echoes)
```

Notice how each lowercase letter takes the form of it's 3 step behind louder cousin? That's how the trick works. By having shorter notes that, on each step, has another quieter note that's way behind, you get a cool echoing effect.

I can't explain it very well via text, so I recommend you check out this video by **explod2a03** covering how this trick works with a better example and actual audio: https://www.youtube.com/watch?v=6GI9gngTn_Y

The best way to do this in a tracker is to use a channel you're not using temporarily, copy your note sequence to it, delay it by 3 (or however many you need) rows, then right clicking on the selection and clicking "Amplify...", and setting the amplitude to something lower than 50%.

After that, you should have both channels "alternate". Select the entirety of the channel with the echoes (from top to bottom), go to the channel you want to merge the echoes with, right click, go to "Paste special", then click "Mix paste" (This should have a shortcut, might want to learn it as it can be fairly useful).

### 3. Quick volume envelopes

Are you in a hurry? No problem, this simple trick will create linear envelopes:

1. Select two volume / C values of two separate notes (within the same channel), and everything in between
2. Right click and hover over "Interpolate"
3. Click on "Effect column"
4. You're done!

You might wonder how's it going to sound in-game; well, it'll sound as close as possible. The volumes it can't play it'll just clamp it to the nearest ones it can play.

# Frequently Asked Questions

**Q: Can I use mp3s with this?**

A: No.

**Q: Can I use this .MOD file I found online?**

A: Most likely, no. Your .MOD file has to be specifically formatted within what you get in `template.mod`, with the limitations mentioned above.

**Q: How do I stop a note from playing?**

A: Either use another note entirely, or if you want to silence it, use a `C00` effect.

**Q: My song sounds all wrong upon building it! Why is that?**

A: There's multiple reasons why that might be. **Please make sure your song is complying with everything above** (in particular, make sure you're only using the supported effects, are complying with the channel allocations, and aren't going over or under certain frequencies).

If you're using **MilkyTracker**, please be aware that it can break how a .mod file can sound. To get around this, save as `.XM`, its natively supported format, and when you're done with the song, export it as a .mod song and try it out in GB Studio.

**Q: My song speed is wrong! It's faster in-game than it is in the tracker!**

A: If you're using an `Fxx` effect with the value **higher than `F05`**, then you will need to keep 50hz to 60hz conversions in mind. The .mod format was originally developed for European computers, which ran at 50hz, while the Gameboy runs at 60. **A way to mitigate this is to set your BPM to 150 instead of 125.** If you're using OpenMPT (which cannot set the BPM for whatever reasons), a `F96` effect in the song will do the trick (though use it as early as possible).

**Q: Can I play back this voice clip/sound effect/whatever?**

A: No, not on GBT.

LSDj and more advanced sound drivers available for the Gameboy do support playing back samples, but doing this requires a lot of data to be moved in a short amount of time (means only music can play at that time, really).

**Q: Can I use a different tool to write my music?**

A: If the tool can natively export to .mod, try it! If not, then you'll need to transcribe what you've written to a tracker, that can save .mod files.

**Q: Can I use MIDI files?**

A: OpenMPT can open MIDI files, but you'll have to do the hard work of truncating it into just 4 channels, with limited tones. It's often easier to just input stuff manually because you have a lot more control over everything, and you have a better picture of everything going on if you do that.

**Q: This is kinda cumbersome. What alternatives do I have?**

A: As of the date of writing this, none that I know. It's possible that in the future people might make custom tailored trackers or tools for GB Studio, but until then, this is the only way we can make music for GB Studio games.

You might want to start making a non-GB song with OpenMPT or your tracker of choice, as that'll better teach you what a tracker really does, at least in my opinion...

There's a link in the Tips section on how to get started with OpenMPT, I suggest giving it a read!

**Q: I used a D00 effect on my last pattern to loop back to the first, but it's playing glitched in game after it loops once?**

A: Use a `Bxx` effect. Using a D00 effect on the last frame will trip GBT into thinking there's more data beyond the song, making it read garbage data.

**Q: I'm using OpenMPT, and some notes appear as red and they sound way higher/lower than what they're supposed to sound!**

A: Go over to the "General" tab that's under the New File, Open and Save buttons. Click the big button next to the "Name" field that says "MOD (ProTracker), 4 channels". Once there, disable both **ProTracker 1/2 Mode (MOD)** and **Amiga Frequency Limits.** This is a thing because the format here is meant to be used with the Amiga line of computers (that's where it was made), which has frequency limits.

**Q: The song starts out with garbage noise.**

A: If you're not using the first two channels, mute them with a `C00` effect.

**Q: Can I play sound effects?**

A: Not as of yet. The only way you can play sound effects is to play it as a music file, but that'll kill the current music and you'll have to restart it after the sound effect is done playing.

## Tips

- **Make sure you save frequently and also back-up your files.** This is important in anything that you do and it's worth mentioning here.
- [**If you're stuck, please ask for help in the Discord server, in `#music-help`.**](https://discord.gg/v9xAJCJ) There's usually a few handful of people who are willing to help out at most times.
- **Frequently try out your music in your game.** Things don't sound 1:1, and the built in preview just plays the .mod file rather than building the music and previewing that.
- **Keep it simple!** Don't jump into this, trying to emulate what several artists have done with LSDj or whatever other tools, you'll just get stuck.
- **Don't be afraid of failure.** I get this is kind of an unfitting tip, but it's important. Your first song won't be good, and that's okay. You'll fail, sure, but you'll also gain knowledge on what you might've done wrong, or how you want to go on about with your next endeavor.
- **OpenMPT has a manual to help you get started.** [Here's a link](https://wiki.openmpt.org/Tutorial:_Getting_Started), give it a read if you're stuck (or just ask for help)
- [**Give the GBT Player documentation a read.**](https://github.com/AntonioND/gbt-player)
