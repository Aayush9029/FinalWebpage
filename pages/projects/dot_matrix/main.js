let nodes = [];
let node_radius = 10;
let no_of_connected = 0;
let prev_node = null;
let spacing = 40;
function setup() {
  var canvas = createCanvas(800, 800);
  canvas.parent("sketch-holder");
  background(0);
  for (let i = 0; i < width / spacing; i++) {
    for (let j = 0; j < height / spacing; j++) {
      nodes.push(
        new Node(
          spacing * i + node_radius,
          spacing * j + node_radius,
          node_radius
        )
      );
    }
    stroke(255);
  }
  console.log(nodes.length);
}
function draw() {
  background(0);
  nodes.forEach((node) => {
    node.show();
  });
}

function mouseClicked() {
  nodes.forEach((node) => {
    if (dist(mouseX, mouseY, node.x, node.y) < node_radius + 10 / node_radius) {
      if (!node.isClicked) {
        node.isClicked = true;

        no_of_connected++;
        // console.log(
        //   "Clicked" +
        //     " x: " +
        //     node.x +
        //     "y:" +
        //     node.y +
        //     "\n adding no_of_connected++ "
        // );
        if (no_of_connected % 2 == 0) {
          cursor("default");

          // console.log(
          //   "conneting to " + "x: " + prev_node.x + "y:" + prev_node.y
          // );

          node.connected(prev_node);
          // console.log(node, prev_node);
        } else {
          cursor("pointer");

          prev_node = node;
        }
      }
    }
  });
}

class Node {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.isClicked = false;
    this.nodeConnected = null;
  }
  show() {
    if (this.isClicked) {
      fill(255);
    } else {
      fill(100, 222, 255, 100);
    }

    if (this.nodeConnected) {
      push();
      strokeWeight(node_radius);
      line(this.x, this.y, this.nodeConnected.x, this.nodeConnected.y);
      pop();
    }
    ellipse(this.x, this.y, this.r);
  }

  connected(nodeConnected) {
    this.nodeConnected = nodeConnected;
  }
}
