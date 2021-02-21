"use strict";
$(document).ready(function () {
            
    /* sidebar left  expand collapase */
    $('.menu-left').on('click', function () {
        $('body').addClass('menu-left-open');
        $('body .wrapper').append('<div class="backdrop"></div>');
        $('.backdrop, .menu-right-close').on('click', function () {
            $('body').removeClass('menu-left-open');
            $('.backdrop').fadeOut().remove();
        });
    });

    $('.sidebar-close').on('click', function () {
        $('body').removeClass('menu-left-open');
        $('.backdrop').fadeOut().remove();
    });

    /* sideabr right expand collapase */
    $('.menu-right').on('click', function () {
        $('body').addClass('menu-right-open')
        $('body .wrapper').append('<div class="backdrop-right"></div>');
        $('.backdrop-right, .menu-left-close').on('click', function () {
            $('body').removeClass('menu-right-open');
            $('.backdrop-right').fadeOut().remove();
        });
    });

    /* search control visible slide hide slide */
    $('.searchbtn').on('click', function () {
        $('.searchcontrol').addClass('active');
    });
    $('.close-search').on('click', function () {
        $('.searchcontrol').removeClass('active');
    });

    /* page content height for sticky footer */
    $('.content-sticky-footer').css({
        'padding-bottom': $('.footer-wrapper').height()
    });
    $('.footer-wrapper').css('margin-top', -($('.footer-wrapper').height()));


    /* page inside iframe just for demo app */
    if (self !== top) {
        $('body').addClass('max-demo-frame')
    }

});

$(window).on('load', function() {
    $('.loader').remove();
});
