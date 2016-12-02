;(function($, window, document, undefined) {

  'use strict';

  $(".l-header__navigation-link").click(function() {
    event.preventDefault();
    var x = $(this).attr("data-anchor");
    $(".l-header__toggle-nav").removeClass("l-header__toggle-nav--open");
    $(".l-header__navigation").removeClass("l-header__navigation--open");
    $("html, body").animate({
        scrollTop: $("." + x).offset().top
    }, 2000);
});

})(jQuery, window, document);
