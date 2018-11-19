function follow(name) {
  addFollowText(name);
  play();

}

function subscribe(name) {
  addSubscriptionText(name);
  play();

}

function play() {
  $('#logo')
    .css('opacity', 1.0)
    .animateCss('heartBeat')
    .then(
      $('#speech')
        .show()
        .animateCss('flipInX')
        .then(
          $('#speech').css('opacity', 1.0)
        )
    )

  $()
    .wait(3000)
    .then(() => {
      $('#logo').fadeTo(300, 0.25)
      $('#speech').fadeOut()
    })
}

function addFollowText(name) {
  $('#speech').text(
    'Thanks for following '
  ).append(
    $('<span>').addClass('highlight').text(name)
  )
}

function addSubscriptionText(name) {
  $('#speech').text(
    'Thanks for subscribing '
  ).append(
    $('<span>').addClass('highlight').text(name)
  )
}

$.fn.extend({
  wait: function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
})


$.fn.extend({
  animateCss: function(animationName) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));


    return new Promise(() => {
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
      })
    });
  },
});
