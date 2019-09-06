(function() {
   $(window).scroll(function() {

    if ($(window).width() < 550) {
      $('#topimg').hide(); }
    else {
           if ($(this).scrollTop() > 300) {    $('#topimg').fadeIn(200);} 
           else {  $('#topimg').fadeOut(200); }
         }
    });

// not necessary
   $('#topimg').click(function(event) {
      event.preventDefault();

      $('html, body').animate({scrollTop: 0}, 300);
   });
//

   $('#topimg').hover(
     function(){
        $(this).fadeTo('fast', 0.6);
     },
     function(){
        $(this).fadeTo('fast',1);
   });

})();
