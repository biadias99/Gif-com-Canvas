var gif_createImg;

function preload() {
  gif_createImg = createImg("duck.gif");
}

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {  
  gif_createImg.position(100, 50);
}
