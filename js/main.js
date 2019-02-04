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
	// setTimeout(function(){
	// 	document.getElementById('hiddenAfter').style.display = "block";
	// 	$('body').addClass('loaded');
	// }, 3010);

	//Start the animation for the "Born to Innovate" tag line
	// setTimeout(function(){
	// 	document.getElementsByClassName('typewriter')[0].style.display = "flex";
	// }, 4800);

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

// Hiding Animations
// Change to the individual project page
// function projectClick(){
// 	var target = event.target || event.srcElement;
// 	var id = target.id;
// 	var targetRow = document.getElementById(id);
// 	$(targetRow).removeClass('animated fadeInDown');
// 	$(targetRow).addClass('animated bounceOutLeft');

// 	setTimeout(function(){
		
// 		console.log(targetRow);
// 		$(".left").animate({
// 			width: '100%',});

// 		// Hide the main project page
// 		$("#projectName").css({
// 			 visibility: 'hidden',});
// 		// Hide main project page content
// 		$('#control').css({
// 		 display:'none',});
// 		$("#data").css({
// 		 display:'none',});
// 		$("#Three-3d").css({
// 		 display:'none',});
// 		$('h5').css({
// 		 display:'none',});
// 		$('h3').css({
// 		 display:'none',});
// 		$('.mobile').css({
// 		 display:'none',});

// 		// If you click on Control Redesign
// 		if (id == "control"){
// 			// Unhide the control section
// 			$('#ControlLeftSection').css({ // Left side of screen
// 			 display:'block',});
// 			$('.left').css({
// 			 background: '#5a8ba9',
// 			 width: '100wv'});
// 			$('.left').addClass('animated slideInRight');
			
// 			$('.left').css({
// 			 width: '25wv'});

// 			$('#ControlSection').css({ // Main area of text
// 			 display:'block',});
// 			$(".right").width('100%');
// 			$('.right').addClass('animated slideInRight2');
// 		}

// 		// If you click on Data Visualization
// 		if (id == "data"){
// 			// Show content for Data Visualization Project
// 			$('#dataVizLeftSection').css({ // Left side of screen
// 			 display:'block',});
// 			$('.left').css({ 
// 			 background: '#16a085',
// 			 width: '100wv'});
// 			$('.left').addClass('animated slideInRight');
			
// 			$('.left').css({
// 			 width: '25wv'});

// 			$('#dataVizSection').css({ // Main area of text
// 			 display:'block',});
// 			$(".right").width('100%');
// 			$('.right').addClass('animated slideInRight2');
// 		}

// 		//If user click on 3D Print Holder
// 		if (id == "Three-3d"){
// 			// Show content for Data Visualization Project
// 			$('#Three-DLeft').css({ // left side of section
// 			 display:'block',});
// 			$('.left').css({
// 			 background: '#8e44ad',
// 			 width: '100wv'});
// 			$('.left').addClass('animated slideInRight');
			
// 			$('.left').css({
// 			 width: '25wv'});

// 			$('#Three-3dSection').css({ // main section
// 			 display:'block',});
// 			$(".right").width('100%');
// 			$('.right').addClass('animated slideInRight2');
// 		}

// 		// Remove the down the grid system
// 		$('#leftCol').removeClass('col span_1_of_2').addClass('col span_3_of_12');
// 		$('#rightCol').removeClass('col span_1_of_2').addClass('col span_9_of_12');
// 		checkSize();
// 	}, 1100);
// }

// // For the project page, when you return from the individual project page to main project page
// function refresh(){
// 	// need to reload it a couple time for animation and left side to show
// 	location.reload();
// 	location.reload();
// 	location.reload();

// 	$('body').addClass('loaded');
// 	$('testSize').css("float") == "none";
// 	checkSize();
// 	 $(".left").height($("#project").height());


// }	

// Returns back to the homepage
function openHome(){
	window.open('index.html', "_self");
}


// Responsive Web to resize the screen as you change screen size
$(window).resize(function() {
	checkSize();
	checkMobile();
});


// // Resize SVG animation to be responsive. Help from https://codepen.io/sdras/pen/xbyopy
// var shape = document.getElementById("svg_inner");

