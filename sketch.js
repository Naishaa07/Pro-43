var hr 
var min
var sec
//var scAngle, minAngle, hrAngle;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  
  angleMode(DEGREES)
}

function draw() {
  background("black");  
  hr = hour();
  min = minute();
  sec = second();
  //console.log(hr)
  secAngle=map(sec, 0, 60, 0, 360)
  minAngle=map(min, 0, 60, 0, 360)
  hrAngle=map(hr % 12, 0, 12, 0, 360)
  translate(400,200)
  push();
  rotate(secAngle+270)
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop();
  push();
  rotate(minAngle+270)
  stroke(0,255,0);
  strokeWeight(7)
  line(0,0,75,0)
  pop();
  push();
  rotate(hrAngle+270)
  stroke("blue")
  strokeWeight(7)
  line(0,0,50,0)
  pop();
  strokeWeight(7); 
  noFill(); 
  //Seconds
  stroke(255,0,0); 
  arc(0,0,300,300,270,secAngle+270); 
  //Minutes 
  stroke(0,255,0); 
  arc(0,0,280,280,270,minAngle+270);
  //Hour 
  stroke(0,0,255); 
  arc(0,0,260,260,270,hrAngle+270); 
}
