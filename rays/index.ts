const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
                   // This is also the distance between the rays.
                   colorMode(HSB)

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}

function mouseMoved() {
  background("black");
  strokeWeight(2);

let x = MARGIN
while( x <= 375){
  stroke("yellow")
  line(375,x,mouseX,mouseY)
  x += MARGIN

}
 x = MARGIN
while( x <= 375){
  stroke("red")
  line(375,x,mouseX,mouseY)
  x += MARGIN

}
 let y = MARGIN
while( y <= 375){
  stroke("yellow")
  line(y,375,mouseX,mouseY)
  y += MARGIN

}
 
  y = MARGIN
while( y <= 375){
  stroke("blue")
  line(y,MARGIN,mouseX,mouseY)
  y += MARGIN

}
x = MARGIN
while( x <= 375){
  stroke("HSB")
  line(25,x,mouseX,mouseY)
  x += MARGIN

}





}
