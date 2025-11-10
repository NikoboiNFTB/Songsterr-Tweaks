browser.contextMenus.create({
  id: "search-songsterr",
  title: "Search on Songsterr",
  contexts: ["selection"], // This ensures the menu item only shows up when text is highlighted.
  icons: {
    "16": "icon16.png",
    "32": "icon32.png"
  }
});

// Add a listener for when the context menu item is clicked.
browser.contextMenus.onClicked.addListener((info, tab) => {
  // Check if the clicked item is our "search-songsterr" item.
  if (info.menuItemId === "search-songsterr") {
    // Get the selected text from the 'info' object.
    const selectedText = info.selectionText;

    // Use encodeURIComponent to properly format the text for a URL.
    const query = encodeURIComponent(selectedText);

    // Construct the final URL with the encoded query.
    const songsterrUrl = `https://www.songsterr.com/?pattern=${query}`;

    // Open the URL in a new tab.
    browser.tabs.create({
      url: songsterrUrl
    });
  }
});