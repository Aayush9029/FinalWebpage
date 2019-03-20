// alert(" Allow camera to play");
let x = 600 / 2;
let y = 590;
let speedx = 6;
let speedy = 0;
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
let val2;
let val1;

function preload() {
  audio = new Audio("hit.mp3");
}


function setup() {
  video = createCapture(VIDEO);

  video.hide();
  //poseNet form ML5 machine learning database loading..
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", gotPoses);
  //loading done datas added to stuffs LOL
  createCanvas(500, 650);
  frameRate(30);
  barY  = height-barh;
  bar2Y = barh;
  val2 = 0;
  val1 = 255;
}

function draw() {

  background(val2);
  textSize(220);
  
  fill(0);
  strokeWeight(4);
  stroke(val1);
  textAlign(CENTER);
  text( points, width/2, height/1.65); //points counter

  
  ellipse(x, y, balld, balld);

  if(x + speedx >= width-balld/2 || x + speedx <= balld/2) {
    speedx = -speedx;
}

else if(y + speedy >= height-balld/2 || y + speedy <= balld/2 ) {

    if(x >= eyelX && x < eyelX + barw) {
      hit();
      }
    else {
      endgame();
    }
}
    //bar starts

  rect(eyelX, barY, barw, barh);
  rect(eyelX, bar2Y-barh, barw, barh);

  x += speedx;
  y += speedy;


}


function changeColor(){
  if(val1 == 0){
    val1 = 255;
    val2 = 0; 
}else if (val1 == 255){
  val1 = 0;
  val2 = 255; 
  
  }
}

function hit(){
  audio.play();
  speedy = -speedy;
  changeColor();
  points++;
}




function modelReady() {
  //if modelready or poseNet is fully loaded..
  console.log("model ready");
  speedy = -7;
}

function gotPoses(poses) {
  // console.log(poses);
  //poseNet data manupulation
  if (poses.length > 0) {
    //for eyeleft x and y position
    let eX = poses[0].pose.keypoints[0].position.x;
    //lerping to make jitter go away >>> optional but better to add few line to make it look better
    eyelX = lerp(eyelX, eX, 0.5);
  }
  

}



function endgame(){
  speedx  = 0 ;
  speedy  = 0 ; //stops ball
  barY = height+22; //hides bar controll
  bar2Y = -20; //hides bar auto
  val = (56,61,69);
  x = 700;
  location.reload()
} 