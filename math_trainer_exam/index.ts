// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.


let num = 0
let num1 = 0
let num2 = 0
let num3 = 0
let num4 = 0
let zeichen = ""
let result = 0




function setup() {
    num = Math.floor(random(1, 101))
    num1 = Math.floor(random(1, 101))
    num2 = Math.floor(random(1, 101))
    result = num1 - num2

    createCanvas(400, 400);
    background("black");

    text(2)
}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    // <<< TODO: Add your code here
}

// mouseMoved function displays mouse coordinates as feedback
function mouseMoved() {
    // This is a HELPER FUNCTION. It should make finding coordinates
    // easier for you. You DO NOT NEED to change this method!

    fill("black");
    noStroke();
    rect(0, height - 20, width, height); // Draws a rectangle to clear previous coordinates

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM); // Aligns coordinates text to bottom-left
    text(`${mouseX}/${mouseY}`, 5, height - 5); // Displays current mouse coordinates
}
