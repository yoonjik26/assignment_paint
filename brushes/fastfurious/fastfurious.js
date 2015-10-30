console.log("loading fastfurious");

var fastfurious = new Brush("fast", "./brushes/fastfurious/fastfurious.svg");
brushes.push(fastfurious);

var speed=1;
var lastPositionPoint = {x:0, y:0}

fastfurious.draw = function(){
	//useless
}


fastfurious.mouseDragged = function() {
	noFill();
	stroke(forecolor);

	//
	speed = dist(lastPositionPoint.x, lastPositionPoint.y, mouseX, mouseY);
	strokeWeight(clamp(speed, .2, 15));

	//add in some furiousness based on the speed
	var shakeyCam = {x:random(-speed, speed), y:random(-speed, speed)}
	
	var i=0;
	while(i<speed*.1){
		stroke(red(forecolor), green(forecolor), blue(forecolor), random(80, 200));
		strokeWeight(random(1, clamp(speed, 2, 6)));
		shakeyCam = {x:random(-speed, speed), y:random(-speed, speed)}
		line(lastPositionPoint.x +shakeyCam.x, lastPositionPoint.y + shakeyCam.y, mouseX + shakeyCam.x, mouseY + shakeyCam.y);
		i++;
	}

	// if(speed>20){
	// 	//too fast too furious, draw an extra line or two
	// 	var i=0;
	// 	while(i<speed*.1){
	// 		stroke(red(forecolor), green(forecolor), blue(forecolor), random(80, 200));
	// 		strokeWeight(random(3, clamp(speed, 4, 6)));
	// 		shakeyCam = {x:random(-speed, speed), y:random(-speed, speed)}
	// 		line(lastPositionPoint.x +shakeyCam.x, lastPositionPoint.y + shakeyCam.y, mouseX + shakeyCam.x, mouseY + shakeyCam.y);
	// 		i++;
	// 	}
	// }else{
	// 	line(lastPositionPoint.x, lastPositionPoint.y, mouseX + shakeyCam.x, mouseY + shakeyCam.y);
	// }

	// line(lastPositionPoint.x, lastPositionPoint.y, mouseX + shakeyCam.x, mouseY + shakeyCam.y);

	lastPositionPoint = {x:mouseX, y:mouseY};
};

fastfurious.mousePressed = function(){
	speed = 1;
	lastPositionPoint = {x:mouseX, y:mouseY};
}

//compute the distance between two point objects - formatted: {x:0, y:0}
// distance = function(p1, p2){
// 	var x = p1.x-p2.x;
// 	var y = p1.y-p2.y;
// 	return Math.sqrt( (x*x) + (y*y) );
// }

//constrain a value between a minimum and a maximum
clamp = function(val , min, max){
	return Math.max(min, Math.min(max, val));
}



