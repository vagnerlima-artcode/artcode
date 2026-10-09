// Vagné 091026

// Função inicial de configuração


function setup() {
  createCanvas(400, 400, WEBGL);
  frameRate(parseInt(prompt('FrameRate')));


  describe('A line follows the mouse as it moves. The line grows longer with faster movements.');
}

function draw() {
  background(200);

  // Adjust coordinates for WebGL mode.
  // The origin (0, 0) is at the center of the canvas.
  let pmx = pmouseX - (width/2);
  let pmy = pmouseY - (height/2);
  let mx = mouseX - (width/2);
  let my = mouseY - (height/2);

  // Draw the line.
  line(pmx, pmy, mx, my);
}