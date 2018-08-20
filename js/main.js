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
	$('.ui.embed').embed();
	$('.ui.circular.image').popup({
		position : 'right center',
		target   : '.test.image',
		title    : 'My favorite dog',
		content  : 'My favorite dog would like other dogs as much as themselves'
	});
	
	

	
});