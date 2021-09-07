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
    background(127, 204, 255);
}

function draw() {
    noStroke();
    fill(255,0,0);
    if (mouseIsPressed){
        if (mouseButton == LEFT){
            ellipse(mouseX, mouseY, 20, 20);
        }
    }

}