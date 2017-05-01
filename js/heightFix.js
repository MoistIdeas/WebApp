jQuery(
  function($) {
    $( document ).ready( function() {
      function init() {
        /*
          This function detects and sets your section heights.
          You can set multiple things here.
        */
        $("#hero").css("height", $( window ).height() + "px")
        $("#webapp").css("padding", $( window ).height()*0.05 + "px 0")
        if ($(window).height() < $( "#infopane" ).height()){
          $("#map").css("height", $( "#infopane" ).height() + "px")
        } else {
          $("#map").css("height", $( window ).height()*0.8 + "px")
        }
      }

      init()

      var lastWidth = $(window).width()

      $( window ).resize(function(){
        /*
          This function detects whether the width changes, and reinitializes the
          sections accordingly. This is to accomodate for resizing the window on
          desktop or rotating the screen on mobile.
        */
        if($( window ).width() != lastWidth){
          init()
          lastWidth = $( window ).width()
        }
      })
    })
  }
);