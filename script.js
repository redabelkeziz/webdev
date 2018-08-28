var t0, t1;
var isVisible = false;
        createShape();
        function getRandomColor() {
			var letters = '0123456789ABCDEF';
			var color = '#';
			for (var i = 0; i < 6; i++) {
			    color += letters[Math.floor(Math.random() * 16)];
			}
	    return color;
		} 
        
        function setRandomSize() {

        var randomSize = Math.random();
        return randomSize;
        }

		function setRandomX(size) {
        
        var randomX = Math.random()*(1-size);

        return randomX;
    }
        function setRandomY(size) {

        var randomY = Math.random()*(1-size);
        return randomY;
        }

        function setIsCircle() {
        return ( Math.random() > 0.5 );
        }

        

      function newShape(){
        	if (isVisible == true) { var t1 = new Date(); var time = (t1 - t0)/1000;
	        	document.getElementById("timer").innerHTML = 	"Your time: " + time + " seconds.";
	        	isVisible = false;
	        	document.getElementById("shape").style.opacity = 0;
	        	setTimeout(function(){ createShape(); }, 3000*Math.random());
        	}
   	  }
        
        function createShape(){
	        var size = setRandomSize();
	        var color = getRandomColor();
	        var X = Math.floor(100*setRandomX(size)) + "%";
	        var Y = Math.floor(100*setRandomY(size)) + "%";
	        var isCircle = setIsCircle();
		        if (isVisible == false) {
		        var shapeStyle = document.getElementById("shape").style;
		        shapeStyle.height = Math.floor(700*size) + "px";
		        shapeStyle.width = Math.floor(700*size) + "px";
		        shapeStyle.opacity = 1;
		    	shapeStyle.backgroundColor= color;
		    	shapeStyle.borderRadius = isCircle*100 + "%";
		    	shapeStyle.position ="relative"
		    	shapeStyle.top = Y;
		    	shapeStyle.left = X;

		    	isVisible = true;
		    	t0 = new Date();
		    	}
        }