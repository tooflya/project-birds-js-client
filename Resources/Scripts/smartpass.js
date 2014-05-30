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
  }
}

(function() {
  var viewport = document.getElementById('viewport');
  if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
    viewport.setAttribute("content", "width=device-width, maximum-scale=0.5, minimum-scale=0.5, initial-scale=0.5, user-scalable=no");
  } else if(navigator.userAgent.match(/iPad/i)) {
    viewport.setAttribute("content", "width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, user-scalable=no");
  }
}(document));
