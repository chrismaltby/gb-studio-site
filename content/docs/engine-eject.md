---
title: "Engine Eject"
draft: false
---

<span class="new">New in 2.0.0</span>

Engine Eject copies the GBDK code that GB Studio uses into a folder in your project, named `assets/engine`. You can edit these source files to your liking using an IDE to have more control over how your GB Studio game is built. This feature is only recomended for developers familiar with GBDK.

To use Engine Eject, click on _Game_ at the top of the GB Studio window and navigate to the _Advanced_ tab to show the _Engine Eject_ button.

After clicking _Eject_ your project will gain a new folder named `/engine ` with the subfolders `/include` and `/src`.

## Reverting Files

To revert any GBDK file back to its GB Studio default, delete it from the `assets/engine` folder. Deleting the whole `assets/engine` folder ensures that all GBDK code reverts back to the GB Studio defaults. You can also do this by pressing _Engine Eject_ again, which will overwrite your `assets/engine` folder with the GB Studio defaults.

## Compile Errors

If you have bugged or incompatible files in the `/engine` folder, GB Studio will not build your game. Error messages can be found in the _Build & Run_ window.

Errors for problematic files will claim that the compiler couldn't find a file that was meant to be included:
 
 `..\_gbstools\gbdk\bin\lcc: can't find 'C:/.../_gbsbuild/obj/Platform.o'`  
 `..\_gbstools\gbdk\bin\lcc: can't find 'C:/.../_gbsbuild/obj/TopDown.o'`  

These errors will not be caused by missing files. GB Studio refers to its GBDK defaults in place of any missing `assets/engine` files. Fixing or removing the files that caused the error will allow your game to build and run again.
