function Particle(x, y, hue, firework) {
  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = 255;
  this.hue = hue;
  if (this.firework) {
    this.vel = createVector(0, random(-10, -height / 75));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 8));
  }
  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    this.acc.add(force);
  };
  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 10;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  };

  this.show = function() {
    colorMode(HSB);

    if (!this.firework) {
      stroke(hue, 255, 255, this.lifespan);
      strokeWeight(4);
    } else {
      stroke(hue, 255, 255);
      strokeWeight(8);
    }
    point(this.pos.x, this.pos.y);
  };
}
