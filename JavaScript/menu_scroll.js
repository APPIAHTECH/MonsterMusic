var operar = false;
var scroll;

$(document).ready(function(){
//  $("").css({"height":$(window).height() + "px"});

   $(window).scroll(function(){
     scroll = $(window).scrollTop();
       
     if(scroll > 0){
         if(!operar){
           $(".logo").css({
           "margin-top":"-35px",
            "margin-left":"0px",
           "height": "100px",
           "width": "100px"
         });
         operar = true;

        $('header nav.Navegador').css({
            "position" : "fixed"
        });
        
        $('.bar_buscar').css({
          height: '50px',
          background:"#ECEFF1",
          display:"block",
          transition : "all 1s ease"
        });
       }
       
         $('div.titulRes').css({
            height:"0px",
            opacity:"0",
            transition : "all 0.1s ease-in-out"
         });

     }else{
       if(operar){
           $(".logo").css({
           "margin-top":"330px",
           "width": "200px",
           "height": "200px",
            "margin-left": "-185%"
          });
       operar = false;

       $('.bar_buscar').css({
         height: '0%',
         background:"#ECEFF1",
         display:"none",
         transition : "none"
       });
           
        $('div.titulRes').css({
            height:"30%",
            opacity:"1",
            transition : "all 0.5s ease-in-out"
         });
           
       }
     }
       if(scroll > 480)
           $('.social-menu').css({
               visibility:'visible',
               transition:'all 1s ease-out'
           });
       else if(scroll < 480)
           $('.social-menu').css({
               visibility : 'hidden',
               transition:'all  0.5s'
           });
       
       if(scroll > 1500)
           $('.social-menu').css({
               opacity : '0',
               transition:'all  0.5s'
        });
       else
            $('.social-menu').css({
               opacity:'1',
               transition:'all 1s ease-out'
           });
   });


});
