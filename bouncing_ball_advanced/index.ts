function setup() {
  createCanvas(300, 200);
}

const circleDiameter = 50;

let circleCenterX = 150; // Start in the middle
let circleCenterY = 100; // Start in the middle
let directionX = 2; // Speed in X direction
let directionY = 3; // Speed in Y direction

function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, circleCenterY, circleDiameter);

  // Update the position of the ball
  circleCenterX += directionX;
  circleCenterY += directionY;

  // Check for bouncing on the edges
  if (circleCenterX >= width - circleDiameter / 2 || circleCenterX <= circleDiameter / 2) {
    directionX *= -1; // Reverse direction in X
  }

  if (circleCenterY >= height - circleDiameter / 2 || circleCenterY <= circleDiameter / 2) {
    directionY *= -1; // Reverse direction in Y
  }
}
