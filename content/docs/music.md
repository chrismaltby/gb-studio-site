---
title: "Music"
draft: false
next: "/docs/build"
nextTitle: "Building Your Game"
---

# Introduction

GB Studio is internally using [GBT Player](https://github.com/AntonioND/gbt-player), a driver which takes .MOD files and converts them to a format the Gameboy can understand. You can use software such as [**OpenMPT**](https://openmpt.org/) (Windows, though it works great with Wine) or [**MilkyTracker**](https://milkytracker.titandemo.org/) (works natively across multiple systems) to create .MOD tracker music. Of course, you can use other software that can edit .mod files like [**BassoonTracker**](https://www.stef.be/bassoontracker/) (web based), [**ProTracker**](https://16-bits.org/pt.php), and more.

# Getting Started

1. Create a blank GB Studio project, find the file `assets/music/template.mod` and open it with your tracker of choice.
   - **You must edit this file to get an accurate representation of the instruments you can use.**
   - MilkyTracker users should save this file as an `.XM` file. Saving a .mod file in MilkyTracker will corrupt it. Export your song as a .mod file every time you want to test your song in-game.
2. You can remove the example song, but you **MUST** keep the instruments/sounds/samples intact.
3. Use the instrument list shown later in this document to pick the sounds you want. Changing the samples in your tracker will **not** affect how they sound in-game.

When done, please add your .mod files to the `assets/music` folder of your project. **Test your song in-game often to keep track of any audible in-game differences.** (NOT in the preview!)

We're still dealing with a tracker. I'll try to give you a quick rundown of how a tracker works:

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

# Important Limitations

There may be **ONLY** 4 channels in your .MOD file. Any less or more, and it will not convert properly.

**This is a limitation imposed by the Gameboy itself, which has 4 channels of polyphony at all times.**

On top of that, you may only use certain instruments on certain channels. There's a table down here which documents where the instruments should go. This is also because the Gameboy assigns instruments based on the channel, this is hardwired into the very silicon of the chip and cannot be changed.

| Channel #     | Sound type | Note Range<sup>1</sup> | Instruments | Effects               |
| ------------- | ---------- | ---------------------- | ----------- | --------------------- |
| Channel 1 & 2 | Pulses     | C3 to B8               | 1-4         | 0, B, C, D, E8, EC, F |
| Channel 3     | Waveform   | C3 to B8               | 8-15        | 0, E8 and EC          |
| Channel 4     | Noise      | Only C5                | 16-31       | B, C, D, E8, EC, F    |

*<sup>1</sup> This note range is for trackers that display its notes on a range from C1 to C8, like OpenMPT does. If you're using a tracker that can go as low as C0 (like MilkyTracker), then the note ranges are one octave (number) lower (for instance, C3 to B8 in MPT sounds the same as C2 to B7 in Milky).*

# Volume limitations

Channels 1, 2 and 4 only have a quarter of the volume range that trackers support. (which is from 0h to 40h). The supported volumes are as such:

`00, 04, 08, 0C, 10, 14, 18, 1C, 20, 24, 28, 2C, 30, 34, 38, 3C`

Any other volumes will just get clamped to the nearest value supported. (e.g. C40, the default volume value, gets clamped down to C3C)

**Volumes above C40 aren't supported, and they will behave abnormally once converted.**

While in a tracker the volume resets on each new note, it will not upon conversion. Say you have this scenario:

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

In-game, you will not hear the E-5 note. This is because the C00 persists until another `Cxx` effect is set. Basically, you have to do the following:

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

This applies to any instance of volume. If you have a note on C24 that gradually decreases to, say C18, you still need to reset each new note to C24 (or higher, or lower, depending on what you want to achieve).

Meanwhile, Channel 3 only gets a quarter of **that**, with a volume range of `00, 10, 20, 40`. And beyond that, you'll have to input the instrument and note for the volume change to have any effect, unless it's a `C00` volume effect. For instance, again:

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

You will not hear any volume change from the C20 in-game, so what we have to do is add a note there to register the volume change.

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


# Instruments available

The numbers on this list represent the base10 number that each of these instruments use in OpenMPT. Beside these numbers (in brackets) is the base16 equivalent of these numbers for MilkyTracker users.

The pulse channels get 4 instruments (from 1 to 4): 

1. 25% pulse
2. 50% pulse (square wave)
3. 75% pulse (inverted 25% pulse)
4. 12.5% pulse

Instruments 5 through 7 are intentionally left blank.

The wave channel gets 8 instruments (from 8 to 15):

8. Buzzy (Source code calls this "random :P")
9. Ringy (useful for SFX)
10. (A) Sync Saw
11. (B) Ring Saw
12. (C) Octave Pulse + Triangle
13. (D) Sawtooth
14. (E) Square
15. (F) Sine

The noise channels get the most instruments, partly due to how the noise works on the Gameboy. Instruments 16 to 23 use Periodic (looped) Noise at various pitches while instruments 24 to 32 use Pseudorandom noise at various pitches.

The nicknames and descriptions next to these instruments are not official for GBT Player, they are intended to help identify these noise instruments at a glance.

Periodic Noise:

16. (10) "stutter" - A square plus a pulse at random pulse widths
17. (11) "rumble" - The same waveform but faster
18. (12) "engine" - The same waveform but even faster
19. (13) "low tone" - Sounds like D5
20. (14) "undertone" - Sounds like E5 + 50cents
21. (15) "middletone" - Sounds like B5 + 50cents
22. (16) "overtone" - Sounds like D6 + 50cents
23. (17) "high tone" - Sounds like D7

Pseudorandom Noise

24. (18) "earthquake" - A square with a thin pulse at random pulse widths
25. (19) "spaceship" - The same waveform but faster
26. (1A) "ocean" - The same waveform but even faster
27. (1B) "scratch" - You get the idea

28. (1C) "glitch" - A fairly clean white-noise sample, unrelated to other instruments

29. (1D) "volcano" - A pulse with rapidly changing pulse width
30. (1E) "scream" - The same waveform but faster
31. (1F) "static" - The same waveform but even faster

There are no GBT Player-readable instruments beyond 31.

# Effects

| EFFECT  |     NAME      | NOTES                                                        |
| :-----: | :-----------: | :----------------------------------------------------------- |
| **0xy** |   Arpeggio    | Where `x` = 2nd note, `y` = 3rd note, in semitones. You should set the instrument when using this effect. |
| **Bxx** |     Jump      | Jump to a specific position in the song, `xx`.               |
| **Cxx** |    Volume     | Sets the volume to xx. See **volume limitations** for more info. |
| **Dxx** | Pattern break | Jumps to the next pattern early, where `xx` is the row it should jump to in the next pattern. Using this on the last pattern will break the song by reading garbage data beyond the song. |
| **E8x** |      Pan      | Set the panning to `x`. `0-3` = Left, `4-B` = Centre, `C-F` = Right |
| **ECx** |   Note cut    | Cut the note after `x` ticks. `0 < x < speed-1`              |
| **Fxx** |   Set speed   | Sets the song speed to `xx`. Valid values are `01` to `1F`. The value represents how many frames should the song wait before moving on to another row. Setting BPM speed has no effect upon conversion. |

## Speed Table

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

This is not a full table, it's just the top few speeds. It's here to highlight some of the speed discrepancies, albeit small to not be very noticeable, with the exception of the values marked with 1.

You might notice that the value of the F effect, when converted to decimal, is just the speed divisor. For instance, F03 divides the BPM by 3 (`750 / 3 = 250`, or `900 / 3 = 300`).

Because of how GB Studio is set up, a 60hz F05 effect, which would result in 180 BPM in-game, is impossible here.

*While not in GB Studio, GBT has a flag called `-speed` that will handle BPM differently, which would require F96 effects for every speed, as it won't handle any internal conversions to get the speed closer. This is the reason why F01 to F04 require F96 in both modes, there's no equivalent for it in tracker speed.*

**1. Values marked with 1 require an additional F96 effect for the song to sound closer in speed when converted, or setting the song BPM to 150.** This F96 effect can be removed once you're done with your song, there won't be any difference as GBT ignores this -- It's only here to set the BPM to something closer to the in-game version.

# Tricks

This section will cover some tricks you can use with GBT to make it sound better than it should

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

# Frequently Asked Questions

**Q: Can I use mp3s with this?**

A: No.

**Q: Can I use this .MOD file I found online?**

A: Most likely, no. Your .MOD file has to be specifically formatted within what you get in `template.mod`, with the limitations mentioned above.

**Q: How do I stop a note from playing?**

A: Either use another note entirely, or if you want to silence it, use a `C00` effect.

**Q: My song sounds all wrong upon building it! Why is that?**

A: There's multiple reasons why that might be. **Please make sure your song is complying with everything above** (in particular, make sure you're only using the supported effects, are complying with the channel allocations, and aren't going over or under certain frequencies).

If you're using **MilkyTracker**, please be aware that it can break how a .mod file can sound. To get around this, save as `.XM`, its natively supported format, and when you're done with the song, export it as a .mod song and try it out in GB Studio.

**Q: My song speed is wrong! It's faster in-game than it is in the tracker!**

A: If you're using an `Fxx` effect with the value **higher than `F05`**, then you will need to keep 50hz to 60hz conversions in mind. The .mod format was originally developed for European computers, which ran at 50hz, while the Gameboy runs at 60. **A way to mitigate this is to set your BPM to 150 instead of 125.** If you're using OpenMPT (which cannot set the BPM for whatever reasons), a `F96` effect in the song will do the trick (though use it as early as possible).

**Q: Can I play back this voice clip/sound effect/whatever?**

A: No, not on GBT. 

LSDj and more advanced sound drivers available for the Gameboy do support playing back samples, but doing this requires a lot of data to be moved in a short amount of time (means only music can play at that time, really).

**Q: Can I use a different tool to write my music?**

A: If the tool can natively export to .mod, try it! If not, then you'll need to transcribe what you've written to a tracker, that can save .mod files.

**Q: Can I use MIDI files?**

A: OpenMPT can open MIDI files, but you'll have to do the hard work of truncating it into just 4 channels, with limited tones. It's often easier to just input stuff manually because you have a lot more control over everything, and you have a better picture of everything going on if you do that.

**Q: This is kinda cumbersome. What alternatives do I have?**

A: As of the date of writing this, none that I know. It's possible that in the future people might make custom tailored trackers or tools for GB Studio, but until then, this is the only way we can make music for GB Studio games.

You might want to start making a non-GB song with OpenMPT or your tracker of choice, as that'll better teach you what a tracker really does, at least in my opinion...

There's a link in the Tips section on how to get started with OpenMPT, I suggest giving it a read!

**Q: I used a D00 effect on my last pattern to loop back to the first, but it's playing glitched in game after it loops once?**

A: Use a `Bxx` effect. Using a D00 effect on the last frame will trip GBT into thinking there's more data beyond the song, making it read garbage data.

**Q: I'm using OpenMPT, and some notes appear as red and they sound way higher/lower than what they're supposed to sound!**

A: Go over to the "General" tab that's under the New File, Open and Save buttons. Click the big button next to the "Name" field that says "MOD (ProTracker), 4 channels". Once there, disable both **ProTracker 1/2 Mode (MOD)** and **Amiga Frequency Limits.** This is a thing because the format here is meant to be used with the Amiga line of computers (that's where it was made), which has frequency limits.

