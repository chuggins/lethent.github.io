$(function() {
  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    preventCaptionOverlap: true,
    caption: function(instance, item) {
      return $(this).next('figcaption').html();
    }
  });
});