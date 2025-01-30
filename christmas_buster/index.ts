// Defines structure for ornament balls
type Circle = {
  x: number,      // x-coordinate on canvas
  y: number,      // y-coordinate on canvas
  lifetime: number; // time until ball disappears
  image: p5.Image; // ball's visual appearance
}

// Game state variables
const circles: Circle[] = [];  // active ornaments
let nextCircle = 0;           // timestamp for next ornament spawn
let points = 0;               // player's score
let lives = 5;                // remaining lives
let gameOver = false;         // game state flag

// Asset URLs
const baseUrl = "https://cddataexchange.blob.core.windows.net/images/christmas-tree";
const treeUrl = `${baseUrl}/tree.png`;
let treeImage: p5.Image;

// Ornament assets
const ballImages: p5.Image[] = [];
const ballDiameter = 50;

/**
* p5.js preload function - loads all game assets before starting
* Loads tree and ornament images
*/
function preload() {
  // <<< Add your code here
}

/**
* p5.js setup function - initializes canvas
*/
function setup() {
  createCanvas(400, 408);
}

/**
* p5.js draw function - main game loop
* Handles rendering and game state updates
*/
function draw() {
  background("black");
  imageMode(CENTER);

  // <<< Add your code here        
}

/**
* p5.js mouseClicked function - handles player interaction
* Checks if player clicked on an ornament and updates score
*/
function mouseClicked() {
  // <<< Add your code here
}
