$(document).ready(function() {

	// ВЫравнивание блоков по высоте
	//$(".service-item h4").equalHeights(); 

	//Слайдер  https://gist.github.com/KudelAndrei/fca3e6e73e1e0aa21996a12af58c9069
	$(".sl-header").slick({
		arrows: true,
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
