console.log("loading paint");

var paint = new Brush("paint");
brushes.push(paint);

paint.draw = function() {
	noFill();
	var c = color(red(forecolor), green(forecolor), blue(forecolor), 150);

	stroke(c);
	strokeWeight(10);

	if (mouseIsPressed) {
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
};




