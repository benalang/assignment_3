//color variable
var c;

function setup() {
	//set canvas size
	createCanvas(640, 480);
}

function draw() {
	if (mouseIsPressed)
		c = color(50, 50, 100);
	else
		c = color(150, 0, 0);
	background(c);
	stroke(255);
	line(mouseX, 0, mouseX, 480);
	line(0, mouseY, 640, mouseY);
	fill(c);
	ellipse(mouseX, mouseY, 40, 40);
}
