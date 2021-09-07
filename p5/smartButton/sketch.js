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
    background(255,255,255);
    fill(0, 255, 68); // start color

    if (mouseIsPressed && mouseX > 50 && mouseX < 50+250 && mouseY > 150 && mouseY < 150+100) { 
        fill(33, 112, 52); // click color
    }
    rect(50, 150, 250, 100);  // the button

    // The button text
    fill(0, 0, 0);
    textSize(30);
    text("PRESS ME!", 93, 193);
};
