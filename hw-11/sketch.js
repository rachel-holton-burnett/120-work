

let ring = [];
let number_of_rings = 150;

function setup() {
    createCanvas(windowWidth, windowHeight);
for (let i = 0; i < number_of_rings; i++) {
    let r= new Ring(width / 2, height / 2, 50, 'rgb(93, 195, 245)');
    ring.push (r);
}
}

function mousePressed() {

    for (let i = 0; i < number_of_rings; i++) {
    let r = new Ring(width / 2, height / 2, 50, 'rgb(93, 195, 245)');
    ring.push(r);
}
}

function draw() {
    background('rgb(24, 29, 78)');

   for (let i = 0; i < ring.length; i++) {
      ring[i].display();
      ring[i].move();

}
}

class Ring {
    constructor(x, y, size, color) {
        this.color = color;
        this.color2= 'rgb(24, 29, 78)';
        this.size = size;
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-10, 12);
        this.deltaY = random(-10, 12);
    }

    display() {
        push();
        stroke(this.color);
        strokeWeight(8);
        fill(this.color2);
        translate(this.posX, this.posY);
        ellipse(2, 2, this.size);
        fill(this.color2);
        stroke(this.color);
        strokeWeight(6);
        ellipse (-200,-200, this.size/2 );
        fill(this.color2);
        stroke(this.color);
        strokeWeight(4);
        ellipse (-405,-405, this.size/4 );
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }



}
