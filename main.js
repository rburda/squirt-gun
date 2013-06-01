var showReply = function (isGoodWater) {
  var html;
  if (isGoodWater) {
    html = '<p class="msg mmmmm">YES!!! Drink that water gurl!!!</p>';
  } else {
    html = '<p class="msg nasty"><a href="http://www.youtube.com/watch?v=7cqOEr_yfak" target="_blank" class="shhh">Oh Joby! That\'s the NASTIEST THANG!</a> Don\'t drink that water!</p>';
  }
  $('#content').addClass('reply').html(html);

};

$('#tellUs').submit(function (e) {
    console.log(e);
    e.preventDefault();
  $.ajax({
    'url': 'http://www.ratkinson.com/dummy.js',
    'dataType': 'jsonp',
    'jsonpCallback': 'asdf',
    'success': function (data) {
      console.log(data);
      showReply(!!data.COMPPERENDDATE);
    }
  });
});
