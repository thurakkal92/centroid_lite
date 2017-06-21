$(function(){

	 window.sr = ScrollReveal({
        reset: false
    });

    // Customizing a reveal set
    var intro = {
        duration: 900,
        scale: 1,
        easing: "ease",
        distance: "50px",
        mobile: true,
        origin: "bottom",
        delay: 200
    };

    sr.reveal('.main-title,.content-sep,.p,.menu-container,.content-heading,.desc,.h2,.round-img-container,.contact-us-form,.map-container,.mission-desc .col-md-4', intro);


	$(".navbar__opener").on("click",function(){
		$(".nav-bar").toggleClass('navbar--opened');
		$(".menu-container").toggleClass('fadeIn animated');
		$('body').toggleClass('hidden-overflow');
	});
});