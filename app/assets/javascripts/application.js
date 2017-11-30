//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require owl.carousel
//= require jquery
//= require fancybox

$(document).ready(function() {
  // create image slide for heading
  $("#owl-carousel").owlCarousel({
    singleItem:true,
    autoPlay: true
  });

  // fancybox generate
  $(".gallery").fancybox({
    openEffect: 'fade',
    closeEffect: 'fade'
  });

  // auto set height of heading image slide
  $("#owl-carousel .item").css("height", $(window).height())

  // create member family slide
  $("#man-family, #woman-family").owlCarousel({
    singleItem:true,
    autoPlay: 10000
  });
});
