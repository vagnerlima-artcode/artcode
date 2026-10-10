// Vagné 101026 - Condicionais e Interatividade

//Interactive Sun

let sunHeight;
let horizon = 200;

// Função inicial de configuração
function setup() {
    createCanvas(400, 400);
}

// Função Loop
function draw() {
    background(0);
    console.log(sunHeight < horizon);
    // O sol segue as coordenadas Y do moused
    sunHeight = mouseY;

    // Luz background azul se o sol estiver acima do horizonte
    if(sunHeight < horizon){
        background("lightblue");
    }else{
        background(0);
    }

    // sun
    fill("yellow");
    circle(200, sunHeight, 160);

    // Linha do horizonte
    stroke("green");
    line(0,horizon, 400, horizon);

    //grama
    if(sunHeight < horizon){
        fill("lightgreen");
        
    } else{
        fill("darkgreen")
    }
    rect(0, horizon, 400,400);
    

}

