var randomDot = function(){
	minHeight = windowHeight *0.2;
	maxHeight = windowHeight*0.80;

	minWidth = windowWidth * 0.03;
	maxWidth = windowWidth * 0.85;

	
	
	this.color = randomColor();
	if(windowWidth > 800){
		this.radius =8; //randomRadius();
	}
	if(windowWidth > 600 && windowWidth <= 800){
		maxHeight = windowHeight*0.85;
		this.radius = 6; //randomRadius2();
	}
	if(windowWidth > 400 && windowWidth <= 600){
		maxHeight = windowHeight*0.88;
		this.radius = 5; //randomRadius3();
	}
	if(windowWidth <= 400){
		maxHeight = windowHeight*0.90;
		this.radius = 3; //randomRadius4();
	}
	this.x = minWidth;//getRandomIntInclusive(minWidth,maxWidth);
	this.y = maxHeight; //getRandomIntInclusive(minHeight,maxHeight);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var randomColor = function(){
	var randomNumber = getRandomIntInclusive(0,5);
	switch(randomNumber){
		case 0:
			return 'white';
		case 1:
			return 'red';
		case 2:
			return 'yellow';
		case 3:
			return 'blue';
		case 4:
			return 'green';
		case 5:
			return 'purple';
	}
}

var randomRadius = function(){
	var randomNumber = getRandomIntInclusive(0,7);
	return 9;
	switch(randomNumber){
		case 0:
			return 5;
		case 1:
			return 6.5;
		case 2:
			return 8;
		case 3:
			return 9.5;
		case 4:
			return 6;
		case 5:
			return 7;
		case 6:
			return 8;
		case 7:
			return 9;
	}
}

var randomRadius2 = function(){
	var randomNumber = getRandomIntInclusive(0,7);
	return 6;
	switch(randomNumber){
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 5;
		case 5:
			return 6;
		case 6:
			return 3.5;
		case 7:
			return 2.5;
	}
}

var randomRadius3= function(){
	var randomNumber = getRandomIntInclusive(0,7);
	return 5;
	switch(randomNumber){
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 5;
		case 5:
			return 1.5;
		case 6:
			return 2.5;
		case 7:
			return 3.5;
	}
}

var randomRadius4= function(){
	var randomNumber = getRandomIntInclusive(0,5);
	return 3;
	switch(randomNumber){
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 1.5;
		case 4:
			return 2.5;
		case 5:
			return 3.5;
	}
}