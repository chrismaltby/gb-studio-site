---
title: "Saving and Loading"
draft: false
next: "/docs/project-editor"
nextTitle: "The Project Editor"
---

## Saving

To save your project select `File > Save` from the menu or press Ctrl/Cmd + S. If you try to close a project with unsaved changes GB Studio will warn you giving you a chance to save your project first. On macOS any unsaved changes in your project will be represented by a dot in the window close button.

## Loading

To load your project again, either use the _Open_ button on the _New Project_ window or select `File > Open` from the menu and navigate to your project's folder then select the `.gbsproj` file.

## Version Control

The project folder layout and `.gbsproj` file is designed to work well with version control systems such as [Git](https://git-scm.com/) with each change by the application taking place on a new line in the data file allowing history to be tracked easily. If you want to use version control on your project you can just create the repository at the project root folder.

It's recommended to ignore the `build` folder from your repository using a `.gitignore` file or similar.
