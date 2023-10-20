jQuery(document).ready(function() {

    saez_carrusel();
    saez_busqueda();
    saez_votacion();
    saez_match();
    saez_social_share();
    saez_letras();
    saez_mapa();
    saez_tooltip();
    saez_popup();
    saez_beneficios();

});

function saez_beneficios() {

    if ( jQuery('#form-beneficios').length ) {

        jQuery('#form-beneficios').on('keyup keypress', function(e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });

    }

}

function saez_popup() {

    if ( jQuery('#modal-popup').length ) {

        var segundos  = jQuery('#modal-popup').data('segundos');
        var segundos2 = jQuery('#modal-popup').data('segundos2');
        segundos  = segundos * 1000;
        segundos2 = segundos2 * 1000;

        setTimeout(function(){

            jQuery('#modal-popup').modal('show');

            setTimeout(function(){

                jQuery('#modal-popup').modal('hide');

            }, segundos2);

        }, segundos);


        jQuery('#popup-cerrar').click(function(e) {

            e.preventDefault();
            jQuery('#modal-popup').modal('hide');

        });


    }


}

function saez_tooltip() {

    if ( jQuery('[data-toggle="tooltip"]').length ) {
        jQuery('[data-toggle="tooltip"]').tooltip();
    }

}


function saez_mapa() {

    titulo = '';
    slug   = '';

    jQuery('.regiones').click(function(e) {

        e.preventDefault();

        titulo = jQuery(this).attr('title');
        slug   = jQuery(this).data('slug');

        jQuery('#modal-mapa').modal('show');

    });

    jQuery('#modal-mapa').on('shown.bs.modal', function (e) {

        jQuery('.modal-title').text(titulo);
        var $cargador = jQuery('#mapa-cargador');
        $cargador.show();

        setTimeout(function(){

            saez_cargar_mapa(slug);

        }, 1000);

    });

    jQuery('#modal-mapa').on('hidden.bs.modal', function (e) {

        jQuery('.modal-title').empty();
        var $contenido = jQuery('#mapa-body');
        $contenido.empty();

    })

}

function saez_cargar_mapa(slug) {

    var $cargador  = jQuery('#mapa-cargador');
    var $contenido = jQuery('#mapa-body');
    var url_ajax   = jQuery('#modal-mapa').data('ajax');
    var html       = '';

    jQuery.ajax({
        url: url_ajax,
        type: 'POST',
        data: {
            action: 'jelly_mapa',
            slug: slug
        },
        beforeSend: function beforeSend() {
        },
        success: function success(data) {

            $cargador.css('display', 'none');

            console.log(data);

            if ( data.length ) {

                html += '<ul>';
                    jQuery.each(data, function (index, value) {

                        html += '<li><a href="' + value.url + '">' + value.titulo + '</a></li>';

                    });
                html += '</ul>'

            } else {

                html += '<p>No se encontraron artículos.</p>';

            }


            $contenido.append(html);


        },
        error: function error() {}

    });

}


function saez_letras() {

    $('#contraste').click(function(e) {

        e.preventDefault;
        $('body').toggleClass('contraste');

    });

    var count = 0;

    $('.letras').click(function(e) {

        e.preventDefault;
        var accion = $(this).data('accion');
        var size   = $(this).data('size');

        var size_menos = $('#menos').data('size' );
        var size_mas   = $('#mas').data('size' );

        if ( accion == '+' && count < 2 ) {
            count++;
        }

        if ( accion == '-' && count > 0 ) {
            count--;

        }

        switch ( count ) {
            case 0:
                $('body').removeAttr('style');
                $('html').removeAttr('style');
                $('li').removeAttr('style');
                $('a').removeAttr('style');
                $('#menos').addClass('desactivado');
                break;
            case 1:
                $('body').css('font-size', '1.05em');
                $('html').css('font-size', '1.05em');
                $('li').css('font-size', '1.05em');
                $('a').css('font-size', '1.05em');

                $('#menos').removeClass('desactivado');
                $('#mas').removeClass('desactivado');
                break;
            case 2:
                $('body').css('font-size', '1.1em');
                $('html').css('font-size', '1.1em');
                $('li').css('font-size', '1.1em');
                $('a').css('font-size', '1.1em');
                $('#mas').addClass('desactivado');
                break;
            default:

        }

        console.log(count);


    });


}

