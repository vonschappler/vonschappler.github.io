// JavaScript Document
function mkGameList() {
	$.ajax({
			url:"../txt/games.csv",
			dataType:"text",
			success:function(data)
			{
				var employee_data = data.split(/\r?\n|\r/);
				var table_data = '<table id="gameList" class="ui celled table"><thead>';
				for(var count = 0; count<employee_data.length; count++){
					var cell_data = employee_data[count].split(",");
					table_data += '<tr>';
					for(var cell_count=0; cell_count<cell_data.length; cell_count++){
						if(count === 0){
							if (cell_count == 0) {
							table_data += '<th class="sorted ascending">'+cell_data[cell_count]+'</th>';
							} else {
								table_data += '<th>'+cell_data[cell_count]+'</th>';
							}
						}

						else {
							table_data += '<td>'+cell_data[cell_count]+'</td>';
						}
					}
					table_data += '</tr>';
				}
				table_data += '</table>';
				
				$('#tableLoad.content').html(table_data);
			}
		});
}


function showLibGame() {
	
	$('#game')
		.modal({
			blurring: true
		})
		.modal('setting', 'transition', 'horizontal flip')
		.modal('show');
}

$(document).ready(function() {
	window.scrollTo(0, 0);
	//carrefa o rodapé
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
		//$(".pusher").load('./pages/' + page + '.html');
		return false;
	});
});