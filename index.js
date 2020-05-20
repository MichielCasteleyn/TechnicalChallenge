let img;

function preload() {
  img = loadImage('assets/cart.gif');
}

function setup() {
  createCanvas(640, 640);
  pixelDensity(1);
  img.loadPixels();
  loadPixels();
  }
  
function draw() {
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      // Calculate the 1D location from a 2D grid
      let loc = (x + y * img.width) * 4;
      // Get the R,G,B values from image
      let r, g, b;
      r = img.pixels[loc];
      // Calculate an amount to change brightness based on proximity to the mouse
      let maxdist = 50;
      let d = dist(x, y, mouseX, mouseY);
      let adjustbrightness = (255 * (maxdist - d)) / maxdist;
      r += adjustbrightness;
      // Constrain RGB to make sure they are within 0-255 color range
      r = constrain(r, 0, 255);
      // Make a new color and set pixel in the window
      //color c = color(r, g, b);
      let pixloc = (y * width + x) * 4;
      pixels[pixloc] = r;
      pixels[pixloc + 1] = r;
      pixels[pixloc + 2] = r;
      pixels[pixloc + 3] = 255;
    }
  }
  updatePixels();
}

jQuery(document).ready(function($) {

	// set the variables
	var timer;
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp =0;
    var circle = $("#circle");

    function mouseStopped(){    
        // if mouse stop moving remove class moving 
        // it will hide the circle with opacity transition                           
        circle.removeClass('moving');
    }
   
    $(document).mousemove(function(e){
    	// if mouse start moving add class moving
        // it will show the circle with opacity transition 
    	circle.addClass('moving');
    	// get the mouse position minus 160px to center the circle
        mouseX = e.pageX - 160;
        mouseY = e.pageY - 160; 
        // if mouse stop moving clear timer and call mouseStopped function
        clearTimeout(timer);
        timer=setTimeout(mouseStopped,3000);   
    });
    
    // set the momentum with setInterval function
    var loop = setInterval(function(){
       // change 12 to alter damping higher is slower
       xp += ((mouseX - xp)/6);
       yp += ((mouseY - yp)/6);
       circle.css({left: xp +'px', top: yp +'px'});  // 
    }, 30);

});