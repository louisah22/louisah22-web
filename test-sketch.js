var ds;

function setup() {
	//canvas
  createCanvas(550, 550);
	background(94, 178, 224);
}

function draw() {
	//title
	fill(0);
	textSize(40);
	text("Vancouver", 40, 75); 
	//shapes
	strokeWeight(1);
	fill(65, 193, 68);
	beginShape();
	vertex(50, 200); //left top
	vertex(150, 450); //left bottom
	vertex(325, 490); // bottom middle
	vertex(550, 450); //right bottom
	vertex(550, 200); //right top
	vertex(400, 200); // triangle right
	vertex(300, 100); //triangle point
	vertex(275, 200); //triangle left
	vertex(50, 200); //left top
	endShape();
	//circle 1
	fill(244, 122, 66);
	ellipse(200, 250, 50, 50);
	//circle 2
 	fill(244, 122, 66);
	ellipse(405, 405, 71, 71);
}
