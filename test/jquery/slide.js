var main = function() {
    $('#contactuslink').click(function() {
      $('#slider').slideDown(500);
      $('#scrollbox').slideUp(300);
    });

    $('#close').click(function() {
      $('#slider').slideUp(500);
    });

    $('#versionlink').click(function() {
      $('#scrollbox').slideDown(500);
      $('#slider').slideUp(300);
    });

    $('#close1').click(function() {
      $('#scrollbox').slideUp(500);
    });

    $('#close , #close1').hover(function(){
      $(this).toggleClass('activate');
    });
};

$(document).ready(main);




/*
var slide = function(){

   $('#contimg').click(function() {
      $('.body').toggleClass('pushbody', 500);
      $('#slider').toggleClass('pushmenu', 500);
   });
};

$(document).ready(slide);
*/

/*
  $('#sidebar').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.btn').addClass('disabled'); 
  });
  
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);
  
    if(charactersLeft < 0) {
      $('.btn').addClass('disabled'); 
    }
    else if(charactersLeft == 140) {
      $('.btn').addClass('disabled');
    }
    else {
      $('.btn').removeClass('disabled');
    }
  });
  
  $('.btn').addClass('disabled');




var main = function() {
    $('#sidebar').click(function() {
    $('#slider').animate({ right: "0px"}, 600);
    $('.body').animate({ right: "-342px" }, 600);
  });

  $('#close').click(function() {
    $('#slider').animate({ right: "-342px"}, 600);

    $('.body').animate({ right: "0px", }, 600);
  });
};

$(document).ready(main);

*/