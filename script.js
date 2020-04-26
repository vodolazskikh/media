const allVideo = [...document.querySelectorAll("video")];
const background = document.querySelector("#background");
const showAllButton = document.querySelector("#showAll");
const controls = document.querySelector("#controls");

let fullScreenIndex = undefined;

allVideo.forEach(
  (video, i) =>
    (video.onclick = () => {
      if (typeof fullScreenIndex === "undefined") {
        video.style.zIndex = 2;
        video.style.transform = "scale(3)";
        video.style.position = "absolute";
        video.style.bottom = "0px";
        video.style.left = "50%";
        video.style.marginLeft = "-150px";
        controls.style.opacity = 1;
        background.style.opacity = 1;
        fullScreenIndex = i;
      }
    })
);

showAllButton.onclick = () => {
  console.log("кек", fullScreenIndex);
  if (typeof fullScreenIndex === "undefined") {
    return;
  }
  const video = allVideo[fullScreenIndex];

  video.style.zIndex = 0;
  video.style.transform = "scale(1)";
  video.style.position = "relative";
  video.style.bottom = "0px";
  video.style.left = "0";
  video.style.marginLeft = "0px";
  controls.style.opacity = 0;
  background.style.opacity = 0;
  fullScreenIndex = undefined;
};
