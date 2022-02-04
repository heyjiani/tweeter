$(() => {

  //// Write new tweet button ////
  $('#compose').on('click', function() {
    $('.new-tweet').toggle("slow");
    $('#tweet-text').focus();
  });

  //// scroll back to top button ////
  const $button = $('#scroll-to-top');
  //hide and show scroll and new tweet buttons depending on page position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {

      // don't hide write new tweet button on desktop //
      if ($(window).width() < 1024) {
        $('#compose').stop().fadeOut('fast');
      }
      
      $button.stop().fadeIn();
      return;
    } 
    $button.stop().fadeOut('fast');
    $('#compose').stop().fadeIn();
  });

  //scroll to top & enable textarea input field
  $button.on('click', () => {
    $('html, body').animate({ scrollTop: 0 }, 700);
    $('.new-tweet').slideDown("slow");
    $('#tweet-text').focus();
  });

})