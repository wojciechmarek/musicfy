# Musicfy

A simple audio player app, allowing the play of some demo songs, internet radio stations, and use the Spotify music collection (not ready yet).

⚠️ Regarding the async `audio.play()` function implementation and the race conditions in the Chromium-based browsers, the app might not work on Chrome, Brave, Edge, and Opera. Use Firefox instead !!1!

## Description

The app aims to learn how to use the Browser WebAudio API to play and apply audio effects on it, Canvas API to generate visualizations ~~and get knowledge about Spotify API~~.

## Demo

A demo is available at [https://musicfy-omega.vercel.app/](https://musicfy-omega.vercel.app/).

## Screenshots

The screenshots are outdated. To see the current state, please visit the demo site.

![Screenshot](./screenshots/musicfy.png)

## Web Audio API

The Web Audio API is a high-level JavaScript API for processing and synthesizing Audio in web applications. This API aims to include capabilities found in modern game audio engines and some of the mixing, processing, and filtering tasks found in modern desktop audio production applications. The API is capable of dynamically positioning/spatializing multichannel sound sources in 3D space - generated GitHub Copilot, probably powered by Google or Wikipedia.

### Basics of the Web Audio API

The app's interface may suggest that using the Web Audio API is complicated, but it's not. The most basic (and working) way to start playing with the audio in the browser is to create a new Audio object, assign an audio source to it (through `URL`) and invoke the .play() method:

```javascript
const audio = new Audio();
audio.src = 'https://example.com/song.mp3';
audio.play();
```

### What can be the audio source for the Audio object?

Almost everything you can supply through the URL, such as a local file, a remote file, a stream, etc.

### How it works in Musicfy?

The heart of the app is an audio processor. The audio processor is an invisible component (returning `null`) called `AudioProcessor`. It listens to the events in the Redux Store, applies changes to the Audio object, and manages the audio context, the audio nodes, and effects. It also handles the audio spectrum analysis and shares data through the Redux Store.

Nevertheless, still, the most relevant line of code is:

```javascript
const setNewAudioUrlAndStartPlay = useCallback((url: string) => {
  // (...)

  audio.current = new Audio(url); // <-- this line

  // (...)
}, []);
```

### What is the audio context?

The audio context is the main object in the Web Audio API. It represents the audio-processing graph, which is built from audio sources, audio processors, and audio destinations. You can think about it as a virtual audio mixer, where you can connect the audio sources to the audio processors and the audio processors to the audio destinations. The audio context also manages the audio nodes and effects - GitHub Copilot again 😅.

### The audio nodes and effects

The audio nodes are the building blocks of the audio context. They are the audio sources, audio processors, and audio destinations. The audio nodes can be connected, and the audio context is responsible for managing them.

In Musicfy, the AudioNodes, BiquadFilters, and frequency analyzers are connected to each other in the `setupAudioGainNodesAndAnalyzers()` method. Their references are kept in the component using React's `useRef()` hook. The techniques manipulating the audio nodes and filters are called in the `useEffect()` hook.

On the other hand, there is also a `setInterval()` function inside the `startAnalyserInterval()` method, which is responsible for updating the Redux Store with the current audio spectrum data. The mentioned function is called every 20ms, which gives the 50 HZ frequency of the updates.

## Used technologies

- 🎁 Repository: Monorepo powered by NX
- 🧰 Frameworks: React, Redux Toolkit
- 🛠️ Tools: yarn, eslint, prettier, conventional commits, react-router
- 🎨 Styling: styled ui by emotion, lucide icons
- ☁️ Data source: 3 demo songs, internet radio stations, ~~Spotify API~~
- 💎 Others: desktop-first approach

## How to start

1. Clone the repository.
2. Install node.js and yarn.
3. Install dependencies with `yarn install`.
4. Run the project with `yarn web`.
