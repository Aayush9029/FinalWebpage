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
var img;
function preload() {
    img = loadImage("../../img/gamebg.png");
}
function setup(){
createCanvas(500,800);



}

function draw(){  
    image(img, -45, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height/2, img.width/2, img.height/2);
    background(146,212,244); //sky ?
    noStroke();
    fill(51);
    textSize(22)
    text(points,10, 10, 200, 200)

    // fill(255,246,229);//this is the line white in between
    // for (let i = 0 ; i < 25; i++){
    // rect(0, yline+i*250, 1200, 100);
    // }

    // if (yline + 500 > height){
    //     yline = -5500;
    // }

    yline += coinspeed;
    for (let i = 0; i <2; i++ ){

    fill(200,79,41);//is the circle points
    rect(xarrow,yarrow,circler,circler+10);
    yarrow= yarrow + coinspeed;
    // console.log(i);
    }
    fill(101,183,243) //the rectangle (red?)
    rect(x,y,rectsize,rectsize);

    x = x+ speed;

    //water top
    fill(72,147,216);
    rect(0,740,700,70);
    //water bottom
    fill(50,111,192);
    rect(0,750,700,70);


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
    speed == 4;
    // alert("Game Over dude you got, " + points + ' Points.');
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


if(points >= 0 && points < 5){
    coinspeed = 5;
    text('lvl:1',440, 10, 50, 50);

}else if(points >= 5 && points < 15){
    coinspeed = 5;
    text('lvl:2',440, 10, 50, 50);

}else if (points >= 15 && points < 25){
    coinspeed = 6;
text('lvl:3',440, 10, 50, 50);

}else if (points >= 25 && points < 30){
    coinspeed = 7;
    text('lvl:4',440, 10, 50, 50);

}else if (points >= 30){
    coinspeed = 8;
    text('lvl:5',440, 10, 50, 50);
}else if (points >= 40){
    coinspeed = 10;
text('lvl:6',440, 10, 50, 50);
}else if (points >= 50){
    coinspeed = 11;
text('lvl:7',440, 10, 50, 50);

}

fill(0,10,220)
ellipse(mouseX, mouseY, 20,20)
fill(222,0,0)
ellipse(mouseX, mouseY, 10,10)




}




function keyPressed(){
    if(keyCode == RIGHT_ARROW){
        speed = speed+5;
       

    }
    if(keyCode == LEFT_ARROW){
        speed = speed-5;
    }

}

