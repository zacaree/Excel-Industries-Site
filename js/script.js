$(document).ready(function(){

    $(window).resize(function(){
       // This will fire each time the window is resized:
       if($(window).width() > 736){
          $('.menu').show();
       } else {
          $('.menu').hide();
       }
    });


    // $('.menu-icon').click(function(){
    //     $('.overlay, .menu').fadeIn(300);
    //     $('.about-container').fadeOut(300);
    // });


    // $('#product-btn').click(function(){
    //     $('.dropMenu').fadeToggle(300);
    // });

    // found menu toggle example here: http://jsfiddle.net/nick_craver/K6TSv/1/
    //click toggle class and (this)next sibling & .overlay will fadeToggle

    // $('.toggle').click(function(){
    //     $(this).next().fadeToggle(300);
    // });

    $('.menu-icon').click(function(){
        $('.menu, .overlay').fadeToggle(300);
        $('.dropMenu, .hero-container, .about-container').fadeOut(300);
    });

    // $('.toggle').click(function(){
    //     $('.menu, .overlay').fadeToggle(300);
    //     $('.dropMenu, .about-container').fadeOut(300);
    // });


    $('.about-btn').click(function(){
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

});
