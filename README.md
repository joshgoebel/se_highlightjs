# SE_highlightjs
Improved Highlight.js support for StackExchange / StackOverflow

## Overview

SE_highlightjs is a Chrome Extension that aims to improve code highlighting support on StackExchange / StackOverflow.  It was written by the current maintainer of Highlight.js after some *slight* frustrations with the initial rollout of [StackExchange's new highlighting support](https://meta.stackexchange.com/questions/353983/goodbye-prettify-hello-highlight-js-swapping-out-our-syntax-highlighter) and it's subpar behavior in some areas.

### Features

- Provides a bundled and up-to-date version of the Highlight.js library.
- Allows the full set of 189 languages to be used when manually hinted: <code>```lang-groovy</code>, etc.
- A small foundational set of grammars is always loaded and then additional hinted languages are loaded on-demand as necessary.
- Blocks loading of SE's own `highlightjs-loader.en.js`, preventing it from doing whatever. :)
- Does not require any CDNs or external resources.
- Does not attempt to "guess" at a language when an unknown language hint is used. [Discussion](https://meta.stackexchange.com/questions/355852/stop-guessing-auto-detecting-a-language-when-you-know-it-will-be-incorrect)

## Installing

You have choices:

1. Use the `extension.crx` in `dist`.  You'll need to open the Chrome Extensions screen and then drag the extension in.

2. Check out this repository, enable Developer Mode, and simply load the extension unpacked. [Here is a guide](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/).  You'll want to point Chrome to the `extension` folder.

## Contributing

Contributions are welcome.  Please open an issue first to discuss.

## TODO

- [ ] Use question tags to better clue the auto-detect (needs a mapping table) [Discussion](https://meta.stackexchange.com/questions/354793/improving-syntax-highlighting-language-auto-detection)
- [ ] Do not highlight at all when overall relevancy is too low (no idea what language we really have)
- [ ] Figure out the proper set of languages for auto-detect (currently `:common`, which is different from SE)
