const myAudio = document.querySelector("#player");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
});

const btnOne = document.querySelector("#min15");
const btnTwo = document.querySelector("#min10");
const btnThree = document.querySelector("#min5");

btnOne.addEventListener("click", () => {
  timer(15);
});
btnTwo.addEventListener("click", () => {
  timer(10);
});
btnThree.addEventListener("click", () => {
  timer(5);
});

let amountTime = 0;
let timerId;


function timer(time) {
  stopTimer();
  amountTime = time * 60;

  function calculateTime() {
    const countdown = document.querySelector("#timer");

    let minutes = Math.floor(amountTime / 60);
    let seconds = amountTime % 60;

    amountTime--;

    if (amountTime < 0) {
      stopTimer();
      amountTime = 0;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
  }
  timerId = setInterval(calculateTime, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}
