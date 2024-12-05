const SIZE = 10
function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
}

function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);

    noFill();
    stroke("aqua");

    let height1 = 0
    let height2 = 5


    for (let x = 0; x < 601; x++) {
        for (let i = 0; i < 50; i += 1) {
            line(0, height1, 10, height2)
            height1 += 10
            height2 += 10
        }
translate(10,0)
height1 = 0
height2= 5
    }

    let height3 = 0
    let height4 = 5

    for ( let j = 0; j < 601; j++){
        for (let k = 0; k < 50; k++){
            line(10,height4,0,height3)
        }
    }
}