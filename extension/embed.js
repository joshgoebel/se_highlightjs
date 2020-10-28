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
// Object.keys(MAPPINGS).forEach(function(n) {
//   t.registerAliases(n, {
//       "languageName": e[n]
//   })

document.querySelectorAll("pre.s-code-block:not(.hljs)").forEach((el) => {
  let lang = langClassFor(el);
  if (!lang) return;

  if (hljs.getLanguage(lang)) {
    hljs.highlightBlock(el);
  } else {
    // alert("mising")
    lang = MAPPINGS[lang] || lang;
    let event = new CustomEvent("load-language", {detail: { lang }});
    document.dispatchEvent(event);
  }
})

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

console.log(`Using Highlight.js version ${hljs.versionString}`);