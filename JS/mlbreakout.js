// alert(" Allow camera to play");
let x = 600 / 2;
let y = 500;
let speedx = 6;
let speedy = -7;
let points = 0;
let barY;
let bar2Y;
let eyelX = 600 / 2.7; //bars xposition aka eye tracking database
let video;
let poseNet;
let barw = 100;
let barh = 15;
let balld = 25; //ball's diameter
let ratio = 2.65;//for points position

function preload(){
  video = createCapture(VIDEO);
  video.hide();
  //poseNet form ML5 machine learning database loading..
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", gotPoses);
  //loading done datas added to stuffs LOL
}

function setup() {
  createCanvas(500, 650);
  frameRate(30);
  barY  = height-barh;
  bar2Y = barh;
}

function draw() {
  background(0);
  textSize(220);
  fill(255, 51);
  canvas.getContext('2d').fillText( points, width/ratio, height/1.5); //points counter
  //ball
  stroke(225);
  strokeWeight(4);
  noFill();
  stroke(255);
  ellipse(x, y, balld, balld);

  if(x + speedx >= width-balld/2 || x + speedx <= balld/2) {
    speedx = -speedx;
}

else if(y + speedy >= height-balld/2 || y + speedy <= balld/2 ) {
    if(x >= eyelX && x < eyelX + barw) {
        speedy = -speedy;
        points++;
        val = 'black';
    }
    else {
        location.reload()
        clearInterval(interval); // Needed for Chrome to end game
    }
}
    //bar starts
  rect(eyelX, barY, barw, barh);
  rect(eyelX, bar2Y-barh, barw, barh);

  x += speedx;
  y += speedy;


  if (points >= 10){
    ratio = 4.5;
  }
}


function modelReady() {
  //if modelready or poseNet is fully loaded..
  console.log("model ready");
}

function gotPoses(poses) {
  // console.log(poses);
  //poseNet data manupulation
  if (poses.length > 0) {
    //for eyeleft x and y position
    let eX = poses[0].pose.keypoints[1].position.x;
    //lerping to make jitter go away >>> optional but better to add few line to make it look better
    eyelX = lerp(eyelX, eX, 0.5);
  }
  

}



var interval = setInterval(draw, 20);