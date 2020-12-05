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
let obstacleX;
let obstacleY;
let obstacleRadius = 200;

let isdarkMode = false;

// initiazing html sliders

function setup() {
  let cv = createCanvas(window.innerWidth / 1.1, window.innerHeight / 1.1);
  cv.parent(document.getElementById("canvasParent"));
  rocket = new Rocket();
  population = new Population(100);

  let parent = document.getElementById("infoHolder");
  popp = createP();
  lifeP = createP();
  generation = createDiv();
  mFit = createDiv();

  popp.parent(parent);
  lifeP.parent(parent);
  generation.parent(parent);
  mFit.parent(parent);

  target = createVector(width / 2, height / 5);
  obstacleX = width / 2;
  obstacleY = height / 2;
  changeValue();
  background(0);
}

function changeValue() {
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

function toggleDarkMode() {
  isdarkMode = isdarkMode ? false : true;
  // document.getElementById("darkbtn").style.backgroundColor = "white";
  if (isdarkMode) {
    document.getElementById("darkbtn").style.filter = "invert(100%)";
    document.getElementById("body").style.backgroundColor = "#161616";
  } else {
    document.getElementById("darkbtn").style.filter = "invert(0%)";
    document.getElementById("body").style.backgroundColor = "#f1f2ec";
  }
  print(isdarkMode);
}
