chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // console.log(details)
    return {cancel: true};
  },
  {urls:
    [
    "https://cdn.sstatic.net/Js/highlightjs-loader.en.js*",
    "https://meta.stackexchange.com/Content/Js/highlightjs-loader.en.js*"
    // "*://*.googlesyndication.com/*",
    // "*://*.moat.com/*"
  ]
  },
  ["blocking"]
);

// Request URL: https://cdn.sstatic.net/Js/highlightjs-loader.en.js?v=4cb8229b0393

// js-codeblock-lang