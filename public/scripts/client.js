$(() => {

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

//takes in tweet obj and returns tweet <article> element
const createTweetElement = function (tweet) {

  //header elements
  const $avatars = $(`<img src="${tweet.user.avatars}" alt="">`);
  console.log('avatar is', $avatars)
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
const $tweetContainer = $('.tweet-container');

const renderTweets = function(listOfTweets) {

  for (const tweet of listOfTweets) {
    const $tweet = createTweetElement(tweet);
    $tweetContainer.append($tweet);
  }
  return $tweetContainer;

};

renderTweets(data);

});