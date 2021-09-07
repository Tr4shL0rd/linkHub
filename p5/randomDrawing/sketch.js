function setup() {
    createCanvas(400, 400);
    background(255);
    
}

var Walker = function () {
    //var color = Math.floor(random(0, 255));
    //fill(color, color, color);
    this.x = 400 / 2;
    this.y = 400 / 2;
};

Walker.prototype.display = function () {
    //stroke(0, 0, 0);
    
    //point(this.x, this.y);
    
    ellipse(this.x , this.y, 5, 5);
};

// Randomly move right, left, down, or up
Walker.prototype.walk = function () {
    var choice = Math.floor(random(0, 4));
    
    if (choice === 0) {
        //move right
        this.x++;
    } else if (choice === 1) {
        //move left
        this.x--;
    } else if (choice === 2) {
        //move down
        this.y++;
    } else {
        //move up
        this.y--;
    }
};

var w = new Walker();
draw = function () {
    
    w.walk();
    w.display();
};
draw();
