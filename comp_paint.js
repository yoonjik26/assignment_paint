// function preload() {
// }

var brushes = [];
var currentBrush;
var forecolor;

// create base object for brushes
function Brush(name) {
	this.name = name;
}
Brush.prototype.activate = function(){};
Brush.prototype.setup = function(){};
Brush.prototype.mouseMoved = function(){};
Brush.prototype.mouseDragged = function(){};
Brush.prototype.mousePressed = function(){};
Brush.prototype.mouseReleased = function(){};
Brush.prototype.mouseClicked = function(){};
Brush.prototype.mouseWheel = function(){};
Brush.prototype.keyPressed = function(){};
Brush.prototype.keyReleased = function(){};
Brush.prototype.keyTyped = function(){};

function setup() {
	var canvas = createCanvas(800, 600);
	canvas.parent("main");
	background(255);
	cursor(CROSS);
	brushes.forEach( function(brush) {
		brush.setup();
	});

	brushes.forEach( function(brush) {
		var li = $("<li><button>" + brush.name + "</button></li>");
		var b = li.find("button");
		brush.button = b;
		b.click( function() { 

			currentBrush = brush;
			currentBrush.activate();
			$(this).addClass("active").siblings().removeClass("active");
			console.log("this", this);
		});
		$(".brushes").append(b);
	});

	currentBrush = brushes[1];
	currentBrush.activate();
	currentBrush.button.addClass("active");

	forecolor = color(0,0,0);
	var colorPicker = $('<input id="color-picker" type="color">');
	$(".brushes").append(colorPicker);
	colorPicker.change( function() {
		forecolor = color($(this).val());
	});

}

function draw() {
	currentBrush.draw();
}


////////////////////////////////////////////////////////////////////
// Forward events
function mouseMoved() {
	currentBrush.mouseMoved();
}

function mouseDragged() {
	currentBrush.mouseDragged();
}

function mousePressed() {
	currentBrush.mousePressed();
}

function mouseReleased() {
	currentBrush.mouseReleased();
}

function mouseClicked() {
	currentBrush.mouseClicked();
}

function mouseWheel() {
	currentBrush.mouseWheel();
}

function keyPressed() {
	currentBrush.keyPressed();
}

function keyReleased() {
	currentBrush.keyReleased();
}

function keyTyped() {
	currentBrush.keyTyped();
}
