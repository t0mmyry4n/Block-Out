// Creating animations
//
// animations like p5 images should be stored in variables
// in order to be displayed during the draw cycle
var red;
//
// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay
function preload() {
//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
<<<<<<< HEAD
  red = loadAnimation('1.png', '7.png');
=======
  red = loadAnimation('assets/1.png', 'assets/7.png');
>>>>>>> 50442dce8abde8908e9e923e4a49f8bcdffe177e

}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200, 255, 255);

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(red, 300, 150);

}
