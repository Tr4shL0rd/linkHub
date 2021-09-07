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

function draw() {
    background(165, 219, 162);
    fill(255, 254, 222);
    rect(20, 100, 364, 200);

    fill(0, 0, 0);
    textSize(20);
    if (mouseIsPressed) {
     text("JavaScript",39,200);   
    } else {
        text("What programming language is this?", 39, 200);
    }
}