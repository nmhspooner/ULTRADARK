chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "getBrightness") {
    sendResponse({ brightness: document.body.style.filter });
  }
});
