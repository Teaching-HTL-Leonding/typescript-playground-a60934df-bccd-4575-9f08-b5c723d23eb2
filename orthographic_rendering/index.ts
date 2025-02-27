const RAILROAD_WIDTH = 225;
const RAILROAD_HEIGHT = 160;

const WAGON_WIDTH = 160;
const WAGON_HEIGHT = 113;

let railroad: p5.Image;
let wagon: p5.Image;

const BASE_URL = "https://cddataexchange.blob.core.windows.net/images/trains";

function preload() {
    railroad = loadImage(`${BASE_URL}/railroad-straight.png`);
    wagon = loadImage(`${BASE_URL}/train-carriage-wood.png`);
    // <<< Load the image of a train wagon (train-carriage-wood.png)
}

function setup() {
    createCanvas(800, 550);
}

function draw() {
    background("#f0f0f0");

    scale(0.5, 0.5);

    // Move the origin to the right, upper corner. This makes sense
    // because we must draw the images from right to left so that
    // objects that are further left are "on top" of objects on
    // the right.
    translate(850, -100);

    // <<< For task 2, add another loop here

    // Draw five railroad segments
    for (let i = 0; i < 5; i++) {
        drawRailroad(i);
    }
    for (let i = 0; i < 5; i++) {
        drawRailroad2(i);
    }
    for (let i = 0; i < 5; i++) {
        drawRailroad3(i);
    }
    for (let i = 0; i < 4; i++) {
        drawWagon(i);
    }
    for (let i = 0; i < 5; i++) {
        drawWagon2(i);
    }
    for (let i = 0; i < 6; i++) {
        drawWagon3(i);
    }
    for (let i = 0; i < 5; i++) {
        drawRailroad4(i);
    }
    for (let i = 0; i < 8; i++) {
        drawWagon4(i);
    }

    // <<< Add code to draw six train wagons
}

/** Draw a railroad segment */
function drawRailroad(ix: number) {
    image(railroad, -RAILROAD_WIDTH * ix, RAILROAD_HEIGHT * ix, railroad.width, railroad.height);

}
function drawWagon(ix: number) {
    image(wagon, -WAGON_WIDTH * ix, WAGON_HEIGHT * ix, wagon.width, wagon.height);
WAGON_HEIGHT
}
function drawRailroad2(ix: number) {
    image(railroad, -RAILROAD_WIDTH * ix + 100, RAILROAD_HEIGHT * ix + 100, railroad.width, railroad.height);
}

function drawWagon2(ix: number) {
    image(wagon, -WAGON_WIDTH * ix + 100, WAGON_HEIGHT * ix + 100, wagon.width, wagon.height);
WAGON_HEIGHT
}
function drawRailroad3(ix: number) {
    image(railroad, -RAILROAD_WIDTH * ix + 200, RAILROAD_HEIGHT * ix + 200, railroad.width, railroad.height);
}
function drawWagon3(ix: number) {
    image(wagon, -WAGON_WIDTH * ix + 200, WAGON_HEIGHT * ix + 200, wagon.width, wagon.height);
WAGON_HEIGHT
}
function drawRailroad4(ix: number) {
    image(railroad, -RAILROAD_WIDTH * ix - 100, RAILROAD_HEIGHT * ix - 100, railroad.width, railroad.height);
}
function drawWagon4(ix: number) {
    image(wagon, -WAGON_WIDTH * ix - 100, WAGON_HEIGHT * ix - 100, wagon.width, wagon.height);
WAGON_HEIGHT
}
