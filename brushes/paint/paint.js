console.log("loading paint");

var paint = new Brush("paint");
brushes.push(paint);

paint.draw = function() {
	noFill();
	stroke(50, 255, 255, 150);
	strokeWeight(10);

	if (mouseIsPressed) {
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
};




