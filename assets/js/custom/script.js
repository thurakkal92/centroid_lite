$(function(){
	// $('.owl-carousel').owlCarousel({
	// 	autoWidth:false,
	//     nav:true,
	//     items:5,
	//     margin:1,
	//     itemsDesktop: [1024, 3],
 //        itemsDesktopSmall: [768, 2],
 //        itemsTablet: [576, 1],
 //        responsiveRefreshRate: 200,
	//     navText: ['<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a>',' <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>']
	// });
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

    sr.reveal('.btn,.main-title,.content-sep,.p,.menu-container,.content-heading,.desc,.logo-img,.h2,.home-page-owl,.footer-container .menu-item,.footer-container img,.land-details .span,.round-img-container,.contact-us-form,.map-container,.mission-desc .col-md-4', intro);


	$(".navbar__opener").on("click",function(){
		toggleMenu();
	});

	$(".menu-list .menu-link").on("click",function(e){
		e.preventDefault();
		var target = "."+$(this).data('target');
		toggleMenu();
		$('html, body').animate({
        	scrollTop: $(target).offset().top
    	}, 1000);
		$('body').toggleClass('hidden-overflow');
	});

	function toggleMenu(){
		$(".nav-bar").toggleClass('navbar--opened');
		$(".menu-container").toggleClass('fadeIn animated');
		$('body').toggleClass('hidden-overflow');
		$(".home-content").toggleClass("bring-top");
	}
});