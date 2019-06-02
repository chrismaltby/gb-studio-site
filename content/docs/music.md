---
title: "Music"
draft: false
next: "/docs/build"
nextTitle: "Building Your Game"
---

GB Studio is internally using [GBT Player](https://github.com/AntonioND/gbt-player). Additional documentation and sample MOD files can be found in its own repository.

GBT Player reads and plays back .MOD files. You can use software such as [OpenMPT](https://openmpt.org/) or [MilkyTracker](https://milkytracker.titandemo.org/) to create .MOD tracker music. Of course, you can use other software that can edit .mod files (like [BassoonTracker](https://www.stef.be/bassoontracker/), [ProTracker](https://16-bits.org/pt.php), etc.)

When done, add your MOD files to the `assets/music` folder of your project.

# Important Limitations

Due to the limits of the Gameboy's hardware, there can only be 4 channels in the .MOD file. You may notice that the channels, when previewing your song within your tracker, will be already panned left and right. This is a limitation of the .MOD file format itself and it isn't something you can change. The default panning will not be present upon conversion, unless set by yourself via effects (more info below).



| Channel # | Sound | Note Range* | Instrument Range | Effects Allowed       |
| --------- | ----- | ----------- | ---------------- | --------------------- |
| Channel 1 | Pulse | C3 to B8    | 1-4              | 0, B, C, D, E8, EC, F |
| Channel 2 | Pulse | C3 to B8    | 1-4              | 0, B, C, D, E8, EC, F |
| Channel 3 | Wave  | C3 to B8    | 8-15             | 0, E8 and EC          |
| Channel 4 | Noise | Only C5     | 16-31            | B, C, D, EC, E8, F    |

**This note range is for trackers that display notes between C1 and C8 such as OpenMPT. Trackers that display notes between C0 and C7 such as MilkyTracker should use transpose these guidelines an octave down (as in, C3 to B8 in MilkyTracker becomes C2 to B7).*

# Instruments available

The pulse channels get 4 instruments (from 1 to 4): 

- 25% pulse
- 50% pulse (sometimes called a square wave)
- 75% pulse (inverted 25% pulse)
- 12.5% pulse

The wave channel gets 8 instruments (from 8 to 15):

- Buzzy 
- Ringy (useful for SFX)
- Sync Saw
- Ring Saw
- Octave Pulse + Triangle
- Sawtooth
- Square
- Sine

The noise channels gets the most instruments, but that's also because of how the noise works on the Gameboy:

- 16 to 23 - Periodic (looped) noise at various pitches
- 24 to 32 - Pseudorandom noise at various pitches

## Effects

| EFFECT  |     NAME      | NOTES                                                        |
| :-----: | :-----------: | :----------------------------------------------------------- |
| **0xy** |   Arpeggio    | Where x = 2nd note, y = 3rd note, in semitones. You should set the instrument when using this effect. |
| **Bxx** |     Jump      | Jump to specific pattern `xx`.                               |
| **Cxx** |    Volume     | Sets the volume to xx. Valid values are from `00` to `40`. The wave channel can only be set to `00, 10, 20` and `40`. The pulse channels only have a quarter of the range. You should use a volume effect on each new note to reset their volumes post-conversion to reset the volume. |
| **Dxx** | Pattern break | Jumps to the next pattern early, where `xx` is the position (row) it should jump to in the next pattern. |
| **E8x** |      Pan      | Set the panning to `x`. `0-3` = Left, `4-B` = Centre, `C-F` = Right |
| **ECx** |   Note cut    | Cut the note after `x` ticks. `0 < x < speed-1`              |
| **Fxx** |   Set speed   | Sets the song speed to `xx`. Valid values are `01` to `1F`. The value represents how many frames should the song wait before moving on to another row. Setting BPM speed has no effect after conversion. |

## General Tips

- It's a good idea to test your music after creating a few patterns to identify any audible differences between GBT Player and your tracker. Things are not always 1:1.
- Read the manuals and tutorials for [OpenMPT](https://wiki.openmpt.org/Tutorial:_Getting_Started) or [MilkyTracker](https://milkytracker.titandemo.org/docs/MilkyTracker.html).
- If you're using OpenMPT, make sure to disable ProTracker 1/2 mode and Amiga frequency limits in the song settings! The latter is especially important to disable, as leaving it enabled will limit your pitch range from C4 to B6.
- You might want to set the song BPM to 150 (either via song settings, or effects in OpenMPT). It will more closely match the conversion in terms of speed.
- You should set the volume and the instrument for each new note.
- You should set the instrument upon a volume change on the wave channel.
- To prevent notes that overlap when looping your song in-game, enter `00` as the note's volume on the tick it should stop playing.
- If you're not using the pulse channels right as the song starts, it is a wise idea to mute them using a C00 effect. They sometimes start out by playing garbled notes, even if there's nothing present on those channels.
- MilkyTracker will not save .MOD data correctly when making edits to existing .MOD files. One way to prevent this is by saving drafts as an .xm file (which Milky natively supports), and exporting the song as a .mod when you need to try it in GB Studio.
- Check out the README and documentation of [GBT Player](https://github.com/AntonioND/gbt-player) for more on how the software works.
