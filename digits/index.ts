function setup() {
  const num = Math.floor(random(0, 1_000_000));

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
  text(Math.floor(num  % 10), width / 1.13, height - 190)
  text(Math.floor(num/10  % 10), width / 1.35, height - 190)
  text(Math.floor(num/100 % 10), width / 1.7, height - 190)
  text(Math.floor(num/1000 % 10), width / 2.4, height - 190)
  text(Math.floor(num/10000 % 10), width / 3.7, height - 190)
  text(Math.floor(num/100000 % 10), width / 8, height - 190)
}