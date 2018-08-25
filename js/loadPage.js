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

$(document).ready(function(){
	
	window.scrollTo(0, 0);
	//carrega o rodapé
	$('.footer').load('./pages/footer.html');
	
	//carrega ao clicar no menu
	$('.item').click(function() {
		var page = $(this).attr('href');
		window.scrollTo(0, 0);
		$('.pusher').fadeOut(500, function() {
			$('.pusher').hide().load('./pages/' + page + '.html', function() {
				$('.pusher').fadeIn(500);
			});
		});
		
		return false;
	});
});