function setup() {
    createCanvas(400, 400);
    
    
}


function draw() {
    background(255);
    for (let i = 0; i < 400; i++) {
        let r = random(50);
        stroke(r * 5);
        //line(0,i,200 + r,i);
        ellipse(200, i,20 + r*20, 0);
    }
}