var ytPlayer;
var commentBox;
var _hotkey, _interval;

ytPlayer = document.getElementsByTagName('video')[0];
commentBox = document.getElementById('contenteditable-root');

console.log("yytc: injected.");

chrome.runtime.sendMessage({type: 'get_pref'}, (response)=>{
  _hotkey = response.hotkey;
  _interval = response.interval;
  console.log(`yttc: value used: [${_hotkey}] with [${_interval}s] interval.`);
});

window.onkeyup = function(e) {
    if (e.code == _hotkey) {
      var ts = getPlayerTimestamp();
      console.log(ts);
      if(!commentBox){
        commentBox = document.getElementById('contenteditable-root');
      }
      commentBox.textContent += ts + " ";
    }
};

function getPlayerTimestamp(){
  if(!ytPlayer){
    ytPlayer = document.getElementsByTagName('video')[0];
  }
  return new Date((ytPlayer.currentTime + _interval) * 1000).toISOString().substring(11, 19);
}