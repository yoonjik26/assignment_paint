console.log("loading pencil");

var pencil = new Brush("pencil", "./brushes/pencil/pencil.svg");
brushes.push(pencil);



pencil.draw = function() {
	noFill();
	stroke(forecolor);
	
	if (mouseIsPressed) {
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
};




