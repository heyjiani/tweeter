$(document).ready(function() {

  //// display tweet character count ////
  $('textarea').on('keyup', function() {
    const tweetLength = $(this).val().length;
    const charRemaining = 140 - tweetLength;

    //access character counter through siblings & update counter value
    const tweetCounter = $(this).siblings().children('.counter');
    tweetCounter.val(charRemaining);

    //color counter numbers red if below zero
    const red = "#eb6134";
    $(tweetCounter).css("color", charRemaining < 0 ? red : "inherit");
  });

});