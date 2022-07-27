var ytPlayer;
var commentBox;

ytPlayer = document.getElementsByTagName('video')[0];

window.onkeyup = function(e) {
    if (e.which == 113) {
      //console.log('You pressed \'F12\' !');
      var ts = getPlayerTimestamp();
      console.log(ts);
    }
};

function getPlayerTimestamp(){
  if(!ytPlayer){
    ytPlayer = document.getElementsByTagName('video')[0];
  }
  return new Date(ytPlayer.currentTime * 1000).toISOString().substring(11, 19);
}