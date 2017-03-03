//$(document).ready(function(){
//  $('section[data-type="parallax_section"]').each(function(){
//    var $bgobj = $(this);
//    $(window).scroll(function() {
//        $window = $(window);
//        var yPos = -($window.scrollTop() / $bgobj.data('speed'));
//        var coords = '75% '+ yPos + 'px';
//        $bgobj.css({ backgroundPosition: coords });
//    });
//  });
//});


window.onload = ()=>{
    
    let posY;
    let imatge = document.querySelectorAll('#paralax');
    
    imatge.forEach(function(element , index) {
        
        window.addEventListener('scroll',function(){
            posY = window.scrollY;
            element.style.top =  posY * 0.5+"px";
        });
        
    });

    
    
}