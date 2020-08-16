class Particle {
  constructor() {
    this.fov = 45;
    this.pos = createVector(sceneW / 2, sceneH / 2);
    this.rays = [];
    this.heading = 0;
    for (let a = -this.fov / 2; a < this.fov / 2; a += 1) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  updateFOV(fov) {
    this.fov = fov;
    this.rays = [];
    for (let a = -this.fov / 2; a < this.fov / 2; a += 1) {
      this.rays.push(new Ray(this.pos, radians(a) + this.heading));
    }
  }

  rotate(angle) {
    this.heading += angle;
    let index = 0;
    for (let a = -this.fov / 2; a < this.fov / 2; a += 1) {
      this.rays[index].setAngle(radians(a) + this.heading);
      index++;
    }
  }

  move(amt) {
    const vel = p5.Vector.fromAngle(this.heading);
    vel.setMag(amt);
    this.pos.add(vel);
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  look(walls) {
    const scene = [];
    const color_s = [];
    const upload = [];
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i];
      let closest = null;
      let closest_clr = null;
      let record = Infinity;
      for (let wall of walls) {
        const pt = ray.cast(wall);

        if (pt) {
          let d = p5.Vector.dist(this.pos, pt.wall_pt);
          const a = ray.dir.heading() - this.heading;
          if (!mouseIsPressed) {
            d *= cos(a);
          }
          if (d < record) {
            record = d;
            closest = pt.wall_pt;
            closest_clr = pt.wall_color;
            stroke(
              pt.wall_color.red,
              pt.wall_color.green,
              pt.wall_color.blue,
              100
            );
          }
        }
      }
      if (closest) {
        line(this.pos.x, this.pos.y, closest.x, closest.y);
        color_s.push(closest_clr);
      }
      scene[i] = record;
      const total = {
        scene: scene[i],
        color: color_s,
      };

      upload[i] = total;
    }
    return upload;
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}
