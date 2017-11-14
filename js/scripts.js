
$(document).ready(function() { 
    $("#paragOcultar").click(function(){
    	var vezes = $("#fundoCurriculo").height();
			
			$("#imagem").slideToggle("slow");
        	$("#fundoCurriculo").css('height', '100%');	
        	
    }); 

	$(function(){
	  $(".carousel").carousel({
	auto    : 4000,
	speed   : 2000,
	visible : 1
	  })
	})

	$('.fancybox').fancybox();
    
	
});
