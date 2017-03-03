$(document).ready(function(){
    $('.contingut').css("opacity","0");
    $('.pujar').click(function(){

      $('body, html').animate({
       scrollTop:'0px'
      },1500);

   });

   $(window).scroll(function(){

     if($(this).scrollTop() > 0){
       $('.pujar').slideDown(300);
       $('.contingut').css("opacity","1");
     } else {
       $('.pujar').slideUp(300);
       $('.contingut').css({
           opacity: "1",
           transition:"all ease 1s"
           
       });
     };

   });

});
