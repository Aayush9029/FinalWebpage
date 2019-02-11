let time = 0;
let x = 200;
let y = 200;
let color = 255;
let drawing = [];

function setup(){
    createCanvas(800,550);
    background(255);
    redcolor = createSlider(0, 255, 100);
    greencolor = createSlider(0, 255, 100)   ;
    bluecolor = createSlider(0, 255, 100);
    strokevalue = createSlider(1, 20, 2, 1);
    redcolor.position(90, 57);
    greencolor.position(90, 117);
    bluecolor.position(90, 172);
    strokevalue.position(90, 15);

    

}


function draw(){
    fill(redcolor.value(),greencolor.value(),bluecolor.value());  
    noStroke();
    rect(5, 5, 10, 10);

}

function mouseDragged(){
    strokeWeight(strokevalue.value());
    stroke(redcolor.value(),greencolor.value(),bluecolor.value());
    line(mouseX, mouseY, pmouseX, pmouseY);
    console.log(mouseX + " y "+mouseY);
}