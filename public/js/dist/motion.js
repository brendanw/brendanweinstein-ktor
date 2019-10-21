var $j = jQuery.noConflict();

$j(document).ready(function() {

// Call these functions when the html has loaded.

  "use strict"; // Ensure javascript is in strict mode and catches errors.

  /*=================================
  Motion Animation
  =================================*/

  if($j('body').hasClass('page-template-motion')) {
    $j('body').addClass('animate');
  };

  /*=================================
  MOTION HORIZONTAL SCROLL
  Using Jquery Mousewheel https://github.com/jquery/jquery-mousewheel
  =================================*/

  $j('.motion_videos').mousewheel(function(event, delta) {

    this.scrollLeft -= (delta);

    event.preventDefault();

  });

  /*=================================
  Show Motion Video & Trigger Play/Unload
  =================================*/

  var showVideo = function() {
    // Play video
    $j(this).find('video')[0].play();
    // Hide thumbnail
    $j(this).find('.motion_thumbnail').fadeTo(800,0);
    // Show title overlay
    $j(this).find('.motion_overlay').fadeTo(800,1);
  }

  var hideVideo = function() {
    var that = $j(this);
    // Show the thumbnail
    $j(this).find('.motion_thumbnail').fadeTo(300,1, function(){
      // After the thumbnail fades back in stock the video and set it back to the beginning.
      that.find('video')[0].pause();
      that.find('video')[0].currentTime = 0;
    });
    // Hide the title overlay
    $j(this).find('.motion_overlay').fadeTo(800,0);
  }

  $j('.motion_video_container').hover(showVideo, hideVideo);

  /*=================================
  Change Tite and Video Position Indicator
  =================================*/

  // Save the divs where the video position, total videos and name are going to be switched out

  var currentVideoName = $j('#current_video_name');

  var currentVideoPosition = $j('#current_video_position');

  var totalVideos = $j('#total_videos');

  var videoContainer = $j('.motion_videos .motion_video_container');

  var middleOfWindow = $j(window).width() / 2;

  // Set the title and position of the first video on page load. Also set the total amount of videos.

  var firstVideo = $j('.motion_videos .motion_video_container:first-child');

  var firstVideoName = firstVideo.attr('data-name');

  var firstVideoPosition = firstVideo.attr('data-position');

  currentVideoName.text(firstVideoName);

  currentVideoPosition.text(firstVideoPosition);

  totalVideos.text(videoContainer.length);

  // Set fading in/out variable to false to control the animation sequence in the scroll function.

  var fadingOut = false;
  var fadingIn = false;

  // On scroll of the video panel

  $j('.motion_videos').scroll(function(){

    // Hide the motion title

    var firstVideoOffset = firstVideo.offset().left;

    if(firstVideoOffset >= (middleOfWindow)) {
      if(!fadingOut) {
        $j('.motion_page_title h1').fadeTo(300, 0, function(){
          fadingOut = false;
        });
        fadingOut = true;
      }
    }

    else {
      if(!fadingIn) {
        $j('.motion_page_title h1').fadeTo(300, 1, function(){
          fadingIn = false;
        });
        fadingIn = true;
      }
    }

    // Check each video containers position and set the bottom details when a video comes into the viewport.

    videoContainer.each(function(){

      // Capture the position of this video and its name

      var videoPosition = $j(this).attr('data-position');
      var videoName = $j(this).attr('data-name');

      // Capture how far the video is from the left

      var offsetLeft = $j(this).offset().left;

      // If the video has come into view and if past the cut off position then change the video details at the bototm of the page.

      if((offsetLeft > 0) && (offsetLeft < (middleOfWindow))) {
        currentVideoName.text(videoName);
        currentVideoPosition.text(videoPosition);
      }
    });
  });

});