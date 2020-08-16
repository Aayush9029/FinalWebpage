let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;

let sceneW;
let sceneH;
let fov = 45;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  sceneW = width / 2;
  sceneH = height;

  for (let i = 0; i < 10; i++) {
    let x1 = random(sceneW);
    let x2 = random(sceneW);
    let y1 = random(sceneH);
    let y2 = random(sceneH);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  walls.push(
    new Boundary(0, 0, sceneW, 0, (red = 254), (green = 255), (blue = 255))
  );
  walls.push(
    new Boundary(
      sceneW,
      0,
      sceneW,
      sceneH,
      (red = 254),
      (green = 255),
      (blue = 255)
    )
  );
  walls.push(
    new Boundary(
      sceneW,
      sceneH,
      0,
      sceneH,
      (red = 254),
      (green = 255),
      (blue = 255)
    )
  );
  walls.push(
    new Boundary(0, sceneH, 0, 0, (red = 254), (green = 255), (blue = 255))
  );
  particle = new Particle();
  // sliderFOV = createSlider(0, 360, 45);
  // sliderFOV.input(changeFOV);

  console.log(
    "Use Arrow Keys To Move. Press 'z' to increase and 'x' to decrease fov. And h to hide this message. (refresh the page for variants)"
  );
}

// function changeFOV() {
//   const fov = sliderFOV.value();
//   particle.updateFOV(fov);
// }

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    particle.rotate(-0.1);
  } else if (keyIsDown(RIGHT_ARROW)) {
    particle.rotate(0.1);
  } else if (keyIsDown(UP_ARROW)) {
    particle.move(2);
  } else if (keyIsDown(DOWN_ARROW)) {
    particle.move(-2);
  }

  background(0);
  for (let wall of walls) {
    wall.show();
  }
  particle.show();

  const data = particle.look(walls);
  // console.log(data);

  const w = sceneW / data.length;

  push();
  translate(sceneW, 0);

  for (let i = 0; i < data.length; i++) {
    noStroke();
    const sq = data[i].scene * data[i].scene;
    const wSq = sceneW * sceneW;
    const b = map(sq, 0, wSq, 255, -100);
    const h = map(data[i].scene, 0, sceneW, sceneH, 0);
    try {
      fill(
        data[i].color[i].red,
        data[i].color[i].green,
        data[i].color[i].blue,
        b
      );
    } catch (err) {
      fill(255);
    }
    rectMode(CENTER);
    noStroke();

    rect(i * w + w / 2, sceneH / 2, w + 1, h);
  }

  pop();
}

function keyPressed() {
  if (key == "z") {
    fov += 5;
    particle.updateFOV(fov);
  } else if (key == "x") {
    fov -= 5;
    particle.updateFOV(fov);
  } else if (key == "h") {
    document.getElementById("help").style.display = "none";
  }
}
