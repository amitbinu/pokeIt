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