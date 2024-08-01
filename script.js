/* Edit this file */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled"); // current progress
const toggle = player.querySelector(".toggle"); // ► and ❚ ❚
const skipButtons = player.querySelectorAll("[data-skip]"); // -10s and +25s
const ranges = player.querySelectorAll(".player__slider"); // volum and speed

video.addEventListener("timeupdate", progressBarHandler);
toggle.addEventListener("click", playPause);
for (let r of ranges) {
  r.addEventListener("change", (e) => {
    if (e.target.name == "volume") setVolum(e.target.value);
    if (e.target.name == "playbackRate") setRate(e.target.value);
  });
}
for (let btn of skipButtons) {
  btn.addEventListener("click", skipFn);
}
function playPause(e) {
  if (e.target.innerHTML == "►") {
    e.target.innerHTML = "❚ ❚";
    video.play();
  } else {
    e.target.innerHTML = "►";
    video.pause();
  }
}

function setRate(val) {
  video.playbackRate = val;
}
function setVolum(val) {
  video.volume = val;
}

function skipFn(e) {
  let val = e.target.dataset["skip"];
  video.currentTime += parseFloat(val);
  // console.log(val);
}

function progressBarHandler(e) {
  let width = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = width + "%";
}
