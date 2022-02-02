console.log('hello hello')

$(() => {

  // Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
    },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

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
  const $timeCreated = $('<time>').text(tweet.created_at);
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
  const $fullTweet = $('<article>').addClass('tweet');
  $fullTweet.append($header, $tweetText, $footer);

  return $fullTweet;
};

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});