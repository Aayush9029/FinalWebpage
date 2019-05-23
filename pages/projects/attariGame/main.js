//atari breakout Aayush Pokharel
//JOystick

let fireworks = [];
let gravity;
let is_pressed = false;
let amount = 2;
let falling_Text;
let playerW = 10;
let playerX;
let playerY;
let dropSpeed = 1;
let sound;
let img;

let charge = false;

let playerSpeed = 4;

let boxW = 32;
let box1x;
let box1y = 0;
let box2x;
let box2y = 0;
let box3x;
let box3y = 0;
let box4x;
let box4y = 0;
let box5x;
let box5y = 0;
let box6x;
let box6y = 0;

let lvlAngle = 0;
let points = 0;
let bullets = 201;

function preload() {
  sound = loadSound("SFX.mp3");
  img = loadImage("startship.png");
  img2 = loadImage("index.png");
}

function setup() {
  // console.log(image);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  playerY = height - 50;
  playerX = width / 2;
  background(0, 0, 0, 25);
  gravity = createVector(lvlAngle, 0.05);
  noCursor();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (points > 0) {
    if (points % 5 === 0) {
      charge = true;
    }
  }
  if (points >= 10 && points < 11) {
    dropSpeed += 0.01;
  }
  gravity = createVector(lvlAngle, 0.05);
  if (!is_pressed) {
    // helpThem();
    pickLocation();
  }
  //   colorMode(RGB);
  background(img2);
  for (let i = fireworks.length - 1; i > 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
  falling_Text -= 0.7;
  bulletsShow();
  strokeWeight(2);
  // noStroke();
  noFill();

  if (keyIsDown(LEFT_ARROW)) {
    playerX -= playerSpeed;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX += playerSpeed;
  }

  if (playerX <= 0) {
    playerX = playerW;
  } else if (playerX >= width) {
    playerX = width - playerW;
  }

  rect(box1x, box1y, boxW, boxW);
  rect(box2x, box2y, boxW, boxW);
  rect(box3x, box3y, boxW, boxW);
  rect(box4x, box4y, boxW, boxW);
  rect(box5x, box5y, boxW, boxW);
  rect(box6x, box6y, boxW, boxW);

  if (box1y > height) {
    pickLocation();
    gameOver();
    // console.log('reset');
  }
  if (box2y > height) {
    pickLocation();
    gameOver();
  }
  if (box3y > height) {
    pickLocation();
    gameOver();
    // console.log('reset');
  }
  if (box4y > height) {
    gameOver();
    pickLocation();
  }
  if (box5y > height) {
    gameOver();
    pickLocation();
  }
  if (box6y > height) {
    gameOver();
    pickLocation();
  }

  box1y += dropSpeed;
  box2y += dropSpeed;
  box3y += dropSpeed;
  box4y += dropSpeed;
  box5y += dropSpeed;
  box6y += dropSpeed;

  // lvlAngle += 0.001;
  textAlign(LEFT);
  fill(255);
  textSize(16);
  noStroke();
  text("Points : " + points, 10, 30);
  text("Ammo : " + bullets, 10, 60);
  //   fill(hue, 255, 255);
  //   rect(playerX - 5, playerY, playerW, playerW + 10);
  image(img, playerX - 42, playerY - 30, img.width / 2, img.height / 2);

  checkPlayer();
}

function keyPressed() {
  lvlAngle = 0;
  if (bullets > 0) {
    if (keyCode == "32") {
      amount = random(25, 100);
      fireworks.push(new Firework(playerX, playerY));
      is_pressed = true;
      sound.play();
      bullets--;
    } else if (keyCode == "13") {
      if (charge) {
        if (bullets > 0) {
          fireworks.push(new Firework(playerX - 20, playerY + 20));
          fireworks.push(new Firework(playerX + 20, playerY + 20));
          fireworks.push(new Firework(playerX, playerY));
          is_pressed = true;
          charge = false;
        }
      }
    } else if (keyCode == "16") {
      if (charge) {
        lvlAngle = 1;
        lvlAngle = 1.1;
        lvlAngle = 1.2;
        charge = false;
      }
    }
  }
}

function hit1() {
  box1y = random(-500, -50);
  box1x = random(boxW, width - boxW);
  bulletsPoints();
}

function hit2() {
  box2y = random(-500, -50);
  box2x = random(boxW, width - boxW);
  bulletsPoints();
}

function hit3() {
  box3y = random(-500, -50);
  box3x = random(boxW, width - boxW);
  bulletsPoints();
}

function hit4() {
  box4y = random(-500, -50);
  box4x = random(boxW, width - boxW);
  bulletsPoints();
}
function hit5() {
  box5y = random(-500, -50);
  box5x = random(boxW, width - boxW);
  bulletsPoints();
}
function hit6() {
  box6y = random(-500, -50);
  box6x = random(boxW, width - boxW);
  bulletsPoints();
}

function pickLocation() {
  box2y = random(-500, -50);
  box1y = random(-500, -50);
  box5y = random(-500, -50);
  box6y = random(-500, -50);
  box2x = random(boxW, width - boxW);
  box1x = random(boxW, width - boxW);

  box3y = random(-500, -50);
  box4y = random(-500, -50);
  box5x = random(boxW, width - boxW);
  box6x = random(boxW, width - boxW);
  box3x = random(boxW, width - boxW);
  box4x = random(boxW, width - boxW);
}

function bulletsPoints() {
  points++;
  bullets += 2;
}

function gameOver() {
  points = 0;
  dropSpeed = 1;
}

function bulletsShow() {
  colorMode(RGB);
  if (charge) {
    fill(25, 225, 55);
  } else {
    fill(2, 150, 150);
  }
  noStroke();
  rect(10, 45, bullets, 20);
  stroke(255, random(22), random(255));
}

function checkPlayer() {
  if (playerX > width) {
    playerX = width;
  } else if (playerX < 0) {
    playerX = 0;
  }
}
