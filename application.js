$(document).ready(function() {

	$("#submit").on('click', function(e){
		e.preventDefault();
		$("#itemscontainer").append(
			$("#add").val();
		);
	});


/* Adding Items */
	$('input#add').keypress(function(event){
		
		if(event.which == 13){
			event.preventDefault();


			var doc_height = $(document).height();
			var win_height = $(window).height();
			
			if(doc_height > win_height){				
				$('div#container').css('height', 'auto');
			}			
		}
	}

/* Removing Checked Items */
	$('#submit').submit(function(event){		
		event.preventDefault();
		$('ul#itemscontainer li').each(function(){			
			if($(this).find('.hidden').hasClass('strike')){
				$(this).remove();
			}
		});
	});


});