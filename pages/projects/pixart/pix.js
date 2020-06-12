class Pix {
  constructor(x, y, brushSize) {
    this.x = x;
    this.y = y;
    this.brushSize = brushSize;
    this.color = "#000";
  }
  show() {
    stroke(255);
    rect(this.x, this.y, this.brushSize);
  }
  showColor() {
    fill(this.color);
    rect(this.x, this.y, this.brushSize);
  }
  fillPix(color) {
    this.color = color;
  }
}

function makePixes(x, y) {
  for (let i = 0; i < grid.width; i += brushSize) {
    for (let j = 0; j < grid.height; j += brushSize) {
      pixes.push(new Pix(x + i, y + j, brushSize));
    }
  }
}
