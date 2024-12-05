const SIZE = 10
function setup() {
    createCanvas(601, 301);
    background("black");
    colorMode(HSB)
    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
}
let linecolor = 0
let rayColor = 0



function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);
    noStroke()
    textSize(17)
    textAlign(CENTER, CENTER)
    background
    fill("white")
    



    noFill()
    stroke("aqua");

    let height1 = 0
    let height2 = 5


    for (let x = 0; x < 601; x++) {
        for (let i = 0; i < 50; i += 1) {
            stroke(rayColor,100,100)
            line(0, height1, 10, height2)
            line(10, height2, 0, height1 + 10)
            height1 += 10
            height2 += 10
        }
        translate(10, 0)
        height1 = 0
        height2 = 5

        rayColor = (rayColor += 6) % 360
    }

   noStroke()
   resetMatrix()
   fill("black")
   rect(0,280, 601,30)
   fill("white")
    let mousexnumber = Math.round(mouseX / 601 * 100)
    text(`${mouseX} of 601 = ${mousexnumber}%`, 70, 295)

}