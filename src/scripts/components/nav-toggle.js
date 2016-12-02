;(function($, window, document, undefined) {

  'use strict';

  $(".js-nav-toggle").click(function() {
    $(this).toggleClass("l-header__toggle-nav--open");
    $(".l-header__navigation").toggleClass("l-header__navigation--open");
  });

})(jQuery, window, document);
