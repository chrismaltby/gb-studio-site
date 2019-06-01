---
title: "Music"
draft: false
next: "/docs/build"
nextTitle: "Building Your Game"
---

GB Studio is internally using [GBT Player](https://github.com/AntonioND/gbt-player). Additional documentation and sample MOD files can be found in its own repository.

GBT Player reads and plays back .MOD files. You can use software such as [OpenMPT](https://openmpt.org/) or [MilkyTracker](https://milkytracker.titandemo.org/) to export tracker music to the MOD filetype.

When done, add your MOD files to the `assets/music` folder of your project.

# Important Limitations

Due to the limits of the Gameboy's hardware, there can only be 4 channels in the .MOD file. You may notice that the channels, when previewing your song within your tracker, will be already panned left and right. This is a limitation of the .MOD file format itself and it isn't something you can change. The panning will not be present upon conversion.

The first two channels generate pulse waves. The pulse width can be changed by adjusting the channel's instrument parameter from 1 to 4.

The third channel generates a variety of pre-set waveforms. You can change the waveform by setting the instrument parameter from 8 to 15. If you're familiar with the Gameboy's hardware, you might be wondering if the waveforms are editable: They are not.

The fourth channel generates a variety of noise waveforms. You can change the waveform by setting its instrument parameter from 16 to 31.

Channel # | Waveform | Note Range* | Instrument Range | Effects Allowed
---------- | ---------- | ---------- | ---------- | ----------
Channel 1 | Pulse | C3 to B8 | 1-4 | All effects*
Channel 2 | Pulse | C3 to B8 | 1-4 | All effects*
Channel 3 | Wave | C3 to B8 | 8-15 | Only effects 0, E8 and EC
Channel 4 | Noise | Only C5 | 16-31 | All except 0*

*This note range is for trackers that display notes between C1 and C8 such as OpenMPT. Trackers that display notes between C0 and C7 such as MilkyTracker should use transpose these guidelines an octave down.

**Not all effects will be converted properly. The only ones that convert correctly, from my own testing, are 0xy, Bxx, Cxx, ECx and Fxx. Others might not convert or break the song!

## Tempo

GBT Player reads effect ``f`` as song speed. ``f`` defines how many in-game frames should pass before the next tick of the MOD file is played.

If you're using a tracker that can set the tempo without using an effect, you want to use 150 beats per minute (bpm). It more closely matches the Gameboy refresh rate, which will play a pretty big role. If not, you should put a F96 effect on the first row of the song.

Effect ``f01`` is the fastest and plays 1 tick per frame. ``f1f`` is the slowest speed and plays 1 tick every 32 frames. This effect can be set on any channel except channel 3.

## Effects

**0xy - Arpeggio

This effect will quickly arpeggiate through the root note, x semitones away from the root note, and y semitones away from the root note. An 037 effect will sound minor, while a 047 effect will sound major.

**Bxx - Pattern jump

This effect is useful if you want to end a pattern earlier, or create a loop that's not from the beginning. The xx represents which pattern to jump to.

**Cxx - Volume change (Range: C00 - C40, hex)

This effect is useful for changing volumes, but keep in mind GBT and the Gameboy hardware only has a quarter of the volume resolution present in a tracker. As such, try keeping your volumes as multiple of fours (0, 4, 8, C(12 in hex), 10(16 in hex), 14, 18, 1C, 20... up until 40).

**ECx - Note cut (Range: EC1 - EC(f-1), where f-1 is the Fxx effect value minus 1. e.g. Tempo of F06, maxium ECx would be 6-1, so 5)

This is pretty self explanatory. It cuts a note based on how many ticks pass from the note playing to the range. It's useful for certain percussion or instruments.

## General Tips

* It's a good idea to test your music after creating a few patterns to identify any audible differences between GBT Player and your tracker. Things are not 1:1.

* Read the tutorial for [OpenMPT](https://wiki.openmpt.org/Tutorial:_Getting_Started), or [MilkyTracker](https://milkytracker.titandemo.org/docs/MilkyTracker.html).

* If you're using Cxx commands to make volume changes, do not expect GBT to reinstate the next note at full note, like the preview in your tracker might suggest. Use another volume change command to bring it up again.

* To prevent notes that overlap when looping your song in-game, enter `00` as the note's volume on the tick it should stop playing.

* If you're not using channels 1 or 2 right as the song starts, it is a wise idea to mute them using a C00 effect. They might start out by playing garbled notes, even if there's nothing present on the channels.

* MilkyTracker will not save MOD data correctly when making edits to existing MOD files. You can prevent this by savings songs as .xm and exporting to .mod when you are finished.

* Check out the README and documentation of [GBT Player](https://github.com/AntonioND/gbt-player) for more on how the software works.
