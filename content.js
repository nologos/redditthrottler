(() => {
  var originalContent = document.body.innerHTML;
  document.body.innerHTML = 'Go use firefox';

  setTimeout(() => {
    document.body.innerHTML = originalContent;
  }, 1000);

  // // document data available to me
  // let body = document.body;
  // let head = document.head;
  // let paragraphs = document.getElementsByTagName("p");
  // let bodyHTML = document.body.innerHTML;
  // console.log(body)
  // console.log(head)
  // console.log(paragraphs)
  // console.log(bodyHTML)

  // sending test MSG to background.js
  chrome.runtime.sendMessage({
    message: "Hello from the content script!",
  });

  // receiving MSG from background.js after action icon is clicked
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
  });
})();
