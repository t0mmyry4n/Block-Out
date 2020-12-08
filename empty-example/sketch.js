function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawGrid();
  fill(200, 50, 40);
  ellipse(mouseX,mouseY,35,35);
}

function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=40) {
		line(x, -height, x, height);
		text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=40) {
		line(-width, y, width, y);
		text(y, 1, y+12);
	}
}
