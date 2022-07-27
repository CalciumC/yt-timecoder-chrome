let hotkey = 113;

chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({ hotkey : hotkey });
    console.log("yttc: default hotkey set to F2.");
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type){
    case 'save_hotkey':
        break;
    case 'save_interval':
        break;
    }

    sendResponse();
});