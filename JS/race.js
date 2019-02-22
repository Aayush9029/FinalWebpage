let x = 300;
let x2 = 300;
let x3 = 300;
let y = 500;
let y2 = 500;
let y3 = 500;
let rHeight  = 75;
let rWidth   = 75;
let yspeed   = 5;
let points   = 0;


function setup(){
createCanvas(windowWidth-20,windowHeight-20);
y2 = random(500)
}

function draw(){  
    background(51);
    fill(222);
		textSize(24);
    text(points, 10, 30)
    rect(x,y,rWidth,rHeight);
    rect(x2,y2,rWidth,rHeight);
    rect(x3,y3,rWidth,rHeight);
    
    
    if(y+rHeight > height ){
        y = 0;
        x = random(width-rWidth)
        points = 0;
        yspeed = 5;
    }

    if(y2+rHeight > height ){
        y2 = 0;
        x2 = random(width-rWidth)
        points = 0;
        yspeed = 5;
    }
    
    if(y3+rHeight > height ){
        y3 = 0;
        x3 = random(width-rWidth)
        points = 0;
        yspeed = 5;
    }

    ellipse(mouseX, mouseY,22)
   
    y += yspeed;
    y2 += yspeed;
    y3 += yspeed;
}

function mousePressed(){

    if(mouseX > x && mouseX < x + rWidth){
            if(mouseY > y && mouseY < y + rHeight){
                points++;
                y = -rHeight-10;
                x = random(width-rWidth)
                yspeed+= 0.25;
            }
        }
        
    if(mouseX > x2 && mouseX < x2 + rWidth){
        if(mouseY > y2 && mouseY < y2 + rHeight){
            points++;
            y2 = -rHeight-10;
            x2 = random(width-rWidth)
            yspeed+= 0.2;
        }
    }
    
    if(mouseX > x3 && mouseX < x3 + rWidth){
        if(mouseY > y3 && mouseY < y3 + rHeight){
            points++;
            y3 = -rHeight-10;
            x3 = random(width-rWidth)
            yspeed+= 0.05;
        }
    }
}
