const authors = [];

for (const author of authors) {
  $(`a.author[href="https://bikepost.ru/profile/${author}/"]`)
    .closest(".comment-wrapper")
    .css("background-color", "red");
}
