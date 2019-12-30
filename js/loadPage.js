function showModal(a) {
	
	$('#modal').load('./pages/' + a + '.html', function() {
		$("#modal")
		.modal({
			onShow: function() {
				window.scrollTo(0, 0);
			},
			blurring: true,
			onHidden: function() {
				if (document.getElementById("gameList")) {
					table = $("#gameList").DataTable()
					table.destroy()
				}
				$(".ui.modal").remove();
				$("body").append("<div id=\"modal\" class=\"ui fullscreen long modal\"><i class=\"close icon\"></i></div>");
			}
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