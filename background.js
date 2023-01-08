chrome.runtime.onInstalled.addListener((details) => {
  var contextMenuItem = {
    id: "main",
    title: "main",
    contexts: ["selection"],
  };
  var contextMenuItem2 = {
    id: "main2",
    title: "main2",
    contexts: ["all"],
  };
  chrome.contextMenus.create(contextMenuItem);
  chrome.contextMenus.create(contextMenuItem2);
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log(tab);
    console.log(info);
    if (info.menuItemId === "main2") {
      chrome.tabs.create({ url: "https://google.com" });
    }
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request.message); 
  sendResponse({ response: "Hello from the background script!" });
});

chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      message: "Hello RRRRR!",
    });
  });
});

// chrome.webRequest.onBeforeSendHeaders.addListener(
//   function (details) {
//     for (var i = 0; i < details.requestHeaders.length; ++i) {
//       if (details.requestHeaders[i].name === "User-Agent") {
//         details.requestHeaders[i].value = "MyCustomUserAgent";
//         break;
//       }
//     }
//     return { requestHeaders: details.requestHeaders };
//   },
//   { urls: ["<all_urls>"] },
//   ["requestHeaders", "blocking"]
// );

// chrome.webRequest.onBeforeSendHeaders.addListener(
//   function (details) {
//     for (var i = 0; i < details.requestHeaders.length; ++i) {
//       if (details.requestHeaders[i].name === "User-Agent") {
//         details.requestHeaders[i].value = "MyCustomUserAgent";
//         break;
//       }
//     }
//     return { requestHeaders: details.requestHeaders };
//   },
//   { urls: ["<all_urls>"] },
//   ["requestHeaders", "blocking"]
// );
