function setup() {
    createCanvas(500, 500);
}

function draw() {
    background('white')
    strokeWeight(3);
    line(100, 100, 400, 100);
    line(200, 150, 350, 350);
    line(150, 250, 350, 250);

    fill('red');
    rect(0, 0, 200, 50);
    fill('blue')
    rect(100, 100, 100, 50);
    rect(300, 100, 100, 50);
    fill('red')
    rect(400, 150, 50, 50);
    fill('yellow');
    circle(80,250,150);
    circle(400,400,200);
}

