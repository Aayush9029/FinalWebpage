
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255,137,132);

  let hr = hour();
  let min = minute();
  let sec = second();
  let final = 60;

  translate(width / 2, height / 2);

  fill(255, 198, 168);
  stroke(237, 247, 245, 200);
  ellipse(0,0, 4 * final + hr * 4 + min * 4, 4 * final + hr * 4 + min * 4);


  strokeWeight(2);
  fill(237, 247, 245); //for seconds
  ellipse(
    0,
    0,
    4 * sec + hr * 4 + min * 4,
    4 * sec + hr * 4 + min * 4
  );

  fill(183, 215, 216); //for min
  ellipse(0, 0, 4 * min + hr * 4, 4 * min + hr * 4);

  fill(32, 78, 95); //for hr
  ellipse(0, 0, 4 * hr, 4 * hr);

  noFill();

  rotate(-90);

  let secondAngle = map(sec, 0, 60, 0, 360);
  let minuteAngle = map(min, 0, 60, 0, 360);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);


  ellipse(0, 0, 4*24, 4*24);
  stroke(32, 78, 95, 200); //hr fill
  arc(0, 0, 4*24, 4*24, 0, hourAngle);



  stroke(183, 215, 216,200);
  ellipse(0,0,4*60+hr * 4, 4 * 60 + hr * 4);
  stroke(74, 217, 217); // minute fill
  arc(0, 0,4 * 60 + hr * 4, 4 * 60 + hr * 4, 0, minuteAngle)



  stroke(237, 0, 0, 200); //sec fill
  // strokeWeight(22);
  arc(0, 0,4 * final + hr * 4 + min * 4, 4 * final + hr * 4 + min * 4, 0, secondAngle);




  push();
  stroke(242, 60, 80);
  rotate(secondAngle);
  line(0, 0, 4 * 30, 8, 0);
  pop();

  push();
  stroke(74, 217, 217);
  rotate(minuteAngle);
  line(0, 0, 4 * 20, 0);
  pop();

  push();
  stroke(255,200,200);
  rotate(hourAngle);
  line(0, 0, 4 * 10, 0);
  pop();

}
