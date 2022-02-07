chrome.storage.sync.get(["authors"], ({ authors }) => {
  const newAuthors = prompt(
    "Список людей, через запятую, чье присутствие на сайте вы хотели бы не замечать никогда",
    authors || ""
  );

  if (newAuthors != null) {
    chrome.storage.sync.set({ authors: newAuthors });
    location.reload();
  }
});
