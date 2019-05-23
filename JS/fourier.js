let time = 0;
let wave = [];
radius = 100;
let y = false;
let speed = 0.03;
speed = 2 / 100;

function sliderChange(val) {
  radius = val;
}

function sliderChange2(val2) {
  speed = val2 / 400;
}

function setup() {
  createCanvas(windowWidth, 600);
}

function draw() {
  strokeWeight(3);
  background(56, 61, 69);
  translate(200, 200);
  textSize(16);
  canvas.getContext("2d").fillText("Radius: " + radius, -30, 200);

  stroke(248, 181, 0); //origin line
  line(0, 0, windowWidth, 0);

  //center of circle

  stroke(0, 173, 181, 244, 244);
  noFill();
  ellipse(0, 0, radius * 2); //big circle in between

  let x = radius * cos(time);
  let y = radius * sin(time);
  wave.unshift(y);

  fill(252, 60, 60);
  strokeWeight(2);
  stroke(255, 244, 224);
  ellipse(x, y, 8); //small rotaing dot

  strokeWeight(3);
  stroke(219, 52, 52);
  line(0, 0, x, y); //line aka radius of the big circle
  translate(200, 0);

  stroke(252, 60, 60);
  line(x - 200, y, 0, wave[0]); //line that connects wave and radius

  //wave
  beginShape();
  if (y) {
    noFill();
  } else {
    fill(219, 52, 52, 200);
  }
  stroke(255, 244, 224);
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += speed;

  if (wave.length > windowWidth) {
    //to remove point after certain time aka windows size
    wave.pop();
  }
}
