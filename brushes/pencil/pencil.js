////////////////////////////////////////////////////////////////////
// pencil.js
//
// basic pencil tool: draws a thin, solid line
// author: Justin Bakse



////////////////////////////////////////////////////////////////////
// create and install brush

var pencil = new Brush("pencil", "./brushes/pencil/pencil.svg");
brushes.push(pencil);



////////////////////////////////////////////////////////////////////
// define brush behavior

pencil.draw = function() {
	noFill();
	stroke(forecolor);
	
	if (mouseIsPressed) {
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
};



