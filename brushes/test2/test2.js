console.log("loading test2");

var test2 = new Brush("test2");
brushes.push(test2);



test2.setup = function() {

};

test2.activate = function() {
	fill(255, 255, 0);
	stroke(0, 255, 0);
};

test2.draw = function() {
	if (mouseIsPressed) {
		rect(mouseX, mouseY, 10, 10);
	}
};




