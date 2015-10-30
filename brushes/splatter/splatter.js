////////////////////////////////////////////////////////////////////
// splatter.js
//
// basic splatter tool: draws a  clumps of random ellipses
// author: Justin Bakse



////////////////////////////////////////////////////////////////////
// create and install brush

var splatter = new Brush("splatter", "./brushes/splatter/splatter.svg");
brushes.push(splatter);



////////////////////////////////////////////////////////////////////
// define brush behavior

splatter.draw = function() {
	fill(forecolor);
	// stroke(forecolor);
	// strokeWeight(4);
	noStroke();

	if (mouseIsPressed) {
		for (var i = 0; i < 300; i++) {
			var offsetX = random(-40, 40);
			var offsetY = random(-40, 40);
			var ellipseSize = random(4, 8);
			ellipse(mouseX + offsetX, mouseY + offsetY, ellipseSize, ellipseSize);
		}
	}

};
