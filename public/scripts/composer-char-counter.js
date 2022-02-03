$(document).ready(function() {

  $('textarea').on('keyup', function() {
    const tweetLength = $(this).val().length;
    const charRemaining = 140 - tweetLength;

    //<textarea> and <div> which contains counter element are both children of <form>
    //access character counter through siblings
    const tweetCounter = $(this).siblings().children('.counter');
    tweetCounter.val(charRemaining);

    //color counter numbers red if below zero
    if (charRemaining < 0) {
      return $(tweetCounter).css("color", "#eb6134");
    }
    $(tweetCounter).css("color", "#545149");

  });

});