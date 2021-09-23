function setup() {
  createCanvas(400, 400);
}

// var xoff1 = 0;
// var xoff2 = 10000; 
var inc = 0.01;
var start = 0;
function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start; 
  for (var x = 0; x < width; x++) {
    stroke(255);

    // Random Noise
    //var y = random(height)
    
    //perlin Noise
    var y = noise(xoff) * height;
    noiseDetail(4)

    //Sin Wave Noise    
    //var y = height/2 + sin(xoff) * height/2
    
    vertex(x,y);
    xoff += inc;
  }
  endShape();
  start += inc;
  //noLoop();
  
  
  // var x = map(noise(xoff1), 0,1,0, width);
  // var y = map(noise(xoff2), 0,1,0, height);
  // xoff1 += 0.02;
  // xoff2 += 0.02
  //ellipse(x,y,24,24);
}