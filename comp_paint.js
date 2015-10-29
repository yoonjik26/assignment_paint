////////////////////////////////////////////////////////////////////
// comp_paint.js

// shell of a basic painting program that accepts brushes as plug-ins



////////////////////////////////////////////////////////////////////
// Create base object for brushes
// plug-in brushes will create and customize an instance of Brush

function Brush(name, iconPath) {
	this.name = name;
	this.iconPath = iconPath;
}
Brush.prototype.setup = function(){}; // called when the appliation loads
Brush.prototype.activate = function(){}; // called when the user picks this brush
Brush.prototype.draw = function(){};
Brush.prototype.mouseMoved = function(){};
Brush.prototype.mouseDragged = function(){};
Brush.prototype.mousePressed = function(){};
Brush.prototype.mouseReleased = function(){};
Brush.prototype.mouseClicked = function(){};
Brush.prototype.mouseWheel = function(){};
Brush.prototype.keyPressed = function(){};
Brush.prototype.keyReleased = function(){};
Brush.prototype.keyTyped = function(){};


////////////////////////////////////////////////////////////////////
// State Variables

var brushes = [];
var currentBrush; 
var forecolor;


function setup() {
	// create canvas and insert it into the html document
	var canvas = createCanvas(800, 600);
	canvas.parent("main");

	// initial state setup
	background(255);
	cursor(CROSS);
	
	// initialize brushes and add toolbar buttons
	brushes.forEach( function(brush) {
		brush.setup();

		// create the html elements for the brush's button
		var li = $('<li><button><img src="'+brush.iconPath+'"></button></li>');
		var b = li.find("button");
		brush.button = b;

		// add a function to handle button click
		b.click( function() { 
			currentBrush = brush;
			currentBrush.activate();
			$(this).addClass("active").siblings().removeClass("active");
		});

		// add button to html document
		$(".brushes").append(b);
	});


	// simulate a click on a brush to activate an initial brush
	brushes[0].button.click();


	// pick an inital forecolor and create a color picker widget
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
