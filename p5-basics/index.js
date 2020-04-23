console.log("In client.js")


let x = 0;
setInterval(function () {
    if (x >= 255) {
        x = 0;
    } else {
        x = x+1;
    }
}, 100);
//creates the canvas we are drawing on
function setup() {
    createCanvas(400, 400);
}
x = 0;
//sets the color
function draw() {
    background(x);
    fill(255, 204, 0);
    rectMode(CENTER);
    rect(200,150,150,150)
    line(0,50,300,400)
}

function colorUp() {
    console.log("hello");
}

