let balls = [];
let binary = "1";
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < 500; i++) {
    balls.push(new Ball(binary, random(width), random(-20, -2000), random(10)));
    if (binary === "1") {
      binary = "0";
    } else {
      binary = "1";
    }
  }
}

function draw() {
  background(0, 128);
  console.log(balls.length);

  for (let i = balls.length - 1; i >= 0; i--) {
    balls[i].update();
    balls[i].show();

    if (balls[i].done()) {
      balls.splice(i, 1);
      balls.push(
        new Ball(binary, random(width), random(-20, -1500), random(12))
      );
      if (binary === "1") {
        binary = "0";
      } else {
        binary = "1";
      }
    }
  }
}
