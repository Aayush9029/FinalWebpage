let points = 0;
let red=22 , g=222, b=222;

let x, y;
let xspeed;
let yspeed;
let d = 20;
let r =d/2;

let barx, bary;
let barh = 10;
let barw = 120;
let barspeed = 7;


let brickRowCount;
let brickColumnCount;
let brickWidth;
let brickHeight = 25;
let brickPadding = 10;
let brickOffsetTop;
let brickOffsetLeft;
let bricks = [];

//for contoller---
let button1;
let button2;
let button3;
let button4;

let upDown;
let leftRight;
//------------------

function setup() {
  window.addEventListener("gamepadconnected", function(e) {
    var gp = navigator.getGamepads()[e.gamepad.index];

    //  console.log(e.gamepad);



  function check(){
    leftRight = e.gamepad.axes[0];
    upDown = e.gamepad.axes[1];
    button2 = e.gamepad.buttons[4].pressed
    button1 = e.gamepad.buttons[3].pressed
    button4 = e.gamepad.buttons[6].pressed
    button3 = e.gamepad.buttons[5].pressed
  }
  setInterval(check,120);

});
  createCanvas(windowWidth,windowHeight);
  background(0);
  textAlign(CENTER, CENTER)
  textSize(width/4)
  pickColor();
  barx = width/2 - barw/2;
  bary = height - barh-10;
  x = width/2 - 20;
  y = bary-20;
  xspeed = random(3,5);
  yspeed = random(5,9);
  brickWidth = 100;
  brickOffsetTop = 20;
  brickOffsetLeft = 0;
  brickRowCount = height/100;
  brickColumnCount = width /(brickWidth + brickPadding/2+ brickOffsetLeft);
  for(var c=0; c<brickColumnCount; c++) {
      bricks[c] = [];
      for(var r=0; r<brickRowCount; r++) {
          bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
  }


}

function draw(){
  background(0,75);
  // fill(2,222,220);
  noStroke();

  bounce(); //makes ball bounce sideways and upwards
  ellipse(x, y, d);

  rect(barx, bary, barw, barh);
  // text(points, width/2, height/4);

  if(mouseIsPressed ){
      barx = mouseX;
  }

  drawBricks();
  stickRect();
  moveBar();
  collisionDetection();
  out();
  buttonCheck();
  x += xspeed;
  y += yspeed;

}


function bounce(){
  if(x+r >= width || x < r){  //side bounce
    xspeed *= -1;
  }
  else if(y-r < 0){ //upward bounce
    yspeed *= -1;
  }
  if(x+r > barx && x-r < barx + barw){
    if(y+r > bary){
      yspeed *= -1;
    }
  }
}


function stickRect(){
  if(barx < 0){
    barx = 0;
  }
  else if (barx + barw > width) {
    barx = width - barw;
  }
}


function moveBar(){
  if (keyIsDown(LEFT_ARROW)){
    barx -= barspeed;
  }
  if (keyIsDown(RIGHT_ARROW)){
    barx += barspeed;
  }
}


function out(){
  if(y + yspeed > height -r){
    // alert('bye');
    showEnd();


  }
}


function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {

        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY
                rect(brickX, brickY, brickWidth, brickHeight);
            }
        }
    }
}


function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    yspeed= -yspeed;
                    b.status = 0;
                    pickColor();
                    points++;
                }
            }
        }
    }
}


function replay(){
  document.location.reload();
}

function showEnd(){
  document.getElementById('box').style.display = 'block'
}


function pickColor(){
  red = random(100, 255);
  g =   random(100, 255);
  b =   random(100, 255);
  fill(red, g, b);
}

function buttonCheck(){
    if(leftRight == 1){
      barx -= barspeed;
    }
    if(leftRight == -1){
      barx += barspeed;
    }
  }
