function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  strokeWeight(5);
  noFill();
  stroke(32,8,64);
  describe('Usuario pode clicar sobre a tela e arrastar para ajustar sua perpectiva no espaço 3D')
}

function draw() {
  background(250,180,200);
  orbitControl();

  for(let zAngle = 0; zAngle <180; zAngle += 30){
    for(let xAngle = 0; xAngle < 360; xAngle += 30){
      push();

      rotateZ(zAngle);
      rotateX(xAngle);

      translate(0,400,0);
      box();
      pop();
    }
  }
}