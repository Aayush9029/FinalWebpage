var inc = 0.1;
var scl = 25;
var cols, rows;

var zoff = 0;
var isTail = false;
var isClear = false;
var fr;

var particles = [];

var flowfield;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowfield = new Array(cols * rows);
  for (var i = 0; i < 500; i++) {
    particles[i] = new Particle();
  }
  background(51);
  alert("Click and hold to show path");
  noFill();
}

function mouseClicked() {
  isTail = !isTail;
}
function draw() {
  if (!isTail) {
    noCursor();
    background(0, 5);
  } else {
    cursor();
  }
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}
