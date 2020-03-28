class Box {
  constructor(x, y, r, f, b) {
    this.friction = f;
    this.bounciness = b;

    var options = {
      friction: this.friction,
      restitution: this.bounciness
    };

    this.body = Bodies.circle(x, y, r, options);

    this.w = r;

    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    fill(255, 100, 22);
    stroke(255, 200, 22);

    rotate(angle);
    ellipse(0, 0, this.w * 2);
    pop();
  }

  isOffScreen() {
    let pos = this.body.position;
    return pos.y > height + 100;
  }
}
