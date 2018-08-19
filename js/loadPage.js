// JavaScript Document
$(document).ready(function() {
	//load initial page
	$('.footer').load('./pages/footer.html');
	
	//load page by click
	$('.item').click(function() {
		var page = $(this).attr('href');
		window.scrollTo(0, 0);
		$('.pusher').fadeOut(200, function() {
			$('.pusher').hide().load('./pages/' + page + '.html', function() {
				$('.pusher').fadeIn(200);
			});
		});
	});
		//load('./pages/' + page + '.html');
		return false;
});