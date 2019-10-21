<#import "base.ftl" as base>
<@base.page>
  <div id="content" style="display: flex; flex-flow: column">
    <div class="video-container">
      <video id="my-video" class="video-js vjs-big-play-centered vjs-fill" controls preload="auto"
             data-setup="{}">
        <source src="${assets.cdnBase}/media/bw-demo2019.mp4" type='video/mp4'>
        <source src="${assets.cdnBase}/media/bw-demo2019-1.webm" type="video/webm">
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
        </p>
      </video>
    </div>
  </div>
  <script src="https://vjs.zencdn.net/7.6.5/video.js"></script>
</@base.page>