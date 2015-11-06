////////////////////////////////////////////////////////////////////
// yoonjik26.js
//
// basic yoonjik26 tool: draws thin line circles
// author: Yoonji Kim



////////////////////////////////////////////////////////////////////
// create and install brush

var yoonjik26 = new Brush("yoonjik26", "./brushes/yoonjik26/yoonjik26.svg");
brushes.push(yoonjik26);



////////////////////////////////////////////////////////////////////
// define brush behavior

yoonjik26.mouseDragged = function() {
		var stepSize = 1;
		var brushSize = random(40, 70);

		//create a color with the rgb of forecolor and a transparent alpha
		var c = color(red(forecolor), green(forecolor), blue(forecolor), random(10, 30));
		noFill();
		stroke(c);

		// find how far the mouse moved this time
		var distance = dist(pmouseX, pmouseY, mouseX, mouseY);

		// figure out how many circles we need to draw, round down
		var steps = distance / stepSize;
		steps = floor(steps);

		// find the distance between circles on x and on y
		var x = pmouseX;
		var y = pmouseY;

		// draw the circles
		for (i = 0; i < steps; i++) {
			noFill();
			stroke(c);
			ellipse (x, y, brushSize, brushSize);
			ellipse (x, y, brushSize + 10, brushSize + 10);
			ellipse (x, y, brushSize - 10, brushSize);
			ellipse (x, y, brushSize + 10, brushSize);
			ellipse (x, y, brushSize - 20, brushSize);
			ellipse (x, y, brushSize - 30, brushSize);
			ellipse (x, y, brushSize, brushSize + 10);
			ellipse (x, y, brushSize, brushSize - 10);
			ellipse (x, y, brushSize, brushSize - 20);
      ellipse (x, y, brushSize, brushSize - 30);

		 line(pmouseX, pmouseY, mouseX, mouseY);
		 line(pmouseX - 3, pmouseY - 3, mouseX - 3, mouseY - 3);
		 line(pmouseX + 3, pmouseY + 3, mouseX + 3, mouseY + 3);
		 line(pmouseX - 5, pmouseY - 5, mouseX - 5, mouseY - 5);
		 line(pmouseX + 5, pmouseY + 5, mouseX + 5, mouseY + 5);
			x += xStep;
			y += yStep;
		}
	};
