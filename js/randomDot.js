var randomDot = function(){
	minHeight = windowHeight *0.2;
	maxHeight = windowHeight*0.85;

	minWidth = windowWidth * 0.05;
	maxWidth = windowWidth * 0.85;

	this.x = getRandomIntInclusive(minWidth,maxWidth);
	this.y = getRandomIntInclusive(minHeight,maxHeight);
	
	this.color = randomColor();
	this.radius = randomRadius();
}

function getRandomIntInclusive(min, max) {
	console.log("minimum " + min + " maximum " + max);
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
			return 100;
		case 7:
			return 100;
	}
}