class Boundary {
  constructor(x1, y1, x2, y2, red = 255, green = 255, blue = 255) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);

    if (!(red < 255)) {
      this.red = random(50, 255);
      this.green = random(50, 255);
      this.blue = random(50, 255);
    } else {
      this.red = 50;
      this.green = 50;
      this.blue = 50;
    }
  }

  show() {
    stroke(this.red, this.green, this.blue);
    // stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}
