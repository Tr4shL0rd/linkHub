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
    fill(255, 0, 0);var drawMole = function(moleX,moleY) {
        //var moleX = 248;
        //var moleY = 185;
        
        noStroke();
        fill(125, 93, 43);
        ellipse(moleX, moleY, 60, 60); // face
        fill(255, 237, 209);
        ellipse(moleX, moleY+10, 33, 28); 
        fill(0, 0, 0);
        ellipse(moleX-10, moleY-15, 10, 10); // eyes
        ellipse(moleX+10, moleY-15, 10, 10);
        ellipse(moleX, moleY-5, 10, 10); // nose
        ellipse(moleX, moleY+10, 20, 5); // mouth
    };
    
    background(52, 168, 83); // green grass
    fill(0, 0, 0);
    ellipse(200, 200, 100, 30); // holes!
    ellipse(70, 119, 100, 30);
    ellipse(300, 60, 100, 30);
    ellipse(297, 350, 100, 30);
    
    var hole1 = [200,200];
    var hole2 = [70,119];
    var hole3 = [300,60];
    var hole4 = [297, 350];
    drawMole(hole1[0],hole1[1]);
    drawMole(hole2[0],hole2[1]);
    drawMole(hole3[0],hole3[1]);
    drawMole(hole4[0],hole4[1]);
}