$(document).ready(function() {
	$('.menu-btn, a.catalog, a.catalog-home').click(function(){
        $('.menu-btn').toggleClass('menu-btn-active');
        $('.menu-open').toggleClass('menu-open-act');
	});
});
