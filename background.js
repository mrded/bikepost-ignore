const authors = [];

for (const author of authors) {
  jQuery(`a.author[href="https://bikepost.ru/profile/${author}/"]`)
    .closest('.comment-wrapper')
    .css("background-color", "red");
}


