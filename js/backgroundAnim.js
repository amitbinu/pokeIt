
var startAnim = function(){
//	circle1.style.left = circle1.style.top  =  0;
	var dot = new randomDot(window.innerWidth,window.innerHeight);
	circle1.style.left = dot.x+"px";
	circle1.style.top = dot.y+"px";
	circle1.style.width  = dot.radius+"px";
	circle1.style.height = dot.radius+"px";
	circle1.style.background = dot.color;

	$('#circle1').effect('bounce',{times:4, duration:800,complete: explode});
	
};

var explode = function(){
	$('#circle1').effect('explode',600);
}