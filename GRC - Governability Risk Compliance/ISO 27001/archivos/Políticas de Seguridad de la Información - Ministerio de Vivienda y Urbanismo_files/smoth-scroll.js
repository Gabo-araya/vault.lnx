// JavaScript Document

$('.ancla').click(function(e){				
		e.preventDefault();		//evitar el eventos del enlace normal
		var strAncla=$(this).attr('href'); //id del ancla
			$('body,html').stop(true,true).animate({				
				scrollTop: $(strAncla).offset().top
			},1000);
		
});


// Código para añadir los efectos de la cabecera al hacer scroll
jQuery(function ($) {
    if (typeof $('.menu-ditec').offset() !== 'undefined') {
        var altura = $('.menu-ditec').offset().top;
        if ($(document).scrollTop() > altura) {
            $('.menu-ditec').addClass('menu-fixed');
        }
 
        // Fijar el menú de navegación al hacer scroll
        $(document).on('scroll', function () {
 
            if ($(document).scrollTop() > altura) {
                $('.menu-ditec').addClass('menu-fixed');
 
            } else {
                $('.menu-ditec').removeClass('menu-fixed');
            }
 
        });
    };
 
});