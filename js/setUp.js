window.onload = function(){
	canvas = document.getElementById("Canvas");
	body = document.getElementById("body");
	context = canvas.getContext("2d");
	canvas.width= window.innerWidth;
	canvas.height = window.innerHeight;
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
	CountDown = setInterval(startCount,1000/1);
};


var i =3;
var startCount = function(){
	canvas.width= window.innerWidth;
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
		showDots();
		setTimeout(stopWatch,1000);
	}
};

var count = 0;
var stopWatch = function(){
	count++;
	if(count===60){
		TimeOut = true;
		clearTimeout();
	}
}
var TimeOut = false;
var numberOfDots  = 0;

var showDots = function(){
	context.clearRect(0,0,canvas.width,canvas.height);
	var dot = new randomDot(canvas.width,canvas.height);
	console.log(dot.color + " " + dot.x +" " +  dot.y + " " + dot.radius);
	context.fillStyle = dot.color;
	context.beginPath();
	context.arc(dot.x,dot.y,dot.radius,0,2*Math.PI);
	context.fill();
	context.stroke();

	var left = { x : dot.x -dot.radius , y : dot.y };

	var right = { x : dot.x + dot.radius , y : dot.y };

	var top = { x : dot.x , y : dot.y + dot.radius };
	
	var bottom = { x : dot.x , y : dot.y - dot.radius };

	var clickedDot;

	if(TimeOut === true){
		context.clearRect(0,0,canvas.width,canvas.height);
		console.log(numberOfDots/)
	}
	else{
		if(canvas.addEventListener){
		canvas.addEventListener("click",function(e){
			clickedDot = isDotClicked(top,right,bottom,left, e.clientX, e.clientY);
			if(clickedDot===true){
				numberOfDots++;
				console.log(numberOfDots);
				showDots();
			};
			});		
		}
	else if(canvas.attachEvent){
		canvas.addEventListener("click",function(e){
			clickedDot = isDotClicked(top,right,bottom,left, e.clientX, e.clientY);
			if(clickedDot===true){
				numberOfDots++;
				showDots();
			};

		});
		}
	}
	
};

var isDotClicked = function(top,right,bottom,left,clickedX,clickedY){
	is_X_Range_Ok = (clickedX > left.x) && (clickedX < right.x) ;
	is_Y_Range_Ok = (clickedY > bottom.y) && (clickedY < top.y);
	is_Range_Ok = is_X_Range_Ok && is_Y_Range_Ok;
	return is_Range_Ok;
};