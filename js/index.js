var startButton;
var time; 
var timeInterval;
var clickedOnce = false;
var circle;
var currentuser;
var temprank;
var rank;
function setup(){
//	$("#exit").hide();
	$("#menuBar").hide();
	$("#menuBar").slideDown(1500);
	firebase.auth().onAuthStateChanged(function (user){
	 	if(user){
	 		currentuser = user;
	 		startButton = select("#StartButton");
			time= select("#time");
			circle = select('#circle1');
			userName = select('#userName');
			rank = select('#userRank');
			var name = user.displayName.split(" ");
			name = name[0];
			var temp = name[0].toUpperCase();
			for (var i = 1; i < name.length; i++) {
				temp += name[i];
			}
			userName.html("Welcome " + temp);

			firebase.database().ref("users/"+currentuser.uid+"/rank").once('value').then(function(snap){
				 temprank = snap.val();
				if(temprank != undefined && temprank != null){
					rank.html("Rank : #" + temprank);
				}
				else{
					rank.html(0);
				}
			})

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
	
	var signoutbutton2 = select("#signOut2");
	signoutbutton2.mousePressed(signout);
	
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
var highScorenum = 90;
var updateScoreandTime = function(){
	userName.html("Time Left : 30 seconds");
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
		userName.html("Time Left : " + --counter1 + " seconds");
		if (counter1===0) {
			clearInterval(startwatch);
			circle.hide();
			gameOver();
		}
		if (counter1 <= 5 && counter1 != 0 || counter1===25 || counter1 === 20 || counter1===15 || counter1 ===10) {
			time.html(counter1);
			time.show();
		}
		else{
			time.hide();
		}
		
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
		$("#exit").slideDown(1000);
		var exitButton = select("#exit");
		exitButton.mousePressed(function(){
			window.location.href= "game.html";
		});
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
	$("#circle1").stop();
	dontBounce=false;
	if (startgame === true) {
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
	if(startgame===true){
		circle.style("width", newcircle.radius+'em');
		circle.style("height",newcircle.radius+'em');		
		circle.show();
		if (! dontBounce) {
			$('#circle1').effect('bounce',200);
		}
	
	}
	else{
		circle.hide();
	}
	
	
}

function gameOver(){

	firebase.database().ref("users/"+currentuser.uid+"/highScore").once('value').then(function(snapshot){
		highScorenum = snapshot.val();
	//	console.log(highScorenum);
		if(highScorenum === undefined || highScorenum=== null){
		firebase.database().ref("users/"+currentuser.uid).set({
					name: currentuser.displayName,
					highScore: score
				});
		highScorenum = score;
	}
	else{
		if (score >= highScorenum) {
			firebase.database().ref("users/"+currentuser.uid).set({
				highScore: score
			});
			highScorenum = score;
		}
	}
	var currentScore = select("#currentScore");
	currentScore.html("Score : " + score);
	var highScore = select("#highScore");
	highScore.html("Highest Score : " + highScorenum);
	var gameover = select("#GameOver");
	var currentRank = select("#currentRank");
	currentRank.html(rank.html());
	gameover.show();
	firebase.database().ref("users/"+currentuser.uid+"/rank").on('value',function(snap){
				var tempscore = snap.val();
		//		console.log(tempscore);
				if (tempscore != undefined && tempscore != null){
					var currentRank = select("#currentRank");
					currentRank.html("Current Rank : " + tempscore);
				//	$("#currentRank").bounce();
				//	gameover.show();
				}
				else{
					var currentRank = select("#currentRank");
					currentRank.html("Current Rank : " + 0);
				//	gameover.show();
				}
			});



/*
			var currentRank = select("#currentRank");
	var temprank = snapshot.parent.child("rank").val();
	console.log("The rank is " + temprank);
	if (temprank != null && temprank != undefined) {
		currentRank.html("Current Rank : " + tempscore);
	}
	else{
		currentRank.html("Current Rank : " + 0);
	}
	
					
					gameover.show();*/
	});
	
	startgame = false;
	time.hide();
	
	circle.hide();
	var replay = select("#replay");
	replay.mousePressed(function(){
		window.location.href = "game.html";
	});
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
