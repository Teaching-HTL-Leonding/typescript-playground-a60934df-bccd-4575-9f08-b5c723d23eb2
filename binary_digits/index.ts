
function setup() {
  const num = Math.floor(random(0, 64));

  createCanvas(580, 400)
  background("black")

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(30, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(120, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(210, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(300, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(390, 150, 70, 100)

  noFill()
  strokeWeight(2)
  stroke("yellow")
  rect(480, 150, 70, 100)

  textAlign(CENTER, CENTER)
  fill("yellow")
  noStroke()
  text(num, width / 2, height - 20)

  textAlign(CENTER, CENTER)
  fill("yellow")
  noStroke()
 textSize(100)
  text(Math.floor(num  % 2), width / 1.13, height - 190)
  text(Math.floor(num/2  % 2), width / 1.35, height - 190)
  text(Math.floor(num/4 % 2), width / 1.7, height - 190)
  text(Math.floor(num/8 % 2), width / 2.4, height - 190)
  text(Math.floor(num/16 % 2), width / 3.7, height - 190)
  text(Math.floor(num/32 % 2), width / 8, height - 190)
}