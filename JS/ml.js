let video; let poseNet; let eyelX = 0; let eyelY = 0; let eyerX = 0; let eyerY = 0;

function setup() {
    //canvas setup
  createCanvas(640, 480);

  //pj5 inbuilt video function and .hide hides it 
	video = createCapture(VIDEO);
    video.hide();
    //poseNet form ML5 machine learning database loading..
    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', gotPoses)
}
function modelReady() {
    //if modelready or poseNet is fully loaded..
    console.log('model ready');
    var element = document.getElementById('msg');
    element.style.color = 'red';
   
}
function gotPoses(poses){
    // console.log(poses);

    //poseNet data manupulation
    if (poses.length> 0){
        //for eyeleft x and y position
    let eX = poses[0].pose.keypoints[1].position.x;
    let eY = poses[0].pose.keypoints[1].position.y;
    //for eyeright x and y position
    let erX = poses[0].pose.keypoints[2].position.x;
    let erY = poses[0].pose.keypoints[2].position.y;

    //lerping to make jitter go away >>> optional but better to add few line to make it look better
    eyelX = lerp(eyelX, eX, 0.5);
    eyelY = lerp(eyelY, eY, 0.5)    
    eyerX = lerp(eyerX, erX, 0.5);
    eyerY = lerp(eyerY, erY, 0.5)
   }
}
function draw() {

//canvas drawing function

//adding distance to clarify objects radius in this case circles & Js OOp stuffs 
    let d = dist(eyerX,eyerY,eyelX,eyelY);
    background(220);
    // image(video,0 ,0);
    fill(255,0,0);    
    ellipse(eyelX,eyelY,d-12);
    fill(5,20,50)
    ellipse(eyerX,eyerY,d-12);
    // filter(GRAY);
}

