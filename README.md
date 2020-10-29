# SE_highlightjs
Improved Highlight.js support for StackExchange / StackOverflow

## Overview

SE_highlightjs is a Chrome Extension that aims to improve code highlighting support on StackExchange / StackOverflow.  It was written by the current maintainer of Highlight.js after some *slight* frustrations with the initial rollout of [StackExchange's new highlighting support](https://meta.stackexchange.com/questions/353983/goodbye-prettify-hello-highlight-js-swapping-out-our-syntax-highlighter) and it's subpar behavior in some areas.

### What StackExchange needs to improve (and why this exists)

- The Highlight.js library version they use is often quite behind the latest.
- They do not support many popular languages (despite the fact that Highlight.js does).
- They use auto-detect in some cases when it's absolutely the wrong thing to do [Discussion](https://meta.stackexchange.com/questions/355852/stop-guessing-auto-detecting-a-language-when-you-know-it-will-be-incorrect)
- Their auto-detection when a post has two or more tags with "hinted language" [a language associated with the tag] is quite poor (this doesn't fix that yet, but could). [Discussion](https://meta.stackexchange.com/questions/354793/improving-syntax-highlighting-language-auto-detection)

### Features

- Provides a bundled and **up-to-date** version of the Highlight.js library.
- Allows the full set of 189 languages to be used if manually hinted: <code>```lang-groovy</code>, etc.
- Additional hinted languages (outside SE's normal supported list) are loaded only if needed.  No Groovy snippets? Then the groovy grammar is never even loaded.
- Blocks loading of SE's own `highlightjs-loader.en.js`, preventing it from taking any actions.
- Does not require any CDNs or external resources. (everything needed is bundled in the extension)
- Does not attempt to "guess" a language when an unknown language hint is seen, as this is often a bad idea and results in poor highlighting. [Discussion](https://meta.stackexchange.com/questions/355852/stop-guessing-auto-detecting-a-language-when-you-know-it-will-be-incorrect)


## Installing

You have choices:

1. Use the `extension.crx` in `dist`.  You'll need to open the Chrome Extensions screen and then just drag the extension in and approve it.

2. Check out this repo, enable Developer Mode, and then simply load the extension unpacked. [Here is a guide](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/).  You'll want to point Chrome to the `extension` folder.

If there is enough demand I'll publish this to the Chrome store.


## Contributing

Contributions are welcome.  Please first open an issue to discuss.


## TODO

- [ ] Need to look into custom SE sites that manually load certain grammars (like Mathematica), may need to mirror that behavior with special case logic.
- [ ] Use question tags to better clue the auto-detect (needs a mapping table) [Discussion](https://meta.stackexchange.com/questions/354793/improving-syntax-highlighting-language-auto-detection)
- [ ] Do not highlight at all when overall relevancy is too low (no idea what language we really have)
- [ ] Figure out the proper set of languages for auto-detect (currently same exactly set as SE)
