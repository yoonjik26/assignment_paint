console.log("loading paint");

var paint = new Brush("paint", "brushes/paint/paint.svg");
brushes.push(paint);

paint.mouseDragged = function() 
{

	var stepSize = 3;
	var brushSize = 20;

	//create a color with the rgb of forecolor and a transparent alpha
	var c = color(red(forecolor), green(forecolor), blue(forecolor), 20);
	fill(c);
	noStroke();
	
	// find how far the mouse moved this time
	var distance = dist(pmouseX, pmouseY, mouseX, mouseY);
	
	// figure out how many dots we need to draw, round down
	var steps = distance / stepSize;
	steps = floor(steps);

	// find the distance between dots on x and on y
	var xStep = (mouseX - pmouseX)/steps;
	var yStep = (mouseY - pmouseY)/steps;

	var x = pmouseX;
	var y = pmouseY;

	// draw the dots
	for (i = 0; i < steps; i++) {
		ellipse(x, y, brushSize, brushSize);
		x += xStep;
		y += yStep;
	}

};




