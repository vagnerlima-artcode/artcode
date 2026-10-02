function setup() {
  textOutput();
  createCanvas(400, 400);

  angleMode(DEGREES);
  background('steelblue');
  strokeWeight(9);
}

function draw() {
  fill(200,200,255);
  square(10,10,100);

  fill(0,200,255);
  rect(100,40,200,100);

  //colorMode(HSL);
  fill(120,70,90);
  //stroke(120,60,30);
  ellipse(200,300,300,100);
  
  circle(100,100,100);
  fill(120,40,50);
  arc(150,200,300,100,180,360, CHORD);
  
  push();
 
  line(200,10,200,450);
  line(100,10,100,350);

  pop();
  
  fill(.1,.6,10)
  triangle(250,350,350,200,350,250);

  stroke('#fff')
  triangle(250,350,50,200,350,250);
  
  noFill();
  quad(50,50,550,200,300,300,750,350);
}