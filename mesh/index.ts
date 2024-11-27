const SIZE = 400;
const MARGIN = 50;



const color1 = 60;

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  colorMode(HSB);

  let i = MARGIN;
  let color = 0;
  while (i <= 350) {
    stroke(color, 100, 100);
    let s = MARGIN;
    while (s <= 350) {
      line(MARGIN, i, width - MARGIN, s);
      s += MARGIN;
    }

    i += MARGIN;
    color = color + color1;
  }
}