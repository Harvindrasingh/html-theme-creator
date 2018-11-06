$(function() {
    'use strict';
    // Fullpage scrolling
    // $('#fullpage').fullpage();
    
	$(".description").letterfx({
		fx: "smear",
		letter_end: "stay",
		fx_duration: "6s"
	});

	$(".variable").slick({
		dots: false,
		infinite: false,
		slidesToShow: 3.2,
		slidesToScroll: 1,  
		autoplay: true,
  		autoplaySpeed: 2000,
		responsive: [
			{
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    }
	    ]
	});
});