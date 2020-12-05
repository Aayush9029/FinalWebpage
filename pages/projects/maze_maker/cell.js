class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [1, 1, 1, 1];
    this.visited = 0;
  }

  checkNeighbors() {
    let neighbors = [];

    let top = grid[index(this.i, this.j - 1)];
    let right = grid[index(this.i + 1, this.j)];
    let bottom = grid[index(this.i, this.j + 1)];
    let left = grid[index(this.i - 1, this.j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }
  highlight() {
    let x = this.i * w;
    let y = this.j * w;
    noStroke();
    fill(242, 7, 50);
    rect(x, y, w, w);
    tails.push({ x: x, y: y, w: w });
  }

  show() {
    let x = this.i * w;
    let y = this.j * w;
    stroke(0);
    if (this.walls[0]) {
      line(x, y, x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }
    if (this.walls[3]) {
      line(x, y + w, x, y);
    }

    if (this.visited) {
      noStroke();
      fill(255, 201, 137);
      rect(x, y, w, w);
    }
  }
}
