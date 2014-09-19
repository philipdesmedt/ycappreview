//The code that is fired upon page load
//to check your plugin js is working uncomment the next line.

//The code that is fired upon page load
//to check your plugin js is working uncomment the next line.

chrome.browserAction.onClicked.addListener(function (activeTab) {
  chrome.tabs.executeScript(null, {
    file: "content.js"
  }, function (result) {
    console.log(result);
    var htmlCode = "<html><body>" + result + "</body></html>";
    var url = "data:text/html," + encodeURIComponent(htmlCode);
    chrome.tabs.create({url: url});
  });
});
