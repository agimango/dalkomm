$(document).ready(function() {

    $('nav > ul > li').mouseenter(function() {
        $('nav > ul > li .sub').stop().slideDown();
    });

    $('nav').mouseleave(function() {
        $('nav > ul > li .sub').stop().slideUp();
    });

});