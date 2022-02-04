$(() => {

  //hide error fields
  $('.error-limit').hide();
  $('.error-empty').hide();

  //takes in tweet obj and returns tweet <article> element
  const createTweetElement = function (tweet) {

    //header elements
    const $avatars = $(`<img src="${tweet.user.avatars}" alt="">`);
    const $name = $('<span>').addClass('user-name').text(tweet.user.name);
    const $handle = $('<span>').addClass('user-handle').text(tweet.user.handle);
    const $tweetText = $('<p>').addClass('posted-tweet').text(tweet.content.text);

    const $header = $('<header>'); 
    $header.append($avatars, $name, $handle);

    //footer elements
    const $timeCreated = $('<time>').text(timeago.format(tweet.created_at));
    const $icons = $(`
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-regular fa-heart"></i>
      </div>
    `);

    const $footer = $('<footer>');
    $footer.append($timeCreated, $icons);

    //full tweet 
    const $tweet = $('<article>').addClass('tweet');
    $tweet.append($header, $tweetText, $footer);

    return $tweet;
  };

  //take in array of tweet objs and append each one to .tweet-container
  const renderTweets = function(listOfTweets) {
    const $tweetContainer = $('.tweet-container');
    $tweetContainer.empty();

    for (const tweet of listOfTweets) {
        const $tweet = createTweetElement(tweet);
        $tweetContainer.prepend($tweet);
      }
      return $tweetContainer;
  };

  //fetch tweets from /tweets
  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).then((tweets) => {
      renderTweets(tweets);
    })
  };

  loadTweets();

  //event listener for submitting new tweet form
  $('#submit-new-tweet').on('submit', function (event) {
    event.preventDefault();

    //slide existing errors back up upon resubmission
    $('.error-empty').slideUp(250);
    $('.error-limit').slideUp(250);

    //validation criteria: tweet must be between 0 and 140 characters.
    //display errors for empty field
    const textLength = $('#tweet-text').val().length;
    if (textLength <= 0) {
      $('.error-limit').hide();
      $('.error-empty').slideDown(250);
      return;
    }
    //display errors for when character limit is exceeded
    if (textLength > 140) {
      $('.error-empty').hide();
      $('.error-limit').slideDown(250);
      return ;
    }

    //reset character counter
    $('.counter').val('140');

    //convert set of form data into query string
    const data = $(this).serialize();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: data
    }).then(() => {
      $('#tweet-text').val('');
      loadTweets();
    })

    $('#tweet-text').focus();
  })

});