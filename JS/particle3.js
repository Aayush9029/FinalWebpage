let particles = [];
let r,g,b;
let yspeed;
let xspeed;
let x = 30;
let y = 30;
function setup(){
    createCanvas(windowWidth, windowHeight);
    r = random(255);
    g = random(255);
    b = random(255);
    
    yspeed = random(2,5);
    xspeed = random(2,5);
    
}

function draw(){
    background(30);
   


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
   
   if(x > width || x < 0){
       xspeed = -xspeed;
       colorPicker();
       this.vx = -this.vx;
       
   }
   if(y > height || y < 0){
       yspeed = -yspeed;
       colorPicker();
       this.vy = -this.vy;
   }

   x += xspeed;
   y += yspeed;
}


class Particle{

    constructor(){
        this.x = x;
        this.y = y;
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
        this.alpha -= 1;
    }
    show(){
        noStroke();
        fill(r,g,b,this.alpha);
        ellipse(this.x, this.y, 15)
    }

}


function colorPicker(){
    r = random(100,255);
    g = random(100,255);
    b = random(100,255);

     

}