$(function(){
	$(".navbar__opener").on("click",function(){
		$(".nav-bar").toggleClass('navbar--opened');
		$(".menu-container").toggleClass('fadeIn animated');
		$('body').toggleClass('hidden-overflow');
	});
	// $(document).on("click",".navbar--opened .navbar__opener",function(){
	// 	$(".menu-container").removeClass('fadeInDown animated');
	// });
});