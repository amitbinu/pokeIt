var startButton;
var time; 
var timeInterval;
var clickedOnce = false;
var circle;


function setup(){
	$("#menuBar").hide();
	$("#menuBar").slideDown(1000);
	firebase.auth().onAuthStateChanged(function (user){
	 	if(user){
	 		startButton = select("#StartButton");
			time= select("#time");
			circle = select('#circle1');
			userName = select('#userName');
			rank = select('#userRank');
			console.log(user);
			var name = user.displayName.split();

			userName.html("Welcome " + name[0]);
			time.hide();
			if(!clickedOnce){
				startButton.mousePressed(hideStartButton);
			};
	 	}
	 	else{
	 		window.location.href = "index.html";
	 	}
	 });

	var signoutbutton = select("#signOut");
	signoutbutton.mousePressed(signout);
	
	
}

function hideStartButton(){
	if (!clickedOnce === true) {
		clickedOnce = true;
		$('#StartButton').fadeOut({"duration":500,"complete":startcount});
		$('#userRank').slideUp(400);
		$('#userName').slideUp({'duration':400, 'complete':updateScoreandTime});
		
	}
	
}

var score = 0;

var updateScoreandTime = function(){
	userName.html("Time Left : 30");
	rank.html("Score : 0");
		$("#userRank").slideDown(500);
		$('#userName').slideDown(500);
}
var startwatch;
var stopwatch = function(){
	startwatch = setInterval(count1,1000);
}
var counter1 = 30;
var count1 = function(){
		console.log(counter1);
		userName.html("Time Left : " + counter1 + " seconds");
		if (counter1===0) {
			clearInterval(startwatch);
			circle.hide();
			var gameover = select("#GameOver");
			//gameover.show();
		}
		counter1--;
}

function startcount(){
	time.show();
	timeInterval = setInterval(count,1000);
}
var counter = 3 ;
var startgame = false;
var count = function(){
	if (counter == 0) {
		time.hide();
		clearInterval(timeInterval);
		startgame = true;
		stopwatch();
		countdown();

	}
	else{
		time.html(--counter +"");
	}
}


function countdown(){
	makenewcircle();
	circle.mousePressed(explode);
}

function explode(){
	dontBounce=false;
	
	if (counter1 > 0) {
		rank.html("Score : " + ++score);
		$('#circle1').effect('explode',{'duration':220,'complete': makenewcircle});
	}
	else{
		circle.hide();
	}

//	makenewcircle();
}
var dontBounce = false;
function makenewcircle(){
	var newcircle = new randomDot();
	circle.position(newcircle.x, newcircle.y);
	circle.style("background", newcircle.color);
	if(newcircle.radius != 100){
		circle.style("width", newcircle.radius+'em');
		circle.style("height",newcircle.radius+'em');		
		circle.show();
		if (! dontBounce) {
			$('#circle1').effect('bounce',200);
		}
	
	}
	else{
		makenewcircle(); //make 'circle' look like rectangle and if its clicked , it should shake. 
	}
	
	
}

function windowResized(){
	if(startgame===true){
		dontBounce=true;
		makenewcircle();
	}
}

function signout(){
	firebase.auth().signOut().then(function(){
		window.location.href = "index.html";
	}, function(error){
		console.log('Sign Out error', error);
	});
}