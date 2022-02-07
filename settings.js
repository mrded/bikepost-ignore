chrome.storage.sync.get(["authors"], ({ authors }) => {
  const newAuthors = prompt(
    "Список людей, через запятую, чье присутствие на сайте вы хотели бы не замечать никогда",
    authors || ""
  );

  chrome.storage.sync.set({ authors: newAuthors });
});
