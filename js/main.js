

$(window).scroll(function(){
	var content = $(this).scrollTop();
	$(".header-content").css({
		"transform" : "translate(0%, " + content / 5.5 + "%"
	});
});

$(".new, .bl, .teach, .article").animated("flipInY", "");

$(".navbar a, .hb").mPageScroll2id({
	offset : 100,
	scrollSpeed : 500
});

function showNews() {
	var elem = $(".news").css('height');
	if(elem == "530px") {
		$(".news").css({
			"height" : "auto",
			"transition" : "1s"
		});
	} else {
		$(".news").css({
			"height" : "530px",
			"transition" : "1s"
		});
	}
};
