---
title: "Music"
draft: false
next: "/docs/build"
nextTitle: "Building Your Game"
---

GB Studio is internally using [GBT Player](https://github.com/AntonioND/gbt-player) to read and play back MOD files in GB Studio's ROMs. Additional documentation and MOD files that show off every instrument and every channel's note range can be found in its repository.

# Getting Started

1. Download a tracker program such as [OpenMPT](https://openmpt.org/) or [MilkyTracker](https://milkytracker.titandemo.org/) to create music in the MOD filetype.

2. Create a new project in GB Studio. Every new project provides a MOD file called `template.mod` which has every GBT Player instrument recreated in the MOD file's instrument data. Changing the samples in the MOD file will not affect the sounds created in-game. Load `template.mod` into your tracker.

    **For MilkyTracker Users:** Save this file as an .xm file or the song will be corrupted when loading into GB Studio. Export your song as a MOD file when you want to test your song in-game.

3. Zap (delete) the song's notes in `template.mod` to provide a blank slate for composing. Make sure to test your song in-game often.

Project BPM will not translate into your song, see `Tempo` below for more information.

# Important Limitations

Due to the limits of the Gameboy's hardware, there can only be 4 channels of audio. The first two channels generate pulse waves. The third channel generates a variety of pre-set waveforms, and the fourth channel generates a variety of noise waveforms. 

The pulse width of channels 1 and 2 can be changed by adjusting the channel's instrument parameter from 1 to 4. You can change the waveform of channel 3 by setting its instrument parameter from 8 to 15. Channel 4's waveform is also set by its instrument parameter, but instead it uses instruments 16 to 31.

Channel # | Waveform | Note Range* | Instrument Range | Effects Allowed
---------- | ---------- | ---------- | ---------- | ----------
Channel 1 | Pulse | C3 to B8 | 1-4 | All effects
Channel 2 | Pulse | C3 to B8 | 1-4 | All effects
Channel 3 | Wave | C3 to B8 | 8-15 | Only effects 0, E8 and EC
Channel 4 | Noise | Only C5 | 16-31 | All except 0

*For trackers that display notes between C1 and C8 by default, such as OpenMPT. Trackers that display notes C0 to C7 by default should transpose these note ranges down an octave.

## Tempo

GBT Player reads effect ``f`` as song speed. ``f`` defines how many in-game frames should pass before the next tick of the MOD file is played. ``f01`` is the fastest and plays 1 tick per frame. ``f1f`` is the slowest speed and plays 1 tick every 32 frames. Most trackers are compatable with this effect and will change the project tempo to match effect ``f``.

Due to the refresh rate of the Gameboy, ``f`` should be set to 96 on the first tick, followed by your desired song tempo.

Effect ``f`` can be set on any channel except channel 3.

## Tips

* Make sure to test your song in-game often to identify any audible differences between the song in-game and the song in your tracker.

* To prevent notes that overlap when looping your song in-game, enter `00` as the note's volume on the tick it should stop playing.
