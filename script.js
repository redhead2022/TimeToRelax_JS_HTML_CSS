const myAudio = document.querySelector("#player");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  if (myAudio.paused == true) {
    myAudio.play();
  } else if (myAudio.paused == false) {
    myAudio.pause();
  }
});

const btnOne = document.querySelector("#min15");
const btnTwo = document.querySelector("#min10");
const btnThree = document.querySelector("#min5");

btnOne.addEventListener("click", timerOne);
btnTwo.addEventListener("click", timerTwo);
btnThree.addEventListener("click", timerThree);

let amountTimeOne = 0;
let amountTimeTwo = 0;
let amountTimeThree = 0;

let timerIdOne;
let timerIdTwo;
let timerIdThree;

function timerOne() {
  stopTimerTwo();
  stopTimerThree();

  amountTimeOne = 15 * 60;
  amountTimeTwo = 0;
  amountTimeThree = 0;

  btnTwo.addEventListener("click", timerTwo);
  btnThree.addEventListener("click", timerThree);
  btnOne.removeEventListener("click", timerOne);

  function calculateTimeOne() {
    const countdown = document.querySelector("#timer");

    let minutesOne = Math.floor(amountTimeOne / 60);
    let secondsOne = amountTimeOne % 60;

    amountTimeOne--;

    if (secondsOne < 10) {
      secondsOne = "0" + secondsOne;
    }

    if (minutesOne < 10) {
      minutesOne = "0" + minutesOne;
    }

    countdown.textContent = `${minutesOne} : ${secondsOne}`;
    if (amountTimeOne < 0) {
      stopTimerOne();
      amountTimeOne = 0;
    }
  }
  timerIdOne = setInterval(calculateTimeOne, 1000);
}

function stopTimerOne() {
  clearInterval(timerIdOne);
}

function timerTwo() {
  stopTimerOne();
  stopTimerThree();

  amountTimeOne = 0;
  amountTimeThree = 0;

  btnOne.addEventListener("click", timerOne);
  btnThree.addEventListener("click", timerThree);

  amountTimeTwo =  10* 60;

  btnTwo.removeEventListener("click", timerTwo);

  function calculateTimeTwo() {
    const countdown = document.querySelector("#timer");

    let minutesTwo = Math.floor(amountTimeTwo / 60);
    let secondsTwo = amountTimeTwo % 60;

    amountTimeTwo--;

    if (secondsTwo < 10) {
      secondsTwo = "0" + secondsTwo;
    }

    if (minutesTwo < 10) {
      minutesTwo = "0" + minutesTwo;
    }

    countdown.textContent = `${minutesTwo} : ${secondsTwo}`;
    if (amountTimeTwo < 0) {
      stopTimerTwo();
      amountTimeTwo = 0;
    }
  }
  timerIdTwo = setInterval(calculateTimeTwo, 1000);
}

function stopTimerTwo() {
  clearInterval(timerIdTwo);
}

function timerThree() {
  stopTimerTwo();
  stopTimerOne();
  amountTimeOne = 0;
  amountTimeTwo = 0;

  amountTimeThree = 5 * 60;

  btnOne.addEventListener("click", timerOne);
  btnTwo.addEventListener("click", timerTwo);

  btnThree.removeEventListener("click", timerThree);

  function calculateTimeThree() {
    const countdown = document.querySelector("#timer");

    let minutesThree = Math.floor(amountTimeThree / 60);
    let secondsThree = amountTimeThree % 60;

    amountTimeThree--;

    if (secondsThree < 10) {
      secondsThree = "0" + secondsThree;
    }

    if (minutesThree < 10) {
      minutesThree = "0" + minutesThree;
    }

    countdown.textContent = `${minutesThree} : ${secondsThree}`;
    if (secondsThree < 0) {
      stopTimerThree();
      amountTimeThree = 0;
    }
  }
  timerIdThree = setInterval(calculateTimeThree, 1000);
}

function stopTimerThree() {
  clearInterval(timerIdThree);
}
