let time = 0;
let rectsize = 25;

let x = 200;
let y = 200;
let color = 255;
let drawing = [];

function setup(){
    createCanvas(800,500);
    background(200);
    
    redcolor = createSlider(0, 255, 100);
    
    bluecolor = createSlider(0, 255, 100);
    greencolor = createSlider(0, 255, 100)   ;
    strokevalue = createSlider(1, 20, 2, 1);
    size = createSlider(10, 200, 25, 5);

    strokevalue.position(50, 15);
    redcolor.position(50, 45);
    greencolor.position(50, 75);
    bluecolor.position(50, 100);
    

}

function keyPressed() {
    if(keyCode == 67) {
       shape = ellipse(mouseX, mouseY,size.value());
    } else if (keyCode == 83) {
        shape = rect(mouseX, mouseY, size.value(),size.value());
    }
    return 0;
}


function draw(){

    fill(redcolor.value(),greencolor.value(),bluecolor.value());  
    noStroke();
    rect(10, 20, 20, 20);
}

function mouseDragged(){
    strokeWeight(strokevalue.value());
    stroke(redcolor.value(),bluecolor.value(),greencolor.value());
    line(mouseX, mouseY, pmouseX, pmouseY);
}