let x = 300;
let y = 700;
let rectsize = 35;
let speed = 0;
let coinspeed = 4;
let xarrow = 100;
let yarrow = 100;
let circler = 35;
let yline = -5500;
let r = 242;
let points = 0;

function setup(){
createCanvas(500,800);
}

function draw(){


    background(17,47,65); //sky ?
    noStroke();

    textSize(16)
    text(points,10, 10, 200, 200)

    fill(79,185,159);//this is the line white in between
    for (let i = 0 ; i < 25; i++){
    rect(width/2, yline+i*250, 25, 75);
    }

    if (yline + 500 > height){
        yline = -5500;
    }

    yline += coinspeed;
    for (let i = 0; i <2; i++ ){

    fill(242,177,52);//is the circle points
    rect(xarrow,yarrow,circler,circler+10);
    yarrow= yarrow + coinspeed;
    // console.log(i);
    }
    fill(237,85,59) //the rectangle (red?)
    rect(x,y,rectsize,rectsize);
    x = x+ speed;

    //bottom bar 
    fill(73,155,255);
    rect(0,740,700,70);


if(yarrow + circler >= y && y+rectsize >= yarrow){
  if(x > xarrow && x < xarrow  + circler){
        xarrow = random(width- circler);
        yarrow = 0;
        r = 22; 
        points++;

}else if (x + rectsize > xarrow && x + rectsize < xarrow  + circler){
        xarrow = random(width-circler);
        yarrow = 0;
        r = 22
        points++;

}else if (x > yarrow+rectsize && x + rectsize > xarrow + rectsize){
        xarrow = random(width-circler);
        yarrow = 0;
        r = 22
        points++;
}

}else if ( yarrow > height){
    xarrow = random(width-circler);
    yarrow = 0;
    alert("Game Over dude you got, " + points + ' Points.');
    points = 0;
}


//keeps the rect in the box
if (x > width - rectsize){
    speed = 0;
    x = width - rectsize;
}else if (x < 0){
    speed = 0;
    x = 0 ;
}

    
}




function keyPressed(){
    if(keyCode == RIGHT_ARROW){
        speed = speed+5;
    }
    if(keyCode == LEFT_ARROW){
        speed = speed-5;
    }

}

