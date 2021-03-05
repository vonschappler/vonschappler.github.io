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
	var newUrl = '/pages/' + a + '.html';
	check = a.split("/")
	lang = check[0]
	page = check[1]
	console.log(lang)
	console.log(page)
	window.scrollTo(0, 0);
	$('.pusher').fadeOut(1000, function() {
		$('.pusher').hide().load(newUrl, function() {
			$('.pusher').fadeIn(1000);
		});
		$('.ui.embed').embed();
		return true;
	});
	const link = new URL(window.location)
	link.searchParams.set('display', page)
	link.searchParams.set('lang', lang)
	console.log(link)
	window.history.pushState({}, '', link);
}

function goHome() {
	var url = 'http://rebrand.ly/vonWebsite';
	var win = window.open(url, '_blank');
	win.focus();
}

function setAddress() {
	lang = 'en'
	page = 'index'
	console.log(lang)
	console.log(page)
	const link = new URL(window.location)
	link.searchParams.set('display', page)
	link.searchParams.set('lang', lang)
	console.log(link)
	window.history.pushState({}, '', link);
}