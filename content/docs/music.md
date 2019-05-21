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

Due to the limits of the Gameboy's hardware, there can only be 4 audio channels in a MOD file.

The first two channels generate pulse waves. The pulse width can be changed by adjusting the channel's instrument parameter.
The third channel generates a variety of pre-set waveforms. This channel's waveform is controlled by its instrument parameter.
The fourth channel generates noise waveforms. This channel's waveform is also controlled by its instrument parameter.

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

* For newer composers, it's a good idea to test your music after creating a few patterns to identify differences between the hardware and your tracker.

* To prevent notes that overlap when looping your song in-game, enter `00` as the note's volume on the tick it should stop playing.

* The maximum volume per-channel is 40 in hexadecimal. A linear transition from volume 40 to 0 looks like this:

`40 3F 3E 3D 3C 3B 3A 39 38 37 36 35 34 33 32 31 30
30 2F 2E 2D 2C 2B 2A 29 28 27 26 25 24 23 22 21 10
10 0F 0E 0D 0C 0B 0A 09 08 07 06 05 04 03 02 01 00`

* MilkyTracker will not save MOD data correctly when making edits to existing MOD files. You can prevent this by savings songs as .xm and exporting to .mod when you are finished.

* Check out the README and documentation of [GBT Player](https://github.com/AntonioND/gbt-player) for more on how the software works and for music theory resources.
