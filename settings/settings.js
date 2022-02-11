const inputAuthors = document.querySelector("textarea#authors");
const buttonSave = document.querySelector("input#save");

if (typeof browser === "undefined") {
  // Cross browser support.
  var browser = chrome;
}

document.addEventListener("DOMContentLoaded", () => {
  browser.storage.local.get(["authors"], (result) => {
    inputAuthors.value = result.authors || "";
  });
});

buttonSave.addEventListener("click", () => {
  browser.storage.local.set({ authors: inputAuthors.value }, () => {
    window.close();
  });
});
