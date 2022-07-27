const HOTKEY = 'hotkey';
let _hotkey = 113;

function changeHotkey(key){
    chrome.storage.sync.set({ HOTKEY: key });
}

function getKeycode(e){
    return e.keyCode;
}

// get from storage
// chrome.storage.sync.get('mytext', function(data) {
//     yourTextArea.value = data.mytext;
// });