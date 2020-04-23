console.log("In client.js")

//creates the canvas we are drawing on
function setup() {
    createCanvas(400, 400);
}

//sets the color
function draw() {
    background(220,0,200);
    fill(255, 204, 0);
    rectMode(CENTER);
    rect(200,150,150,150)
    line(0,50,300,400)
}