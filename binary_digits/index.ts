let player: Player;
let bullets: Bullet[] = [];
let enemies: Enemy[] = [];
let score = 0;
let gameOver = false;

function setup() {
  createCanvas(800, 600);
  player = new Player();
}

function draw() {
  background(0);

  if (!gameOver) {
    player.update();
    player.show();

    // Update and display bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
      bullets[i].update();
      bullets[i].show();
      if (bullets[i].offScreen()) {
        bullets.splice(i, 1);
      }
    }

    // Update and display enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
      enemies[i].update();
      enemies[i].show();
      if (enemies[i].offScreen()) {
        gameOver = true;
      }

      // Check for collision with bullets
      for (let j = bullets.length - 1; j >= 0; j--) {
        if (enemies[i].hits(bullets[j])) {
          score += 10;
          enemies.splice(i, 1);
          bullets.splice(j, 1);
          break;
        }
      }
    }

    // Spawn new enemies
    if (frameCount % 60 === 0) {
      enemies.push(new Enemy());
    }

    // Display score
    fill(255);
    textSize(24);
    text(`Score: ${score}`, 10, 30);
  } else {
    fill(255, 0, 0);
    textSize(48);
    text("Game Over", width / 2 - 100, height / 2);
  }
}

function keyPressed() {
  if (key === 'up') {
    bullets.push(new Bullet(player.x, player.y));
  }
}

class Player {
  x: number;
  y: number;
  w: number;
  h: number;

  constructor() {
    this.x = width / 2;
    this.y = height - 20;
    this.w = 20;
    this.h = 20;
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    this.x = constrain(this.x, 0, width - this.w);
  }

  show() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.w, this.h);
  }
}

class Bullet {
  x: number;
  y: number;
  speed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.speed = 5;
  }

  update() {
    this.y -= this.speed;
  }

  show() {
    fill(255);
    rect(this.x, this.y, 5, 10);
  }

  offScreen() {
    return this.y < 0;
  }
}

class Enemy {
  x: number;
  y: number;
  speed: number;

  constructor() {
    this.x = random(0, width);
    this.y = 0;
    this.speed = 2;
  }

  update() {
    this.y += this.speed;
  }

  show() {
    fill(255, 0, 0);
    rect(this.x, this.y, 20, 20);
  }

  offScreen() {
    return this.y > height;
  }

  hits(bullet: Bullet) {
    return bullet.x > this.x && bullet.x < this.x + 20 && bullet.y > this.y && bullet.y < this.y + 20;
  }
}
