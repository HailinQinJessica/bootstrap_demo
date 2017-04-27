
var main = function(){
	setInterval(function(){
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();
		console.log('1');
		if( nextSlide.length == 0 ){
			console.log('2');
			nextSlide = $('.slide').first();
		}
		currentSlide.bounceOut(600).removeClass('active-slide');
		nextSlide.slideUp(600).addClass('active-slide');
	},3000);
};

$(document).ready(main);