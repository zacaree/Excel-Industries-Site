$(document).ready(function(){

    $(window).resize(function(){
       // This will fire each time the window is resized:
       if($(window).width() > 736){
          $('.menu').show();
       } else {
          $('.menu').hide();
       }
    });


    $('.menu-icon').click(function(){
        $('.overlay, .menu').fadeToggle(300);
    });


    $('#product-btn').click(function(){
        $('.drop-menu').fadeToggle(300);
    });

    $('#about-btn').click(function(){
        if($(window).width() < 736){
            $('.menu').fadeOut(300);
            $('.overlay').fadeIn(300);
        }else{
            $('.menu').fadeIn(300);
            $('.overlay').fadeIn(300);
        }
        $('.about-container').fadeToggle(300);
    });

});
