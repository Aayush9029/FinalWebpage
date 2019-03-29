let fireworks = [];
let gravity;
let is_pressed = false;
let amount = 2;
let falling_Text;
let playerW = 10;
let playerX;
let playerY;

let sound;
let img;

let boxW = 26;
let box1x;
let box1y = 0;
let box2x;
let box2y = 0;
let box3x;
let box3y = 0;
let box4x;
let box4y = 0;

let lvlAngle = 0;
let points = 0;
let bullets = 101;

function preload(){
    sound = loadSound('SFX.mp3');
    img = loadImage('startship.png');
}

function setup(){
    console.log(image);
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB);
    falling_Text = height/1.2;
    playerY = height - 50;
    playerX = width/2;
    background(0, 0, 0, 25);
    gravity = createVector(lvlAngle, 0.05);
    noCursor();
  
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    gravity = createVector(lvlAngle, 0.05);
    if(!is_pressed){
       helpThem();
       pickLocation();
    }
    colorMode(RGB);
    background(0, 0, 0, 20);
    for (let i = fireworks.length -1; i > 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        
        if(fireworks[i].done()){
            fireworks.splice(i , 1);
        }
    }
    falling_Text -= 0.7;

    strokeWeight(2);
    // noStroke();
    noFill();
   
   
    if (keyIsDown(LEFT_ARROW)){
        playerX -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)){
        playerX += 5;
    }

    if(playerX <= 0){
        playerX = playerW;
    }else if (playerX >= width){
        playerX = width-playerW;
    }

    rect(box1x, box1y, boxW, boxW);
    rect(box2x, box2y, boxW, boxW);
    rect(box3x, box3y, boxW, boxW);
    rect(box4x, box4y, boxW, boxW);

    if(box1y > height){
        pickLocation();
        gameOver();
        // console.log('reset');
    }
    if (box2y > height){
        pickLocation();
        gameOver();
    }
    if(box3y > height){
        pickLocation();
        gameOver();
        // console.log('reset');
    }
    if (box4y > height){
        gameOver();
        pickLocation();
    }

    box1y++;
    box2y++;
    box3y++;
    box4y++;

    // lvlAngle += 0.001;
    fill(255);
    textSize(16);
    noStroke();
    text('Points : '+ points, 40, 30);
    text('Bullets left : '+ bullets, 55, 60);
    // fill(hue, 255,255);
    rect(playerX - 5, playerY, playerW,playerW+10)
    image(img, playerX-20 , playerY-10 , img.width-25, img.height-15)
}


function helpThem(){
 textSize(width/30);
 textAlign(CENTER, CENTER)
 noStroke();
 fill(255);
 text('Press Arrows to move, ', width/2,falling_Text);
 text('Space to shoot.', width/2,falling_Text + 80);
 text('Loose bullets if you miss...', width/2,falling_Text+ 160);
 text("Gain bullets you don't", width/2,falling_Text+ 240);
 textSize(width/45);
 text('-Developer', width/1.3,falling_Text+ 320);
}
 




function keyPressed(){
    if(bullets > 0){
if(keyCode == '32'){
    amount = random(25, 100)
        fireworks.push(new Firework());
        is_pressed = true;
        sound.play();
        bullets--;
    }
    }
}


function hit1(){
    box1y = random(-500,-50);
    box1x = random(boxW, width - boxW);
    bulletsPoints();
}

function hit2(){
    box2y = random(-500,-50);
    box2x = random(boxW, width - boxW);
    bulletsPoints();
}

function hit3(){
    box3y = random(-500,-50);
    box3x = random(boxW, width - boxW);
    bulletsPoints();
}

function hit4(){
    box4y = random(-500,-50);
    box4x = random(boxW, width - boxW);
    bulletsPoints();
}

function pickLocation(){
    box2y = random(-500,-50);
    box1y = random(-500,-50);
    box2x = random(boxW, width - boxW)
    box1x = random(boxW, width - boxW)

    box3y = random(-500,-50);
    box4y = random(-500,-50);
    box3x = random(boxW, width - boxW)
    box4x = random(boxW, width - boxW)

}

function bulletsPoints(){
    points++;
    bullets++;
}

function gameOver(){
    points = 0;

}
