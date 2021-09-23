//docs: https://p5js.org/reference/#/p5.Oscillator
var playing = false;
var slider;
var wave;

function setup() {
  createCanvas(400,400);

  wave = new p5.Oscillator();
  slider = createSlider(100,1200, 440);

  wave.setType("sine");
  wave.start();
  wave.amp(0);


  button = createButton("Play/Pause");
  button.mousePressed(toggle);
}

function draw() {
  beginShape();
  for (var x = 0; x < width; x++) {
    stroke(255);
    var y = height/2 + sin(slider.value()) * height/2;
    
    vertex(x,y);
  }
  endShape();
  
  wave.freq(slider.value());
  if (playing) {
    background(255,0,255);
  } else {
    background(51);
  }
}


function toggle() {
  if (!playing) {
    wave.freq(440);  
    wave.amp(0.5,1);

    playing = true;
  } else {
    wave.stop();
    wave.amp(1,0.5);  
    playing = false;
  }
}