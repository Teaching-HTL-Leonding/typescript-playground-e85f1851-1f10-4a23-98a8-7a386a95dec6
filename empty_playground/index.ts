function setup() {
    const CANVASX = 400;
    const CANVASY = 400;

    createCanvas(CANVASX,CANVASY);
    background("lightgrey");
    draw();
}

function draw() {
    angleMode(DEGREES);

    const CANVASMIDDLEX = 400 / 2;
    const CANVASMIDDLEY = 400 / 2;

    const DISTANCECENTER = 50;
    const DIAMETER_LEAF = 80;
    const DIAMETER_FLOWER = 65;


    // draw stem of flower
    noFill();
    stroke("darkgreen");
    strokeWeight(15);

    arc(CANVASMIDDLEX-70, CANVASMIDDLEY+70,DIAMETER_LEAF*3,DIAMETER_LEAF*3, -15,35);
    
    //draw left leaf
    strokeWeight(3);
    fill("green");
    circle(CANVASMIDDLEX-DISTANCECENTER, CANVASMIDDLEY, DIAMETER_LEAF);

    //draw right leaf
    circle(CANVASMIDDLEX+DISTANCECENTER, CANVASMIDDLEY, DIAMETER_LEAF);

    //draw upper leaf
    circle(CANVASMIDDLEX, CANVASMIDDLEY-DISTANCECENTER, DIAMETER_LEAF);

    //draw lower leaf
    circle(CANVASMIDDLEX, CANVASMIDDLEY+DISTANCECENTER, DIAMETER_LEAF);

    // draw center of flower
    strokeWeight(0);
    fill("yellow");
    circle(CANVASMIDDLEX, CANVASMIDDLEY, DIAMETER_FLOWER);
}
    
