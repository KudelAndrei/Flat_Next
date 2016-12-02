$(document).ready(function() {

	// ВЫравнивание блоков по высоте
	//$(".service-item h4").equalHeights(); 

	//Слайдер  https://gist.github.com/KudelAndrei/fca3e6e73e1e0aa21996a12af58c9069
	$(".sl-header").slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.sl-nav',
		prevArrow: '<div class="sl-arrow sl-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', 
		nextArrow: '<div class="sl-arrow sl-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>', 
	});

	$(".sl-nav").slick({
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.sl-header',
		centerMode: true,
		focusOnSelect: true
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
