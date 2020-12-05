let cols, rows;
let w = 30;
let grid = [];

let current;

let stack = [];
let tails = [];

let started = 0;

let isdarkMode = false;

// Slider vals

let grid_w = 600;
let grid_h = 600;
let grid_rs = 30;

function changeValue() {
  console.log("asd");
  grid = [];
  grid_w = document.getElementById("grid_width").value;
  grid_h = document.getElementById("grid_height").value;
  grid_rs = document.getElementById("grid_res").value;
  resizeCanvas(grid_w, grid_h);
  w = grid_rs;
  // window.reload();

  grid = [];
  // current

  stack = [];
  tails = [];
  started = 0;
  cols = floor(width / w);
  rows = floor(height / w);
  frameRate(10);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
}

function setup() {
  let cv = createCanvas(grid_w, grid_h);
  cv.parent(document.getElementById("canvasParent"));
  cols = floor(width / w);
  rows = floor(height / w);
  frameRate(10);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
}

function draw() {
  background(56, 44, 45);

  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  if (current.i === 0 && current.j === 0) {
    started += 1;
  }
  if (started > 1) {
    // print("DONE");
    fill(255, 100);
    rect(0, 0, w, w);
    rect(width - w, height - w, w, w);
    // noLoop();
  } else {
    current.highlight();
  }

  current.visited = 1;

  // STEP 1
  let next = current.checkNeighbors();
  if (next) {
    next.visited = 1;

    // STEP 2
    stack.push(current);

    // STEP 3
    removeWalls(current, next);

    // STEP 4
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
  for (let i = 1; i < tails.length - 1; i++) {
    fill(255, 255, 255, 120);
    rect(tails[i].x, tails[i].y, tails[i].w, tails[i].w);
    if (!next) {
      tails = [];
    }
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = 0;
    b.walls[1] = 0;
  } else if (x === -1) {
    a.walls[1] = 0;
    b.walls[3] = 0;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = 0;
    b.walls[2] = 0;
  } else if (y === -1) {
    a.walls[2] = 0;
    b.walls[0] = 0;
  }
}

function toggleDarkMode() {
  isdarkMode = isdarkMode ? false : true;
  if (isdarkMode) {
    document.getElementById("darkbtn").style.filter = "invert(100%)";
    document.getElementById("body").style.backgroundColor = "#161616";
  } else {
    document.getElementById("darkbtn").style.filter = "invert(0%)";
    document.getElementById("body").style.backgroundColor = "#f1f2ec";
  }
  print(isdarkMode);
}
