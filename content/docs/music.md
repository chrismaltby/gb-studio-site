---
title: "Music"
draft: false
next: "/docs/build"
nextTitle: "Building Your Game"
---

Write your music as MOD files using software such as [OpenMPT](https://openmpt.org/) or [MilkyTracker](https://milkytracker.titandemo.org/) and add to the `assets/music` folder.

# Requirements

Only four channels can be used to allow for the hardware limitations. The first two are pulse channels, the third is a wav channel and the fourth is a noise channel.

Internally GB Studio is using [GBT Player](https://github.com/AntonioND/gbt-player), additional documentation on creating music can be found in that repo along with a few more sample MOD files.
