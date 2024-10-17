function setup() {
  const num = Math.floor(random(0, 1_000_000));

  createCanvas(320, 400)
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

 

  

  textAlign(CENTER, CENTER)
  fill("yellow")
  noStroke()
  text(num, width / 2, height - 20)

  textAlign(CENTER, CENTER)
  fill("yellow")
  noStroke()
  textSize(100)
  text(Math.floor(num % 16), width / 2, height - 190)

  text(Math.floor(num / 16 )%16, width / 3, height - 190)
  text(Math.floor(num / 256) % 16, width / 1.7, height - 190)
  
}
