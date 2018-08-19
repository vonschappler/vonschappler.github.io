// JavaScript Document
$(document).ready(function() {
	//load initial page
	$('.footer').load('./pages/footer.html');
	
	//load page by click
	$('.item').click(function() {
		$(document.getElementsByClassName("menu")).toggleClass("active");
		//oldLink.toggleClass("active");
		
		//if ((oldLink).contains("active")) {
		//	alert(oldLink.toString);
		//	oldLink.remove("active");
		//}
		var page = $(this).attr('href');
		$(this).toggleClass("active");
		window.scrollTo(0, 0);
		$('.pusher').load('./pages/' + page + '.html');
		return false;
	});
});