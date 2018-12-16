
let len;
let angle;

function setup() {
    createCanvas(600,600);
    slider =  createSlider(0,TWO_PI, PI,0.01);
}

function draw(){
    background(50)
    stroke(255);
    translate(width/2,height)
    branch(100);
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