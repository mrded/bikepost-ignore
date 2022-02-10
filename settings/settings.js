const inputAuthors = document.querySelector("textarea#authors");
const buttonSave = document.querySelector("input#save");

document.addEventListener("DOMContentLoaded", () => {
  browser.storage.local.get(["authors"]).then((result) => {
    inputAuthors.value = result.authors;
  });
});

buttonSave.addEventListener("click", () => {
  browser.storage.local.set({ authors: inputAuthors.value }).then(() => {
    window.close();
  });
});
