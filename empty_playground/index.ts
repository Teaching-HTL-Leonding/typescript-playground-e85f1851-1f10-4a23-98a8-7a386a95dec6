function setup() {
    const CANVASX = 400;
    const CANVASY = 400;

    createCanvas(CANVASX,CANVASY);
    background("lightgrey");
    draw();
}

function draw() {
    const CANVASMIDDLEX = 400 / 2;
    const CANVASMIDDLEY = 400 / 2;

    const DISTANCECENTER = 50;
    const DIAMETER_LEAF = 80;
    const DIAMETER_FLOWER = 65;
    
    //draw left leaf
    fill("green");
    circle(CANVASMIDDLEX-DISTANCECENTER, CANVASMIDDLEY, DIAMETER_LEAF);

    //draw right leaf
    circle(CANVASMIDDLEX+DISTANCECENTER, CANVASMIDDLEY, DIAMETER_LEAF);

    //draw upper leaf
    circle(CANVASMIDDLEX, CANVASMIDDLEY-DISTANCECENTER, DIAMETER_LEAF);

    //draw lower leaf
    circle(CANVASMIDDLEX, CANVASMIDDLEY+DISTANCECENTER, DIAMETER_LEAF);

    // draw center of flower
    fill("yellow");
    circle(CANVASMIDDLEX, CANVASMIDDLEY, DIAMETER_FLOWER);

    // draw stem
    fill("darkgreen");
    arc(CANVASMIDDLEX-DISTANCECENTER-DIAMETER_LEAF,CANVASMIDDLEY,200,170,0,45);

}
