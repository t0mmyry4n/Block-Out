//create an empty array called balls
let balls = [];
var avatarx = 40
var avatary = 40

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(220);
  ellipse(avatarx, avatary, 40, 40)
  drawGrid()
  
  if (frameCount % 30 == 0) {
    let b = new Ball(width, random(0, height), -3);
    balls.push(b);
    console.log(balls); //print the balls array to the console
  }

  //	draw all the balls in that array
  for (let i = 0; i < balls.length; i++ && i<80) {
    balls[i].drawBall();
    balls[i].moveBall();
  }

}



//ball class from which to create new balls with similar properties.
class Ball {

  //every ball needs an x value, a y value, and a speed
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  // draw a ball on the screen at x,y
  drawBall() {
    ellipse(this.x, this.y, 20, 20);
  }

  //update the location of the ball, so it moves across the screen
  moveBall() {
    if (frameCount % 240 == 0)
      var randomValueX = random()
    if (randomValueX < 0.1) {
      this.x = 40
    } else if (randomValueX < 0.2) {
      this.x = 120
    } else if (randomValueX < 0.3) {
      this.x = 200
    } else if (randomValueX < 0.4) {
      this.x = 280
    } else if (randomValueX < 0.5) {
      this.x = 360
    } else if (randomValueX < 0.6) {
      this.x = 440
    } else if (randomValueX < 0.7) {
      this.x = 520
    } else if (randomValueX < 0.8) {
      this.x = 600
    } else if (randomValueX < 0.9) {
      this.x = 680
    } else {
      this.x = 760
    }

    var randomValueY = random()
    if (randomValueY < 0.1) {
      this.y = 40
    } else if (randomValueY < 0.2) {
      this.y = 120
    } else if (randomValueY < 0.3) {
      this.y = 200
    } else if (randomValueY < 0.4) {
      this.y = 280
    } else if (randomValueY < 0.5) {
      this.y = 360
    } else if (randomValueY < 0.6) {
      this.y = 440
    } else if (randomValueY < 0.7) {
      this.y = 520
    } else if (randomValueY < 0.8) {
      this.y = 600
    } else if (randomValueY < 0.9) {
      this.y = 680
    } else {
      this.y = 760
    }
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
  if (keyCode === UP_ARROW && avatary >= 41) {
    avatary = avatary - 80
  }
  if (keyCode === LEFT_ARROW && avatarx >= 41) {
    avatarx = avatarx - 80
  }
  if (keyCode === DOWN_ARROW && avatary <= 759) {
    avatary = avatary + 80
  }
  if (keyCode === RIGHT_ARROW && avatarx <= 759) {
    avatarx = avatarx + 80
  }
}
