// Vagné 091026
let cloudOneX = 50;
// Função inicial de configuração
function setup() {
    createCanvas(400, 400);


}

// Função Loop
function draw() {
    background('navy');

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

    // Mostrar coordenadas
    fill(255)
    textSize(20)
    text(`x: ${mouseX} | y: ${mouseY}`, 20, 20);
}

