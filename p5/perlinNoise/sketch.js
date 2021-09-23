let inc = 0.1;
function setup() {
    createCanvas(500, 500);
    pixelDensity(1);
}

function draw() {
    let yoff = 1000;
    loadPixels();
    for (let y = 0; y < height; y++) {
        let xoff = 0;
        for (let x = 0; x < width; x++) {
            let index = (x + y * width) * 4;
            
            let r = random(255);
            //let r = noise(xoff, yoff) * random(255);
            
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;

            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();
    //noLoop();
}
