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

The first two channels can make pulse waves with various widths. The third channel can make a variety of pre-set waveforms. The fourth channel generates different kinds of noise. These waveform variations are accessed through each channel's instrument parameter.

Channel # | Waveform | Note Range* | Inst. Range | Effects Allowed
--------- | --------- | --------- | --------- | --------- |
Channel 1 | Pulse | C3 to B8 | 1-4 | All effects
Channel 2 | Pulse | C3 to B8 | 1-4 | All effects
Channel 3 | Wave | C3 to B8 | 8-15 | Only effects 0, E8 and EC
Channel 4 | Noise | Only C5 | 16-31 | All except 0

Any notes out of a channel's note range will be approximated to the closest in-range note. All notes in channel 4 are converted to C5.

If a channel has notes, the instrument parameter and volume parameter should *at least* be set for the channel's first note.

*This note range is for trackers that display notes between C1 and C8 such as OpenMPT. Other trackers that display notes between C0 and C7 such as MilkyTracker should read the range guidelines down an octave.

## Tempo

GBT Player reads effect ``f`` as song speed. This does not translate to BPM and requires further experimentation.

Effect ``f01`` is the slowest speed and effect ``f1f`` is the fastest speed. This effect can be set on any channel except channel 3. Songs without their speed set will still be readable.

## General Tips

* To prevent notes that overlap when looping your song in-game, enter `00` as the note's volume on the tick it should stop playing.

* The maximum volume per-channel is 40 in hexadecimal. A linear transition from volume 40 to 0 looks like this:

`40 3F 3E 3D 3C 3B 3A 39 38 37 36 35 34 33 32 31 30
30 2F 2E 2D 2C 2B 2A 29 28 27 26 25 24 23 22 21 10
10 0F 0E 0D 0C 0B 0A 09 08 07 06 05 04 03 02 01 00`

* MilkyTracker will not save MOD data correctly when making edits to existing MOD files. You can prevent this by savings songs as .xm and exporting to .mod when you are finished.

* Check out the README and documentation of [GBT Player](https://github.com/AntonioND/gbt-player) for more on how the software works and for music theory resources.
