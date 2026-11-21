
let cores = ['#D92727', '#F5D547', '#F5F0E5', '#171717'];

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(cores[2]);

  let tamanho = 150;

  // Grid de módulos
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {

      let px = x * tamanho;
      let py = y * tamanho;

      push();
      translate(px, py);

      // Fundo do módulo
      fill(cores[(x + y) % 2]);
      noStroke();
      rect(0, 0, tamanho, tamanho);

      // Losango externo
      fill(cores[0]);
      beginShape();
      vertex(75, 5);
      vertex(145, 75);
      vertex(75, 145);
      vertex(5, 75);
      endShape(CLOSE);

      // Losango preto
      fill(cores[3]);
      beginShape();
      vertex(75, 25);
      vertex(125, 75);
      vertex(75, 125);
      vertex(25, 75);
      endShape(CLOSE);

      // Losango branco
      fill(cores[2]);
      beginShape();
      vertex(75, 45);
      vertex(105, 75);
      vertex(75, 105);
      vertex(45, 75);
      endShape(CLOSE);

      // Centro amarelo
      fill(cores[1]);
      beginShape();
      vertex(75, 60);
      vertex(90, 75);
      vertex(75, 90);
      vertex(60, 75);
      endShape(CLOSE);

      // Linhas decorativas
      stroke(cores[3]);
      strokeWeight(2);

      for (let i = 0; i < 4; i++) {
        let pos = 15 + i * 12;
        line(pos, 5, 75, 5);
        line(145, pos, 145, 75);
      }

      pop();
    }
  }
}
