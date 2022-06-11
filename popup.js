let red = document.getElementById("red");
let orange = document.getElementById("orange");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let purple = document.getElementById("purple");
let change = document.getElementById("change");

chrome.storage.sync.get("color", ({color}) => {change.style.backgroundColor = color;})

// When the button is clicked, inject setPageBackgroundColor into current page
change.addEventListener("click", async () => {
  
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

red.addEventListener("click", async () => {
  document.getElementById('change').style.backgroundColor = '#ff0000';
  document.getElementById('change').innerHTML = 'Change the color to red';
  chrome.storage.sync.set({'color': '#ff0000'});
});
orange.addEventListener("click", async () => {
  document.getElementById('change').style.backgroundColor = '#ffa500';
  document.getElementById('change').innerHTML = 'Change the color to orange';
  chrome.storage.sync.set({'color': '#ffa500'});
});
yellow.addEventListener("click", async () => {
  document.getElementById('change').style.backgroundColor = '#ffff00';
  document.getElementById('change').innerHTML = 'Change the color to yellow';
  chrome.storage.sync.set({'color': '#ffff00'});
});
green.addEventListener("click", async () => {
  document.getElementById('change').style.backgroundColor = '#008000';
  document.getElementById('change').innerHTML = 'Change the color to green';
  chrome.storage.sync.set({'color': '#008000'});
});
blue.addEventListener("click", async () => {
  document.getElementById('change').style.backgroundColor = '#0000ff';
  document.getElementById('change').innerHTML = 'Change the color to blue';
  chrome.storage.sync.set({'color': '#0000ff'});
});
purple.addEventListener("click", async () => {
  document.getElementById('change').style.backgroundColor = '#800080';
  document.getElementById('change').innerHTML = 'Change the color to purple';
  chrome.storage.sync.set({'color': '#800080'});
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}