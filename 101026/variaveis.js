// Vagné 091026

// coordenadas x da nuvem
let cloudOneX = 50;

// Estrelas
let lineXone = 0;
let lineYone = 0;
// loading(p5, fn, lifecycles)

// Função inicial de configuração
function setup() {
    createCanvas(400, 400);
}

// Função Loop
function draw() {

    

    describe('Paisagem em movimento...', LABEL);
    background('navy');
    frameRate(15);

    // estrelas
    stroke("yellow");
    line(lineXone, lineYone, lineXone + 90, lineYone - 90);

    // moon
    fill(255);
    stroke(0);
    circle(350, 50, 100);

    //Moon crescente
    stroke('navy');
    fill('navy');
    circle(320, 50, 100);

    // big gray mountains
    stroke(0);
    fill(80);
    triangle(-40, 300, 75, 100, 250, 300);
    triangle(100, 300, 300, 100, 500, 300);

    // grass
    fill('rgb(50,76,50)')
    rect(0, 300, 400, 100);

    // clouds
    fill(255);
    ellipse(cloudOneX, 50, 80, 40);
    ellipse(cloudOneX - 40, 100, 60, 20);
    ellipse(cloudOneX + 20, 150, 40, 10);

    // arvores crescendo, tronco
    fill("rgb(118,80,72)");
    rect(40, 270, 15, 50);
    rect(340, 330, 15, 50);
    // folhas
    fill("green");
    triangle(25, 270, 45, 240 - frameCount % 290, 70, 270);
    triangle(325, 330, 345, 240 - frameCount % 290, 370, 330);



    cloudOneX = frameCount % width;
    // Estrelas caindo randomicas
    lineXone = random(0, width);
    lineYone = random(0, height / 2);

    // Mostrar coordenadas
    fill(255)
    textSize(20)
    // text(`x: ${mouseX} | y: ${mouseY}`, 20, 20);


    //coracion

    fill('red');
    noStroke();
    circle(67, 67, 20);
    circle(83, 67, 20);
    triangle(91, 73, 75, 95, 59, 73);



}

