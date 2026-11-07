// Dev: Vagner Lima 07.11.26
// Movimento com teclas do teclado + limite de tela + obstáculos
let x = 200;
let y = 320;
let velocidade = 5;
let pontos = 0;

let pontoX = 300;
let pontoY = 100;
let tamanhoPonto = 10;

// Lista de obstáculos [x, y, largura, altura]
let obstaculos = [
    { x: 50,  y: 200, w: 120, h: 20 },
    { x: 230, y: 200, w: 120, h: 20 },
    { x: 140, y: 100, w: 120, h: 20 }
];

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

    // Ponto amarelo (coletável)
    fill(255, 204, 0);
    rect(pontoX, pontoY, tamanhoPonto, tamanhoPonto);

    // Desenhar Obstáculos Vermelhos
    fill(220, 50, 50);
    for (let obs of obstaculos) {
        rect(obs.x, obs.y, obs.w, obs.h);
    }

    // Guarda a posição antiga antes de mover
    let antigoX = x;
    let antigoY = y;

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

    // Colisão com os obstáculos (se encostar em um bloco vermelho, cancela o movimento)
    for (let obs of obstaculos) {
        let closestX = constrain(x, obs.x, obs.x + obs.w);
        let closestY = constrain(y, obs.y, obs.y + obs.h);
        let dObs = dist(x, y, closestX, closestY);

        if (dObs < 20) { // 20 é o raio do círculo
            x = antigoX;
            y = antigoY;
            break;
        }
    }

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

    if(pontos == 10){
        alert("Venceu");
    }
}