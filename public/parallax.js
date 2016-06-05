var banner_height = $('div.banner').outerHeight();
var page_height = $(window).outerHeight();
function parallax(){
	var scrolled = $(window).scrollTop();
	var offset = 20 + (scrolled/page_height) * 150;
	console.log(offset);
	$('div.banner').css('background-position', 'right 0px top ' + offset + '%');
}

$(window).scroll(function(e){
	parallax();
});
