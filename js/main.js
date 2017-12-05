$(document).ready(function() {
	setTimeout(function(){
		
		document.getElementById('hiddenAfter').style.display = "block";
		$('body').addClass('loaded');
		// document.getElementById('content').style.display = "block";
		// document.getElementById('content').style.zIndex = "1500";
	}, 3500);

	setTimeout(function(){
		document.getElementsByClassName('typewriter')[0].style.display = "flex";

	}, 5000);

	if ($(this).width() < 499){
		$('#mobileHeader').css({
			 display: 'block',});
	}

	else{
		$('#mobileHeader').css({
			 display: 'none',});
	}
	checkSize();
		
});

function projectClick(){
	var target = event.target || event.srcElement;
	var id = target.id;
	var targetRow = document.getElementById(id);
	$(targetRow).addClass('animated slideOutLeft');

	$(".left").animate({
		width: '100%',});

	$("#projectName").css({
		 visibility: 'hidden',});

	if (id == "control"){
		$("#data").css({
		 display:'none',});
		$("#Three-3d").css({
		 display:'none',});
		$('h5').css({
		 display:'none',});
		$('h3').css({
		 display:'none',});
		$('#control').css({
		 display:'none',});
		$('.mobile').css({
		 display:'none',});
		$('#ControlSection').css({
		 display:'block',});
		$('#ControlLeftSection').css({
		 display:'block',});
		$('.left').css({
		 background: '#5a8ba9',});

		$('#leftCol').removeClass('col span_1_of_2').addClass('col span_3_of_12');
		$('#rightCol').removeClass('col span_1_of_2').addClass('col span_9_of_12');
		checkSize();
	}

	if (id == "data"){
		$("#data").css({
		 display:'none',});
		$("#Three-3d").css({
		 display:'none',});
		$('h5').css({
		 display:'none',});
		$('h3').css({
		 display:'none',});
		$('#control').css({
		 display:'none',});
		$('.mobile').css({
		 display:'none',});
		$('#dataVizSection').css({
		 display:'block',});
		$('#dataVizLeftSection').css({
		 display:'block',});
		$('.left').css({
		 background: '#16a085',});

		$('#leftCol').removeClass('col span_1_of_2').addClass('col span_3_of_12');
		$('#rightCol').removeClass('col span_1_of_2').addClass('col span_9_of_12');
		checkSize();
	}

	if (id == "Three-3d"){
		$("#data").css({
		 display:'none',});
		$("#Three-3d").css({
		 display:'none',});
		$('h5').css({
		 display:'none',});
		$('h3').css({
		 display:'none',});
		$('#control').css({
		 display:'none',});
		$('.mobile').css({
		 display:'none',});
		$('#Three-3dSection').css({
		 display:'block',});
		$('#Three-DLeft').css({
		 display:'block',});
		$('.left').css({
		 background: '#8e44ad',});

		$('#leftCol').removeClass('col span_1_of_2').addClass('col span_3_of_12');
		$('#rightCol').removeClass('col span_1_of_2').addClass('col span_9_of_12');
		checkSize();
	}

}

function iconChange(x){
	x.classList.toggle("change");
	if ($(x).hasClass( "change")){
		$('#mobileUL').css({
			 display:'block',});
	}

	else{
		$('#mobileUL').css({
			 display:'none',});
	}
}

function openHome(){
	console.log("hi");
	window.open('index.html', "_self");
}


$(window).resize(function() {
	checkSize();
	if ($(this).width() < 499){
		$('#mobileHeader').css({
			 display: 'block',});
		$('#normalHeader').css({
			 display: 'none',});
		
	}

	else{
		$('#mobileHeader').css({
			 display: 'none',});
	}
});

function checkSize(){
    if ($(".testSize").css("float") == "none" ){
        $(".left").height($(".right").height());
		$('.left').css('min-height',($(".right").height()));
    };

}


$(".typewriter").velocity(
    { 
      easing: [ 60 ],
      duration: 4000
    });
