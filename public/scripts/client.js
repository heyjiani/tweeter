$(() => {

// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

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

    for (const tweet of listOfTweets) {
      const $tweet = createTweetElement(tweet);
      $tweetContainer.prepend($tweet);
    }
    return $tweetContainer;
};

//event listener for submitting new tweet form
$('#submit-new-tweet').on('submit', function (event) {
  event.preventDefault();
  console.log('Submitting tweet ...');

  //convert set of form data into query string
  const data = $(this).serialize();

  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: data
  }).then(() => {
    console.log('tweet submitted successfully!');
  })
})

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

});