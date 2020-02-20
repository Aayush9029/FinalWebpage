let values = [];
let w = 10;

let r, g, b;

let states = [];
let audoi = new Audio("n.mp3");

function setup() {
  r = random(255);
  g = random(255);
  b = random(255);
  audoi.play();
  createCanvas(windowWidth, windowHeight);
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }
  quickSort(values, 0, values.length - 1);
}

async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(arr, start, end);
  states[index] = -1;

  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)
  ]);
}

async function partition(arr, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }

  let pivotValue = arr[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, end);

  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      states[i] = -1;
      audoi.play();
    }
  }

  return pivotIndex;
}

function draw() {
  background(r, g, b, 200);
  for (let i = 0; i < values.length; i++) {
    noStroke();
    if (states[i] == 0) {
      fill(g, b, b);
    } else if (states[i] == 1) {
      fill(b, b, r);
    } else {
      fill(255);
    }
    rect(i * w, height - values[i], w * 0.9, values[i]);
  }
}

async function swap(arr, a, b) {
  await sleep(40);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
