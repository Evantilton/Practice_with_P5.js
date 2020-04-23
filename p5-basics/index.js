console.log("In client.js")


let x = 0;
setInterval(function () {
    x = Math.floor(Math.random() * 256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);
    random = Math.floor(Math.random() * 10);
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
    background(x*random,y*random,z*random);
    fill(x+10, y+10, z+10);
    rectMode(CENTER);
    rect(200,150,150,150)
    line(0,50,300,400)
}

function colorUp() {
    console.log("hello");
}

