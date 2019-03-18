let video;
let poseNet;
let radius = 5;
let initialpos = -60;
let click = false;
//nose
let noseX = initialpos;
let noseY = initialpos;

//eyes
let eyeRight_X = initialpos;
let eyeRight_Y = initialpos;

let eyeLeft_X  = initialpos;
let eyeLeft_Y  = initialpos;


//ears
let leftEarX  = initialpos;
let leftEarY  = initialpos;

let rightEarX = initialpos;
let rightEarY = initialpos;


//shoulders
let leftShoulderX  = initialpos;
let leftShoulderY  = initialpos;

let rightShoulderX = initialpos;
let rightShoulderY = initialpos;


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  // if(frameCount % 60 == 0){
  //   console.log(poses);
  // }
  if (poses.length > 0) {
    
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;

    let erX = poses[0].pose.keypoints[1].position.x;
    let erY = poses[0].pose.keypoints[1].position.y;
    let elX = poses[0].pose.keypoints[2].position.x;
    let elY = poses[0].pose.keypoints[2].position.y;

    let reX = poses[0].pose.keypoints[3].position.x;
    let reY = poses[0].pose.keypoints[3].position.y;
    let leX = poses[0].pose.keypoints[4].position.x;
    let leY = poses[0].pose.keypoints[4].position.y;

    let lSX = poses[0].pose.keypoints[5].position.x;
    let lSY = poses[0].pose.keypoints[5].position.y;
    let rSX = poses[0].pose.keypoints[6].position.x;
    let rSY = poses[0].pose.keypoints[6].position.y;

    eyeRight_X = lerp(eyeRight_X, erX, 0.5);
    eyeRight_Y = lerp(eyeRight_Y, erY, 0.5);
    eyeLeft_X  = lerp(eyeLeft_X, elX, 0.5);
    eyeLeft_Y  = lerp(eyeLeft_Y, elY, 0.5);

    leftEarX  = lerp(leftEarX, leX, 0.5);
    leftEarY  = lerp(leftEarY, leY, 0.5);
    rightEarX = lerp(rightEarX, reX, 0.5);
    rightEarY = lerp(rightEarY, reY, 0.5);

    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);

    leftShoulderX = lerp(leftShoulderX, lSX, 0.5);
    leftShoulderY = lerp(leftShoulderY, lSY, 0.5);

    rightShoulderX = lerp(rightShoulderX, rSX, 0.5);
    rightShoulderY = lerp(rightShoulderY, rSY, 0.5);


  }
}

function modelReady() {
  console.log('model ready');
}

function draw() {
  image(video, 0, 0);

  if(click == true){
    showData();
  }
}




function trueornot(){
  if (click == false){
    click = true;
  }else{
    click = false;
  }
}


function showData(){

  textAlign(CENTER);
  filter('GRAY');
  
  textSize(18);

  fill(0,222,0);
  ellipse(noseX, noseY, radius);
  text("nose",noseX, noseY);

  fill(255, 76, 160);

  ellipse(eyeLeft_X, eyeLeft_Y, radius);
  text("leftEye",eyeLeft_X, eyeLeft_Y);

  ellipse(eyeRight_X, eyeRight_Y, radius);
  text("rightEye",eyeRight_X, eyeRight_Y);


  fill(102, 210, 255);
  ellipse(leftEarX, leftEarY, radius);
  text('leftEar', leftEarX, leftEarY);

  ellipse(rightEarX, rightEarY, radius);
  text('rightEar', rightEarX, rightEarY);

  fill(	242, 255, 76);
  ellipse(leftShoulderX, leftShoulderY, radius);
  text('leftShoulder', leftShoulderX, leftShoulderY);

  ellipse(rightShoulderX, rightShoulderY, radius);
  text('rightShoulder', rightShoulderX, rightShoulderY);

}