// // media query event handler
// if (matchMedia) {
// 	var mq = window.matchMedia("(min-width: 500px)");
// 	mq.addListener(WidthChange);
// 	WidthChange(mq);

// }
// // media query change
// function WidthChange(mq) {
// 	if (mq.matches) {
//     shape.setAttribute("viewBox", "0 0 490 474");
//     shape.setAttribute("enable-background", "0 0 490 474");
// 	}
// 	else {
//     shape.setAttribute("viewBox", "0 490 500 500");
//     shape.setAttribute("enable-background", "0 490 500 500");
// 	}
// };


// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
  $(document).ready(function() {

  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    //return (elemTop >= docViewTop);
  }

  var sizeOfLine = 0;
  var previousDivSize = [];

  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInLeft');

       if (document.getElementById("test")){
	       if (this.parentElement.parentElement.parentElement.id !="test"){
		      	var sizeOfDiv = this.parentElement.parentElement.parentElement.offsetHeight;
		      	console.log("div size",sizeOfDiv);
		      	if (previousDivSize.indexOf(sizeOfDiv) < 0){
		      		previousDivSize.push(sizeOfDiv);
		      		sizeOfLine = sizeOfLine + sizeOfDiv;
		      	}
	      	}
		}
		else{
			if (this.parentElement.parentElement.parentElement.id !="prototype"){
			      	var sizeOfDiv = this.parentElement.parentElement.parentElement.offsetHeight;
			      	console.log("div size",sizeOfDiv);
			      	if (previousDivSize.indexOf(sizeOfDiv) < 0){
			      		previousDivSize.push(sizeOfDiv);
			      		sizeOfLine = sizeOfLine + sizeOfDiv;
			      	}
		      	}
			}
		
      //	console.log(sizeOfLine);
      	// for(var i=0;i<previousDivSize.length;i++){
       //  	if(previousDivSize[i]===sizeOfDiv){return true;}}
      	document.getElementById('line').style.height = sizeOfLine + 50 +'px';
      }
    });

  // $(window).scroll(function() {
  //   $('.scroll-animations .animatedU').each(function() {
  //     if (isScrolledIntoView(this) === true) {
  //       $(this).addClass('fadeInUp');
  //     }
  //   });
  //  });
  });

  $(window).scroll(function() {
    $('#line').each(function() {
      if (isScrolledIntoView(this) === true) {
      	var aboutHeight= document.getElementById('about').offsetHeight;
      	//console.log ("about's Height",aboutHeight);
        document.getElementById('line').style.height = aboutHeight + 50 +'px';

        var lineHeight = document.getElementById('line').offsetHeight;
        //console.log ("line Height",lineHeight);
      }
    });
   });
});
  // END OF SCROLL ANIMATIONS//


  // STEPH SCROLL ANIMATION
 $(document).ready(function() {
 	// var scrollTop = $(window).scrollTop();

 	// var projectHeaderHeight= document.getElementById('projectHeader').clientHeight;
 	// //console.log ("projectHeader Height",projectHeaderHeight);

 	// var aboutHeight= document.getElementById('about').offsetHeight;
 	// //console.log ("about's Height",aboutHeight);

 	// elementOffset = $('#about').offset().top;
  //   aboutDistance = (elementOffset - scrollTop);

 	//console.log ("aboutLoc",aboutDistance);

 	// var empathizeHeight= document.getElementById('empathize').clientHeight;
 	// console.log ("empathizeHeight",empathizeHeight);

 	// var empathizeLoc= document.getElementById('empathize').top();
 	// console.log ("empathizeLoc",empathizeLoc);
 	


 	// var defineHeight= document.getElementById('define').offsetHeight;
 	// console.log ("defineHeight",defineHeight);

 	// var ideateHeight= document.getElementById('ideate').offsetHeight;
 	// console.log ("ideateHeight",ideateHeight);

 	// var prototypeHeight= document.getElementById('prototype').offsetHeight;
 	// console.log ("prototypeHeight",prototypeHeight);

 	// var testHeight= document.getElementById('test').offsetHeight;
 	//console.log ("testHeight",testHeight);

 	//Make the line size of the container



});
  // END OF STEPH SCROLL ANIMATE

