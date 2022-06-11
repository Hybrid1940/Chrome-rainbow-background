//background.js
let color = '#F80346';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({'color': color});
    console.log('Default background color set to %cgreen','color: ${color}')
});