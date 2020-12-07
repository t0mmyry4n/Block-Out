let player

function setup() {
  createCanvas(800, 800);
  player=new avatar(this.x, this.y, 80)
}

function draw() {
 drawGrid()
  player.drawAvatar()
  player.moveAvatar()
}

function drawGrid() {
  for (var x = -width; x < width; x += 80) {
    line(x, -height, x, height);
    text(x, x + 1, 12);
  }
  for (var y = -height; y < height; y += 80) {
    line(-width, y, width, y);
    text(y, 1, y + 12);
  }
}

class avatar {
  constructor(x, y, speed) {
    this.x = 80
    this.y = 80
    this.speed = 80
  }
  drawAvatar() {
    fill(0)
    rect(this.x - 20, this.y - 20, this.x + 20, this.y + 20)
  }
  moveAvatar() {
    if (keyPressed(UP_ARROW)) {
      this.y -= this.speed
    }
    if (keyPressed(DOWN_ARROW)) {
      this.y += this.speed
    }
    if (keyPressed(LEFT_ARROW)) {
      this.x -= this.speed
    }
    if (keyPressed(RIGHT_ARROW)) {
      this.x += this.speed
    }
  }
}
