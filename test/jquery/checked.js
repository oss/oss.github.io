var checked = function(){

$('#checkbox').click(function() {
    var $this = $(this);
      if ($this.is(':checked')) {
        $('#clientinfo').slideDown(500);
    } else {
        $('#clientinfo').slideUp(500);
    }
});

};

$(document).ready(checked);