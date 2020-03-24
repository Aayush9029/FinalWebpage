let rocH = 20;
let rocW = 5;
class Rocket {
  constructor(dna) {
    this.pos = createVector(width / 2, height * 0.8);
    this.vel = createVector();
    this.acc = createVector();
    this.completed = false;
    this.crashed = false;

    if (dna) {
      this.dna = dna;
    } else {
      this.dna = new DNA();
    }
    this.fitness = 0;
  }
  applyForce(force) {
    this.acc.add(force);
  }

  calcFitness() {
    let d = dist(this.pos.x, this.pos.y, target.x, target.y);

    this.fitness = map(d, 0, width, width, 0);
    if (this.completed) {
      this.fitness *= 10;
    }
    if (this.crashed) {
      this.fitness /= 10;
    }
  }

  update() {
    let d = dist(this.pos.x, this.pos.y, target.x, target.y);
    if (d < 10) {
      this.completed = true;
      this.pos = target.copy();
    }

    let obsD = dist(this.pos.x, this.pos.y, obstacleX, obstacleY);

    if (obsD < obstacleRadius / 2) {
      this.crashed = true;
    }
    //checking edges here
    if (this.pos.x > width || this.pos.x < 0) {
      this.crashed = true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      this.crashed = true;
    }

    this.applyForce(this.dna.genes[count]);
    if (!this.completed && !this.crashed) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.limit(4);
    }
  }

  show() {
    push();
    noStroke();
    fill(255, 100);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0, 0, rocH, rocW);
    pop();
  }
}
