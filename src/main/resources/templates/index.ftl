<html>
<head>
    <title>Brendan Weinstein</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="${assets.cdnBase}/style/css/base_style.css" media="all"/>
    <link rel="stylesheet" type="text/css" href="${assets.cdnBase}/style/css/flexslider.css" media="all"/>
    <link rel="stylesheet" type="text/css" href="${assets.cdnBase}/style/css/about.css" media="all"/>
    <link rel="stylesheet" type="text/css" href="${assets.cdnBase}/style/css/home.css" media="all"/>
    <link rel="stylesheet" type="text/css" href="${assets.cdnBase}/style/css/video.css" media="all" />
    <link rel="stylesheet" type="text/css" href="${assets.cdnBase}/style/css/contact.css" media="all" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div id="content" class="main_content">
    <header class="bw_header mobile_header">
        <div class="logo_text">
            <span><a href="/" style="color: #000; text-align: center; font-size: 15px; line-height: 0px">Brendan Weinstein</a></span>
        </div>
    </header>
    <div class="mobile_homepage"
         style="background-image: url('${assets.cdnBase}/media/altissimo-bg.jpg');">

        <a class="mobile_motion" href="/motion/">

            <h1>Motion</h1>

        </a>

        <a class="mobile_about" href="/about/">

            <h1>About</h1>

        </a>

        <a class="mobile_contact" href="/contact/">

            <h1>Contact</h1>

        </a>

    </div>
    <div class="desktop_homepage">
        <div class="homepage_panels" style="background-image: url('${assets.cdnBase}/media/altissimo-bg.jpg')">

            <section class="contact">
                <h1>Contact</h1>
                <div class="flexslider homepage_contact_slider" style="opacity: 0;">
                    <ul class="slides">
                        <li style="background-image: url('${assets.cdnBase}/media/stills/turkey.jpg'); width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;"
                            class=""></li>
                        <li style="background-image: url('${assets.cdnBase}/media/stills/glacier-fly.jpg'); width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;"
                            class=""></li>
                        <li style="background-image: url('${assets.cdnBase}/media/stills/targetSmash.jpg'); width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;"
                            class=""></li>
                        <li style="background-image: url('${assets.cdnBase}/media/stills/searching.JPG'); width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;"
                            class=""></li>
                        <li style="background-image: url('${assets.cdnBase}/media/stills/cityWingsuitContrast.jpg'); width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;"
                            class="flex-active-slide"></li>
                    </ul>
                </div>
                <span class="homepage_line contact_line"
                      style="background-color: rgb(255, 255, 255); width: 40px;"></span>
            </section>

            <section class="about" style="background-color: rgba(255, 255, 255, 0); width: 33.33%; left: 33.33%;">
                <h1>About</h1>
                <div class="about_background_image"
                     style="background-image: url('${assets.cdnBase}/media/taft_profile.jpg')"></div>
                <span class="about_line" style="opacity: 1;"></span>
            </section>

            <section class="demo">
                <h1>Motion</h1>

                <video loop muted autoplay class="demo_background_video" style="display: none">
                    <source src="${assets.cdnBase}/media/demoPreview.mp4" type="video/mp4">
                </video>

                <ul class="social_icons">
                    <li>
                        <a href="https://www.instagram.com/brendandubs" target="_blank"><i class="fa fa-instagram"
                                                                                           aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/brendanweinsteinofficial/" target="_blank"><i
                                class="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/brendandubs" target="_blank"><i class="fa fa-youtube"
                                                                                         aria-hidden="true"></i></a>
                    </li>
                </ul>

                <span class="homepage_line demo_line" style="background-color: rgb(255, 255, 255); width: 40px;"></span>
            </section>
        </div>

        <div class="homepage_landing">
            <div class="landing_logo_text">
                <span>Brendan Weinstein</span>
            </div>
        </div>
    </div>

    <div class="homepage_contact_content">
        {% block contactTemplate %}
        {% endblock %}
    </div>
    <div class="homepage_about_content">
        {% block aboutTemplate %}
        {% endblock %}
    </div>
    <div class="homepage_demo_content">
        {% block demoTemplate %}
        {% endblock %}
    </div>
</div>

<script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
<script>
    var $j = jQuery.noConflict();
    $j(document).ready(function () {
        setTimeout(function () {
            $j(".landing_logo_text").fadeOut(1500, function () {
                $j(".homepage_landing").fadeOut(1e3)
            })
        }, 2e3);
    });
</script>
<script type="text/javascript" src="/static/js/dist/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="/static/js/dist/jquery.fitvids.js"></script>
<script type='text/javascript' src='https://use.fontawesome.com/bfa5b116b0.js?ver=5.1.1'></script>
<script type="text/javascript" src="/static/js/dist/velocity.min.js"></script>
<script type="text/javascript" src="/static/js/dist/jquery.mousewheel.min.js"></script>
<script type="text/javascript" src="/static/js/dist/mixitup-v2.js"></script>
<script type='text/javascript' src='/static/js/dist/home.js'></script>
</body>
</html>
