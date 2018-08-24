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
				$('#pageMenu').load('./pages/menu.html #mainMenu');
				$(".sidebar.menu").load("./pages/menu.html #sideMenu");
				$(".hidden.fixed.menu").load("./pages/menu.html #fixedMenu");
				$('.pusher').fadeIn(500);
			});
		});
		
		return false;
	});
});