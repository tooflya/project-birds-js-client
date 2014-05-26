document.onreadystatechange = function() {
  if(document.readyState == "complete") {
    if(!window.navigator.standalone) {
      setTimeout(function() {
        $('div.home').show(1000);
        $('div.home').click(function() {
          // TODO: Bookmark.
          $('div.home').fadeOut();
        });
        $('div.home > a').click(function() {
          $('div.home').fadeOut();
        });
      }, 1000);
    }

    $(window).resize(function() {
      var container = document.getElementById('canvas');
      var canvas = $('div.canvas');

      container.width = canvas.width();
      container.height = canvas.height();
      container.parentNode.style.width = canvas.width() + 'px';
      container.parentNode.style.height = canvas.height() + 'px';

      new Camera();
    });

    $(window).resize(function() {
      resize();
    });

    $(window).on("orientationchange", function(e) {
      resize();
    });
  }
}

function resize() {
  var container = document.getElementById('canvas');
  var canvas = $('div.canvas');

  container.width = canvas.width();
  container.height = canvas.height();
  container.parentNode.style.width = canvas.width() + 'px';
  container.parentNode.style.height = canvas.height() + 'px';

  new Camera();
}