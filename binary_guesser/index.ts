let num = 0;
let ak1 = 0
let ak2 = 0
let ak3 = 0
let ak4 = 0

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(400, 300);
  background("black");


  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(30, 100, 70, 100)
  rect(120, 100, 70, 100)
  rect(210, 100, 70, 100)
  rect(300, 100, 70, 100)

  noStroke()
  fill("yellow")
  textSize(50)
  text(`${num} in binary?`, 70, height - 230)
  text(ak1, 50, 165)
  text(ak2, 140, 165)
  text(ak3, 231, 165)
  text(ak4, 321, 165)



}
function mouseClicked() {
  // Check if mouse is vertically over buttons
  if (mouseY >= 100 && mouseY <= 175) {
    // Process button clicks
    if (mouseX >= 50 + 0 * 75 && mouseX <= 50 + 0 * 75 + 50) {
      if (guessedDigit4 === 1) {
        guessedDigit4 = 0;
      } else {
        guessedDigit4 = 1;
      }
    }

    if (mouseX >= 50 + 1 * 75 && mouseX <= 50 + 1 * 75 + 50) {
      if (guessedDigit3 === 1) {
        guessedDigit3 = 0;
      } else {
        guessedDigit3 = 1;
      }
    }

    if (mouseX >= 50 + 2 * 75 && mouseX <= 50 + 2 * 75 + 50) {
      if (guessedDigit2 === 1) {
        guessedDigit2 = 0;
      } else {
        guessedDigit2 = 1;
      }
    }

    if (mouseX >= 50 + 3 * 75 && mouseX <= 50 + 3 * 75 + 50) {
      if (guessedDigit1 === 1) {
        guessedDigit1 = 0;
      } else {
        guessedDigit1 = 1;
      }
    }