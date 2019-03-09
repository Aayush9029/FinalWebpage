let particles = [];
let r,g,b;

function setup(){
    createCanvas(windowWidth, windowHeight);
    r = random(255);
    g = random(255);
    b = random(255);

    
}

function draw(){
    // background(0);
   


    for (let i = 0; i < random(1,5) ; i++){
    let p = new Particle()
     particles.push(p);   
    }
   for(let i = particles.length -1 ; i >= 0; i--){
       particles[i].update();
       particles[i].show();
       if(particles[i].finish()){
            particles.splice(i,1);
       }
   }
    

}


class Particle{

    constructor(){
        this.x = mouseX;
        this.y = mouseY;
        this.vx = random(-1,1);
        this.vy = random (-5,-1);
        this.alpha = 255;
    }

finish(){
    return this.alpha < 0; 
}

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= random(4,9);
    }
    show(){
        noStroke();
        fill(r,g,b,this.alpha);
        ellipse(this.x, this.y, 15)
    }
}


function colorPicker(){
    r = random(255);
    g = random(255);
    b = random(255);

}