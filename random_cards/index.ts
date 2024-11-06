let cardImage: p5.Image;

const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload() {
  // Generate random color (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades)
  let christina: string
  const colorIx = Math.floor(random(0, 4));
switch(colorIx) {
  case 0: 
  christina = 'clubs'
  break
  case 1:
  christina = 'diamonds'
  break
  case 2:
  christina = 'hearts'
  break
  case 3:
  christina = 'spades'
  break
}
let pop: string

  // Generate random card (1 = Ace, 2 = 2, ..., 10 = 10, 11 = Jack, 12 = Queen, 13 = King)
  const cardIx = Math.floor(random(1, 14));

  switch(cardIx) {
    case 1:
    pop = 'Ace' 
    break
    case 2:
    pop = '2'
    break
    case 3:
    pop = '3'
    break
    case 4:
    pop = '4'
    break
    case 5:
    pop = '5'
    break
    case 6:
    pop = '6'
    break
    case 7:
    pop = '7'
    break
    case 8:
    pop = '8'
    break
    case 9:
    pop = '9'
    break
    case 10:
    pop = '10'
    break
    case 11:
    pop = 'Jack'
    break
    case 12:
    pop = 'Queen'
    break
case 13:
pop = 'King'

      }

}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}
