// Dev: Vagner Lima 07.11.26 
// Movimento com teclas do teclado + limite de tela

let x = 200;
let y = 200;
let velocidade = 5;
let pontos = 0;

let pontoX = 300;
let pontoY = 100;
let tamanhoPonto = 10;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    // Placar
    fill(255);
    noStroke();
    textSize(16);
    text(`Pontos: ${pontos}`, 10, 20);

    // Ponto
    fill(255, 204, 0);
    rect(pontoX, pontoY, tamanhoPonto, tamanhoPonto);

    // Movimentação com as setas do teclado
    if (keyIsDown(LEFT_ARROW)) {
        x -= velocidade;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += velocidade;
    }
    if (keyIsDown(UP_ARROW)) {
        y -= velocidade;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += velocidade;
    }

    // Trava o círculo dentro dos limites da tela (raio = 20)
    x = constrain(x, 20, width - 20);
    y = constrain(y, 20, height - 20);

    // Desenha o círculo na posição atual
    fill(50, 150, 250);
    strokeWeight(1);
    circle(x, y, 40);

    // Coletar Pontos
    let d = dist(x, y, pontoX + tamanhoPonto / 2, pontoY + tamanhoPonto / 2);
    if (d < 25) {
        pontos += 1;
        pontoX = random(20, width - 20);
        pontoY = random(20, height - 20);
    }
}