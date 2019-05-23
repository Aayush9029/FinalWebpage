function Firework(playerX, playerY) {
  this.hue = random(255);
  this.playerX = playerX;
  this.playerY = playerY;
  this.firework = new Particle(this.playerX, this.playerY, this.hue, true);
  this.exploded = false;
  this.particles = [];

  this.done = function() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();

      if (this.firework.pos.y <= -100) {
        this.exploded = true;
        this.explode();
      } else if (this.firework.pos.y >= height) {
        this.exploded = true;
        this.explode();
      } else if (
        this.firework.pos.x > box1x &&
        this.firework.pos.x < box1x + boxW
      ) {
        if (this.firework.pos.y < box1y + boxW) {
          this.exploded = true;
          this.explode();
          hit1();
        }
      } else if (
        this.firework.pos.x > box2x &&
        this.firework.pos.x < box2x + boxW
      ) {
        if (this.firework.pos.y < box2y + boxW) {
          this.exploded = true;
          this.explode();
          hit2();
        }
      } else if (
        this.firework.pos.x > box3x &&
        this.firework.pos.x < box3x + boxW
      ) {
        if (this.firework.pos.y < box3y + boxW) {
          this.exploded = true;
          this.explode();
          hit3();
        }
      } else if (
        this.firework.pos.x > box4x &&
        this.firework.pos.x < box4x + boxW
      ) {
        if (this.firework.pos.y < box4y + boxW) {
          this.exploded = true;
          this.explode();
          hit4();
        }
      } else if (
        this.firework.pos.x > box5x &&
        this.firework.pos.x < box5x + boxW
      ) {
        if (this.firework.pos.y < box5y + boxW) {
          this.exploded = true;
          this.explode();
          hit5();
        }
      } else if (
        this.firework.pos.x > box6x &&
        this.firework.pos.x < box6x + boxW
      ) {
        if (this.firework.pos.y < box6y + boxW) {
          this.exploded = true;
          this.explode();
          hit6();
        }
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  };

  this.explode = function() {
    for (let i = 0; i < amount; i++) {
      let p = new Particle(
        this.firework.pos.x,
        this.firework.pos.y,
        this.hue,
        false
      );
      this.particles.push(p);
    }
  };
  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  };
}
