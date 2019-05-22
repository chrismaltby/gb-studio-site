---
title: "Music"
draft: false
next: "/docs/build"
nextTitle: "Building Your Game"
---

GB Studio is internally using [GBT Player](https://github.com/AntonioND/gbt-player). Additional documentation and sample MOD files can be found in its own repository.

GBT Player reads and plays back MOD files. You can use software such as [OpenMPT](https://openmpt.org/) or [MilkyTracker](https://milkytracker.titandemo.org/) to export tracker music to the MOD filetype.

When done, add your MOD files to the `assets/music` folder of your project.

# Important Limitations

Due to the limits of the Gameboy's hardware, there can only be 4 channels in a MOD file.

The first two channels generate pulse waves. The pulse width can be changed by adjusting the channel's instrument parameter from 1 to 4.

The third channel generates a variety of pre-set waveforms. You can change the waveform by setting its instrument parameter from 8 to 15.

The fourth channel generates a variety of noise waveforms. You can change the waveform by setting its instrument parameter from 16 to 31.

Channel # | Waveform | Note Range* | Instrument Range | Effects Allowed
---------- | ---------- | ---------- | ---------- | ----------
Channel 1 | Pulse | C3 to B8 | 1-4 | All effects
Channel 2 | Pulse | C3 to B8 | 1-4 | All effects
Channel 3 | Wave | C3 to B8 | 8-15 | Only effects 0, E8 and EC
Channel 4 | Noise | Only C5 | 16-31 | All except 0

*This note range is for trackers that display notes between C1 and C8 such as OpenMPT. Trackers that display notes between C0 and C7 such as MilkyTracker should use transpose these guidelines an octave down.

## Tempo

GBT Player reads effect ``f`` as song speed. ``f`` defines how many in-game frames should pass before the next tick of the MOD file is played.

Effect ``f01`` is the fastest and plays 1 tick per frame. ``f1f`` is the slowest speed and plays 1 tick every 32 frames. This effect can be set on any channel except channel 3.

## General Tips

* For newer composers, it's a good idea to test your music after creating a few patterns to identify any audible differences between GBT Player and your tracker.

* To prevent notes that overlap when looping your song in-game, enter `00` as the note's volume on the tick it should stop playing.

* MilkyTracker will not save MOD data correctly when making edits to existing MOD files. You can prevent this by savings songs as .xm and exporting to .mod when you are finished.

* Check out the README and documentation of [GBT Player](https://github.com/AntonioND/gbt-player) for more on how the software works.
