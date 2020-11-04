//Script Para el ScroolSpy

var header = document.querySelector('#my-header');

	var spy = new Gumshoe('#my-awesome-nav a', {
	
	offset: function () {
		return header.getBoundingClientRect().height;
	}

});

//Script cambio color y estilo del header

$(window).scroll(function(){
    $('.fixed-top').toggleClass('shrink', $(this).scrollTop() > 100);
});

$(window).scroll(function(){
    $('.casona-sofa').toggleClass('casona-sofa-active', $(this).scrollTop() > 400);
});

$(window).scroll(function(){
    $('.img_elocal').toggleClass('img_elocal-active', $(this).scrollTop() > 800);
});

$(window).scroll(function(){
    $('.return').toggleClass('return-active', $(this).scrollTop() > 100);
});

//Script smoothScrool

$('a').click(function(){
    var top = $('body').find($(this).attr('href')).offset().top-60;

    $('html, body').animate({
        scrollTop: top
    },900, 'easeInOutExpo');

    return false;
});

//

$(document).ready(function(){

  $('.input').focus(function(){
    $(this).parent().find(".label-txt").addClass('label-active');
  });

  $(".input").focusout(function(){
    if ($(this).val() == '') {
      $(this).parent().find(".label-txt").removeClass('label-active');
    };
  });

});

//

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

//

var map = new GMaps({
    el: '#map',
    lat:  40.730610,
    lng: -73.935242
});

map.addMarker({
    lat: 40.700610,
    lng: -73.997242,
    title: 'New York',

});

map.setZoom(8);

//

var swiper = new Swiper('.swiper-container', {
	
	slidesPerView:1,
    spaceBetween: 0,
    useSwipe:true,
    slidesPerGroup: 1, 
    loop:true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

//

$(function() {
        $('#WS-LiSli').WS_lightbox_free({
            'enable' : ['close', 'arrows'],
            buttons : {
                size          : 40,
                style         : 'square', // ( default, square, circle, rounded )
                color         : 'black',
                color_icon    : 'white',
                border_width  : 0,
                border_color  : '',
                opacity       : .5,
                hover_opacity : 1
            },
            arrows : {
                position      : 'attached', // ( inside, outside, attached )
                style         : 'rounded', // (default, square, circle, rounded, svelt)
                icon_style    : 'angle', // (default, caret, angle, chevron)
                icon_size     : 20,
                opacity       : .5,
                hover_opacity : .8
            },
            image : {
                border_radius : 0,
                border_color : '',
                border_width : 0,
                bg : 'none'
            },
            background : {
                filter : 'image',
                opacity : .5
            },
            display_velocity : 'low',
            slide_velocity : 'fast'
        });

    });