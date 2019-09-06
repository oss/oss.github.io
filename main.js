
// Responsive stylesheets
function adjustStyle(width) {
  width = parseInt(width);
  // Phone only
  if (width < 599) {
    $("#size-stylesheet").attr("href", "css/phone-only.css");
    console.log("phone only");
  }
  // Tablet portrait up
  else if (width >= 600 && width < 900) {
    $("#size-stylesheet").attr("href", "css/tablet-portrait-up.css");
    console.log("portrait up");
  }
  // Tablet landscape up
  else if (width >= 900 && width < 1200) {
    $("#size-stylesheet").attr("href", "css/tablet-landscape-up.css");
    console.log("landscape up");
  }
  // Desktop up
  else if (width >= 1200 && width < 1800) {
    $("#size-stylesheet").attr("href", "css/desktop-up.css");
    console.log("desktop up");
  }
  // Big desktop up
  else if (width >= 1800) {
    $("#size-stylesheet").attr("href", "css/big-desktop-up.css");
    console.log("big desktop up");
  }
}

$(function() {
  adjustStyle($(this).width());
  $(window).resize(function() {
    adjustStyle($(this).width());
  });
});

// Typed.js animation
$(function(){
    $(".element").typed({
        strings: ["man oss"],
        typeSpeed: 200,
        cursorChar: "|",
        callback: function() {
          $(".man").attr("style", "visibility: visible !important;");
        }
    });
});
