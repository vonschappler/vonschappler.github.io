// JavaScript Document
$(document).ready(function() {
	// fix menu when passed
	$('.masthead').visibility({
		once: false,
		onBottomPassed: function() {
			$('.fixed.menu').transition('fade in');
		},
		onBottomPassedReverse: function() {
			$('.fixed.menu').transition('fade out');
		}
	});
	
	// create sidebar and attach to menu open
	$('.ui.sidebar').sidebar('attach events', '.toc.item');
<<<<<<< HEAD
	$('.ui.embed').embed( {
		play: false,
		replay: true
	});
=======
	$('.ui.embed').embed();
	
>>>>>>> 21c4b12ce1e02b60dea9814b426c1d1c3002d86d
});