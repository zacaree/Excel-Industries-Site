$(document).ready(function(){

    $(window).resize(function(){
        // This will fire each time the window is resized:
        if($('.dropMenu').is(':visible')){
            $('.product-btn').siblings().animate({top: '0px'}, 300);
            $('.dropMenu').fadeOut();
        }
        if($(window).width() > 736){
            $('.menu').fadeIn(300);
            if($('.overlay', '.about-container').is(':visible')){
                $('.overlay').fadeOut(300);
                $('.hero-container').fadeIn(300);
            }
        } else { //if width is less than 763
            $('.menu').hide();
            $('.overlay').fadeOut(300);
            $('.hero-container').fadeIn(300);
            if($('.about-container').is(':visible')){
                $('.about-container').fadeOut(300);
            }
        }
    });

    $('.menu-icon').click(function(){
        if($('.menu').is(':hidden')){
            $('.menu').fadeIn(300);
            if($('.about-container').is(':visible')){
                $('.about-container').fadeOut(300);
            }else{
                $('.hero-container').fadeOut(300);
                $('.overlay').fadeIn(300);
            }
        }else{
            $('.menu').fadeOut(300);
            $('.overlay').fadeOut(300);
            $('.hero-container').fadeIn(300);
        }
    });

    $('.logo').click(function(){
        if($('.dropMenu').is(':visible')){
            $('.product-btn').siblings().animate({top: '0px'}, 300);
            $('.dropMenu').fadeOut(300);
        }
        $('.overlay').fadeOut(300);
        $('.about-container').fadeOut(300);
        $('.hero-container').fadeIn(300);
        if($(window).width() < 736){
            if($('.menu').is(':visible')){
                $('.menu').fadeOut(300);
            }
        }
    });

    $('.about-btn').click(function(){
        if($('.dropMenu').is(':visible')){
            $('.product-btn').siblings().animate({top: '0px'}, 300);
            $('.dropMenu').fadeOut(300);
        }
        if($(window).width() < 736){
            $('.menu').fadeOut(300);
            $('.hero-container').fadeOut(300);
            $('.overlay').fadeIn(300);
        }else{
            $('.hero-container').fadeOut(300);
            $('.menu').fadeIn(300);
            $('.overlay').fadeIn(300);
        }
        $('.about-container').fadeIn(300);
    });

    $('.product-btn').click(function(){
        if($(window).width() < 736){
            if($('.dropMenu').is(':hidden')){
                $('.dropMenu').delay(200).fadeIn(300);
                $(this).siblings().animate({top: '112px'}, 300);
            }else{
                $(this).siblings().delay(100).animate({top: '0px'}, 300);
                $('.dropMenu').fadeOut(300);
            }
        }else{
            $('.dropMenu').fadeToggle(300);
        }
    });

});
