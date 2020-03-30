let qtree;
let magnify = 5;

function setup() {
  createCanvas(windowWidth, windowHeight - 5);

  background(255);
  let boundary = new Rectangle(width, height, width, height);
  qtree = new QuadTree(boundary, 4);

  stroke(22, 222, 222, 100);
}

function mousePressed() {
  let x = mouseX + random(-100, 100);
  let y = mouseY + random(-100, 100);
  let p = new Point(x, y);
  qtree.insert(p);
}
function mouseDragged() {
  let x = mouseX + random(-100, 100);
  let y = mouseY + random(-100, 100);
  let p = new Point(x, y);
  qtree.insert(p);
}
function mouseWheel(event) {
  if (event.delta > 0 && magnify < 20) {
    magnify += 0.1;
  } else if (magnify > 2) {
    magnify -= 0.1;
  }
}

function draw() {
  background(0);
  qtree.show();
  rectMode(CENTER);
  let range = new Rectangle(mouseX, mouseY, 50, 50);

  if (mouseX < width && mouseY < height) {
    rect(range.x, range.y, range.w * 2, range.h * 2);
    let points = qtree.query(range);
    if (points) {
      for (let p of points) {
        //   noFill();
        strokeWeight(magnify + 2);
        fill(0);
        //   background(0, );
        stroke(mouseX, mouseY / 6, p.x / 5);
        rect(p.x, p.y, magnify * 5, magnify * 5);
      }
    }
  }
}
