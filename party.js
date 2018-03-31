var elements = document.getElementsByTagName("*");

function randomColor() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: 'elements.forEach(function(element) {var partyColor = randomColor(); console.log("change an element\'s color to " + partyColor);});'
    });
});