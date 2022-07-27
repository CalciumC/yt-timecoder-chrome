let color = '#FF0000';
let hotkey = 113;

chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({ hotkey : hotkey });
    console.log("yttc: new installed");
});