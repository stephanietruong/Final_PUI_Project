
function projectClick(){
	 $(this).addClass('animated bounceOutLeft');
}


$(window).resize(function() {
	checkSize();
});

function checkSize(){
    if ($(".testSize").css("float") == "none" ){
        $(".left").height($(".right").height());
		$('.left').css('min-height',($(".right").height()));
    };

}