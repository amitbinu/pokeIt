var startButton;
var time; 
var timeInterval;
var clickedOnce = false;
var countdownTime;
var circle;
var maxCircleX = window.innerWidth *0.8;
var maxCircleY = window.innerHeight *0.8;
console.log(window.innerHeight + " " + window.innerWidth);
function setup(){
	firebase.auth().onAuthStateChanged(function (user){
	 	if(user){
	 		startButton = select("#StartButton");
			time= select("#time")
			countdownTime = select("#Time");
			circle = select('#circle1');
			time.hide();
			if(!clickedOnce){
				startButton.mousePressed(startcount);
			};
	 	}
	 	else{
	 		window.location.href = "index.html";
	 	}
	 });
	
	
}

function startcount(){
	time.show();
	startButton.hide();
	clickedOnce = false;
	timeInterval = setInterval(count,1000);
}
var counter =3 ;
var startgame = false;
var count = function(){
	if (counter == 0) {
		time.hide();
		clearInterval(timeInterval);
		startgame = true;
		countdown();

	}
	else{
		time.html(--counter +"");
	}
}

function countdown(){
	countdownTime.show();
	var information = select("#information");
	information.show();
	makenewcircle();
	circle.mousePressed(explode);
}

function explode(){
	dontBounce=false;
	$('#circle1').effect('explode',{'duration':300,'complete': makenewcircle});
}
var dontBounce = false;
function makenewcircle(){
	var newcircle = new randomDot(maxCircleX, maxCircleY);
	circle.position(newcircle.x, newcircle.y);
	circle.style("background", newcircle.color);
	console.log('radius = ' + newcircle.radius);
	if(newcircle.radius != 100){
		circle.style("width", newcircle.radius+'em');
		circle.style("height",newcircle.radius+'em');		
		circle.show();
		if (! dontBounce) {
			$('#circle1').effect('bounce',200);
		}
	
	}
	else{
		makenewcircle(); //make 'circle' look like rectangle and if is pressed , it should shake. 
	}
}

function windowResized(){
	if(startgame===true){
		maxCircleX = window.innerWidth *0.8;
		maxCircleY = windowResized.innerWidth *0.8;
		dontBounce=true;
		makenewcircle();
	}
}