$(() => {

  //scroll to and focus on tweet input when 'Write a new tweet' is clicked
  $('#compose').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.container').offset().top - 150
    }, 700);
    $('#tweet-text').focus();
  });

})