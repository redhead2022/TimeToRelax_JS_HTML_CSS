const myAudio = document.querySelector("#player");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  if (myAudio.paused == true) {
    myAudio.play();
  } else if (myAudio.paused == false) {
    myAudio.pause();
  }
});
