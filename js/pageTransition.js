
/* Modify from https://designmodo.com/create-full-page-animation/*/
$(document).ready(function() {

	$.fn.animateRotate = function(angle, duration, easing, complete) {
	  var args = $.speed(duration, easing, complete);
	  var step = args.step;
	  return this.each(function(i, e) {
		args.complete = $.proxy(args.complete, e);
		args.step = function(now) {
		  $.style(e, 'transform', 'rotate(' + now + 'deg)');
		  if (step) return step.apply(e, arguments);
		};

		$({deg: 0}).animate({deg: angle}, args);
	  });
	};
	

	$("#about-page").css("width", "100%");
	$("#about-page").fadeIn();
	$(".about-content").fadeIn();
	
	$(".linkToContact").on("click", function() {
		$("#about-page").css("backgroundColor","#e04253");
		$(".about-content").fadeOut();
		$("#about-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		setTimeout(function() {
			$("#about-page").fadeOut();		 
		}, 100);
		
		setTimeout(function() {
			$("#contact-page").animateRotate(0, 0);
			$("#contact-page").css("height", "25px");
			$("#contact-page").css("width", "375px");
			$("#contact-page").fadeIn();
			$("#contact-page").animate({
				backgroundColor: "#e42d9f"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(this).animate({
						height: "100vh"
					}, function() {
						$(".contact-content").fadeIn(300);
					});
				});
			});
		}, 800);
		$("#contactLEFT").css("backgroundColor","#e04253");
		
		$(".contact-content").css("backgroundColor","#fff");
	});
	$(".linkToAbout").on("click", function() {
		$(".contact-content").fadeOut();
		$("#contact-page").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#contact-page").fadeOut();			
		}, 1500);
		
		setTimeout(function() {
		$("#about-page").animateRotate(0, 0);
		$("#about-page").css("height", "25px");
		$("#about-page").css("width", "375px");
			$("#about-page").fadeIn();
			$("#about-page").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".about- content").fadeIn(300);
				});
			});

		}, 400);
	});

	$(".about- content").css("backgroundColor","#fff");
});