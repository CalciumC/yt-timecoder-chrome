let _prefs;

chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.get('prefs', (data)=>{
        if (!data || JSON.stringify(data) == '{}'){x
            _prefs = { 'hotkey': 'F2', 'interval': 0};
            chrome.storage.sync.set(storePrefs(_prefs));
            console.log("yttc: default used: [F2] with [0s] interval.");
        } else {
            _prefs = JSON.parse(data.prefs);
            console.log(`yttc: default used: [${_prefs.hotkey}] with [${_prefs.interval}s] interval.`);
        }
    });
    
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type){
        case 'get_pref':
            sendResponse(_prefs);
            break;
        case 'save_pref':
            _prefs.hotkey = request.hotkey;
            _prefs.interval = request.interval;
            chrome.storage.sync.set(storePrefs(_prefs));
            sendResponse({result: true});
            break;
    }
});

function storePrefs(prefs){
    return { prefs : JSON.stringify(prefs)};
}