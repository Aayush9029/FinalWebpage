
let len;
let angle;

function setup() {
    createCanvas(900,700);
    slider =  createSlider(0,TWO_PI, 5.9,0.01);
}

function draw(){
    background(0);
    strokeWeight(3);
    stroke(255,random(2,90),146);
    translate(width/2,height)
    branch(200);
    angle = slider.value();
}


function branch(len){

    line(0, 0,0, -len);
    translate(0, -len);
    if(len > 4){
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
}
}