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
        mobile: true
    };

    sr.reveal('.main-title,.content-sep,.p,.menu-container,.h2,.round-img-container', intro, 200);


	$(".navbar__opener").on("click",function(){
		$(".nav-bar").toggleClass('navbar--opened');
		$(".menu-container").toggleClass('fadeIn animated');
		$('body').toggleClass('hidden-overflow');
	});
});