browser.contextMenus.create({
  id: "songsterr-search",
  title: "Search on Songsterr",
  contexts: ["selection"],
  icons: {
    "512": "icons/songsterr512.png",
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "songsterr-search") {
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const songsterrUrl = `https://www.songsterr.com/?pattern=${query}`;

    browser.tabs.create({
      url: songsterrUrl
    });
  }
});
