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
	
	$('.item').click(function() {
		var url = $(this).attr('href');
		var toLoad = url.split("/");
		var dir = toLoad[0];
		var lang = toLoad[1];
		var page = toLoad[2];
		var newUrl = dir + '/' + lang + '/' + page;
		window.alert(newUrl);
		window.scrollTo(0, 0);
		$('.pusher').fadeOut(500, function() {
			

			$('.pusher').hide().load(newUrl, function() {
				$('.pusher').fadeIn(500);
				
			});
			
		});

		$('.ui.embed').embed();
		return false;
				
	});
	
	$('.button').click(function() {
		var url = $(this).attr('href');
		var toLoad = url.split("/");
		var dir = toLoad[0];
		var lang = toLoad[1];
		var page = toLoad[2];
		var newUrl = dir + '/' + lang + '/' + page;
		window.alert(newUrl);
		window.scrollTo(0, 0);
		$('.pusher').fadeOut(500, function() {
			

			$('.pusher').hide().load(newUrl, function() {
				$('.pusher').fadeIn(500);
				
			});
			
		});
		$('.ui.embed').embed();
		return false;
	});
	
});