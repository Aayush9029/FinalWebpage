
alert(" Allow camera to play");

let x = 600 / 2.5;
let y = 350;
let speedx = 7;
let speedy = -7;
let points = 0;
let barY = 400 - 30;
let eyelX = 600 / 2.5; //bars xposition aka eye tracking database
let video;
let poseNet;
let barw = 100;
let barh = 20;
let balld = 25; //ball's diameter

function setup() {
  createCanvas(600, 400);
  video = createCapture(VIDEO);
  video.hide();
  //poseNet form ML5 machine learning database loading..
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", gotPoses);
  //loading done datas added to stuffs LOL
}

function draw() {
  background(0); //background
  canvas.getContext('2d').fillText( points, 25, 30); //points counter
  //ball
  stroke(225);
  strokeWeight(4);
  noFill();
  ellipse(x, y, balld, balld);


  if (x > width - 15 || x < 15) {
    //side bounce
    speedx = -speedx;
  }

  //sakiyo

  if (y < 15) {
    //upward bounce
    speedy = -speedy;
  } else if (y > height - 50) {
    if (x > eyelX  && x < eyelX + barw) {
      points++;
      speedy = -speedy;
    } else {
      //alerts if it goes downwards
      alert("Game over, " + "You got " + points + " points");
      location.reload()
    }
  }

  //ball ends PHEW !!!

  //bar starts
  rect(eyelX, barY, barw, barh);

  x += speedx;
  y += speedy;
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
