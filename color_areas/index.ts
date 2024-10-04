function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("gold")
    rect(0, 0, 150, 150)
    fill("green")
    rect(130, 0, 150, 150)
    fill("red")
    rect(280, 0, 150, 150)
}

function mouseClicked() {

    let message: string

    if (mouseX < width / 3) {
        message = "Yellow"
    } else if (mouseX < width / 3 * 2) {
        message = "Green"
    } else {
        message = "Red"
    }

fill("black")
rect(0, 130, 400, 200)


    fill("white")
    text(message, 100, height - 5)
}
