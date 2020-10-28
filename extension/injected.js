const hljs = require("../temp");

// given a block find it's lang-`class` language
const langClassFor = (block) => {
  let list = [...block.classList.values()];
  let cl = list.find(i => i.match(/lang-(.*)/) )
  if (!cl) return;

  let m = /lang-(.*)/.exec(cl);
  let lang = m[1];

  return lang;
}

// stack overflow to Highlight.js grammar names
const MAPPINGS = {
  "none": "plaintext",
  "bsh": "bash",
  "csh": "bash",
  "sh": "bash",
  "cc": "cpp",
  "cxx": "cpp",
  "cyc": "c-like",
  "m": "c-like",
  "cs": "csharp",
  "coffee": "coffeescript",
  "html": "xml",
  "xsl": "xml",
  "js": "javascript",
  "pl": "perl",
  "py": "python",
  "cv": "python",
  "rb": "ruby",
  "clj": "clojure",
  "erl": "erlang",
  "hs": "haskell",
  "mma": "mathematica",
  "tex": "latex",
  "cl": "lisp",
  "el": "lisp",
  "lsp": "lisp",
  "scm": "scheme",
  "ss": "scheme",
  "rkt": "scheme",
  "fs": "ocaml",
  "ml": "ocaml",
  "s": "r",
  "rc": "rust",
  "rs": "rust",
  "vb": "vbnet",
  "vbs": "vbnet",
  "vhd": "vhdl"
};

for (let [alias,languageName] of Object.entries(MAPPINGS)) {
  hljs.registerAliases(alias, {languageName})
}

// hljs.configure({
//   "noHighlightRe": /^none$/
// });

// is this even used?
hljs.addPlugin({
  "after:highlightBlock": function(e) {
      const t = /linenums(:\d+)?/.exec(e.block.className);
      if (t) {
          for (var n = +t[1].slice(1) || 1, r = e.block.innerText.trim(), a = r.split(/\r?\n/), i = "", o = 0; o < a.length; o++) i += "<div>" + (o + n) + "</div>";
          var s = '<code class="s-code-block--line-numbers">' + i + "</code>" + e.result.value;
          e.result.value = s
      }
  }
});

const autoHighlight = (el) => {
  // TODO: probably really need some smarts here (examine tags) to load
  // additional grammars we may want to use for the auto-detection
  // so may need some type of simple queueing system
  hljs.highlightBlock(el);
}

const doHighlighting = () => {
  document.querySelectorAll("pre.s-code-block:not(.hljs)").forEach((el) => {
    let lang = langClassFor(el);
    if (!lang) {
      autoHighlight(el);
      return;
    }

    if (hljs.getLanguage(lang)) {
      // if it's already loaded, then just use it
      hljs.highlightBlock(el);
    } else {
      lang = MAPPINGS[lang] || lang;
      // asked our content script to load the language for us from the extension
      let event = new CustomEvent("load-language", {detail: { lang }});
      document.dispatchEvent(event);
    }
  })
}

const addLanguageLoadedHook = () => {
  document.addEventListener("load-language-done", (data) => {
    let lang = data.detail.lang;
    // console.log("lang-done",data)
    // alert("done");
    document.querySelectorAll("pre.s-code-block:not(.hljs)").forEach((el) => {
      if (langClassFor(el)===lang) {
        hljs.highlightBlock(el);
      }
    });
  });
}

const boot = () => {
  addLanguageLoadedHook();
  doHighlighting();
  console.log(`Using Highlight.js version ${hljs.versionString}`);
}

boot();

