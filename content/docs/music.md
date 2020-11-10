---
title: "Music"
draft: false
next: "/docs/sound-effects"
nextTitle: "Sound Effects"
---

Music can be played in your game using the [Music: Play](https://www.gbstudio.dev/docs/scripting/#music-events) event in your *Actor*, *Trigger*, or *Scene* scripts.

<img src="/img/events/music-play.png" class="event-preview" />

## Requirements

Add music to your game by including GBT-ready .mod files in your project's `assets/music` folder. Most publicly available .mod files are not GBT-ready. GB Studio uses [GBT Player](https://github.com/AntonioND/gbt-player) which is a driver that takes .mod files and converts them to instructions for the Gameboy. GBT Player interprets .mod files differently than most .mod players, so every .mod file that GBT Player reads should be composed/arranged to be used with GBT Player. This is currently the only driver that GB Studio uses to play music in games.

To create GBT-ready .mod files, you can use any program that can export .mod files. Some popular choices are [**OpenMPT**](https://openmpt.org/) (for Windows or Linux using Wine), [**MilkyTracker**](https://milkytracker.org/) (for Windows, Mac and Linux), and [**BassoonTracker**](https://www.stef.be/bassoontracker/) (browser-based) to name a few.

## Alternatives to Composing

You can browse the [GB Studio Community Assets](https://github.com/DeerTears/GB-Studio-Community-Assets) to find free, original, GBT-ready .mod files in the `/music` folder.

There are a few ways to convert existing tracker songs and .midi compositions to GBT-ready .mod files. The following list contains resources for converting songs into GBT-ready .mod files:
- [Goodnight Girl's Midi to Mod video](https://youtu.be/4AxZqK9_jKE)
- [James Park's Ft2Mod tool](http://ft2mod.jamespark.ninja/) converts Famitracker text data into GBT-ready .mod files. This tool is a work in progress.
- [James Park's Midi2Mod tool](http://midi2mod.jamespark.ninja/) converts Midi files into GBT-ready .mod files. This tool is a work in progress.

## Resources for Tracker-Use

If you are learning how to use a tracker, it is recomended you read through your tracker's documentation. Here are the official documentation pages provided by OpenMPT, MilkyTracker and BassoonTracker:
- [OpenMPT's Documentation](https://wiki.openmpt.org/Tutorial:_Getting_Started)
- [MilkyTracker's Documentation](https://milkytracker.org/docs/MilkyTracker.html#shortcuts)
- [BassoonTracker's Documentation](https://www.stef.be/bassoontracker/docs/#about)

Lastly, the [GB Studio Discord](https://discord.gg/v9xAJCJ) has a #tutorials-and-resources channel where you can find links to video tutorials on some of the most popular trackers. The Discord also has a #music-help channel where you can ask for help with composing and converting songs for GBT Player.

## Getting Started

1. Create a blank GB Studio project, find the file `assets/music/template.mod` and open it with your tracker of choice.
   - **You must edit this file to get an accurate representation of the instruments you can use.**
   - MilkyTracker users should save this file as an `.XM` file. Saving a .mod file in MilkyTracker will corrupt it. Export your song as a .mod file every time you want to test your song in-game.
2. Use the instrument list shown later in this document to pick the sounds you want. Changing the samples in your tracker will not affect how they sound in-game.

When done, add your .mod files to the `assets/music` folder of your project. **Test your song in-game often to keep track of any audible in-game differences.**

Here is a quick rundown of how a tracker works:

```
C-5 01 v64 ...
--- -- --- ---
 |   |  |   |
 |   |  |   +-- Effect column (Volume changes, arpeggios, panning, etc.)
 |   |  +------ Volume value, this is irrelevant in .MOD. (Most examples here omit this
 |   |          and instead display three dots in its place)
 |   +--------- Instrument
 +------------- Note and octave (A C note in the 5th octave. The dash can be a #, which signifies a sharp note e.g. C#, D#)
```

This is what comprises of a channel's row. Rows can be empty, or can only be partially filled (with just an effect, for example). There's 4 of those columns in total.

Any part in this documentation where you see data that starts with `ModPlug Tracker MOD`, you can copy that entire block into OpenMPT as-is. Any data copied from OpenMPT looks like that when you paste it into any text application.

## GBT Player's Channel Limitations

.MOD files need to use 4 channels. Loading a copy of template.mod before composing will ensure this is set-up correctly.


| Channel #     | Sound type | Note Range<sup>1</sup> | Instruments | Effects               |
| ------------- | ---------- | ---------------------- | ----------- | --------------------- |
| Channel 1 & 2 | Pulse	     | C3 to B8               | 1-4         | 0, C, E8, EC, B, D, F |
| Channel 3     | Waveform   | C3 to B8               | 8-15        | 0, C, E8, EC <sup>**2**</sup> |
| Channel 4     | Noise      | Only C5                | 16-31       | C, E8, EC, B, D, F    |

*<sup>1</sup> This range is for One-Indexed Trackers (C1 is the lowest-possible note). This is comparable to OpenMPT in default settings.*
*Trackers that are Zero-Indexed by default (C0 is the lowest-possible note) should interpret these Note Ranges a full octave down. This is comparable to MilkyTracker in default settings.*

Using default settings on OpenMPT and MilkyTracker, C3 to B8 in OpenMPT sounds the same as C2 to B7 in MilkyTracker.

*<sup>2</sup> Effects B, D, and F can be also used on Channel 3 if the same row isn't being used to set a note/instrument.*

## Volume Limitations

Currently, volume can only be adjusted by using the `Cxx` effect for each channel.

The Gameboy has 16 unique volume settings for Channels 1, 2 and 4. GBT Player will floor (round-down) the values in a `Cxx` volume effect to multiples of 4.

### Unique Volume Settings for Channels 1, 2 and 4:
`00, 04, 08, 0C, 10, 14, 18, 1C, 20, 24, 28, 2C, 30, 34, 38, 3C`

Any number that's not a multiple of 4 will be rounded-down to one of the above numbers.

**Example:** Entering `C01`, `C02` and `C03` will sound the same as entering `C00`.

**Example:** Entering `C40` will sound the same as entering `C3C`.

Channel 3 is the exception to this with only 4 unique volume settings.

### Unique Volume Settings for Channel 3:
`00, 10, 20, 40`

GBT Player will round `Cxx` effects on Channel 3 to the nearest number listed above.

**Example:** Entering `C30` will round the volume up to `C40`.

## Volume Persistence

In most trackers, if a note is played without a volume command, the note's volume is reset to the maximum. When a .mod file is converted by GBT Player, notes without a volume effect will play at the same volume as the previous `Cxx` effect that the channel read. For example:

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

In the tracker, the E-5 note will resume at full volume after the C00 effect. 

In-game, you will not hear the E-5 note. This is because the C00 persists until another `Cxx` effect is set. To make the tracker playback sound identical to the in-game playback, the following must be done:

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

Additionally, Channel 3 requires that the instrument and note is set during a volume change for the volume change to have any effect. (Except for `C00`.) For example:

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

You will not hear any volume change from the C20 in-game. Add a note and instrument on `C20` to register the volume change.

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

## Instruments

*All numbers listed here are in base-10 unless otherwise noted.*

There are 4 channels on the Gameboy, and each channel is designed to produce different pre-determined waveforms. Channels 1 and 2 can only produce pulse waves (including square waves). Channel 3 has access to eight custom waveforms, but these are not yet officially customizable. Channel 4 can only produce noise.

GBT Player reads the instrument column of a .mod file to determine which waveform should be used on a channel. Unlike most .mod players, GBT Player does not read the sample data of these instruments, and this is why loading **template.mod** is crucial when creating GBT-ready .mod files. Refer to [Getting Started](/docs/music#getting-started) to learn how to load template.mod with these instruments.

What follows is a rundown of all the instruments found in template.mod:

Channels 1 and 2 have four instrument options:

1. 25% pulse
2. 50% pulse (square wave)
3. 75% pulse (inverted 25% pulse)
4. 12.5% pulse

Instruments 5 through 7 are intentionally left blank.

Channel 3, the wave channel, has 8 instrument options:

8. (8) Buzzy (Source code calls this "random :P")
9. (9) Ringy (useful for SFX)
10. (A) Sync Saw
11. (B) Ring Saw
12. (C) Octave Pulse + Triangle
13. (D) Sawtooth
14. (E) Square
15. (F) Sine

Channel 4 uses 16 instrument options to access pre-determined noise settings.

The nicknames and descriptions next to these instruments are not official for GBT Player, they are intended to help composers identify these noise presets at a glance.

Periodic Noise:

16. (10hx) "stutter" - A square plus a pulse at random pulse widths
17. (11hx) "rumble" - The same waveform but faster
18. (12hx) "engine" - The same waveform but even faster
19. (13hx) "low tone" - Sounds like D5
20. (14hx) "undertone" - Sounds like E5 + 50cents
21. (15hx) "middletone" - Sounds like B5 + 50cents
22. (16hx) "overtone" - Sounds like D6 + 50cents
23. (17hx) "high tone" - Sounds like D7

Pseudorandom Noise:

24. (18hx) "earthquake" - A square with a thin pulse at random pulse widths
25. (19hx) "spaceship" - The same as 24 but faster
26. (1Ahx) "ocean" - etc.
27. (1Bhx) "scratch" - etc.
28. (1Chx) "glitch" - A fairly clean white-noise sample, unrelated to other instruments
29. (1Dhx) "volcano" - A pulse with rapidly changing pulse width
30. (1Ehx) "scream" - The same as 29 but faster
31. (1Fhx) "static" - etc.

There are no GBT Player-readable instruments beyond 31. (1Fhx)

Instruments 16 to 23 use Periodic (looped) Noise at various pitches, while instruments 24 to 32 use Pseudorandom noise at various pitches.

## Effects

There are two types of effects: _Note-effects_ and _Command-effects_.

All channels can use all effects, except for Channel 3. Any effects known as _Command-effects_ will only work on Channel 3 if it is not trying to play a note/instrument on the same row as the _Command-effect_.

**Note-effects** (uses bit 3) - All channels can use these effects freely

| Effect  | Name		  | Notes on effect usage																						|
| ------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| **0xy** |   Arpeggio    | Rapidly cycles between 3 notes. `x` and `y` both represent the # of semitones above the note the arpeggio effect is attached to. |
| **Cxx** |    Volume     | Sets the volume to `xx`. See **Volume Limitations** for more info.											|
| **E8x** |      Pan      | Sets the panning to `x`. `0-3` = Left, `4-B` = Centre, `C-F` = Right.									|
| **ECx** |   Note cut    | Cuts the note after `x` frames. Must be below the `Fxx` speed for the cut to be heard. `EC0` will reset the duty cycle instead of cutting the note. |

**Command-effects** (uses bit 4) - Channel 3 can use these effects if it's not trying to play a note/instrument on the same row.

| Effect  | Name		  | Notes on effect usage																						|
| ------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| **Bxx** |     Jump      | Jump to a specific position in the song, `xx`.               |
| **Dxx** | Pattern break | Jumps to the next pattern early, `xx` is the row GBT Player will jump to in the next pattern. Don't use `Dxx` on the last pattern to create a song loop; this will read garbage data in-game instead of looping the song. |
| **Fxx** |   Set speed   | Sets the song speed to `xx`. Valid values are `01` to `1F`. The value represents how many frames should the song wait before moving on to another row. Setting BPM speed has no effect upon conversion. |

The reason that Channel 3 can't use Command-effects at the same time as a note/instrument is because the instrument data is too large. The instrument data can't allow the 4th bit of a Command effect to occur when the instrument data is being called upon at the same time. Channel 3 will play notes without effects (or sometimes effects without notes) to compensate for this.

## BPM Table

There is no way to enter a BPM value for a song. Tracker music speed is set by frames-per-row (the `Fxx` effect) to determine how long each row should be played for. `Fxx` ranges from `F01` to `F1F`. There are several rough BPM options that can be chosen by using different numbers of rows-per-beat, alongside the `Fxx` command.

Rows-per-beat refers to how many tracker rows make up one musical measure. This is up to the composer to decide, which is what the Speed Table below was created for.

The following table shows most of the possible BPM values for songs in GB Studio:

<img title="BPM Table for Speeds F01 to F04" src="/img/music_docs/speed_table_f01_to_f04.png" width="1258">`

* Songs that use speed effects F01 to F04 should add `F96` so trackers can emulate these faster speeds accurately.

<img title="BPM Table for Speeds F05 to F08" src="/img/music_docs/speed_table_f05_to_f08.png" width="1258">

* Songs that use speed settings F05 and slower should add `F82` so trackers can emulate these slower speeds accurately.

<img title="BPM Table for Speeds F09 to F0C" src="/img/music_docs/speed_table_f09_to_f0c.png" width="1258">

Here is a fuller version of these charts in Markdown format:

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


**1. Values marked with 1 require an additional F96 effect for the song to sound closer in speed when converted, or setting the song BPM to 150.** This F96 effect can be removed once you're done with your song, there won't be any difference as GBT ignores this -- It's only here to set the BPM to something closer to the in-game version.

At 1 row-per-beat, each row counts as a beat. At 1 row-per-beat in 4/4 with speed `F01` will make the song's in-game BPM sound like 900 BPM. This can be halved by using 2 rows-per-beat, to create a 450 BPM song. This process is how the following Speed Table was created.

Because of how GB Studio is set up, a 60hz F05 effect, which would result in 180 BPM in-game, is impossible here.

*For Engine Eject users, GBT Player has the `-speed` flag which handles BPM differently. This would require F96 on every speed setting. Without the speed flag, F96 is helpful for songs using speeds F01 to F04.*

## Time Signatures

Trackers don't use time signatures, but they can be inferred by ending a pattern early. GBT Player and other trackers can skip to the next pattern by using a `Dxx` effect or a `Bxx` effect on the last audible row. Using `Dxx` or `Bxx` on row 48 (30hx) will result in a percieved time signature of 3/4. Patterns cannot be more than 64 rows. Patterns manually shortened to less than 64 rows will be re-expanded to 64 rows in-game.

## Tips

- **Make sure you save frequently and also back-up your files.** This is important in anything that you do and it's worth mentioning here.
- [**If you're stuck, please ask for help in the Discord server, in `#music-help`.**](https://discord.gg/v9xAJCJ) There's usually a few handful of people who are willing to help out.
- **Frequently test your music in-game.** Things often won't sound 1 to 1, and the built in preview just plays the .mod file rather than building the music and previewing that.
- **Keep it simple!** Don't jump into this, trying to emulate what several artists have done with LSDj or whatever other tools, you'll just get stuck.
- [**Give the GBT Player documentation a read.**](https://github.com/AntonioND/gbt-player) 

## Tricks

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

## Frequently Asked Questions

**Q: Can I use mp3/wav files?**

A: No. Sample playback on the Gameboy is a hack, and it may someday be possible for GB Studio. Currently there is no way to get sample playback in GB Studio.

**Q: Can I use this .mod file I found online?**

A: It won't sound as intended, but it can be made to sound good-enough with some adjustments. Any `===` notes need to be replaced with the `EC1` effect. All instrument restrictions should apply, and no melodic instruments should be using Channel 4. You may also need to transpose the notes of a channel to account for differently-tuned samples, which you can learn more about in your tracker's documentation.

**Q: How do I stop a note from playing?**

A: `EC1` will mute a channel's note, `C00` will mute the channel until it recieves another `Cxx` effect.

**Q: What do I do if my song sounds completely giltched-out?**

A: It's probably corrupted. It can likely be saved by using OpenMPT and saving it as a different filetype. If you're using **MilkyTracker**, don't press "Save" on a .mod file, always work in a .xm file instead.

**Q: Why is my song speed is faster in-game than it is in the tracker?**

A: If you're using an `Fxx` effect with a value lower than `F05`, add `F96` to the first row of your song. This will not impact your in-game playback speed.

**Q: Can I play back voice clips/sound effects?**

A: Not on GBT Player. Pokemon Yellow's method is unique, and LSDj does not leave much processing power for games to be played while it's running.

**Q: Can I use a different tool to write my music?**

A: If the tool can natively export to .mod, try it!

**Q: Why is my song playing glitched sounds when it tries to loop?**

A: `D00` is a problematic effect, try using `Bxx` instead. If you're already using `Bxx`, make sure the `xx` number does not go above the number of pattern-slots in your song. A song's first pattern is always in slot 00.

**Q: Why do some notes in OpenMPT appear red and sound higher/lower than they're supposed to sound?**

A: Go over to the "General" tab that's under the New File, Open and Save buttons. Click the big button next to the "Name" field that says "MOD (ProTracker), 4 channels". Once there, disable both **ProTracker 1/2 Mode (MOD)** and **Amiga Frequency Limits.** This is a thing because the format here is meant to be used with the Amiga line of computers (that's where it was made), which has frequency limits.

**Q: Why does my song start out with garbage noise?**

A: If your song doesn't start using the first two channels, add a note to their first row with a `C00` effect on each.
