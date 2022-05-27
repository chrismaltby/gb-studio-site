---
title: "GBT Player"
draft: false
next: "/docs/sound-effects"
nextTitle: "Sound Effects"
---

## Getting Started

Add music to your game by including .mod files in your project's `assets/music` folder.

To use .mod files in a project, set the _Music Driver_ in _Settings_ to GBT Player.

## Creating GBT-compatible .mod files

Since .mod files are designed for Amiga hardware, not every specification of .mod is used by GBT Player. For the best compatibility, all .mod files should be composed for GBT Player.

Trackers like [**OpenMPT**](https://openmpt.org/) (Windows, Linux with WINE), [**MilkyTracker**](https://milkytracker.titandemo.org/) (Windows, Mac and Linux), or [**BassoonTracker**](https://www.stef.be/bassoontracker/) (modern browsers) can create .mod files for GBT Player.

You should know how to use your tracker by reading your tracker's documentation:
- [OpenMPT's Documentation](https://wiki.openmpt.org/Tutorial:_Getting_Started)
- [MilkyTracker's Documentation](https://milkytracker.org/docs/MilkyTracker.html#shortcuts)
- [BassoonTracker's Documentation](https://www.stef.be/bassoontracker/docs/#about)

Or by finding tutorials on your tracker:
- [GBStudio .mod format explained in 10 minutes | OpenMPT by aj booker](https://www.youtube.com/watch?v=Qz7z7yWn_5w&t=469s)
- [GB Studio Music Tutorials (Milkytracker) by Benvania](https://www.youtube.com/watch?v=HAIQ44mPs94&list=PLjGaN34YW3ozMdolNrSkMoL18Zy84m7vw)
- [Using Milkytracker | GB Studio Music Tutorial by Goodnight Girl](https://www.youtube.com/watch?v=cLQ3ybY_ACA)

The [GB Studio Discord](https://discord.gg/v9xAJCJ) has a dedicated _#music-help_ channel to help you with the above tracker programs.

You can download free MIT-licensed songs from the [GB Studio Community Assets](https://github.com/DeerTears/GB-Studio-Community-Assets), or use the .mod files included with the Sample Project as an alternative to composing.

## GBT Player's Channel Limitations

.mod files have 4 channels to play audio. In GBT Player, this represents the 4 channels on the Gameboy's sound hardware. Each Gameboy channel has hardware limitations.

| Channel #     | Sound type | Note Range<sup>1</sup> | [Instruments](#instruments) | [Effects](#effects)                                                                                        |
| ------------- | ---------- | ---------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| Channel 1 & 2 | Pulse      | C3 to B8               | 1-4         | 0xy, Cxx, E8x, ECx, 9ve, 2xx, 1xx, Bxx, Dxx, Fxx                                               |
| Channel 3     | Waveform   | C3 to B8               | 8-15        | 0xy, Cxx, E8x, ECx, 2xx, 1xx, Bxx <sup>**2**</sup>, Dxx <sup>**2**</sup>, Fxx <sup>**2**</sup> |
| Channel 4     | Noise      | C3 to B8 <sup>3</sup>  | 16-31       | Cxx, E8x, ECx, 9ve, Bxx, Dxx, Fxx                                                              |

_<sup>1</sup> This range is for One-Indexed Trackers (where C1 is the lowest-possible note)._

_<sup>2</sup> These effects will not work on Channel 3 if the same row is playing a note on Channel 3._

_<sup>3</sup> You can adjust the pitch of noise instruments to adjust its divisor, giving you different sounds._

## Instruments

_All numbers listed are in base-10 unless otherwise noted._

Although template.mod comes with 31 instruments, all instruments must be used on the correct channel. The .mod instrument data cannot be modified to change the in-game sound.

### Pulse Instruments

The pulse channels 1 and 2 have four instrument options:

1. 25% pulse
2. 50% pulse (square wave)
3. 75% pulse (inverted 25% pulse)
4. 12.5% pulse

Instruments 5 through 7 are intentionally left blank.

### Wave Instruments

Channel 3, the wave channel, has 8 instrument options:

8. Buzzy (Source code calls this "random :P")
9. Ringy (useful for SFX)
10. (0xA) Sync Saw
11. (0xB) Ring Saw
12. (0xC) Octave Pulse + Triangle
13. (0xD) Sawtooth
14. (0xE) Square
15. (0xF) Sine

### Noise Instruments

Channel 4 has a set of Periodic Noise presets at different pitches, and a set of Pseudorandom Noise presets at different pitches. The nicknames and descriptions next to these instruments are not official for GBT Player. They exist to help identify these noise presets at a glance.

#### Periodic Noise

1.  (0x10) "stutter" - A square plus a pulse at random pulse widths
2.  (0x11) "rumble" - The same as 16 but faster
3.  (0x12) "engine" - The same as 17 but faster
19. (0x13) "low tone" - Sounds like D5
20. (0x14) "undertone" - Sounds like E5 + 50cents
21. (0x15) "middletone" - Sounds like B5 + 50cents
22. (0x16) "overtone" - Sounds like D6 + 50cents
23. (0x17) "high tone" - Sounds like D7

#### Pseudorandom Noise

24. (0x18) "earthquake" - A square with a thin pulse at psuedorandom pulse widths
25. (0x19) "spaceship" - The same as 24 but faster
26. (0x1A) "ocean" - etc.
27. (0x1B) "scratch" - etc.
28. (0x1C) "glitch" - A fairly clean white-noise sample, much unlike other instruments
29. (0x1D) "volcano" - A pulse with rapidly changing pulse width
30. (0x1E) "scream" - The same as 29 but faster
31. (0x1F) "static" - etc.

## Effects

### Song-wide effects

| Effect | Name | Notes on effect usage | Usable by |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **Bxx** | Jump | Jump to a specific pattern in the song. | 1, 2, 3<sup>1</sup>, 4
| **Dxx** | Pattern break | Jumps to the next pattern early, starting that pattern at row `xx`. This is the only way to shorten a pattern's length. | 1, 2, 3<sup>1</sup>, 4 |
| **Fxx** | Set speed | Sets the song speed to `xx`, from 0x1 (fast) to 0x1F (slow). This is the only way to adjust in-game song speed. `xx` represents the number of ticks per row. See [Speed Table](#speed-table) for more info. | 1, 2, 3<sup>1</sup>, 4 |

<sup>1</sup> Cannot be used by Channel 3 on rows where Channel 3 is playing a new note.

### Channel effects

Persists on the channel until the effect is set again. See [Effect Persistence](#effect-persistence) for more info.

| Effect | Name | Notes on effect usage | Usable by |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **9ve** | Volume Envelope | Sets the note's starting volume at `v` (0-F), and adds a volume fade envelope. Fade direction and speed is set by `e`. 1-7 decreases volume over time, with 1 being fast. 9-F increases volume over time, with 9 being fast. 8 removes the envelope. Using `9ve` after `Cxx` overrides `Cxx`. | 1, 2, 4 |
| **Cxx** | Volume | Sets the channel volume to `xx`. See [Cxx Volume Limitations](#cxx-volume-limitations) for more info. Using `Cxx` after `9ve` overrides the `v` value, but keeps `e` the same.| 1, 2, 3, 4 |
| **E8x** | Pan | Sets the panning to one of three values. `0-3` = 100% Left, `4-B` = Centre, `C-F` = 100% Right. | 1, 2, 3, 4 |

### Note effects

Affects a note individually.

| Effect | Name | Notes on effect usage | Usable by |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| **0xy** | Arpeggio | Rapidly cycles between 3 notes. `x` and `y` represent the # of semitones above the starting note. | 1, 2, 3, 4 |
| **1xx**| Pitch slide up | Slides the pitch up by `xx` ticks. Putting `100` after a previous `1xx` setting uses the same value as the previous `1xx` setting. | 1, 2, 3 |
| **2xx**| Pitch slide down | Slides the pitch down by `xx` ticks. Putting `200` after a previous 2xx setting uses the same value as the previous `2xx` setting. | 1, 2, 3 |
| **ECx** | Note cut | Cuts the note after `x` frames. Must be below the `Fxx` speed to be heard. | 1, 2, 3, 4 |

## Cxx Volume Limitations

`Cxx` sets the volume of a channel until `Cxx` effect or `9ve` is used.

The Gameboy has 16 unique volume settings for Channels 1, 2 and 4. Although .mod files allow for volumes between 0 and 40hx, GBT Player will round-down these values effects to multiples of 4 to maintain compatibility. Here are the valid volume values for each of the channels:

### Cxx Settings for Channels 1, 2 and 4:

`00, 04, 08, 0C, 10, 14, 18, 1C, 20, 24, 28, 2C, 30, 34, 38, 3C`

Any `Cxx` value that's not a multiple of 4 will be rounded-down to one of the above numbers.

**Example:** Entering `C01`, `C02` and `C03` will sound the same as entering `C00`.

**Example:** Entering `C40` will sound the same as entering `C3C`.

### Unique Volume Settings for Channel 3:

Channel 3 is an exception, with only 4 unique volume settings:

`00, 10, 20, 40`

GBT Player will round `Cxx` effects on Channel 3 toward the nearest number listed above.

**Example:** Entering `C30` will round the volume up to `C40`.

## Effect Persistence

Channel-wide effects persist until a new one is set. This applies to `Cxx`, `9ve`, and `E8x`.

In most trackers, if a note is played without a volume command, the note's volume is reset to the maximum. When a .mod file is converted by GBT Player, notes without a volume effect will play at the same volume as the previous `Cxx` effect. As an example:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C00|
|...........|
|E-502......|
```

In any .mod tracker, the E-5 note will resume at full volume after the C00 effect.

But in-game, you will not hear the E-5 note. This is because the C00 persists until another Cxx effect is set. To make this note heard in-game, the volume must be set again:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C00|
|...........|
|E-502...C40|
```

You can use `EC0` as an alternative to `C00` to cut notes, while preserving the last volume effect.

## Speed Table

Tick speed relies on the Gameboy's framerate. When setting tick speed with `Fxx`, you can use this table to find a BPM that is closest to what you want to achieve. This assumes a 4/4 meter with one beat on every row.

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

<sup>1</sup> Values marked with 1 require an additional `F96` effect to set the tracker's BPM. This will make the tracker speed closer to the in-game speed. GBT ignores `Fxx` effects higher than 0x1F.

You might notice that the value of the F effect, when converted to decimal, is just the speed divisor. For instance, F03 divides the BPM by 3 (`750 / 3 = 250`, or `900 / 3 = 300`).

Because of how GB Studio is set up, a 60hz F05 effect, which would result in 180 BPM in-game, is impossible here.

*While not in GB Studio, GBT has a flag called `-speed` that will handle BPM differently, which would require F96 effects for every speed, as it won't handle any internal conversions to get the speed closer. This is the reason why F01 to F04 require F96 in both modes, there's no equivalent for it in tracker speed.*

**1. Values marked with 1 require an additional F96 effect for the song to sound closer in speed when converted, or setting the song BPM to 150.** This F96 effect can be removed once you're done with your song, there won't be any difference as GBT ignores this -- It's only here to set the BPM to something closer to the in-game version.

## Tricks and Tips

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

A: No, but you can use .midi files. If you're looking for an easy way to add music to your game, you can ask the #collaborations channel of the GB Studio Discord or browse the [GB Studio Community Assets.](https://github.com/DeerTears/GB-Studio-Community-Assets)

This has limited success, and there are easier options to get music in your game, such as the 

**Q: How do I convert a .midi file to .mod?**

A: OpenMPT can open MIDI files and save the result to .mod Some resources on how to do this include a [video tutorial](https://www.youtube.com/watch?v=4AxZqK9_jKE) as well as Kazy's write-up article pinned in the #music-help section of the GB Studio discord.

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

**Q: Can I play sound effects?**

A: Yes, with limitations. View the next page of the documentation for more information. Playing sound effects will not interrupt the song being played by GBT Player.

## Tips

- **Make sure you save frequently and also back-up your files.** This is important in anything that you do and it's worth mentioning here.
- [**If you're stuck, please ask for help in the Discord server, in `#music-help`.**](https://discord.gg/v9xAJCJ) There's usually a few handful of people who are willing to help out at most times.
- **Frequently try out your music in your game.** Things don't sound 1:1, and the built in preview just plays the .mod file rather than building the music and previewing that.
- **Keep it simple!** Don't jump into this, trying to emulate what several artists have done with LSDj or whatever other tools, you'll just get stuck.
- **Don't be afraid of failure.** I get this is kind of an unfitting tip, but it's important. Your first song won't be good, and that's okay. You'll fail, sure, but you'll also gain knowledge on what you might've done wrong, or how you want to go on about with your next endeavor.
- **OpenMPT has a manual to help you get started.** [Here's a link](https://wiki.openmpt.org/Tutorial:_Getting_Started), give it a read if you're stuck (or just ask for help)
- [**Give the GBT Player documentation a read.**](https://github.com/AntonioND/gbt-player) 
