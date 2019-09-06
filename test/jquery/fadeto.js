$(document).ready(function(){

    $('.img').hover(
      function(){
         $(this).fadeTo('fast', 0.6);
      },
      function(){
         $(this).fadeTo('fast',1);
    });

    $('ul li .btn').hover(
      function(){
         $(this).fadeTo('fast', 0.6);
      },
      function(){
         $(this).fadeTo('fast',1);
    });   
     
});
