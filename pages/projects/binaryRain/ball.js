class Ball {
  constructor(binary, x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.gravity = 0.98;
    this.acc = 0.05;
    this.r = 0;
    this.g = random(150, 200);
    this.b = random(150, 250);
    this.alpha = 255;
    this.binary = binary;
  }
  show() {
    // fill(0, 200, 250);
    fill(this.r, this.g, this.b);
    noStroke();
    textSize(20);
    text(this.binary, this.x, this.y);
    // ellipse(this.x, this.y, this.w, this.w);
  }

  done() {
    if (this.y > height) {
      return true;
    } else {
      return false;
    }
  }
  update() {
    this.y += this.gravity;
    this.gravity += this.acc;
  }
}
