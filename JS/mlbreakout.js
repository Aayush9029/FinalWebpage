
let x = 0;
let y = 350;
let speedx =  5;
let speedy = -5;

let barY = 400-30;
let eyelX = 600/2.5; //bars xposition aka eye tracking database
let video; let poseNet; 


function setup(){
    createCanvas(600,400);
    video = createCapture(VIDEO);
    // video.hide();
    //poseNet form ML5 machine learning database loading..
    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', gotPoses)
    //loading done datas added to stuffs LOL
}

alert(" Allow camera to play")
function draw() {
    background(0); //background

//ball
    stroke(225); 
    strokeWeight(4);
    noFill();
    
    ellipse(x, y, 25,25);

    if (x > width-20 || x< 0){ //side bounce
        speedx = -speedx;
    }
    x += speedx; 
//sakiyo

    if ( y < 20){ //upward bounce
        speedy = -speedy;

    }else if (y > height-50){
        if (x > eyelX -100 && x< eyelX + 100){
            speedy = -speedy;
        }else{
        
        
        //alerts if it goes downwards
        alert('go');
        document.location.reload();
    }
}


//ball ends PHEW !!!

//bar starts
rect(eyelX, barY, 100,20);
y += speedy; 
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
    //lerping to make jitter go away >>> optional but better to add few line to make it look better
    eyelX = lerp(eyelX, eX, 0.5);
    }   

}