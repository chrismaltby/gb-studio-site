---
title: "Music"
draft: false
next: "/docs/build"
nextTitle: "Building Your Game"
---

GB Studio is internally using [GBT Player](https://github.com/AntonioND/gbt-player) *(GameBoy Tracker)*. Additional documentation and sample MOD files can be found in its own repository.

If you're unfamiliar with making tracker music, you can follow a video series like [Y_VE_Squared's OpenMPT tutorial](https://youtu.be/2jRh_XNMYE0), [Gruber's MilkyTracker tutorial](https://youtu.be/DRDlix-KT1E?list=PLur95ujyAigtzAa6Rw_VcIgdP4n45JvZh), [wasp amiga's ProTracker tutorial](https://youtu.be/S1yE2qL8UcY?list=PLVoRT-Mqwas9gvmCRtOusCQSKNQNf6lTc) and many others. These videos cover how to navigate a tracker program and are well-designed for tracker beginners.

For Windows and Linux (WINE) users, [OpenMPT](https://openmpt.org/) has the fewest workarounds for creating .mod files for use in GBT Player. For OS X, [MilkyTracker](https://milkytracker.titandemo.org/), [8bitbubsy's ProTracker/Fasttracker Clones](https://16-bits.org/pt.php) and the browser-based [BassoonTracker](https://www.stef.be/bassoontracker/) all export .mod files and will work with GBT Player.

# Getting Started

1. Create a blank GB Studio project, find the file `assets/music/template.mod` and open it with your tracker.
 - You must edit this file to hear accurate Gameboy instruments in your tracker.
 - MilkyTracker users should save this file as an .xm file. Saving a .mod file in MilkyTracker will corrupt it. Export your song as a .mod file every time you want to test your song in-game.
2. Keeping the instrument data, delete/modify template.mod's song data.
3. Use the instrument list shown later in this document to pick the sounds you want. Changing the samples in your tracker will **not** affect how they sound in-game.

When done, add your MOD files to the `assets/music` folder of your project. Test your song in-game often to keep track of any audible in-game differences.

# Important Limitations

The .mod filetype only allows 4 channels of audio. For GBT Player, each channel has its own limits when composing.

| Channel # | Sound | Note Range* | Instrument Range | Effects Allowed       |
| --------- | ----- | ----------- | ---------------- | --------------------- |
| Channel 1 | Pulse | C3 to B8    | 1-4              | All listed effects    |
| Channel 2 | Pulse | C3 to B8    | 1-4              | All listed effects    |
| Channel 3 | Wave  | C3 to B8    | 8-15             | 0, E8 and EC          |
| Channel 4 | Noise | Only C5     | 16-31            | B, C, D, EC, E8 and F |

**This note range is for trackers that display notes between C1 and C8 such as OpenMPT. Trackers that display notes between C0 and C7 such as MilkyTracker should use transpose these guidelines an octave down (as in, C3 to B8 in MilkyTracker becomes C2 to B7).*

- Your song's tempo will not be present in-game unless set via the `F` effect on channels 1, 2 and 4.
- You cannot have more than 64 notes per-channel in a pattern. Patterns less than 64 notes need to use effect `B`, listed in this document's effect list.
- Channel 1 needs to either start with a note or it needs its effect parameter set to `C00`.
- Channel 3 always needs its instrument set even if only the volume is being changed.
- Instrument envelopes will not be heard in-game.
- If working in .xm, the volume parameter will overwrite the effect parameter with Cxx

# Instrument List

These instruments are listed by their hexadecimal numbers.

The pulse channels use 4 instruments from 1 to 4:

| *#* | *Waveform* |
| --- | ------------------------------ |
| **1.** | 25% pulse |
| **2.** | 50% pulse (square wave) |
| **3.** | 75% pulse (inverted 25% pulse) |
| **4.** | 12.5% pulse |

The wave channel uses 8 instruments from 8 to F in hexadecimal:

| *#* | *Waveform* |
| --- | ---------------------- |
| **8.** | Buzzy |
| **9.** | Ringy Buzz |
| **A.** | Sync Saw |
| **B.** | Ring Saw |
| **C.** | Octave Pulse + Triangle |
| **D.** | Sawtooth |
| **E.** | Square |
| **F.** | Sine |

The noise channel uses 16 instruments from 10 in hexadecimal to 20 in hexadecimal:

| *Inst. Range* | *Waveforms* |
| ------------ | ------------------------------------------- |
| **10hx** to **17hx** | Periodic (looped) noise at various pitches |
| **18hx** to **20hx** | Pseudorandom noise at various pitches |

## Tempo/Speed

Project tempo is not carried over to GBT Player. Effect ``F`` is read as your song's speed. ``F`` defines how many in-game frames should pass before the next note of the .mod file is played. ``F01`` is the fastest speed and plays 1 tick every frame. ``F1F`` is the slowest speed and plays 1 tick every 32 frames. All trackers are compatible with this effect and they will change the project's speed to match effect ``F``.

For faster speed settings between ``F01`` and ``F04`` the Project BPM should be set to 150 BPM to emulate the Gameboy's refresh rate. This data is only read in the tracker software and can be adjusted if needed.

Effect ``F`` can be set on any channel except channel 3. Channels 2 or 4 are best used to set speed since channel 1 will automatically start the song by playing at full volume unless it has effect ``C00`` added to silence it.

## Volume Limitations

Channel 4 has full volume range from 0 to 40 in hexadecimal. Channel 3 will only display volume changes of `00, 10, 20` and `40`.

Channels 1 and 2 only have a quarter of the full volume range, and only volume changes in steps of 4 are registered. Here are all the volumes they will register in hexadecimal:

`0, 4, 8, C, 10, 14, 18, 1C, 20, 24, 28, 2C, 30, 34, 38, 3C, 40`

## Full List of Effects

| EFFECT  |     NAME      | NOTES                                                        |
| :-----: | :-----------: | :----------------------------------------------------------- |
| **0xy** |   Arpeggio    | Plays 3 notes rapidly. x and y's values represent # of semitones above the original note. x is for the 2nd note, y is for the 3rd note. You should set the instrument when using this effect. |
| **Bxx** |     Jump      | Jump to specific pattern `xx`. Put this on the last heard note of a pattern. |
| **Cxx** |    Volume     | Set the volume of a note to xx from `00` to `40`. A volume effect should be set on each new note since note volume is not reset in-game unlike most trackers' global volume setting. |
| **Dxx** | Pattern break | Jumps to the next pattern early, where `xx` is the position (row) it should jump to in the next pattern. |
| **E8x** |      Pan      | Set the panning to `x`. `0-3` = Hard Left, `4-B` = Center, `C-F` = Hard Right |
| **ECx** |   Note cut    | Cut the note after `x` ticks. `0 < x < speed-1` |
| **Fxx** |   Set speed   | Sets the song speed to `xx`. Valid values are `01` to `1F`. The value represents how many frames the game should wait before moving on to the next note of the song. |

## General Tips

- Test your music after creating a few patterns to identify any audible differences between GBT Player and your tracker.
- Read the manuals and tutorials for [OpenMPT](https://wiki.openmpt.org/Tutorial:_Getting_Started) or [MilkyTracker](https://milkytracker.titandemo.org/docs/MilkyTracker.html).
- If you're using OpenMPT, make sure to disable ProTracker 1/2 mode and Amiga frequency limits in the song settings! The latter is especially important to disable, as leaving it enabled will limit your pitch range from C4 to B6.
- To prevent notes that overlap when looping your song in-game, enter `00` as the note's volume on the tick it should stop playing.
- If you're not using the first pulse channel right as the song starts, mute it using a C00 effect.
- Check out the README and documentation of [GBT Player](https://github.com/AntonioND/gbt-player) for more on how the software works.

#### OpenMPT Keyboard shortcuts: For the default keyboard layout.
Change the selected note, instrument, or effect, value using `Crtl +`, `Crtl -` or `Crtl & Scroll wheel`

Change your current instrument using `CRTL & Arrow Up or Down`

Move between patterns with `CRTL & Arrow Left or Right`
