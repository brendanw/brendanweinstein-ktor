var $j = jQuery.noConflict();

$j(document).ready(function() {
  // Call these functions when the html has loaded.

  'use strict'; // Ensure javascript is in strict mode and catches errors.

  /*=================================
  FADE TOP IMAGE IN
  =================================*/

  var topImage = $j('.about_top_container img');

  var aboutScrollButton = $j('button.about_scroll_to');

  topImage.velocity({ opacity: 1 }, 2000);

  aboutScrollButton.velocity({ opacity: 1 }, 2000);

  /*=================================
  SCROLL TO
  This is only the scroll to when a user goes directly to the about page.
  The homepage scroll to is automatic and triggered via homepage.js
  =================================*/

  // Save variables for the top container

  var aboutTop = $j('.about_container');

  // On click of the scroll button scroll to the top of the about section

  aboutScrollButton.click(function() {
    $j('html, body').animate(
      {
        scrollTop: aboutTop.offset().top,
      },
      1000
    );
  });

  // Trigger about container animation

  if (aboutTop.length) {
    // Save the location of the about container
    var aboutTopOffset = aboutTop.offset().top;
    var alreadyAnimated = false;
    // If the window has scrolled past the about section then trigger the animation
    $j(window).scroll(function() {
      var aboutScrollTop = $j(window).scrollTop();
      if (aboutScrollTop >= aboutTopOffset && !alreadyAnimated) {
        // Trigger the animation
        $j('body').addClass('animate');
        // Start the flexslider
        $j('.about_slider').flexslider('play');
        alreadyAnimated = true;
      }
    });
  }

  /*=================================
  ABOUT SLIDER
  =================================*/

  $j('.about_slider').flexslider({
    animation: 'fade',
    controlNav: false,
    directionNav: true,
    customDirectionNav: $j('.flex_custom_nav a'),
    slideshowSpeed: 2000,
    slideshow: false,
    start: function(slider) {
      slider.find('.current_slide').text(slider.currentSlide + 1);
      slider.find('.total_slides').text(slider.count);
    },
    after: function(slider) {
      slider.find('.current_slide').text(slider.currentSlide + 1);
      slider.find('.total_slides').text(slider.count);
    },
  });

  /*=================================
  SPECIAL PROJECT SLIDER
  =================================*/

  $j('.special_projects_slider').flexslider({
    animation: 'slide',
    controlNav: false,
    directionNav: true,
    prevText: '',
    nextText: '',
    slideshowSpeed: 2000,
    slideshow: false,
    animationLoop: false,
    useCSS: false,
    itemWidth: 550,
  });
});
