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


## Contributing

See [CONTRIBUTING.md](https://github.com/joshgoebel/se_highlightjs/blob/main/CONTRIBUTING.md)

