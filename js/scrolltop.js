$(document).ready(function(){
		$(window).scroll(function(){
			scrolltop = $(window).scrollTop();
			doscroll();
		});
	function doscroll(){
		switch(true) {
			case (scrolltop<100):
				$("body > header").removeClass();
				$("nav").removeClass();
				break;
			case (scrolltop>99 && scrolltop<305):
				$("body > header").removeClass();
				$("body > header").addClass("halfsize");
				$("nav").removeClass();
				$("nav").addClass("new-nav");
				break;
			case (scrolltop>304):
				$("body > header").removeClass();
				$("body > header").addClass("halfsize");
				$("nav").removeClass();
				$("nav").addClass("new-nav");
								
				break;
		}	
	}
	
	
	});