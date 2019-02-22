let spritesheet;
let spritedata;
let animation = [];
let horses = [];

function preload(){
    spritedata = loadJSON('horse/horse.json');
    spritesheet = loadImage('horse/horse.png');

}


function setup() {
    createCanvas(windowWidth,windowHeight);
    background(0);

    let frames = spritedata.frames;
    for (let i = 0 ; i < frames.length; i++){
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x,pos.y,pos.w,pos.h);
        animation.push(img);
    }
    frameRate(30);
     
    for (let i = 0 ; i < 5; i++){
        horses[i] = new Sprite(animation,0, i * height/5 ,random(0.4,1));

    }
}
function draw(){
    background(0);
    // background(51)

    for ( let horse of horses){
    horse.show();
    horse.animate();
    }
}