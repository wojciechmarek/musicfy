# Musicfy

A simple audio player app, allowing the play some demo songs, internet radio stations and use the Spotify music collection (not ready yet).

## Description

The app's purpose is to learn how to use the Browser WebAudio API to play and apply audio effects on it, ~~get knowledge about Spotify API~~, and ~~Canvas API to generate visualizations~~.

## Demo

A demo is available at [https://musicfy-omega.vercel.app/](https://musicfy-omega.vercel.app/).

## Screenshots

The screenshots are outdated, to see the current state, please visit the demo site.

![Screenshot](./screenshots/musicfy.png)

## Web Audio API

The Web Audio API is a high-level JavaScript API for processing and synthesizing audio in web applications. This API aims to include capabilities found in modern game audio engines and some of the mixing, processing, and filtering tasks found in modern desktop audio production applications. The API is capable of dynamically positioning/spatializing multichannel sound sources in 3D space - wrote GitHub Copilot, probably powered by Google.

### In this application

The app's interface may suggest that using the Web Audio API is complicated, but it's not. The most basic (and working) solution is to create a new Audio object, assign an audio source to it (through `URL`) and invoke the .play() method:

```javascript
const audio = new Audio();
audio.src = 'https://example.com/song.mp3';
audio.play();
```

### What can be the audio source?

Almost everything might be an audio source, such as a local file, a remote file, a stream, a microphone, etc. The only requirement is that the source must be a valid audio file.

## Used technologies

- 🎁 Repository: Monorepo powered by NX
- 🧰 Frameworks: React, Redux Toolkit
- 🛠️ Tools: ~~yarn, eslint, prettier, husky, conventional commits, axios~~, react-router
- 🎨 Styling: styled ui by emotion, lucide icons
- 🧪 Testing: ~~cypress, jest~~
- ☁️ Data source: ~~Spotify API~~ hardcoded song
- 💎 Others: desktop-first approach, ~~progressive web app, atomic design~~

## How to start

1. Clone the repository.
2. Install node.js and yarn.
3. Install dependencies with `yarn install`.
4. Run the project with `yarn web`.
