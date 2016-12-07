$(document).ready(function() {

	// ВЫравнивание блоков по высоте
	//$(".service-item h4").equalHeights(); 

	// toggle menu
	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".menu").slideToggle();
		return false;
	});

	//Слайдер  https://gist.github.com/KudelAndrei/fca3e6e73e1e0aa21996a12af58c9069
	$(".sl-header").slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.sl-nav',
		prevArrow: '<div class="sl-arrow sl-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', 
		nextArrow: '<div class="sl-arrow sl-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>', 
	});
	// навигация по верхнему слайдеру
	$(".sl-nav").slick({
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.sl-header',
		centerMode: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1100,
			settings: {
				arrows: false,
				slidesToShow: 2
			}
		},
		{
			breakpoint: 700,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}]
	});

	// слайдер portfolio
	$(".sl-portfolio").slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="sl-arrow sl-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', 
		nextArrow: '<div class="sl-arrow sl-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>', 
	});
	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


});
