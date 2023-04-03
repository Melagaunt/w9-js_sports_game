//Global Variables
let num_resets = 0
let teamone_numshots = 0;
let teamone_numgoals = 0;
let teamtwo_numshots = 0;
let teamtwo_numgoals = 0;

// Buttons
function takeShot(team) {
  if (team == 1) {
    // console.log("teamoneVariables");
    teamone_numshots++;
    if (rng(3) == "basket") {
      teamone_numgoals++;
      if (rng(4) == "left") {
        niceShot.play();
      } else if (rng(4) == "right") {
        swish.play();

      };
    } else {
      if (rng(4) == "left") {
        niceTry.play();
      } else if (rng(4) == "right") {
        soClose.play();
      };
    };
    currentScore();
  } else {
    // console.log("teamtwoVariables");
    teamtwo_numshots++;
    if (rng(3) == "basket") {
      teamtwo_numgoals++;
      if (rng(4) == "left") {
        niceShot.play();
      } else if (rng(4) == "right") {
        swish.play();
      };
    } else {
      if (rng(4) == "left") {
        niceTry.play();
      } else if (rng(4) == "right") {
        soClose.play();
      };
    };
    currentScore();
  }
}
function reset() {
  num_resets++;
  teamone_numshots = 0;
  teamone_numgoals = 0;
  teamtwo_numshots = 0;
  teamtwo_numgoals = 0;
  currentScore();
  if (rng(5) == "basket") {
    gg.play();
  };
}

// Multi-use
function rng(x) {
  let rng = Math.floor(Math.random() * x);
  if (rng == 0) {
    return "basket";
  } else if (rng == 1) {
    return "left";
  } else {
    return "right";
  }
}
function currentScore() {
  document.getElementById("num-resets").innerHTML = num_resets;
  document.getElementById("teamone-numshots").innerHTML = teamone_numshots;
  document.getElementById("teamone-numgoals").innerHTML = teamone_numgoals;
  document.getElementById("teamtwo-numshots").innerHTML = teamtwo_numshots;
  document.getElementById("teamtwo-numgoals").innerHTML = teamtwo_numgoals;
}

//Audio
// const audioTest = new Audio("assets/media/gg.m4a");
// audioTest.play();

const gg = new Audio("./assets/media/gg.m4a");

const niceShot = new Audio("./assets/media/niceShot.m4a");
const swish = new Audio("./assets/media/swish.m4a");

const niceTry = new Audio("./assets/media/niceTry.m4a");
const soClose = new Audio("./assets/media/soClose.m4a");


// gg.play();
// niceShot.play();

// audioTest2.play();
// for (i = 3;
//   audioTest2.play();
//   audioTest2.play();
var x = document.getElementById("myAudio");

function playAudio(x) {
  x.play();
}

function pauseAudio() {
  x.pause();
}