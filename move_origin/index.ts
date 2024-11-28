function setup() {
  const SIZE = 400;
  const CIRCLE_DIAMETER = 50;

  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(3);
  stroke("yellow");
  noFill();

  circle(0, 0, CIRCLE_DIAMETER);
  for (let a = 0; a < SIZE; a += CIRCLE_DIAMETER) {

    translate(CIRCLE_DIAMETER, CIRCLE_DIAMETER);

    circle(0, 0, CIRCLE_DIAMETER);
  }
}