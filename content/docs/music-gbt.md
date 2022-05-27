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

## Converting other formats to GBT-compatible .mod

It's common practice to try converting other audio formats into .mod for playback on the Gameboy. At its core, the final result will never sound identical to the original, but it can be a helpful way to get started.

### Audio files

You cannot automatically convert an audio file to GBT-compatible .mod without the result being indistinguishable. You will always get a better result by transcribing what you hear into a GBT-compatible .mod or one of the below filetypes.

In GB Studio 3.1, you can play back audio files with a bit-depth of 4. See [Sound Effects](https://gbstudio.dev/docs/sound-effects/) for more information.

### Amiga .mod files

You can copy the note data and paste it into template.mod. Not all effects will be supported, and any pitch adjustments on the sample or instrument data will not be carried over, so notes may need to be transposed.

### Famitracker / Famistudio

This requires [OpenMPT](https://openmpt.org/). By exporting a song as _Famitracker Text_, you can use [ft2mod.jamespark.ninja/](http://ft2mod.jamespark.ninja/) to get OpenMPT paste data. Noise and PCM sample data is not supported.

### MIDI

This requires [OpenMPT](https://openmpt.org/). OpenMPT has its own import menu for .midi to .mod. There are a few tutorials on this import menu, such as [GBStudio .mod format explained in 10 minutes | OpenMPT](https://www.youtube.com/watch?v=Qz7z7yWn_5w) and [.midi to .mod | GB Studio Music Tutorial](https://youtu.be/4AxZqK9_jKE).

There is also [midi2mod.jamespark.ninja/](http://midi2mod.jamespark.ninja/) which parses a midi file and returns OpenMPT paste data.
