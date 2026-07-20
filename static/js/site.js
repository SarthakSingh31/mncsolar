// Mobile nav toggle
var header = document.getElementById("site-header");
var toggle = document.getElementById("nav-toggle");
if (header && toggle) {
  toggle.addEventListener("click", function () {
    var open = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Click-to-play installation video
var playBtn = document.getElementById("video-play");
var video = document.getElementById("installation-video");
if (playBtn && video) {
  playBtn.addEventListener("click", function () {
    video.setAttribute("controls", "");
    video.play();
    playBtn.remove();
  });
}
