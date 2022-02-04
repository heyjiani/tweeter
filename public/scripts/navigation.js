$(() => {

  $('.new-tweet').hide();
  //scroll to and focus on tweet input when 'Write a new tweet' is clicked
  $('#compose').on('click', function() {
    $('.new-tweet').toggle("slow");
    $('i', this).toggleClass("fa-angles-down fa-angles-up");
    $('#tweet-text').focus();
  });

  //scroll back to top button
  //default: hide button
  const $toTop = $('#scroll-to-top');
  $toTop.hide();

  //hide and show scroll and new tweet buttons depending on page position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#compose').stop().fadeOut('fast');
      $toTop.stop().fadeIn();
      return;
    } 
    $toTop.stop().fadeOut('fast');
    $('#compose').stop().fadeIn();
  });

  //enable textarea input field when button is clicked
  $toTop.on('click', () => {
    $('html, body').animate({ scrollTop: 0 }, 700);
    $('.new-tweet').slideDown("slow");
    $('#tweet-text').focus();
  });

})