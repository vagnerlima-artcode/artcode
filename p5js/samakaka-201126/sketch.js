/* 
SAMAKAKA | DEV ART: VAGNÉ L 
"Inspiradas no tradicional tecido angolano associado ao povo Mumuíla (ou Muila), do sul de Angola (província da Huíla)"
CC BY-SA https://creativecommons.org/licenses/by-sa/4.0/legalcode
*/

function setup() {
    createCanvas(600, 210);
    // Acessibilidade : Ajude pessoas com baixa visão entender seu código
    describe("ARTE AFRICANA - SAMAKAKA. Inspiradas no tradicional tecido angolano associado ao povo Mumuíla (ou Muila), do sul de Angola (província da Huíla)");
}

function draw() {
    background('#333');

    //Retangulo Vermelho
    fill('red');
    stroke();
    strokeWeight(20);
    rect(0, 10, width, 200);

    //Linhas verticais
    strokeWeight(10);
    line(100, 10, 100, 200);
    line(300, 10, 300, 200);

    // triangulos brancos
    strokeWeight(15);
    fill('white');
    triangle(110, 60, 110, 140, 160, 100);
    triangle(295, 60, 295, 140, 240, 100);
    triangle(500, 10, 545, 100, 590, 10);
    triangle(500, 200, 545, 100, 590, 200);

    //Retangulos Pretos
    fill('black');
    rect(150, 0, 100, 180);
    rect(420, 60, 200, 100);
    
    //Losangos Amarelos
    fill('yellow');
    strokeWeight(1);

    for (let i = 0; i < 4; i++) {
        let y = 20 + (i * 40)
        beginShape();
        vertex(200, y);//primeiro vertex top x,y
        vertex(160, y + 20);//segundo vertex left x,y
        vertex(200, y + 40);//terceiro vertex bottom x,y
        vertex(240, y + 20);//quarto vertex right x,y
        endShape(CLOSE);
    }

    for (let i = 0; i < 4; i++) {
        let x = 450 + (i * 40)
        beginShape();
        vertex(x, 65);//primeiro vertex top x,y
        vertex(x + 20, 105);//segundo vertex left x,y
        vertex(x, 150);//terceiro vertex bottom x,y
        vertex(x - 20, 105);//quarto vertex right x,y
        endShape(CLOSE);
    }
    
    // triangulos amarelos
    strokeWeight(14);
    fill('yellow');
    triangle(50, 100, 10, 10, 100, 10);
    triangle(50, 100, 10, 200, 100, 200);
    triangle(360, 100, 310, 10, 410, 10);
    triangle(360, 100, 410, 200, 310, 200);

    // Circulos
    fill('white');
    circle(50, 105, 80);
    circle(360, 105, 80);
}

