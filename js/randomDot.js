var randomDot = function(canvasWidth, canvasHeight){
	this.x = getRandomIntInclusive(50,canvasWidth-50);
	this.y = getRandomIntInclusive(50,canvasHeight-50);
	this.color = randomColor();
	this.radius = randomRadius();
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
	switch(randomNumber){
		case 0:
			return 20;
		case 1:
			return 30;
		case 2:
			return 40;
		case 3:
			return 45;
		case 4:
			return 50;
		case 5:
			return 55;
		case 6:
			return 100;
		case 7:
			return 100;
	}
}