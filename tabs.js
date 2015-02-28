/* global $:false */
'use strict';

$(function(){
    $('.tab').click(function(e){
        var selector = '#container' + $(this).data().ref;
        var $clicked = $(selector);
        e.preventDefault();
        $('.active').removeClass('active');
        $clicked.addClass('active');
    });
});