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
