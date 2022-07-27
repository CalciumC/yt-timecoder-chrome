const HOTKEY = 'hotkey';
let _hotkey = 113;
let _hotkey_name = 'F12';
let _interval = 0;

var iHotkey = document.getElementById('hotKey');
var iInterval = document.getElementById('interval');

loadSavedSettings();

function changeHotkey(key){
    chrome.storage.sync.set({ HOTKEY: key });
}

function getKeycode(e){
    return e.keyCode;
}

function loadSavedSettings(){
    // todo: load
    iHotkey.value = _hotkey_name;
    iInterval.value = _interval;
}


// get from storage
// chrome.storage.sync.get('mytext', function(data) {
//     yourTextArea.value = data.mytext;
// });