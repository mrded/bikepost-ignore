if (typeof browser === "undefined") {
  // Cross browser support.
  var browser = chrome;
}

browser.storage.local.get(["authors", "enabled"], result => {
  if (!result.enabled) return;

  const authorsList = (result.authors || "").split(",").map(x => x.trim());

  hideComments(authorsList);
});

const hideComments = (authors = []) => {
  for (const author of authors) {
    $(`a.author[href="https://bikepost.ru/profile/${author}/"]`)
      .closest(".comment-wrapper")
      .css("display", "none");
    // .css("background-color", "red");
  }
};
