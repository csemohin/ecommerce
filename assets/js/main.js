/*global jQuery*/
jQuery(document).ready(function ($) {
    'use strict';
    $('#menu').slicknav({
        label: '',
        duration: 1000,
        easingOpen: "easeOutBounce", //available with jQuery UI


    });
    $('.slicknav_menu').prepend('<a href="index.html"><img class="logo" src="assets/img/logo-dark.png" alt="Website Logo" /></a>');
    
    $('.slicknav_menu').prepend('<button id="catagory" class="ctg-btn"><i class="fa fa-th"></i></button>');




    $('#list').click(function (event) {
        event.preventDefault();
        $('.product-list .col-lg-4').addClass('col-lg-12');
    });

    $('#grid').click(function (event) {
        event.preventDefault();
        $('.product-list .col-lg-4').removeClass('col-lg-12');
        $('.product-list .col-lg-4').addClass('col-lg-4');
    });


    $('#list').click(function (event) {
        event.preventDefault();
        $('.product-list .col-md-6').addClass('col-md-12');
    });

    $('#grid').click(function (event) {
        event.preventDefault();
        $('.product-list .col-md-6').removeClass('col-md-12');
        $('.product-list .col-md-6').addClass('col-md-4');
    });
    
    $('#list').click(function (event) {
        event.preventDefault();
        $('.product-list .col-sm-12').addClass('s-d-m');
    });

    $('#grid').click(function (event) {
        event.preventDefault();
        $('.product-list .col-sm-12').removeClass('s-d-m');
        $('.product-list .col-sm-12').addClass('col-sm-12');
    });


    //====== HEAD ROOM JS ACTIVE ===============
    //    $(".header-area").headroom();

    $("#search-btn").click(function () {
        $(".search-item").slideToggle("fast");
    });

    $("#cart-btn").click(function () {
        $(".cart-item").slideToggle("fast");
    });
    
    $("#catagory").click(function () {
        $(".all-catagory").slideToggle('2000', "easeOutBounce", function (){
            
        });
    });
    
    

    $('#flat-slider').slider({
        orientation: 'horizontal',
        range: true,
        values: [17, 67]
    });



});
