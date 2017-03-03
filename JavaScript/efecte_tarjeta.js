$(function(){
    var $targeta = $('.tarja');
    var estaClicat = true;
    
    $targeta.click(function(){
    
        if(estaClicat)
        {
            $(this).css({
               transform: "rotateY(180deg)",
               transition: "all 2s ease"
           });
            estaClicat = false;
        }else{
            $(this).css({
               transform: "rotateY(0deg)",
               transition: "all 1s ease-out"
           });
            
            estaClicat = true;
        }

    })
});