**Q: The song starts out with garbage noise.**

A: If you're not using the first two channels, mute them with a `C00` effect.

**Q: Can I play sound effects?**

A: Not as of yet. The only way you can play sound effects is to play it as a music file, but that'll kill the current music and you'll have to restart it after the sound effect is done playing.

## Tips

- **Make sure you save frequently and also back-up your files.** This is important in anything that you do and it's worth mentioning here.
- [**If you're stuck, please ask for help in the Discord server, in `#music-help`.**](https://discord.gg/v9xAJCJ) There's usually a few handful of people who are willing to help out at most times.
- **Frequently try out your music in your game.** Things don't sound 1:1, and the built in preview just plays the .mod file rather than building the music and previewing that.
- **Keep it simple!** Don't jump into this, trying to emulate what several artists have done with LSDj or whatever other tools, you'll just get stuck.
- **Don't be afraid of failure.** I get this is kind of an unfitting tip, but it's important. Your first song won't be good, and that's okay. You'll fail, sure, but you'll also gain knowledge on what you might've done wrong, or how you want to go on about with your next endeavor.
- **OpenMPT has a manual to help you get started.** [Here's a link](https://wiki.openmpt.org/Tutorial:_Getting_Started), give it a read if you're stuck (or just ask for help)
- [**Give the GBT Player documentation a read.**](https://github.com/AntonioND/gbt-player) 
