let fireworks = [];
let gravity;
let is_pressed = false;
let amount = 2;
let falling_Text;

function setup(){
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB);
    falling_Text = height/1.5;
    background(0, 0, 0, 25);
    gravity = createVector(0, 0.098);
    noCursor();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    if(!is_pressed){
       helpThem();
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

   

}


function helpThem(){
 textSize(width/20);
 textAlign(CENTER, CENTER)
 noStroke();
 fill(255);
 text('Click any where to summon fireworks', width/2,falling_Text)
}

function mousePressed(){

    amount = random(25, 100)
        fireworks.push(new Firework());
        is_pressed = true;
}




function keyPressed(){
if(keyCode == '32'){
    amount = random(25, 100)
        fireworks.push(new Firework());
        is_pressed = true;
}
}