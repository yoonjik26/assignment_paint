////////////////////////////////////////////////////////////////////
// fastfurious.js
//
// draws a fast, furious line!
//
// author: Greg Schomburg



////////////////////////////////////////////////////////////////////
// create and install brush

var fastfurious = new Brush("fast", "./brushes/fastfurious/fastfurious.svg");
brushes.push(fastfurious);



////////////////////////////////////////////////////////////////////
// define brush behavior

var speed = 1;
var lastPositionPoint = {
	x: 0,
	y: 0
};


fastfurious.draw = function() {};


fastfurious.mouseDragged = function() {
	noFill();
	stroke(forecolor);

	//
	speed = dist(lastPositionPoint.x, lastPositionPoint.y, mouseX, mouseY);
	strokeWeight(clamp(speed, 0.2, 15));

	//add in some furiousness based on the speed
	var shakeyCam = {
		x: random(-speed, speed),
		y: random(-speed, speed)
	};

	var i = 0;
	while (i < speed * 0.1) {
		stroke(red(forecolor), green(forecolor), blue(forecolor), random(80, 200));
		strokeWeight(random(1, clamp(speed, 2, 6)));
		shakeyCam = {
			x: random(-speed, speed),
			y: random(-speed, speed)
		};

		line(lastPositionPoint.x + shakeyCam.x, lastPositionPoint.y + shakeyCam.y, mouseX + shakeyCam.x, mouseY + shakeyCam.y);
		i++;
	}

	lastPositionPoint = {
		x: mouseX,
		y: mouseY
	};
};

fastfurious.mousePressed = function() {
	speed = 1;
	lastPositionPoint = {
		x: mouseX,
		y: mouseY
	};
};


//constrain a value between a minimum and a maximum
clamp = function(val, min, max) {
	return Math.max(min, Math.min(max, val));
};
