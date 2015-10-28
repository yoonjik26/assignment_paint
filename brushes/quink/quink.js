console.log("loading quinkennedy");

//create and add my custom brush to the panel
var quinkennedy = new Brush("quinkennedy");
brushes.push(quinkennedy);

//for tracking how long the mouse has been held down
quinkennedy.holdTime = 0;

//my custom draw function for this "brush"
quinkennedy.draw = function() {

	//if the user is pressing the mouse, we'll do stuff
	if (mouseIsPressed) {
		var d = pixelDensity;
		this.holdTime += d;
		
		//an array to store the pixel values for sorting
		var toSort = [];
		//necessary before using the pixel array in p5.js
		loadPixels();
		//the pixelDensity of the user's screen 
		//(for properly handling retina screens)

		//retrieve the relevant pixels from the Canvas
		//for each pixel below the cursor
		for(var i = 0; i < this.holdTime; i++){
			//an array to hold pixel components together
			// 0 = red, 1 = green, 2 = blue, 3 = alpha
			var pixel = [];

			//for each component in the pixel
			for(var j = 0; j < 4; j++){
				var pixelI = ((i+mouseY)*d*width+mouseX)*d*4+j;
				pixel.push(pixels[pixelI]);
			}
			//add the fully-assembled pixel to the array for sorting
			toSort.push(pixel);
		}

		//sort the pixels
		var sorted = Array.sort(toSort, this.compareLuminance.bind(this));

		//insert the sorted pixels back into the Canvas
		//for each pixel below the cursor
		for(var i = 0; i < this.holdTime; i++){
			//for each component in the pixel
			for(var j = 0; j < 4; j++){
				var pixelI = ((i+mouseY)*d*width+mouseX)*d*4+j;
				pixels[pixelI] = sorted[i][j];
			}
		}

		//necessary for having p5.js acutally update the 
		//Canvas with edited pixel data
		updatePixels();
	} else {
		//reset mouse hold timer
		this.holdTime = 0;
	}
};

//compare the luminance between two RGB pixel values.
//used for javascript's Array.sort function
//returns 0 if the pixels are the same
//returns a negative number if B is darker than A
//returns a positive number if B is lighter than A
quinkennedy.compareLuminance = function(pixelA, pixelB){
	var luminanceA = this.getLuminance(pixelA);
	var luminanceB = this.getLuminance(pixelB);
	return luminanceA - luminanceB;
};

//get the luminance for an individual RGB pixel
quinkennedy.getLuminance = function(pixel){
	//convenience variables for accessing individual components
	var redI = 0, greenI = 1, blueI = 2, alphaI = 3;
	//comparative weights for perception of individual component colors
	// -- from my vague memory of Adobe weights for Luminance calculation
	var redWeight = .2, greenWeight = .7, blueWeight = .1;
	
	var luminance = pixel[redI] * redWeight +
	                 pixel[greenI] * greenWeight +
	                 pixel[blueI] * blueWeight;
	return luminance;
};


