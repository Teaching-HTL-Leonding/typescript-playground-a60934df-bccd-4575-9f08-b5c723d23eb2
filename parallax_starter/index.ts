const THEME_IX = 0;
const GRAVITY = 0.8;
const JUMP_FORCE = -15;
const HATI = "demo_figure2.png";
const SCROLL_SPEED = 5;
const CANVAS_SIZE = 500;

const images: p5.Image[] = [];
let hatiImage: p5.Image;

let backgroundScale = 1;
let scaledImageWidth = 0;
let scaledImageHeight = 0;

// <<< Add variables here

function preload() {
    // <<< Add code to load images here
}

function setup() {
    createCanvas(CANVAS_SIZE, CANVAS_SIZE);

    backgroundScale = width / images[0].width;
    scaledImageWidth = images[0].width * backgroundScale;
    scaledImageHeight = images[0].height * backgroundScale;
}

function draw() {
    background("black");

    // <<< Add code to draw here    
}
