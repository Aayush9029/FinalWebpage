let population;
let lifespan = 400;
let lifeP;
let count = 0;
let target;
let maxForce = 0.2;

let rx = 100;
let ry = 150;
let rw = 200;
let rh = 10;

function setup() {
  createCanvas(400, 300);
  rocket = new Rocket();
  population = new Population();
  lifeP = createP();
  target = createVector(width/2, height/5);
  background(0);
}

function draw() {
    if(!mouseIsPressed){
  background(40,43,64);
    }
//   background(0);
  
  noStroke();
  fill(60,152,155, 150);
  ellipse(target.x, target.y, 48, 48);
  fill(174,197,214, 150);
  ellipse(target.x, target.y, 32, 32);
  fill(212,4,36,150);
  ellipse(target.x, target.y, 16, 16);
  
  population.run();
  lifeP.html(count);
  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    count = 0;
  }
  fill(255, 50);
  rect(rx, ry, rw, rh);
}

function Population() {
  this.rockets = [];
  this.popSize = 30;
  this.matingPool = [];
  
  for (let i = 0; i < this.popSize; i++) {
    this.rockets[i] = new Rocket();
  }
  this.evaluate = function() {
    
    let maxFit = 0;
    for (let i = 0; i < this.popSize; i++) {
      this.rockets[i].calcFitness();
      if (this.rockets[i].fitness > maxFit) {
        maxFit = this.rockets[i].fitness;
      }
    }
    // createP(floor(maxFit));
    for (let i = 0; i < this.popSize; i++) {
      this.rockets[i].fitness /= maxFit;
    }
    
    this.matingPool = [];
    for (let i = 0; i < this.popSize; i++) {
      let n = this.rockets[i].fitness * 100;
      for (let j = 0; j < n; j++) {
        this.matingPool.push(this.rockets[i]);
      }
    }
  }
  
  this.selection = function() {
    let newRockets = [];
    for (let i = 0; i < this.rockets.length; i++) {
      let parentA = random(this.matingPool).dna;
      let parentB = random(this.matingPool).dna;
      let child = parentA.crossover(parentB);
      child.mutation();
      newRockets[i] = new Rocket(child);
    }
    this.rockets = newRockets;
  }
  this.run = function() {
    for (let i = 0; i < this.popSize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}

function DNA(genes) {
  if (genes) {
    this.genes = genes;
  } else {
    this.genes = [];
    for (let i = 0; i < lifespan; i++) {
      this.genes[i] = p5.Vector.random2D();
      this.genes[i].setMag(maxForce);
    }
  }
  this.crossover = function(partner) {
    let newGenes = [];
    let mid = floor(random(this.genes.length));
    for (let i = 0; i < this.genes.length; i++) {
      if (i > mid) {
        newGenes[i] = this.genes[i];
      } else {
        newGenes[i] = partner.genes[i];
      }
    }
    return new DNA(newGenes);
  }
  this.mutation = function() {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < 0.01) {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(maxForce);
      }
    }
  }
}

function Rocket(dna) {
  this.pos = createVector(width/2, height*.8);
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
  
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  
  this.calcFitness = function() {
    let d = dist(this.pos.x, this.pos.y, target.x, target.y);
  
    this.fitness = map(d, 0, width, width, 0);
    if (this.completed) {
      this.fitness *= 10;
    }
    if (this.crashed) {
      this.fitness /= 10;
    }
  }
  
  this.update = function() {
    let d = dist(this.pos.x, this.pos.y, target.x, target.y);
    if (d < 10) {
      this.completed = true;
      this.pos = target.copy();
    }
    
    if (this.pos.x > rx && this.pos.x < rx + rw && this.pos.y > ry && this.pos.y < ry + rh) {
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
  
  this.show = function() {
    push();
    noStroke();
    fill(255, 100);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0, 0, 25, 5);
    pop();
  }
}