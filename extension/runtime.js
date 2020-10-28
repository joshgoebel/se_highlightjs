const loadJS = (name, done = null) => {
  var s = document.createElement('script');
  s.src = chrome.runtime.getURL(name);
  if (done) {
    s.onload = done;
    s.onerror = done;
  }
  (document.head || document.documentElement).appendChild(s);
}

const boot = () => {
  loadJS("vendor/highlight.min.js", () => {
    loadJS("embed.js")
  })

};
document.addEventListener("DOMContentLoaded", () => {
  boot();
});

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

document.addEventListener("load-language", (data, args) => {
  // console.log("load langauge", data, args);
  loadJS(`vendor/languages/${data.detail.lang}.min.js`, () => {
    let event = new CustomEvent("load-language-done", {detail: { lang: data.detail.lang }});
      document.dispatchEvent(event);
  });
});