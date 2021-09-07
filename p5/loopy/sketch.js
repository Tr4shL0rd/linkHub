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
var sleep = function (milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};

function draw() {
    background(0, 0, 0);
    fill(255, 255, 255);
    y = 11;
    while (y < 400) {
        let ms = millis();
        console.log(ms);
        
        ellipse(y, canvasX / 2, 20);
        sleep(2000);
        y += 40;
    }
    //ellipse(y+40, canvasX / 2, 20);
}
