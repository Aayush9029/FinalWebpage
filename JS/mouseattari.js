// alert(" Allow camera to play");
let x = 600 / 2;
let y = 500;
let speedx = 5.5;
let speedy = -6.5;
let points = 0;
let barY;
let bar2Y = 0;
// let pmouseX = 600 / 2.5; //bars xposition aka eye tracking database
let barw = 100;
let barh = 15;
let balld = 25; //ball's diameter
let ratio = 2.65; //points positon according to points number 
let val ='black';

let initailInput;

// let submit;


function setup() {
 canvas=  createCanvas(500, 650);
  frameRate(30);
  val = 'black';
  barY = height-barh;
canvas.parent('game');


initailInput = createInput().attribute('placeholder', 'Your Name');
initailInput.parent('userName');



  var config = {
    apiKey: "AIzaSyDVeRD0P145hETu39Ryh4HM8rvlTSj4Kos",
    authDomain: "try2-70357.firebaseapp.com",
    databaseURL: "https://try2-70357.firebaseio.com",
    projectId: "try2-70357",
    storageBucket: "",
    messagingSenderId: "99106327684"
  };
  firebase.initializeApp(config);

   database = firebase.database();

  var ref = database.ref('scores');
  ref.on('value', gotData, errData);

} 


function draw() {
  background(val);
  textSize(220);
  text( points, width/ratio, height/1.6); //points counter
//ball
  stroke(255);
  strokeWeight(4);
  fill(0);

  ellipse(x, y, balld, balld);

  if(x + speedx >= width-balld/2 || x + speedx <= balld/2) {
    speedx = -speedx;
}

if(y + speedy <= balld/2) {
    speedy = -speedy;
    val = 'white';
}
  else if(y + speedy >= height-balld/2) {
    if(x >= pmouseX && x < pmouseX + barw) {
        speedy = -speedy;
        points++;
        val = 'black';
    }
    else {
      // initials = prompt('name');
      endgame();
      // location.reload();

        // clearInterval(interval); // Needed for Chrome to end game
    }
}

  mouseDragged();

  x += speedx;
  y += speedy;

//to positon the points count in center
  if (points >= 10){
    ratio = 4.5;
  }
}

function mouseDragged(){
    rect(pmouseX, barY, barw, barh);
    rect(x-20, bar2Y, barw, barh);

}

var interval = setInterval(draw, 20);



function gotData(data){

  var scorelisitings = selectAll('.scorelisitings');
      for ( var i = 0; i < scorelisitings.length; i++){
          scorelisitings[i].remove();
      }
  
      // console.log('nice');
      // console.log(data.val());
      var scores = data.val();
      var keys = Object.keys(scores);
      // console.log(keys);
  
      for(var i = 0 ; i< keys.length ; i++){
          var k = keys[i];
          var initials = scores[k].initails;
          var points = scores[k].points;
  
          // console.log(points, initials);
          var li = createElement('li', initials + ' : ' + points);
          li.class('scorelisitings');
          li.parent('scorelist');
      }
  
  }
  
  
  
  
  
  function errData(err){
      console.error('err');
      // console.log(err);
  }

  

function submitScore(){
  var data = {
      initails: initailInput.value(),
      points: points
  }
  var ref = database.ref('scores');
  ref.push(data);
  

}


function endgame(){
  document.querySelector(".endgame").style.display = "block";
  document.getElementById("points").innerHTML = points;
  speedx  = 0 ;
  speedy  = 0 ; //stops ball
  barY = height+22; //hides bar controll
  bar2Y = -20; //hides bar auto
  val = (56,61,69);
  x = 700;


} 


function rePlay(){
  document.querySelector(".endgame").style.display = "none";
  points = 0;
  speedx  = 5.5;
  speedy  = 6.5; //stops ball
  barY = height-barh //hides bar controll
  bar2Y = 0; //hides bar auto
  x = 100;
  y = 25;
  val = 'white';
}

function Submit(){
  submitScore();
}