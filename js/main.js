// JavaScript Document

function landing() {
	//var home = './pages/home.html';
	var home = '/pages/home.html'; //github
	$('#page').load(home);
	$(document).setTitle("von Schappler Gaming - HOME");
	//alert("Carregando " + page + " no link\n" + home);
	return false;
}

	function loadPages() {
		$('.item').click (function () {
			var page = $(this).attr('href');
			//var link = './pages/' + page + '.html';
			var link = '/pages/' + page + '.html'; //gitub
			$('#page').load(link);
			return false;
		});
	}


