// check to make sure the left side is the same height as right side
function checkSize(){
    $(".left").height($(".right").height());
	$('.left').css('min-height',($(".right").height()));
	if ($(this).width() < 499){
		console.log("her");
	 	$(".left").height(
	 		'150px');
	 	$('.left').css('min-height', '150px');
	}
}

//check if it is in the mobile screen
function checkMobile(){
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
}


$(document).ready(function() {

	//This is the preload screen (set with timer because not enought things to load)
	setTimeout(function(){
		document.getElementById('hiddenAfter').style.display = "block";
		$('body').addClass('loaded');
	}, 3010);

	//Start the animation for the "Born to Innovate" tag line
	setTimeout(function(){
		document.getElementsByClassName('typewriter')[0].style.display = "flex";

	}, 4800);

	//check if this is a mobile view
	checkMobile();

	// delay the checkSize function until after the right side have finished loading
	setTimeout(function(){
		checkSize(); // to check the size of screen to be responsive
	}, 700);

});

//Change the hamburger menu icon to X when open and back to the hamburger menu icon when close
function changeForMobileMenu(x){
	x.classList.toggle("change");

	//Check if the hamburger menu have been pressed and if so, then show menu options
	if ($(x).hasClass( "change")){
		$('#mobileUL').css({
			 display:'block',});
	}
	else{
		$('#mobileUL').css({
			 display:'none',});
	}
}

// Change to the individual project page
function projectClick(){
	var target = event.target || event.srcElement;
	var id = target.id;
	var targetRow = document.getElementById(id);
	$(targetRow).removeClass('animated fadeInDown');
	$(targetRow).addClass('animated slideOutLeft');

	setTimeout(function(){
		
		console.log(targetRow);
		$(".left").animate({
			width: '100%',});

		// Hide the main project page
		$("#projectName").css({
			 visibility: 'hidden',});
		// Hide main project page content
		$('#control').css({
		 display:'none',});
		$("#data").css({
		 display:'none',});
		$("#Three-3d").css({
		 display:'none',});
		$('h5').css({
		 display:'none',});
		$('h3').css({
		 display:'none',});
		$('.mobile').css({
		 display:'none',});

		// If you click on Control Redesign
		if (id == "control"){
			// Unhide the control section
			$('#ControlLeftSection').css({ // Left side of screen
			 display:'block',});
			$('.left').css({
			 background: '#5a8ba9',
			 width: '100wv'});
			$('.left').addClass('animated slideInRight');
			
			$('.left').css({
			 width: '25wv'});

			$('#ControlSection').css({ // Main area of text
			 display:'block',});
			$(".right").width('100%');
			$('.right').addClass('animated slideInRight2');
		}

		// If you click on Data Visualization
		if (id == "data"){
			// Show content for Data Visualization Project
			$('#dataVizLeftSection').css({ // Left side of screen
			 display:'block',});
			$('.left').css({ 
			 background: '#16a085',
			 width: '100wv'});
			$('.left').addClass('animated slideInRight');
			
			$('.left').css({
			 width: '25wv'});

			$('#dataVizSection').css({ // Main area of text
			 display:'block',});
			$(".right").width('100%');
			$('.right').addClass('animated slideInRight2');
		}

		//If user click on 3D Print Holder
		if (id == "Three-3d"){
			// Show content for Data Visualization Project
			$('#Three-DLeft').css({ // left side of section
			 display:'block',});
			$('.left').css({
			 background: '#8e44ad',
			 width: '100wv'});
			$('.left').addClass('animated slideInRight');
			
			$('.left').css({
			 width: '25wv'});

			$('#Three-3dSection').css({ // main section
			 display:'block',});
			$(".right").width('100%');
			$('.right').addClass('animated slideInRight2');
		}

		// Remove the down the grid system
		$('#leftCol').removeClass('col span_1_of_2').addClass('col span_3_of_12');
		$('#rightCol').removeClass('col span_1_of_2').addClass('col span_9_of_12');
		checkSize();
	}, 1100);
}

// For the project page, when you return from the individual project page to main project page
function refresh(){
	// need to reload it a couple time for animation and left side to show
	location.reload();
	location.reload();
	location.reload();

	$('body').addClass('loaded');
	$('testSize').css("float") == "none";
	checkSize();
	 $(".left").height($("#project").height());


}	

// Returns back to the homepage
function openHome(){
	window.open('index.html', "_self");
}


// Responsive Web to resize the screen as you change screen size
$(window).resize(function() {
	checkSize();
	checkMobile();
});
