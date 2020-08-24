---
title: "Engine Eject"
draft: false
---

<span class="new">New in 2.0.0</span>

Engine Eject copies the GBDK code that GB Studio uses into a folder in your project, named `assets/engine`. You can edit these source files to your liking to have more control over how your GB Studio game is built. This feature is only reccomended for developers familiar with GBDK.

Clicking on _Game_ in the toolbar and navigating to _Advanced_ will show the _Engine Eject_ button.

After clicking _Eject_ your project will gain a new folder named `/engine ` with the subfolders `/include` and `/src`.

## Reverting Files

To revert any GBDK file back to its GB Studio default, delete it from the `assets/engine` folder. Deleting the whole `assets/engine` folder will ensure that all GBDK code is reverted back to GB Studio's defaults.

Pressing _Engine Eject_ with an `assets/engine` folder still in your project will also overwrite any changes you made, and change the files back to their original GB Studio defaults.

## Compile Errors

If you have bugged, or incompatible files in the `/engine` folder, GB Studio will not build your game. Build errors can be found in the _Build & Run_ window.

Errors for problematic files will claim that the compiler couldn't find a certain file that was meant to be included:
 
 `..\_gbstools\gbdk\bin\lcc: can't find 'C:/.../_gbsbuild/obj/Platform.o'`  
 `..\_gbstools\gbdk\bin\lcc: can't find 'C:/.../_gbsbuild/obj/TopDown.o'`  

These errors should not happen if you have missing files, since GB Studio relies on its GBDK defaults whenever a file is missing from `assets/engine`. Fixing or removing the files that caused the build error will allow your game to build and run again.
