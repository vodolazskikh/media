const allVideo = document.querySelectorAll("video");
const background = document.querySelector("#background");

let isFullScreen = false;

[...allVideo].forEach(
  (video) =>
    (video.onclick = () => {
      video.play();
      if (!isFullScreen) {
        video.style.zIndex = 2;
        video.style.transform = "scale(3)";
        background.style.opacity = 1;
        isFullScreen = true;
      } else {
        video.style.transform = "scale(1)";
        video.style.zIndex = 0;
        background.style.opacity = 0;
        isFullScreen = false;
      }
    })
);
