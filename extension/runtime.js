const loadJS = (name, done = null) => {
  var s = document.createElement('script');
  s.src = chrome.runtime.getURL(name);
  if (done) {
    s.onload = done;
    s.onerror = done;
  }
  (document.head || document.documentElement).appendChild(s);
}

const languageLoader = () => {
  document.addEventListener("load-language", (data, args) => {
    // console.log("load langauge", data, args);
    loadJS(`vendor/languages/${data.detail.lang}.min.js`, () => {
      let event = new CustomEvent("load-language-done", {detail: { lang: data.detail.lang }});
        document.dispatchEvent(event);
    });
  });
}

const preboot = () => {
  // we need to get in early and keep track of which blocks are overrides and
  // which are not (for smarter auto-detect later)
  var s = document.createElement('script');
  s.async = false
  s.textContent = `
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("pre").forEach((el) => {
        if (el.classList.contains("prettyprint-override")) {
          el.classList.add("was-override");
        }
      })
  });
  `;
  (document.documentElement).appendChild(s);
}

const boot = () => {
  languageLoader();
  loadJS("vendor/highlight.min.js", () => {
    loadJS("injected.js")
  })
};

// ---

preboot();
document.addEventListener("DOMContentLoaded", () => {
  boot();
});
