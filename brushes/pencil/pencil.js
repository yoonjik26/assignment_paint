console.log("loading pencil");

var pencil = new Brush("pencil");
brushes.push(pencil);



pencil.draw = function() {
	noFill();
	stroke(50, 50, 50, 150);

	if (mouseIsPressed) {
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
};




