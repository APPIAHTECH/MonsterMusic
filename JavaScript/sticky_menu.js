$(document).ready(function(){
    var altura = $('.menu').offset();
     $(window).on('scroll', function(){

        if ( $(window).scrollTop() > altura.top ){
          $('.menu').addClass('menu-fixe');
      } else {
          $('.menu').removeClass('menu-fixe');
    }
   });
});
