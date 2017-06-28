var gameRules = function(clientX, clientY){
				clickedDot = isDotClicked(dot.x,dot.y,dot.radius,clientX,clientY);
				if(clickedDot===true){
					if(dot.radius===100){ //Reduces points of clicking recatangle
						numberOfDots--;
					}
					else{ //Adds points for clicking the dot.
						numberOfDots++;
					}
						
					context.clearRect(0,0,canvas.width,canvas.height);
					dot = new randomDot(canvas.width,canvas.height);
					context.fillStyle = dot.color;
					context.beginPath();
					if(dot.radius ===100){ //Creates rectangle if the returned radius is 100.
						context.rect(dot.x,dot.y,60,60);
					}
					else{ //Creates a circle / dot if the returned radius is not 100.
						context.arc(dot.x,dot.y,dot.radius,0,2*Math.PI);
					}
					context.fill();
					context.stroke();
				
				}
				else{ 
					if(dot.radius === 100){//If the rectangle is not clicked, points will be added.
						numberOfDots++;
					}
					else{//If the dot is not clicked, points will be deducted.
						numberOfDots--;
					}
					
					context.clearRect(0,0,canvas.width,canvas.height);
					dot = new randomDot(canvas.width,canvas.height);
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
				};
				console.log(numberOfDots);
			
}
