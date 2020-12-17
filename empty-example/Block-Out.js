var avatarX = 40
var avatarY = 40
let hazard = []
let fr = 30

function setup() {
  createCanvas(800, 800)
  for (let i = 0; i < 50; i++) {
    hazard[i] = new Hazard()
  }


}

function draw() {
  frameRate(fr)
  background(255)
  avatar(avatarX, avatarY)

  if (frameCount < 100) {
    text('survive', 400, 400)
  }
  for (let i = 0; i < 50; i++) {
    hazard[i].drawHazard()
    hazard[i].moveHazard()
    if (frameCount == 190) {
      hazard[i].detectHazard()
    }
    if (frameCount == 200) {
      frameCount = 100
      fr = fr + 5

    }

  }

}

class Hazard {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  moveHazard() {
    if (frameCount % 100 == 0) {
      let coordinates = [40, 120, 200, 280, 360, 440, 520, 600, 680, 760]
      this.x = random(coordinates)
      this.y = random(coordinates)

    }

  }
  drawHazard() {
    fill(frameCount-100)
    rect(this.x - 40, this.y - 40, 80, 80)
  }
  detectHazard() {
    if (this.x == avatarX && this.y == avatarY) {
      fill('red')
      noLoop()
      background('red')
      fill(255)
      text('dead', 400, 400)

    }
  }
}

function avatar() {
  fill(0)
  ellipse(avatarX, avatarY, 40, 40)
}


function keyPressed() {
  if (keyCode === UP_ARROW && avatarY >= 41) {
    avatarY = avatarY - 80
  }
  if (keyCode === LEFT_ARROW && avatarX >= 41) {
    avatarX = avatarX - 80
  }
  if (keyCode === DOWN_ARROW && avatarY <= 759) {
    avatarY = avatarY + 80
  }
  if (keyCode === RIGHT_ARROW && avatarX <= 759) {
    avatarX = avatarX + 80
  }
}
