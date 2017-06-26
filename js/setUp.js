

window.onload = function(){
	canvas = document.getElementById("Canvas");
	canvas.width= window.innerWidth * 0.8;
	canvas.height = window.innerHeight;
	body = document.getElementById("body");
	context = canvas.getContext("2d");
	box = document.getElementById("box");
	box2 = document.getElementById("box2");
	
	x = document.getElementById("StartButton");
	if (x.addEventListener) {
		x.addEventListener("click", startGame);
	} 
	else if (x.attachEvent) {
		x.attachEvent("onclick", startGame);
	} 
};

var startGame = function (){
	canvas.style.display = 'initial';
	x.style.display = 'none';
	box.style.display = 'initial';
	box2.style.display = 'initial';
	CountDown = setInterval(startCount,1000/1);
};


var i =3;
var startCount = function(){
	canvas.width= window.innerWidth * 0.8;
	canvas.height = window.innerHeight;
	context.fillStyle = '#000000';
	context.fillRect(0,0,canvas.width,canvas.height);
	if(i < 3){
		context.clearRect(0,0,canvas.width,canvas.height);
	}
	context.fillStyle = ('#FF0000');
	context.font = ("800% Arial");
	context.fillText(i, canvas.width/2, canvas.height/2);
	console.log(i);
	i--;
	if (i===-1) {
		context.clearRect(0,0,canvas.width,canvas.height);
		clearInterval(CountDown);
		startCounting();
		showDots();
	}
};

var TimeOut = false;
var numberOfDots  = 0;
var dot;
var showDots = function(){
	context.clearRect(0,0,canvas.width,canvas.height);
	dot = new randomDot(canvas.width,canvas.height);
	console.log(dot.color + " " + dot.x +" " +  dot.y + " " + dot.radius);
	context.fillStyle = dot.color;
	context.beginPath();
	if(dot.radius ===100){
		context.rect(dot.x,dot.y,60,60);
	}
	else{
		context.arc(dot.x,dot.y,dot.radius,0,2*Math.PI);
	}
	
	context.fill();
	context.stroke();

	var clickedDot;

	if(canvas.addEventListener){
		canvas.addEventListener("click",function(e){
			if(TimeOut === true){
				context.clearRect(0,0,canvas.width,canvas.height);
			}
			else{
				gameRules(e.clientX, e.clientY);
			}
		});		
	}
	else if(canvas.attachEvent){
		canvas.addEventListener("click",function(e){
			if(TimeOut === true){
				context.clearRect(0,0,canvas.width,canvas.height);
			}
			else{
				gameRules(e.clientX, e.clientY);
			}
			
		});
	}

	
};

var gameRules = function(clientX, clientY){
				clickedDot = isDotClicked(dot.x,dot.y,dot.radius,clientX,clientY);
				if(clickedDot===true){
					if(dot.radius===100){ //Reduces points of clicking recatangle
						numberOfDots--;
					}
					else{ //Adds points for clicking the dot.
						numberOfDots++;
					}
						
					context.clearRect(0,0,canvas.width,canvas.height);
					dot = new randomDot(canvas.width,canvas.height);
					context.fillStyle = dot.color;
					context.beginPath();
					if(dot.radius ===100){ //Creates rectangle if the returned radius is 100.
						context.rect(dot.x,dot.y,60,60);
					}
					else{ //Creates a circle / dot if the returned radius is not 100.
						context.arc(dot.x,dot.y,dot.radius,0,2*Math.PI);
					}
					context.fill();
					context.stroke();
				
				}
				else{ 
					if(dot.radius === 100){//If the rectangle is not clicked, points will be added.
						numberOfDots++;
					}
					else{//If the dot is not clicked, points will be deducted.
						numberOfDots--;
					}
					
					context.clearRect(0,0,canvas.width,canvas.height);
					dot = new randomDot(canvas.width,canvas.height);
					context.fillStyle = dot.color;
					context.beginPath();
					if(dot.radius ===100){
						context.rect(dot.x,dot.y,60,60);
					}
					else{
						context.arc(dot.x,dot.y,dot.radius,0,2*Math.PI);
					}
					context.fill();
					context.stroke();
				};
				console.log(numberOfDots);
			
}

var isDotClicked = function(xPoint,yPoint,radius,clickedX,clickedY){
	if(radius===100){
		var x_range_ok = (xPoint < clickedX) && (clickedX < xPoint+40);
		var y_range_ok = (yPoint < clickedY) && (clickedY < yPoint+40);
		var range_ok = x_range_ok && y_range_ok;
		return range_ok;
	}
	else{
		console.log("clickedX " + clickedX);
		console.log("clickedY " + clickedY);
		var x_dist = Math.abs(clickedX - xPoint);
		var y_dist = Math.abs(clickedY - yPoint);

		var totalDist = Math.sqrt((x_dist)**2 + (y_dist)**2);
		var clicked = totalDist < radius;
		return clicked;
	}
	
};