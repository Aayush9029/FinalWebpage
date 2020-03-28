class Bounds {
  constructor(x, y, w, h, angle) {
    this.angle = angle;
    var options = {
      isStatic: true,
      angle: this.angle
    };

    this.body = Bodies.rectangle(x, y, w, h, options);

    this.w = w;
    this.h = h;

    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    fill(22, 222, 255, 150);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
