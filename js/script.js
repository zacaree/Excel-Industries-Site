$(document).ready(function(){

    $(window).resize(function(){
       // This will fire each time the window is resized:
       if($(window).width() > 736){
          $('.menu').show();
       } else {
          $('.menu').hide();
       }
    });


    $('.menu-icon').on('click', function(){
        $('.overlay').fadeToggle(300);
        $('.menu').fadeToggle(300);
    });


    $('#product-btn').click(function(){
        $('.drop-menu').fadeToggle(300);
    });


    
});