function saez_social_share() {

    if ( ! $('.social-share').length ) {
        return;
    }

    $('body').on('click', '.social-share', function(e) {

        e.preventDefault();
        window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;

    });

}

function saez_match() {

    if ( $('.js_mod_tab').length ) {
        $('.js_mod_tab').matchHeight();
    }

    if ( $('.js_fecha').length ) {
        $('.js_fecha').matchHeight();
    }

    if ( $('.js_articulos').length ) {
        $('.js_articulos').matchHeight();
    }

    if ( $('.js-altura-zonas').length ) {
        $('.js-altura-zonas').matchHeight();
    }

    if ( $('.js-altura-preguntas').length ) {
        $('.js-altura-preguntas').matchHeight();
    }

}

function saez_votacion() {

    if ( $('.alerta-mensaje').length ) {
        var url_actual  = jQuery('.alerta-mensaje').data('url');
        history.pushState(null, '', url_actual);
    }

}

function saez_busqueda() {

    var options = {
        url: function(phrase) {
            return "/wp-admin/admin-ajax.php";
        },
        getValue: function(element) {
            console.log(element);
            return element.text;
        },
        template: {
        type: "links",
            fields: {
                link: "website-link"
            }
        },
        ajaxSettings: {
            dataType: "json",
            method: "POST",
            data: {
                dataType: "json",
                action: "jelly_busqueda"
            }
        },
        preparePostData: function(data) {
            data.phrase = $("#buscar").val();
            return data;
        },
        requestDelay: 400
    };

    $("#buscar").easyAutocomplete(options);

}

function saez_carrusel() {

    if ( jQuery('#carrusel-destaca').length ) {

        $('#carrusel-destaca').owlCarousel({
            loop:false,
            margin:15,
            nav:true,
            dots: false,
            mouseDrag: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });

    }

    if ( jQuery('#carrusel-articulos').length ) {

        $('#carrusel-articulos').owlCarousel({
            loop:false,
            margin:30,
            nav:true,
            dots: false,
            mouseDrag: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        });

    }

    if ( jQuery('#carrusel-logos').length ) {

        $('#carrusel-logos').owlCarousel({
            loop:false,
            margin:30,
            nav:true,
            dots: false,
            mouseDrag: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:5
                }
            }
        });

    }

    if ( jQuery('.carrusel-contenido').length ) {

        $('.carrusel-contenido').owlCarousel({
            loop:false,
            margin:30,
            nav:true,
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

    }

    // if ( jQuery('#carrusel-noticias').length ) {
    //
    //     var owl = $('#carrusel-noticias').owlCarousel({
    //         autoplay: true,
    //         loop: true,
    //         margin:30,
    //         nav:false,
    //         dots: false,
    //         mouseDrag: false,
    //         responsive:{
    //             0:{
    //                 items:1,
    //                 nav:true
    //             },
    //             992:{
    //                 items:1
    //             },
    //             1000:{
    //                 items:1
    //             }
    //         }
    //     });
    //
    //
    //     owl.on('changed.owl.carousel', function(event) {
    //
    //        // var item = event.item.index + 1; Sin Loop
    //         var item = event.item.index - 1;
    //         console.log(item);
    //         jQuery('#noticias .mod_not').removeClass('active');
    //         jQuery('#noticias .mod_not[data-item="' + item + '"]').addClass('active');
    //
    //     });
    //
    //    jQuery("#noticias .mod_not").click(function(e) {
    //
    //         var num = jQuery(this).data('item') - 1;
    //
    //         owl.trigger('to.owl.carousel', num);
    //
    //     });
    //
    // }

}
