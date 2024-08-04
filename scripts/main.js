
var firstlink = document.getElementsByTagName('video1')[0];
firstlink.addEventListener("click", function (event) {
    event.preventDefault();
    video1.currentTime = 7;
    video1.play();
}, false);