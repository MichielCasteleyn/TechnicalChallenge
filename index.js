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