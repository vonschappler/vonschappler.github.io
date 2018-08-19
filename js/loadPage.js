// JavaScript Document
$(document).ready(function() {
	//load initial page
	$('.footer').load('./pages/footer.html');
	
	//load page by click
	$('.item').click(function() {
		window.scrollTo(0, 0);
		var page = $(this).attr('href');
		$('.pusher').fadeOut(500, function() {
			$('.pusher').hide().load('./pages/' + page + '.html', function() {
				$('.pusher').fadeIn(500);
			});
		});
		return false;
	});
});