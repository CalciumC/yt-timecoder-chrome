const HOTKEY = 'hotkey';
let _hotkey = 'F2';
let _interval = 0;

var iHotkey = document.getElementById('hotKey');
var iInterval = document.getElementById('interval');
var bSave = document.getElementById('save');
var mSaved = document.getElementById('save_result');
mSaved.style.display = 'none';

loadSavedSettings();

iHotkey.addEventListener("keydown", (event)=>{
    event.preventDefault();
    _hotkey = event.code;
    iHotkey.value = _hotkey;
    mSaved.style.display = 'none';
});

iInterval.addEventListener("keydown", (event)=>{
    mSaved.style.display = 'none';
});

bSave.addEventListener('click', (event)=>{
    event.preventDefault();
    chrome.runtime.sendMessage({type: 'save_pref', hotkey: _hotkey, interval: _interval}, (response)=>{
        if(response.result){
            mSaved.style.display = 'block';
        }
    });
});

function loadSavedSettings(){
    chrome.runtime.sendMessage({type: 'get_pref'}, (response)=>{
        _hotkey = response.hotkey;
        _interval = response.interval;

        iHotkey.value = _hotkey;
        iInterval.value = _interval;
    });
}