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
    fill(0, 0, 0);
    ellipse(200, 200, 375, 375);
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    var answer = floor(random(1, 5));
    
    if (answer === 0) {
        text("Ass", 176, 200);
        text("is Grass", 159, 229); 
    }
    else if (answer === 1) {
        text("Ass", 176, 200);
        text("is Not Grass", 159, 229); 
    }
    else if (answer === 2) {
        text("Ass", 176, 200);
        text("may be Grass", 159, 229);    
    }

}