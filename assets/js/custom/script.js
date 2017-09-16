$(function(){
	$(".carousel-item").each(function(){
		var src = $(this).data("src");
		$(this).find('.carousel-img').css("background-image","url(" + src + ")");
	});
	window.sr = ScrollReveal({
        reset: false
    });

    // Customizing a reveal set
    var intro = {
        duration: 900,
        scale: 1,
        easing: "ease",
        distance: "70px",
        mobile: true,
        origin: "bottom",
        delay: 200
    };

    sr.reveal('.products .sub-section,.card,show-more-btn,.highlited,.question-head,.content-heading,.desc,.h2,.home-page-owl,.footer-container .menu-item,.footer-container img,.land-details .span,.round-img-container,.contact-us-form,.map-container,.mission-desc .col-md-4', intro);


	$(".navbar__opener").on("click",function(){
		toggleMenu();
	});

	$('#home_page_carousel').carousel({
  		interval: 4000
	})

	$(".menu-list .menu-link").on("click",function(e){
		e.preventDefault();
		var target = "."+$(this).data('target');
		toggleMenu();
		$('html, body').animate({
        	scrollTop: $(target).offset().top
    	}, 1000);
		$('body').removeClass('hidden-overflow');
	});

	$(".carousel-item").each(function(){
		var src = $(this).data("src");
		$(this).find('.carousel-img').css("background-image",src);
	});
	$(".show-more-btn").on("click",function(){
		$(".extra-content").slideToggle('slow');
		if ($(this).text() == "Show more") 
		{ 
			$(this).text("Show less"); 
		} 
		else 
		{ 
			$(this).text("Show more"); 
			$('html, body').animate({
		        scrollTop: $('.extra-content').offset().top - 500
		    }, 'slow');
		 }

	})

	function toggleMenu(){
		$(".nav-bar").toggleClass('navbar--opened');
		$(".menu-container").toggleClass('fadeIn animated');
		$('body').toggleClass('hidden-overflow');
		$(".home-content").toggleClass("bring-top");
	}
});