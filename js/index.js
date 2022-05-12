let popupVideo = document.querySelector(".popup-video");
popupVideo.onclick = function () {
  document.querySelector(".popup").classList.add(".popup-video-open");
};

let popupSpan = document.querySelector(".popup-span");
popupSpan.onclick = function () {
  document.querySelector(".popup").classList.remove(".popup-video-open");
};
