class Population {
  constructor(size) {
    this.rockets = [];
    this.popSize = size;
    this.matingPool = [];

    for (let i = 0; i < this.popSize; i++) {
      this.rockets[i] = new Rocket();
    }
  }

  evaluate() {
    gen++;

    let maxFit = 0;
    for (let i = 0; i < this.popSize; i++) {
      this.rockets[i].calcFitness();
      if (this.rockets[i].fitness > maxFit) {
        maxFit = this.rockets[i].fitness;
      }
    }
    mxFit = floor(maxFit);

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

  selection() {
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
  run() {
    for (let i = 0; i < this.popSize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}
