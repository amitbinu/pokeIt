var randomDot = function(canvasWidth, canvasHeight){
	this.x = getRandomIntInclusive(20,canvasWidth-20);
	this.y = getRandomIntInclusive(20,canvasHeight-20);
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
	var randomNumber = getRandomIntInclusive(0,5);
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
	}
}