function setup() {
    // create the canvas (German: "Leinwand")
    // Paramters are width and height
    createCanvas(1000, 1000);

    // Set background color
    background("Deepskyblue");

    // Draw a rectangle 
    fill("red")
    rect(100, 200, 200, 250)

    // Draw a triange
    noFill()
    fill("Maroon")
    triangle(70, 200, 330, 200, 195, 100)

    // Draw a rectangle
    fill("white")
    rect(165, 350, 70, 100)

    // Draw a circle
    noFill()
    fill("brown")
    circle(220, 410, 10)

    // Draw a rectangle
    fill("brown")
    rect(350, 200, 50 ,250)

    // Draw a circle
    fill("green")
    circle(340, 200, 150)

    // Draw a circle
    fill("green")
    circle(380, 170, 150)

    // Draw a circle
    fill("green")
    circle(410, 200, 150)
}