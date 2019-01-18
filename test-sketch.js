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
	var x = 0
	var y = 0
	strokeWeight(1);
	fill(65, 193, 68);
	beginShape();
	vertex(50+x, 200+y); //left top
	vertex(150+x, 450+y); //left bottom
	vertex(325+x, 490+y); // bottom middle
	vertex(550+x, 450+y); //right bottom
	vertex(550+x, 200+y); //right top
	vertex(400+x, 200+y); // triangle right
	vertex(300+x, 100+y); //triangle point
	vertex(275+x, 200+y); //triangle left
	vertex(50+x, 200+y); //left top
	endShape();
	//circle 1
	fill(244, 122, 66);
	ellipse(200+x, 250+y, 50, 50);
	//circle 2
  fill(244, 122, 66);
	ellipse(405+x, 405+y, 71, 71);
}
