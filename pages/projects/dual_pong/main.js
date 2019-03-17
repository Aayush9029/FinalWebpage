let x = 200;
let y = 200;
let xspeed = 10;
let yspeed = 4;
let diameter = 25;
let radius = diameter / 2;
let bar1x = 0;
let bar1y = 10;
let barh = 150;
let barw = 10;
let bar2x;
let bar2y = 600;
let pointsRight = 0;
let pointsLeft = 0;
let backgroundVal = "white";
let strokeVal = "black";
let fillval = "black";
let mySound;
var audio;
let right = prompt("player using W and S");
let left = prompt("player using UP_ARROW and DOWN_ARROW");

let roundScore = parseFloat(prompt("best of what? (number)"));
alert("ok best of " + roundScore);
function preload() {
  audio = new Audio("assets/hit.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bar2x = windowWidth - barw;
  frameRate(60);
}

function draw() {
  background(backgroundVal);
  stroke(strokeVal);
  strokeWeight(3);
  fill(fillval);
  ellipse(x, y, diameter); // pingpong ball

  rect(bar1x, bar1y, barw, barh); // left player

  rect(bar2x, bar2y, barw, barh); // right player
  line(width / 2, 0, width / 2, height);

  if (keyIsDown(UP_ARROW)) {
    bar2y -= 7;
  }

  if (keyIsDown(DOWN_ARROW)) {
    bar2y += 7;
  }

  if (keyIsDown(87)) {
    bar1y -= 7;
  }

  if (keyIsDown(83)) {
    bar1y += 7;
  }

  if (bar1y <= 0) {
    bar1y = 0;
  } else if (bar1y + barh > height) {
    bar1y = height - barh;
  }

  if (bar2y <= 0) {
    bar2y = 0;
  } else if (bar2y + barh > height) {
    bar2y = height - barh;
  }

  updateBall(); // updates Pingpong's location
  checkSide();

  if (x - radius <= bar1x + barw) {
    //for left bar
    if (y - radius >= bar1y && y + radius < bar1y + barh) {
      hit();
      backgroundVal = "white";
      strokeVal = "black";
      fillval = "black";
    }
  } else if (x + radius >= bar2x) {
    //for right bar
    if (y - radius >= bar2y && y + radius < bar2y + barh) {
      hit();
      backgroundVal = "black";
      strokeVal = "white";
    }
  }

  if (x + radius > width) {
    pointsLeft++;
    reDraw();
  } else if (x - radius < 0) {
    pointsRight++;
    reDraw();
  }

  if (pointsLeft > roundScore || pointsRight > roundScore) {
    won();
  }
  textSize(width / 5);
  text(pointsLeft, width / 6, height / 1.75);
  text(pointsRight, width / 1.5, height / 1.75);
}

function updateBall() {
  x += xspeed;
  y += yspeed;
}

function checkSide() {
  if (y > height - radius || y < radius) {
    yspeed = -yspeed;
  }
}

function hit() {
  xspeed = -xspeed;
  audio.play();
}

function rePlay() {
  document.querySelector(".endgame").style.display = "none";
  xspeed = 12;
  x = 100;
  y = random(25, height - 25);
  pointsReset();
}

function removedecoration() {
  noStroke();
  noFill();
}

function reDraw() {
  xspeed = 12;
  y = random(25, height - 25);
}

function won() {
  document.querySelector(".endgame").style.display = "block";
  if (pointsLeft > pointsRight) {
    document.getElementById("points").innerHTML = left + " won, " + pointsLeft;
  } else if (pointsLeft < pointsRight) {
    document.getElementById("points").innerHTML =
      right + " won, " + pointsRight;
  }
  x = 440;
  y = 440;
  pointsReset();
}

function pointsReset() {
  pointsRight = 0;
  pointsLeft = 0;
}

// function testMode(){  // calling this function in draw loops calls a hidden test mode

//     x = mouseX;
//     y = mouseY;
//     text(bar1x+ "x : y"+ bar1y,300,200);
//     text(x+ "x : y"+ y,100,200);
//     strokeWeight(8);
//     stroke(33,333,33);
//     point(x,y);
//     point(bar1x+barw,bar1y);
//     point(bar2x,bar2y);
// }
