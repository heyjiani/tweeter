$(() => {

  //scroll to and focus on tweet input when 'Write a new tweet' is clicked
  $('#compose').on('click', () => {
    $('html, body').animate({
      scrollTop: $('.container').offset().top - 150
    }, 700);
    $('#tweet-text').focus();
  });

  //scroll back to top button
  //default: hide button
  const $toTop = $('#scroll-to-top');
  $toTop.hide();
  //scroll back to the top and enable textarea input
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $toTop.stop().fadeIn(500);
    } else {
      $toTop.stop().fadeOut();
    }
  });

  $toTop.on('click', () => {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
    $('#tweet-text').focus();
  });

})