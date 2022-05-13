let x = "";
document.addEventListener("click", (e) => {
  x = e.target.getAttribute("src");
  if (x != null && x != "images/html.png") {
    if (x.includes("mp4") != true) {
      x = x.slice(0, x.indexOf(".") + 1);
      x += "mp4";
    }
    video.setAttribute("src", x);
    document.querySelector(".popup").classList.add("popup-open");
  }
});
let video = document.querySelector(".popup-video");
let popupSpan = document.querySelector(".popup-span");
popupSpan.onclick = function (e) {
  document.querySelector(".popup").classList.remove("popup-open");
  video.pause();
};
