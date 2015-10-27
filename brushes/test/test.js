console.log("loading test");

var test = new Brush("test");
brushes.push(test);


test.setup = function() {

};

test.activate = function() {
	fill(255, 0, 0, 100);
	stroke(0, 255, 0);
};

test.draw = function() {
	if (mouseIsPressed) {
		ellipse(mouseX, mouseY, 10, 10);
	}
};




