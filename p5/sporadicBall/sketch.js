function setup() {
  createCanvas(400, 400);
}

var xoff1 = 0;
var xoff2 = 10000; 

function draw() {
  background(127, 204, 255);

  var x = map(noise(xoff1), 0,1,0, width);
  var y = map(noise(xoff2), 0,1,0, height);
  
  xoff1 += 0.02;
  xoff2 += 0.02
  ellipse(x,y,24,24);
  //noLoop();
}
