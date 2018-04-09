/*global $, alert, console */

$(function() {
	'use strict';
	
	$('html').niceScroll();
	
	/*--------- /Add Scrolled class to navbar -----*/
	$(window).scroll(function(){
		var navbar = $('nav');
		if($(window).scrollTop() >= navbar.height()){
			if(!navbar.hasClass('scrolled')){
				navbar.addClass('scrolled');
			}			
		}else{
			navbar.removeClass('scrolled');
		}
	});
	
	/*--------- Add Active Class to Clicked Link in navbar -----*/
	$(".navbar-nav li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		
		/*--------- Make Smooth Scroll -----*/
		$('html , body').animate({
			scrollTop : ($($(this).data("link"))).offset().top - 50
		},1500);
		
	
	});
	/*--------- Call Owl Carousel -----*/
	$(".owl-carousel").owlCarousel({
		loop:true,
		rtl:true,
		dots:false, 
		nav:true,
		navText :['<img src="img/rightArrow.png" alt="">','<img src="img/leftArrow.png" alt="">'],
		items:3,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed:1000,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:3,
			}
    	}
	
		
	});

	/*--------- jQuery counterUp -----*/ 
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	/*--------- Ttiger wow Animation -----*/ 
	new WOW().init();


});