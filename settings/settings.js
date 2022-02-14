const inputAuthors = document.querySelector("textarea#authors");
const inputEnabled = document.querySelector("input#enabled");
const buttonSave = document.querySelector("input#save");

if (typeof browser === "undefined") {
  // Cross browser support.
  var browser = chrome;
}

document.addEventListener("DOMContentLoaded", () => {
  browser.storage.local.get(["authors", "enabled"], result => {
    inputAuthors.value = result.authors || "";
    inputEnabled.checked = !!result.enabled;
  });
});

buttonSave.addEventListener("click", () => {
  browser.storage.local.set(
    {
      authors: inputAuthors.value,
      enabled: inputEnabled.checked
    },
    () => {
      window.close();
    }
  );
});
