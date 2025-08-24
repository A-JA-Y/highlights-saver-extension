chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "save_highlight") {
    chrome.storage.local.get(["highlights"], (r) => {
      const highlights = r.highlights || [];
      highlights.push(message.text);

      chrome.storage.local.set({ highlights: highlights }, () => {
        console.log("saved!", highlights);
      });
    });
  } else if (message.action === "delete_highlight") {
    chrome.storage.local.get(["highlights"], (r) => {
      const highlights = r.highlights || [];
      highlights.splice(message.index, 1);
      chrome.storage.local.set({ highlights: highlights });
    });
  }
});
