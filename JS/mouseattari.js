// alert(" Allow camera to play");
let x = 600 / 2;
let y = 500;
let speedx = 5.5;
let speedy = -6.5;
let points = 0;
let barY;
let bar2Y = 0;
// let pmouseX = 600 / 2.5; //bars xposition aka eye tracking database
let barw = 100;
let barh = 15;
let balld = 25; //ball's diameter
let ratio = 2.65; //points positon according to points number 
var val = 'black';

function setup() {
  createCanvas(500, 650);
  frameRate(30);
  barY = height-barh;

  
}

function draw() {
  background(val);
  textSize(220);
  fill(51);
canvas.getContext('2d').fillText( points, width/ratio, height/1.6); //points counter
//ball
  stroke(255);
  strokeWeight(4);
  fill(0);

  ellipse(x, y, balld, balld);

  if(x + speedx >= width-balld/2 || x + speedx <= balld/2) {
    speedx = -speedx;
}

if(y + speedy <= balld/2) {
    speedy = -speedy;
    val = 'white';
}
  else if(y + speedy >= height-balld/2) {
    if(x >= pmouseX && x < pmouseX + barw) {
        speedy = -speedy;
        points++;
        val = 'black';
    }
    else {
        location.reload()
        clearInterval(interval); // Needed for Chrome to end game
    }
}

  mouseDragged();

  x += speedx;
  y += speedy;

//to positon the points count in center
  if (points >= 10){
    ratio = 4.5;
  }
}

function mouseDragged(){
    rect(pmouseX, barY, barw, barh);
    rect(x-20, bar2Y, barw, barh);

}

var interval = setInterval(draw, 20);