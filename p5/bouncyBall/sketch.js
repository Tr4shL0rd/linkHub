function setup() {
  var debug = true;
  if (debug == true) {
    canvasX = 400;
    canvasY = 400;
  } else {
    canvasX = 1920;
    canvasY = 891;
  }
  createCanvas(canvasX, canvasY);
}

var y = 0;
var speed = 2;

function draw() {
  background(127, 204, 255);
  fill(66, 66, 66);
  ellipse(200, y, 50, 50);
  y = y + speed;
  if (y > canvasX) {
    speed = -2;
  }
  if (y < canvasX - canvasX) {
    speed = 2;
  }
}
