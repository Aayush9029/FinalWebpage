let time = 0;
let wave = [];

// let radius = prompt('Type number for radius : 100 is expected');
radius = 100;


function sliderChange(val) {
	// Use Ajax post to send the adjusted value to PHP or MySQL storage
    radius = val;
    console.log(val);
}

function setup(){
    createCanvas(1000,400)
}


function draw(){
    background(0);
    translate(200,200);
    canvas.getContext('2d').fillText( "radius: "+radius, -180, -160);
    stroke(225,22,22); //origin line
    line(0,0,windowWidth,0);
    
    stroke(255);
    noFill();
    ellipse (0,0, radius * 2); //big circle in between

    let x = radius * cos(time);
    let y = radius * sin(time);
    wave.unshift(y);
    fill(255);
    line(0,0,x,y);//line aka radius of the big circle
    ellipse(x,y,8);//small rotaing dot

    translate(200,0);
    line(x-200,y,0,wave[0]);
    beginShape();
    noFill();
    
     for(let i = 0; i < wave.length; i++ )
    {
        vertex(i, wave[i]);
    }
    endShape();
    
    time += 0.03;

    if(wave.length > 600){ //to remove point after certain time aka windows size
        wave.pop();
    }

}

