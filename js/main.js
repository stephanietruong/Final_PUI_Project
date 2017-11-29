$(document).ready(function() {
	// setTimeout(function(){
 //        document.getElementById('content').addClass('loaded');
 //    }, 3000); //3 secs
 
	setTimeout(function(){
		$('body').addClass('loaded');

		// document.getElementById('Layer_1').style.display = "none";

		document.getElementById('content').style.display = "block";
		document.getElementById('content').style.zIndex = "1500";
		// document.getElementById('loader-wrapper').style.z-index=0;
		// document.getElementById('loader').style.z-index= 0;

	}, 3000);

	checkSize();
		
});

function projectClick(){
	var target = event.target || event.srcElement;
	var id = target.id;
	var targetRow = document.getElementById(id);
	$(targetRow).addClass('animated slideOutLeft');
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