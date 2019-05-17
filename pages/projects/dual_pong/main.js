//dual pong game 
// Made by Aayush Pokharel


let x = 200;
let y = 200;
let xspeed;
let yspeed = 4;
let diameter = 25;
let radius;
let bar1x = 0;
let bar1y = 10;
let barh = 150;
let barw = 20;
let bar2x;
let bar2y = 600;
let barspeed = 9;
let pointsRight = 0;
let pointsLeft = 0;
let backgroundVal = 255;
let strokeVal = 255;
let fillval = 0;
let mySound;
var audio;

let right = 'Right';
let left = 'Left';
let roundScore = parseFloat(prompt("Best of what? (number)"));
alert("Ok best of " + roundScore);

function preload() {
  audio = new Audio("assets/hit.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bar2x = windowWidth - barw;
  frameRate(60);
  xspeed = width/150;
  radius = xspeed;
}

function draw() {
  background(backgroundVal,100);
  // background();
  // testMode();
  stroke(strokeVal);
  strokeWeight(3);
  fill(fillval);
  ellipse(x, y, diameter); // pingpong ball

  rect(bar1x, bar1y, barw, barh); // left player

  rect(bar2x, bar2y, barw, barh); // right player
  line(width / 2, 0, width / 2, height);

  if (keyIsDown(UP_ARROW)) {
    bar2y -= barspeed;
  }

  if (keyIsDown(DOWN_ARROW)) {
    bar2y += barspeed;
  }

  if (keyIsDown(87)) {
    bar1y -= barspeed;
  }

  if (keyIsDown(83)) {
    bar1y += barspeed;
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
  checkSide();  // CHECKS IF PONG TOUCHED THE SIDE

  if (x - radius <= bar1x+barw ) {
    //for left bar
    if (y + radius >= bar1y && y - radius < bar1y + barh) {
      hit();
      backgroundVal = 255;
      strokeVal = 0;
      fillval = 0;
    }
  } else if (x + radius >= bar2x) {
    //for right bar
    if (y + radius >= bar2y && y - radius < bar2y + barh) {
      hit();
      backgroundVal = 0;
      strokeVal = 255;
    }
  }

  if (x + radius > width) {
    pointsLeft++;
    xspeed *= 1.2;
    barspeed *= 1.2;
    reDraw();
  } else if (x - radius < 0) {
    pointsRight++;
    xspeed *= 1.2;
    barspeed *= 1.2;
    reDraw();
  }

  if (pointsLeft >= roundScore || pointsRight >= roundScore) {
    won();
  }
  textSize(width / 5);
  text(pointsLeft, width / 6, height / 1.75);
  text(pointsRight, width / 1.5, height / 1.75);

if(xspeed > width/15 + 20 || xspeed < -1*width/15-20){
  xspeed = 1/2;
  barspeed = 9;
}

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
  pointsReset();
  location.reload();
  
}

function removedecoration() {
  noStroke();
  noFill();
}

function reDraw() {
  xspeed = width/150;
  barspeed = 9;
  y = 200;
  x = 200;
}

function won() {
  x = 440;
  y = 440;
  xspeed = 0;
  document.querySelector(".endgame").style.display = "block";
  if (pointsLeft > pointsRight) {
    document.getElementById("points").innerHTML = left + " won, " + pointsLeft;
  } else if (pointsLeft < pointsRight) {
    document.getElementById("points").innerHTML =
      right + " won, " + pointsRight;
  }

  pointsReset();
}

function pointsReset() {
  pointsRight = 0;
  pointsLeft = 0;
}

function testMode(){  // calling this function in draw loops calls a hidden test mode
    textSize(16);
    noStroke();
    x = mouseX;
    y = mouseY;
    text(bar2x+ "x : y"+ bar2y,600,200);
    text(bar1x+ "x : y"+ bar1y,300,200);
    text(x+ "x : y"+ y,100,200);
    strokeWeight(8);
    stroke(2,255,2);
    point(x,y);
    point(bar1x,bar1y);
    point(bar2x,bar2y);
}


function keyPressed(){
  if(keyCode == 70){
    xspeed *= 1.6;
    barspeed *= 1.3;

  }
}