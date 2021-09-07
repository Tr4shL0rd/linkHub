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
    
    fill(0,255,68);//Start Color
    if (mouseIsPressed && mouseY <= 100){
        fill(255,0,0);
    }

    rect(0,0,400,100)//Button
    
    fill(0,0,0);
    
    textSize(30);
    text("Press Me!", 110,55)
   

}