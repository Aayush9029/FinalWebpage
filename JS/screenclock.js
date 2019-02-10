//https://color.adobe.com/Copy-of-Copy-of-Billar-color-theme-11701107/edit/?copy=true&base=2&rule=Custom&selected=4&name=Copy%20of%20Copy%20of%20Copy%20of%20Billar&mode=rgb&rgbvalues=0.9490196078431372,0.23529411764705882,0.3137254901960784,1,0.7607843137254902,0.0196078431372549,0.9137254901960784,0.9450980392156862,0.8745098039215686,0.2901960784313726,0.8509803921568627,0.8509803921568627,0.00784313725490196,0.34509803921568627,0.6078431372549019&swatchOrder=0,1,2,3,4

//above is my color pallet


function setup() {
    createCanvas(windowWidth,windowHeight);
}
   
function draw(){
    background(56,61,69);
     let hr = hour();
     let min = minute();
     let sec = second();   
     rectWidth = width;
     side = (width/2) - rectWidth/2;

     fill(0,173,181);
     text(sec + ' Seconds ', width/2.9, height/50);
     fill(248,181,1);
    text(min +' minutes ', width/2.25, height/50);
     fill(252,60,60);
    text(hr + ' hours', width/1.9, height/50);


     noFill();
stroke(244);
     noStroke();
    fill(0,173,181);
    rect(side, height-min*5-hr*5, rectWidth,-sec*5);
    fill(248,181,1);
    rect(side, height-hr*5, rectWidth,-min*5);
    fill(252,60,60);
    rect(side, height, rectWidth,-hr*5);
    }
