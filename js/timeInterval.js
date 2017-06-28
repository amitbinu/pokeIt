var count = 30;
var updateData = angular.module('updateData',[]);
		updateData.controller('currentTime',['$scope',function($scope){
			$scope.setTime = count + " seconds";
			$scope.setScore = numberOfDots;
			$scope.displayTime = function(){
				$scope.setTime = count + " seconds";
				$scope.setScore = numberOfDots;
			};

			
			
		}]);

var startCounting = function(){
	stopwatch = setInterval(stopWatch,1000);
};

var stopWatch = function(){
	var newWidth1 =  Math.round(window.innerWidth * 0.8 - 2);
	var newWidth2 = Math.round(window.innerWidth * 0.8 + 2) ;
	var newHeight1 = Math.round(window.innerHeight - 2);
	var newHeight2 = Math.round(window.innerHeight + 2);

	var oldWidth = Math.round(canvas.width);
	var oldHeight = Math.round(canvas.height);

	if(oldWidth < newWidth1 || oldWidth > newWidth2 || oldHeight < newHeight1 || oldHeight > newHeight2){
		canvas.width = window.innerWidth * 0.8;
		canvas.height = window.innerHeight;
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

	}
	count--;
	console.log(count);
	var scope = angular.element(document.getElementById("Time")).scope();
	 scope.$apply(function () {
    scope.displayTime();
    });
	if(count===0){
		TimeOut = true;
		clearTimeout(stopwatch);
	};
};