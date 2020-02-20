let xoff = 0;
let yoff = 10000;
let souls = 1;
let soulsSpeed = 2;
let draworNot = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  souls = document.getElementById("numberOfsouls").value;
  soulsSpeed = document.getElementById("soulSpeed").value;

  draworNot = document.getElementById("DN").checked;

  background(0);
}

function draw() {
  souls = document.getElementById("numberOfsouls").value;
  soulsSpeed = document.getElementById("soulSpeed").value;
  draworNot = document.getElementById("DN").checked;

  if (!draworNot) {
    background(0, 40);
  }

  noStroke();

  fill(222, 222, 222, 100);
  ellipse(random(width), random(height), 2);
  fill(222, 22, 22);
  ellipse(noise(xoff) * width, noise(yoff) * height, random(4, 5));

  addMore();
  xoff += soulsSpeed / 5000;
  yoff += soulsSpeed / 5000;
  // console.log(draworNot);
}

function addMore() {
  for (let i = 0; i < souls; i++) {
    fill(0, 212, 112);
    ellipse(
      noise(xoff - i) * width,
      noise(yoff * 2 - i) * height,
      random(4, 5)
    );
    fill(222, 2, 202);
    ellipse(
      noise((yoff * 2 + i) / 9) * width,
      noise(yoff + 10 * i * 20) * height,
      random(4, 5)
    );
    fill(222, 222, random(255));
    ellipse(noise(yoff / 2) * width, noise(xoff * 2) * height, random(4, 5));
  }
  fill(22, 222, 222);
  ellipse(noise(xoff + 100) * width, noise(yoff) * height, random(4, 5));

  fill(222, 212, 112);
  ellipse(noise(xoff) * width, noise(yoff) * height, random(4, 5));

  fill(222, 22, 222);
  ellipse(noise(xoff - 100) * width, noise(yoff) * height, random(4, 5));

  fill(222, 222, 22);
  ellipse(noise(xoff) * width, noise(yoff + 100) * height, random(4, 5));

  fill(22, 222, random(255));
  ellipse(noise(xoff) * width, noise(yoff - 100) * height, random(4, 5));
}
