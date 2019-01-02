let birdsize = 50;
let y = 300;
let x = birdsize;
let speed = 5;
let r,g,b;
let name = prompt('Type text to display or leave to use circle as pattern');
alert("every time you restart pattern will change")

let gravity = Math.random()*50*speed;
let xgravity = Math.random()*20*speed;
console.log(xgravity);

function setup(){

createCanvas(windowWidth-1,windowHeight-2);
background(255);
}


function colorgen(){
    r = random(255);
    g = random(255);
    b = random(255);

}

function draw(){

noStroke();
 fill(r,g,b);
 textSize(60);
 text(name, x, y);
 if (name == "" ){
 ellipse(x, y, birdsize,birdsize)
 }


 if (y  > height|| y < birdsize){
     gravity = -gravity;
     colorgen();
     
 }

 if (x  > width|| x < birdsize){
     xgravity = -xgravity;
     colorgen();
     
 }

 y = y + gravity;
 x = x + xgravity;
// console.log(r,g,b);
}
