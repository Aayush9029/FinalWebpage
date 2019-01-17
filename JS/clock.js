//https://color.adobe.com/Copy-of-Copy-of-Billar-color-theme-11701107/edit/?copy=true&base=2&rule=Custom&selected=4&name=Copy%20of%20Copy%20of%20Copy%20of%20Billar&mode=rgb&rgbvalues=0.9490196078431372,0.23529411764705882,0.3137254901960784,1,0.7607843137254902,0.0196078431372549,0.9137254901960784,0.9450980392156862,0.8745098039215686,0.2901960784313726,0.8509803921568627,0.8509803921568627,0.00784313725490196,0.34509803921568627,0.6078431372549019&swatchOrder=0,1,2,3,4

//above is my color pallet

function setup() {
 createCanvas(600, 600);
 angleMode(DEGREES);
}

function draw(){
  background(0);
  translate(width/2,height/2);
  rotate(-90);
  let hr = hour();
  let min = minute();
  let sec = second();
  let mil = millis();

  noFill();
  strokeWeight(6);


  stroke(242, 60, 80);
  let secondAngle = map(sec, 0,60, 0, 360);
  arc(0, 0, width-250, width-250, 0, secondAngle);


  stroke(74, 217, 217);
  let minuteAngle = map(min, 0,60, 0, 360);
  arc(0, 0,width-270, width-270, 0, minuteAngle)

  stroke(2, 88, 155);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, width-290, width-290, 0, hourAngle);

  // console.log(mil);
  push();
  stroke(242, 60, 80);
  rotate(secondAngle);
  line(0,0,100,0)
  pop();
  
  push();
  stroke(74, 217, 217);
  rotate(minuteAngle);
  line(0,0,75,0)
  pop();
  
  push();
  stroke(2, 88, 155);
  rotate(hourAngle);
  line(0,0,50,0)
  pop();

  stroke(255);
  point(0,0);

}