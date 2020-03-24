let population;
let lifespan = 400;
let lifeP;
let popp;
let generation;
let gen = 1;
let mFit = 1;
let mxFit = 0;
let count = 0;
let target;
let maxForce = 0.3;
let touched = false;
let obstacleX;
let obstacleY;
let obstacleRadius = 200;

// initiazing html sliders

function setup() {
  createCanvas(600, 320);
  rocket = new Rocket();
  population = new Population(100);

  popp = createP();
  lifeP = createP();
  generation = createDiv();
  mFit = createDiv();
  touch = createDiv();

  target = createVector(width / 2, height / 5);
  obstacleX = width / 2;
  obstacleY = height / 2;
  changeValue();
  background(0);
}

function changeValue() {
  console.log("as");
  lifespan = document.getElementById("lifeSpan").value;
  maxForce = document.getElementById("RocketWidth").value;
  obstacleRadius = document.getElementById("ObstacleW").value;
  rocW = document.getElementById("RocketWidth").value;
  population = new Population(document.getElementById("Population").value);
  rocH = document.getElementById("RocketHeight").value;
}

function draw() {
  background(40, 43, 64);

  if (mouseIsPressed) {
    if (mouseX > 0 && mouseX < width) {
      if (mouseY > 0 && mouseY < height) {
        obstacleX = mouseX;
        obstacleY = mouseY;
      }
    }
  }

  let distMouse = dist(mouseX, mouseY, obstacleX, obstacleY);

  if (distMouse < obstacleRadius / 2) {
    cursor("pointer");
  } else {
    cursor("default");
  }

  if (mxFit >= 4000) {
    touched = true;
  }
  if (touched) {
    touch.html("Touched :)");
    touch.style("background-color", "rgb(1, 163, 155)");
  } else {
    touch.html("Not touched yet");
    touch.style("background-color", "#FC4349");
  }
  noStroke();
  fill(60, 152, 155, 150);
  ellipse(target.x, target.y, 48, 48);
  fill(174, 197, 214, 150);
  ellipse(target.x, target.y, 32, 32);
  fill(212, 4, 36, 150);
  ellipse(target.x, target.y, 16, 16);

  population.run();

  lifeP.html("Life Span: " + (lifespan - count));
  lifeP.style("background-color", "rgb(" + (lifespan - count) + ",33, 10)");
  lifeP.style("opacity", "" + (1 / count) * 100 + "");
  mFit.html("Maxfit : " + mxFit);
  generation.html("Generation : " + gen);
  popp.html("Population: " + document.getElementById("Population").value);
  popp.style("margin-top", "25px");
  popp.style(
    "background-color",
    "rgb(" + document.getElementById("Population").value + ",67, 77)"
  );
  // popp.style("background-color", "rgb(1, " + population + ", 22)");

  count++;
  if (count >= lifespan) {
    population.evaluate();
    population.selection();
    count = 0;
  }
  fill(255, 50);
  ellipse(obstacleX, obstacleY, obstacleRadius, obstacleRadius);
  ellipse(obstacleX, obstacleY, obstacleRadius - 20, obstacleRadius - 20);
}
