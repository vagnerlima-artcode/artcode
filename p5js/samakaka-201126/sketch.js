//SAMAKAKA | DEV VAGNÉ L inspiradas no tradicional tecido angolano
//associado ao povo Mumuíla (ou Muila), do sul de Angola (província da Huíla)

function setup() {
    createCanvas(600, 210);
    // Acessibilidade : Help blind or low-vision users understand your sketch
    describe("ARTE AFRICANA - SAMAKAKA. Inspiradas no tradicional tecido angolano associado ao povo Mumuíla (ou Muila), do sul de Angola (província da Huíla)");
}

function draw() {
    background('#333');

    fill('red');
    stroke();
    strokeWeight(20);
    rect(0, 10, width, 200);

    strokeWeight(10);
    line(100, 10, 100, 200);
    line(300, 10, 300, 200);

    strokeWeight(15);
    // triangulos brancos
    fill('white');
    triangle(110, 60, 110, 140, 160, 100);
    triangle(295, 60, 295, 140, 240, 100);

    fill('black');
    rect(150, 0, 100, 180);

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

        // beginShape();
        // vertex(200, 20);//primeiro vertex top x,y
        // vertex(160, 20);//segundo vertex left x,y
        // vertex(200, 40);//terceiro vertex bottom x,y
        // vertex(240, 20);//quarto vertex right x,y
        // endShape(CLOSE);

        // beginShape();
        // vertex(200, 40);
        // vertex(160, 60);
        // vertex(200, 80);
        // vertex(240, 60);
        // endShape(CLOSE);

        // beginShape();
        // vertex(200, 80);
        // vertex(160, 100);
        // vertex(200, 120);
        // vertex(240, 100);
        // endShape(CLOSE);

        // beginShape();
        // vertex(200, 120);
        // vertex(160, 140);
        // vertex(200, 160);
        // vertex(240, 140);
        // endShape(CLOSE);
    }

    strokeWeight(14);

    // triangulos amarelos
    // fill('white');
    // triangle(110, 60, 110, 140, 180, 100);

    // triangulos amarelos
    fill('yellow');
    triangle(50, 100, 10, 10, 100, 10);
    triangle(50, 100, 10, 200, 100, 200);

    // Circulos
    fill('white');
    circle(50, 105, 80);

    // triangulos amarelos
    fill('yellow');
    triangle(360, 100, 310, 10, 410, 10);
    triangle(360, 100, 410, 200, 310, 200);

    // Circulos
    fill('white');
    circle(360, 105, 80);


    strokeWeight(15);
    // triangulos brancos
    fill('white');
    triangle(500, 10, 545, 100, 590, 10);
    triangle(500, 200, 545, 100, 590, 200);

    fill('black');
    rect(420, 60, 200, 100);

    fill('yellow');
    strokeWeight(1);
    for (let i = 0; i < 4; i++) {
        let x = 450 + (i * 40)

        beginShape();
        vertex(x, 65);//primeiro vertex top x,y
        vertex(x + 20, 105);//segundo vertex left x,y
        vertex(x, 150);//terceiro vertex bottom x,y
        vertex(x - 20, 105);//quarto vertex right x,y
        endShape(CLOSE);
    }
}

