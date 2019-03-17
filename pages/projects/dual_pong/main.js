let x = 200;
let y = 200;
let xspeed = 3;
let yspeed = 4;
let diameter = 30;
let radius = diameter/2;
let bar1x =0;
let bar1y = 10;
let barh = 100; 
let barw = 10;
let bar2x;
let bar2y = 600;
let pointsRight = 0;
let pointsLeft = 0;
let backgroundVal = 'white';
let strokeVal = 'black';
let fillval = 'black';
function setup(){
    createCanvas(windowWidth, windowHeight);
    bar2x = windowWidth - barw;
}

function draw(){
    background(backgroundVal);
    stroke(strokeVal);
    strokeWeight(3);
    fill(fillval);
    ellipse(x, y, diameter);            // pingpong ball
    
    rect(bar1x, bar1y, barw, barh) ;    // left player
    
    rect(bar2x, bar2y, barw, barh) ;    // right player
    line(width/2, 0, width/2, height);

 

    if (keyIsDown(UP_ARROW)) {
        bar2y -= 7;
    }
    
      if (keyIsDown(DOWN_ARROW)) {
        bar2y += 7;
    }

    if (keyIsDown(87)) {
        bar1y -= 7;
    }

    if (keyIsDown(83)) {
        bar1y += 7;
    }

    if(bar1y <= 0){
        bar1y = 0;
    }else if(bar1y + barh > height){
        bar1y = height - barh;
    }

    if(bar2y <= 0){
        bar2y = 0;
    }else if(bar2y + barh > height){
        bar2y = height - barh;
    }


    updateBall();                       // updates Pingpong's location
    checkSide();


    if (x - radius <= bar1x + barw){   //for left bar
        if(y - radius >= bar1y && y + radius < bar1y + barh){
            hit();
            pointsLeft++;
            backgroundVal = 'white';
            strokeVal = 'black';
            fillval = 'black';
        } 
    }else if (x + radius >= bar2x ){           //for right bar
        if(y - radius >= bar2y && y + radius < bar2y + barh){
            hit();          
            pointsRight++;
            backgroundVal = 'black';
            strokeVal = 'white';
        } 
    }
        if (x + radius > width || x < radius){
        gameOver();
    }


                
}




function updateBall(){
    x += xspeed;
    y += yspeed;
}

function checkSide(){
    if(y > height - radius || y < radius ){
        yspeed = -yspeed;
    }
}


function gameOver(){
    removedecoration();
    document.querySelector(".endgame").style.display = "block";
    document.getElementById("points").innerHTML = pointsLeft + ":" + pointsRight;
    speedx  = 0 ;
    speedy  = 0 ; //stops ball
    x = -110;
    y = 10;
  } 
  

function hit(){
    xspeed = -xspeed;
}

  function rePlay(){
    document.querySelector(".endgame").style.display = "none";
    pointsLeft = 0;
    pointsRight = 0;
    xspeed = 5.5;
    xspeed = 6.5; //stops ball
    x = 100
    y = random(25,height-25);;
}

function removedecoration(){
    noStroke();
    noFill();

}






// function testMode(){  // calling this function in draw loops calls a hidden test mode 

//     x = mouseX;
//     y = mouseY;
//     text(bar1x+ "x : y"+ bar1y,300,200);
//     text(x+ "x : y"+ y,100,200);
//     strokeWeight(8);
//     stroke(33,333,33);
//     point(x,y);
//     point(bar1x+barw,bar1y);
//     point(bar2x,bar2y);
// }

