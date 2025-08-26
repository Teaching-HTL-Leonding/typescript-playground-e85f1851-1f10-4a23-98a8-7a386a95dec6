// Olympic Rings

function setup() {
  createCanvas(400,500)
  noFill();

  background("grey")
  //fill("grey") // circle filling like background

  strokeWeight(5)

  stroke("blue")
  circle(50,50,70)

  stroke("black")
  circle(50+80,50,70)

  stroke("red")
  circle(50+80+80,50,70)

  stroke("yellow")
  circle(90,85,70)

  stroke("green")
  circle(90+80,85,70)

  // idea: use the coordinates of circles already calculated
  // to get the new x,y position of the new colored circle
}
