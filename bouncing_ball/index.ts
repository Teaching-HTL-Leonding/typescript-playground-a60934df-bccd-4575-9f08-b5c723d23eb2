function setup() {
  createCanvas(300, 200);
}

const circleDiameter = 50;

let circleCenterY = 1;
let circleCenterX = 0;
let directionX = 2;
let directionY = 2;

// Remember: The draw method is called FOR EVERY FRAME
function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, height / 2, circleDiameter);

  circleCenterX += directionX;

  // Use logical OR operator to check bounds for X direction
  if (circleCenterX >= width || circleCenterX <= 0) {
    // Reverse sign of direction (positive -> right, negative -> left)
    directionX *= -1; 
  }

  stroke("white");
  strokeWeight(3);
  fill("skyblue");
  circle(width / 2, circleCenterY, circleDiameter);

  circleCenterY += directionY;

  // Use logical OR operator to check bounds for Y direction
  if (circleCenterY >= height || circleCenterY <= 0) {
    directionY *= -1; 
  }
}
