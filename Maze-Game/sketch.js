var avatarx = 40
var avatary = 40

let hazardA
let hazardB
let latitudes = [40,120,200,280,360,440,520,600,680,760]
let longitudes = [40,120,200,280,360,440,520,600,680,760]

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);

  hazardA = new Hazard(x,y,w,h);
  hazardB = new Hazard(x,y,w,h);

}

function draw() {
  background(255);
  ellipse(avatarx, avatary, 40, 40);
  push();
  fill("red");
  rect(120,120,40,40);
  rect(180,100,40,40);
  rect(100,260,40,40);
  rect(180,340,40,40);
  pop();
  drawGrid();
  die();

}

class Hazard {

  constructor(x,y,w,h){
    this.x = random(latitudes);
    this.y = random(longitudes);
    this.w = 40
    this.h = 40
  }

  drawHazard(){
    
  }

}

function die(){
  print(avatarx);
  print(avatary);
  if(avatarx == 120 && avatary == 120){
    avatarx = 40;
    avatary = 40;
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
