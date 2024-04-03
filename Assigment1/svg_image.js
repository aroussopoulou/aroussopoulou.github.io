
var svgDoc =  document.getElementsByTagName('svg');
var ss =  document.getElementsByClassName('ss');

var paused = false;

function onClick() {
    if (paused) {
        svgDoc[0].unpauseAnimations();
        ss[0].innerHTML = 'PAUSE'
    } else {
        svgDoc[0].pauseAnimations();
        ss[0].innerHTML = 'RESUME'
    }
    paused = !paused;
}