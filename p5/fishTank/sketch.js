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

var drawFish = function() {



var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);


         

}

function draw() {
    

background(89, 216, 255);

var drawFish = function drawFish(centerX, centerY,bodyLength,bodyHeight,r,g,b) {
    //var centerX = 200;
    //var centerY = 100;
    //var bodyLength = 118;
    //var bodyHeight = 74;
    var bodyColor = color(r,g,b);
    


    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
drawFish(200,100,118,74,255,255,255);



         
   
}
  
