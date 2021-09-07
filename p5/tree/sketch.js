function setup() {
	createCanvas(1920, 891);
    background(255);
}

var tree = function(x, y, l, a, b = 3, v = PI / 2, r = 0.8, m = 15) {
    if (l < m) return;
    strokeWeight(l / m);
    line(x, y, x + l * cos(a), y + l * sin(a));
    for (let i = 0; i < b; i++) tree(x + l * cos(a), y + l * sin(a), l * r, a + v * (random() - 0.5), b, v, r, m);
}

var draw = function() {
    
    color(255,255,255);
    tree(width/2, height,130, -PI/2);
}

draw();