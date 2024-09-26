function setup() {
  createCanvas(500, 500);
  background("lightblue");
}
let lastX = 100
let lastY = 200
let x = 10

function mouseMoved() {
  background("lightblue");
  x++
  noFill()
  strokeWeight(2)
  circle(mouseX, mouseY, 50)
  circle(mouseX, mouseY, 20)

  line(mouseX, mouseY, mouseX, mouseY - 45)
  line(mouseX, mouseY, mouseX, mouseY + 45)

  line(mouseX, mouseY, mouseX - 45, mouseY)
  line(mouseX, mouseY, mouseX + 45, mouseY)

}