let Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
let engine;
let world;

// Array contaning objects and obstacles
let boxes = [];
let grounds = [];

// For Editing Mode
let isEditing = false;
let point1, point2;

// Creating div elements
let friction_div;
let bouncinessP_div;
let obstacleradiusP_div;

// For slider changes
let frictionForCanvas;
let bouncinessForCanvas;
let radiusForCanvas;

// Misc

let isdarkMode = false;

function setup() {
  rectMode(CENTER);

  let cv = createCanvas(window.innerWidth / 1.1, window.innerHeight / 1.75);
  cv.parent(document.getElementById("canvasParent"));

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  noCursor();

  let parent = document.getElementById("infoHolder");

  obstacleradiusP_div = createP();
  bouncinessP_div = createP();
  friction_div = createP();

  obstacleradiusP_div.parent(parent);

  friction_div.parent(parent);
  bouncinessP_div.parent(parent);

  frictionForCanvas = document.getElementById("friction").value;
  bouncinessForCanvas = document.getElementById("bounciness").value;
  radiusForCanvas = document.getElementById("radius").value;

  friction_div.html("Friction: " + frictionForCanvas);
  bouncinessP_div.html("Bounciness: " + bouncinessForCanvas);
  obstacleradiusP_div.html("Radius: " + radiusForCanvas);
}

function changeValue() {
  frictionForCanvas = document.getElementById("friction").value;
  bouncinessForCanvas = document.getElementById("bounciness").value;
  radiusForCanvas = document.getElementById("radius").value;

  friction_div.html("Friction: " + frictionForCanvas);
  bouncinessP_div.html("Bounciness: " + bouncinessForCanvas);
  obstacleradiusP_div.html("Radius: " + radiusForCanvas);
}

function mouseClicked() {
  boxes.push(
    new Box(
      mouseX,
      mouseY,
      radiusForCanvas,
      frictionForCanvas,
      bouncinessForCanvas
    )
  );
}

function keyPressed() {
  if (keyCode == 32) {
    isEditing = isEditing ? false : true;

    if (isEditing) {
      point1 = { x: mouseX, y: mouseY };
    } else {
      if (point1) {
        point2 = { x: mouseX, y: mouseY };
        let angle = (mouseY - point1.y) / (mouseX - point1.x);
        grounds.push(
          new Bounds(
            point1.x + (point2.x - point1.x) / 2,
            point1.y + (point2.y - point1.y) / 2,
            point2.x - point1.x,
            5,
            angle
          )
        );
      }
    }
    fill(222);
  }
}

function draw() {
  noStroke();
  background(0);

  fill(255, 75);
  ellipse(mouseX, mouseY, 10, 10);

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
    if (boxes[i].isOffScreen()) {
      boxes.splice(i, 1);
    }
  }

  grounds.forEach(ground => {
    ground.show();
  });

  if (isEditing) {
    stroke(255);
    fill(255, 75);
    ellipse(mouseX, mouseY, 22, 22);
    line(point1.x, point1.y, mouseX, mouseY);
  }
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
}
