console.log("loading shakeyhands");

var shakeyhands = new Brush("shakey");
brushes.push(shakeyhands);

var speed=1;
var lastPositionPoint = {x:0, y:0}

shakeyhands.draw = function(){
	//useless
}


shakeyhands.mouseDragged = function() {
	noFill();
	stroke(forecolor);

	//
	speed = dist(lastPositionPoint.x, lastPositionPoint.y, mouseX, mouseY);
	strokeWeight(clamp(speed, .2, 15));

	//add in some furiousness based on the speed
	var shakeyCam = {x:random(-speed, speed), y:random(-speed, speed)}
	
	line(lastPositionPoint.x, lastPositionPoint.y, mouseX + shakeyCam.x, mouseY + shakeyCam.y);

	lastPositionPoint = {x:mouseX, y:mouseY};
};

shakeyhands.mousePressed = function(){
	speed = 1;
	lastPositionPoint = {x:mouseX, y:mouseY};
}

//constrain a value between a minimum and a maximum
clamp = function(val , min, max){
	return Math.max(min, Math.min(max, val));
}



