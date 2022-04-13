/**
 * demonstrates how to load a GIF image using
 * createImg to create an <img> on the page
 * and to use that to update animation
 * (and illustrates how p5's loadImage loads only
 * one frame otherwise).
 */

var gif_createImg;

function preload() {
  gif_createImg = createImg("duck.gif");
}

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {  
  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  gif_createImg.position(100, 50);
}
