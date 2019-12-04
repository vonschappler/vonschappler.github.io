// JavaScript Document
function showLibGame() {
	$('#game')
		.modal({
			blurring: true
		})
		.modal('setting', 'transition', 'horizontal flip')
		.modal('show');
}

function showModal(a) {
	$('#modal').load('./pages/' + a + '.html', function() {
		$("#modal")
		.modal({
			blurring: true
		})
		.modal('setting', 'transition', 'horizontal flip')
		.modal('show');
		$('.ui.embed').embed();
	});
}

function loadPage(a) {
	var newUrl = './pages/' + a + '.html';
	window.scrollTo(0, 0);
	$('.pusher').fadeOut(500, function() {
		$('.pusher').hide().load(newUrl, function() {
			$('.pusher').fadeIn(500);
		});
		
		$('.ui.embed').embed();
		return false;
	});
}