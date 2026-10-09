// Vagné 091026

// Função inicial de configuração
function setup() {
    textOutput();
    createCanvas(400, 400, WEBGL);
    angleMode(DEGREES);
    background('steelblue');
    //  strokeWeight(0);
    frameRate(12);

}


// Função Loop
function draw() {
    
    pmouseTrack();

}

function pmouseTrack() {
    let pmx = pmouseX - 200;
    let pmy = pmouseY - 200;
    let mx = mouseX - 200;
    let my = mouseY - 200;

    
    line(pmx, pmy, mx, my);

}

// function mousePressed(){
//     if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
//         resizeCanvas(50, 100);
//         background(200);
//         text(width, 21, 54);
//     }
// }


function quadradoWidth() {
    text(width, 42, 54);
}


function orderDraw() {
    fill('green');
    textSize(20);
    circle(200, 200, 200);

    fill('red');
    textSize(20);
    circle(200, 200, 100);

    fill('blue');
    textSize(20);
    circle(200, 200, 80);

}

function quadro2() {
    createCanvas(600, 400);
    background(135, 206, 235);

    // Desenhando o sol no topo direito
    fill("yellow");
    stroke("orange");
    strokeWeight(20);
    circle(500, 50, 100);

    // Desenho a grama em baixo
    stroke(0);
    strokeWeight(1);
    fill('green');
    rect(0, 200, 600, 200);

    textSize(75);
    text("🌸", 100, 200);
    text('🤔', mouseX, mouseY);
}


function quadro1() {
    fill(200, 200, 255);
    square(10, 10, 100);

    fill(0, 200, 255);
    rect(100, 40, 200, 100);

    //colorMode(HSL);
    fill(120, 70, 90);
    //stroke(120,60,30);
    ellipse(200, 300, 300, 100);

    circle(100, 100, 100);
    fill(120, 40, 50);
    arc(150, 200, 300, 100, 180, 360, CHORD);

    push();

    line(200, 10, 200, 450);
    line(100, 10, 100, 350);

    pop();

    fill(.1, .6, 10)
    triangle(250, 350, 350, 200, 350, 250);

    stroke('#fff')
    triangle(250, 350, 50, 200, 350, 250);

    noFill();
    quad(50, 50, 550, 200, 300, 300, 750, 350);
}