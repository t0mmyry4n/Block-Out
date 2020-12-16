var coordinateX = -100
var coordinateY = -100
var avatarX = 40
var avatarY = 40

let hazard = []

function setup() {
  createCanvas(800, 800)
  for (let i = 0; i < 10; i++) {
    hazard[i] = new Hazard()
  }


}

function draw() {
  background(255)
  ellipse(avatarX, avatarY, 40, 40)
  drawGrid()

  for (let i = 0; i < 10; i++) {
    hazard[i].drawHazard()
    hazard[i].moveHazard()
    hazard.push(hazard)
    if (frameCount % 200 == 0 && i < 81) {
      i = i
    }
  }

}

class Hazard {
  constructor(x, y, speed) {
    this.x = x
    this.y = y
    this.speed = speed
  }

  moveHazard() {
    if (frameCount % 100 == 0) {
      let coordinates = [40, 120, 200, 280, 360, 440, 520, 600, 680, 760]
      coordinateX = random(coordinates)
      coordinateY = random(coordinates)

    }

  }
  drawHazard() {
    ellipse(coordinateX, coordinateY, 60, 60)
  }
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
