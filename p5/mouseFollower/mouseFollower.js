function setup() {
  var debug = false;
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
  goalLength = canvasX
  let goalColor = color(100,100,100);
  let playerColor = color(0,255,0);
  background(150, 230, 255);
  
  fill(goalColor);
  var goal = rect(0, 0, goalLength, 50);
  
  fill(playerColor);
  var player =  ellipse(mouseX, mouseY, 60);

  //if (player. == 400){
    //console.log("YAY!");
  //}
}
