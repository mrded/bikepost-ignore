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

const ignoreLinkHandler = el => {
  const username = el.target.getAttribute("data");

  browser.storage.local.get(["authors"], result => {
    const authorsList = (result.authors || "").split(",").map(x => x.trim());

    browser.storage.local.set(
      {
        authors: [...authorsList, username].join(", ")
      },
      () => {
        alert(
          `Пользователь ${username} добавлен в игнор-лист. Обновите страницу.`
        );
      }
    );
  });

  return false;
};

const makeIgnoreLink = username => {
  const ignoreLink = document.createElement("a");

  ignoreLink.innerHTML = "Игнорировать";
  ignoreLink.setAttribute("href", "javascript:;");
  ignoreLink.setAttribute("class", "ignore");
  ignoreLink.setAttribute("data", username);

  return ignoreLink;
};

// Set Ignore links.
const comments = $("div.comment-wrapper a.author");

for (const comment of comments) {
  const username = $(comment).text();

  const ignoreLink = makeIgnoreLink(username);
  const ignoreUl = document.createElement("ul").appendChild(ignoreLink);

  comment.closest(".info ul").append(ignoreUl);
}

// Set Ignore action handler.
[...document.querySelectorAll("div.comment-wrapper a.ignore")].forEach(el =>
  el.addEventListener("click", ignoreLinkHandler)
);
