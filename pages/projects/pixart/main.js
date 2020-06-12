let pixes = [];
let brushSize = 50;
let showGrid = false;
let fillColor = document.getElementById("color").value;
let grid = {
  width: 450,
  height: 450,
};

function setup() {
  createCanvas(grid.width, grid.height);
  background(0);
  makePixes(0, 0);
  noFill();
}

function draw() {
  background(0);

  if (showGrid) {
    for (const p of pixes) {
      p.show();
    }
  } else {
    noStroke();
  }
  for (const p of pixes) {
    p.showColor();
  }
}

function mouseDragged() {
  for (const p of pixes) {
    if (mouseX > p.x && mouseX < p.x + brushSize) {
      if (mouseY > p.y && mouseY < p.y + brushSize) {
        p.fillPix(fillColor);
      }
    }
  }
}
function mouseClicked() {
  for (const p of pixes) {
    if (mouseX > p.x && mouseX < p.x + brushSize) {
      if (mouseY > p.y && mouseY < p.y + brushSize) {
        p.fillPix(fillColor);
      }
    }
  }
}

function keyPressed(e) {
  if (e.key == "s") {
    saveCanvas();
  }
}

document.getElementById("customCheckbox").addEventListener("change", (e) => {
  showGrid = true ? !showGrid : showGrid;
});

document.getElementById("color").addEventListener("change", (e) => {
  fillColor = document.getElementById("color").value;
  let a = hexToRgb(fillColor);
});

function changeSize() {
  grid.height = parseInt(document.getElementById("gridHeight").value);
  grid.width = parseInt(document.getElementById("gridWidth").value);
  brushSize = parseInt(document.getElementById("detailSize").value);
  print(grid, brushSize);

  if (grid.height % brushSize === 0) {
    print("correct");
  } else {
    while (grid.height % brushSize != 0) {
      brushSize -= 5;
      print("brushSize", brushSize);
    }
  }
  if (grid.width % brushSize === 0) {
    print("correct");
  } else {
    while (grid.width % brushSize != 0) {
      brushSize -= 5;
      print("brushSize", brushSize);
    }
  }
  resizeCanvas(grid.width, grid.height);
  makePixes(0, 0);
  document.getElementById(
    "gridHeightLabel"
  ).innerHTML = `Grid height [${grid.height}]px:`;
  document.getElementById(
    "gridWidthLabel"
  ).innerHTML = `Grid width [${grid.width}]px:`;
  document.getElementById("detailLabel").innerHTML = `Detail [${
    100 - brushSize
  }]:`;
}
