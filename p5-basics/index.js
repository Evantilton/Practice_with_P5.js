console.log("In client.js")


let x = 0;
setInterval(function () {
    x = Math.floor(Math.random() * 256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);
}, 1000);
//creates the canvas we are drawing on
function setup() {
    createCanvas(400, 400);
}
x = 0;
y = 0;
z = 0;
//sets the color
function draw() {
    background(x,y,z);
    fill(255, 204, 0);
    rectMode(CENTER);
    rect(200,150,150,150)
    line(0,50,300,400)
}

function colorUp() {
    console.log("hello");
}

