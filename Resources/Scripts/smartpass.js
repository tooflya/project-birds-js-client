document.onreadystatechange = function() {
  if(document.readyState == "complete") {
    $('div.home').click(function() {
      // TODO: Bookmark.
      $('div.home').fadeOut();
    });
    $('div.home > a').click(function() {
      $('div.home').fadeOut();
    });
  }
}
