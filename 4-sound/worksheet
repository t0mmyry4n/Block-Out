var airplane
var ocean
var seagull
var walking
var wind
var planeimage
var seagullimage

function preload(){
  airplane = loadSound("airplane.mp3")
  ocean = loadSound("ocean.mp3")
  seagull = loadSound("seagull.mp3")
  walking = loadSound("walking.mp3")
  wind = loadSound("wind.mp3")
  planeimage = loadImage("plane.jpg")
  seagullimage = loadImage("seagull.jpg")
}
function waves(){
  stroke("blue")
  beginShape()
  curveVertex(0,200)
  curveVertex(20,190)
  curveVertex(40,200)
  curveVertex(40,190)
  curveVertex(60,200)
  curveVertex(80,190)
  curveVertex(100,200)
  curveVertex(120,190)
  curveVertex(140,200)
  curveVertex(160,190)
  curveVertex(180,200)
  curveVertex(200,190)
  curveVertex(220,200)
  curveVertex(240,190)
  curveVertex(260,200)
  curveVertex(280,190)
  curveVertex(300,200)
  curveVertex(320,190)
  curveVertex(340,200)
  curveVertex(360,190)
  curveVertex(380,200)
  curveVertex(400,190)
  endShape()
}
function ground(){
  fill("brown")
  rect(0,275,400,275)
}
function air(x,y){
  stroke("white")
  beginShape()
  curveVertex(x,y)
  curveVertex(x+5,y)
  curveVertex(x+10,y+5)
  curveVertex(x+15,y)
  curveVertex(x+10,y-5)
  curveVertex(x+7.5,y)
  endShape()
}

function setup(){
createCanvas(400,400)
}

function draw(){
  text('press 1-5',200,20)
  background("blue")
  image(planeimage,50,50,40,40)
  image(seagullimage,370,50,20,20)
  waves()
  ground()
  air(200,170)
  air(190,180)
  air(210,190)
}
function keyTyped(){

if (key === '1'){
  airplane()
} else if(key==='2'){
  ocean()
}else if(key==='3'){
  seagull()
}else if(key==='4'){
  walking()
}else(key==='5'){
  wind()
}

}
