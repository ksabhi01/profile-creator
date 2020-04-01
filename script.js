	/* $(document).ready(function(){
	$(#submit-button).click(function(){
		$.ajax({
			url: "https://reqres.in/api/users",
			type: "POST",
			data: {
				name: $("#fname").val(),
				file: $("#file").val()
			}
			success: function(response){
				console.log(response);
				$(".textContainer").html(response.name);
				alert("thank you" + response.name + "for applying");
			}
			
			
		});
	});
});
 */


$(document).ready(function(){
    $('body').on('click', '#submit-button', function () {
			$.ajax({
			url : 'https://reqres.in/api/users',
			type: 'POST',
			data: {
				name : $('#fname').val(),
				profile : $('#file').val()
        },

        success: function(result){
			console.log(result);
			$('form').css({
				'display' : 'none'
			});
			$('#thanks').css({
				'display' : 'block'
			});
			$('#showcards').css({
				'display' : 'block'
			});
			$('#submit-button').css({
				'display' : 'none'
			});
			$('#reachus').css({
				'display' : 'none'
			});
		
        $('.textContainer').html(result.name);
			var contimg = result.profile;
            $('#showcards').append('<div class="card col-md-5 col-5"><img src="'+contimg+'" class="card-img-top" alt="..."><h5 class="card-title p-2">'+result.name+'</h5></div>');
            },

            error:function(){
               $('h1').html('ERROR');
            }
        });
    });
});






