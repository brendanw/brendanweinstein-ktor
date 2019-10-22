"use strict";
var $j = jQuery.noConflict();
$j(document).ready(function () {
  var t = $j(".about_top_container img"),
    e = $j("button.about_scroll_to");
  t.velocity({
    opacity: 1
  }, 2e3), e.velocity({
    opacity: 1
  }, 2e3);
  var i = $j(".about_container");
  if (e.click(function () {
    $j("html, body").animate({
      scrollTop: i.offset().top
    }, 1e3)
  }), i.length) {
    var o = i.offset().top,
      a = !1;
    $j(window).scroll(function () {
      $j(window).scrollTop() >= o && !a && ($j("body").addClass("animate"), $j(".about_slider").flexslider("play"), a = !0)
    })
  }
  $j(".about_slider").flexslider({
    animation: "fade",
    controlNav: !1,
    directionNav: !0,
    customDirectionNav: $j(".flex_custom_nav a"),
    slideshowSpeed: 2e3,
    slideshow: !1,
    start: function (t) {
      t.find(".current_slide").text(t.currentSlide + 1), t.find(".total_slides").text(t.count)
    },
    after: function (t) {
      t.find(".current_slide").text(t.currentSlide + 1), t.find(".total_slides").text(t.count)
    }
  }), $j(".timeline_slider").flexslider({
    animation: "fade",
    controlNav: !1,
    directionNav: !1,
    slideshowSpeed: 2e3,
    slideshow: !1,
    touch: !1,
    useCSS: !1
  });
});
var $j = jQuery.noConflict();
$j(document).ready(function () {
  window.history.replaceState({
    ajaxPage: !0,
    pageName: "home"
  }, "home"), $j(window).on("popstate", function (t) {
    null !== t.originalEvent.state && window.location.reload()
  }), $j(".homepage_demo_slider").flexslider({
    animation: "fade",
    controlNav: !1,
    directionNav: !1,
    slideshowSpeed: 2e3
  });
  var whiteHex = "#FFFFFF",
    blackHex = "#000000",
    homepage_logo = $j(".homepage_logo"),
    main_header = $j(".main_header"),
    contact = $j(".contact"),
    contact_title = $j(".contact h1"),
    contact_line = $j(".contact_line"),
    demo_background_video = $j("video.demo_background_video"),
    about = $j(".about"),
    about_title = $j(".about h1"),
    about_line = $j(".about_line"),
    about_background_image = $j(".about_background_image"),
    demo = $j(".demo"),
    demo_title = $j(".demo h1"),
    demo_line = $j(".demo_line"),
    stills_slider = $j(".homepage_contact_slider"),
    homepage_contact_content = $j(".homepage_contact_content"),
    homepage_about_content = $j(".homepage_about_content"),
    homepage_demo_content = $j(".homepage_demo_content");
  setTimeout(function () {
    $j(".landing_logo_text").fadeOut(1500, function () {
      $j(".homepage_landing").fadeOut(1e3)
    })
  }, 2e3);
  var p = !1,
    onOpenAbout = function () {
      p || (about.velocity({
        backgroundColor: whiteHex,
        backgroundColorAlpha: 1,
        width: "50%",
        left: "25%"
      }), contact.add(demo).velocity({
        backgroundColor: blackHex,
        backgroundColorAlpha: 1
      }), contact_title.add(demo_title).velocity({
        color: "#2C2C2C"
      }), contact_line.add(demo_line).velocity({
        backgroundColor: "#2C2C2C"
      }), about_title.velocity({
        color: blackHex
      }), about_background_image.velocity({
        opacity: 1
      }), homepage_logo.velocity({
        opacity: 0
      }))
    },
    onCloseAbout = function () {
      p || (about.velocity({
        backgroundColor: "rgba(255,255,255,0)",
        backgroundColorAlpha: 0,
        width: "33.33%",
        left: "33.33%"
      }, {
        duration: 50
      }), contact.add(demo).velocity({
        backgroundColor: "rgba(255,255,255,0)",
        backgroundColorAlpha: 0
      }, {
        duration: 50
      }), contact_title.add(demo_title).velocity({
        color: whiteHex
      }, {
        duration: 50
      }), contact_line.add(demo_line).velocity({
        backgroundColor: whiteHex
      }, {
        duration: 50
      }), about_title.velocity({
        color: whiteHex
      }, {
        duration: 50
      }), about_background_image.velocity({
        opacity: 0
      }, {
        duration: 50
      }), homepage_logo.velocity("reverse"))
    };
  about_title.hover(onOpenAbout, onCloseAbout), about_title.click(function () {
    p = !0, homepage_about_content.load("about .about_container", function () {
      $j.ajaxSetup({
        cache: !0
      }), $j.getScript("/static/js/dist/about.js"), $j(".mobile_homepage").remove(), window.history.pushState({
        ajaxPage: !0,
        pageName: "about"
      }, "About", "about")
    }), about.velocity({
      width: "100%",
      left: "0px",
      opacity: 1
    }, 800, function () {
      about_title.velocity({
        opacity: 0
      }, 1e3, function () {
        homepage_about_content.velocity("scroll", {
          duration: 1e3,
          easing: "easeInCubic",
          offset: 50,
          complete: function () {
            console.log("complete this");
            $j("body").addClass("animate"), $j(".about_slider").flexslider("play")
          }
        })
      })
    }), setTimeout(function () {
      main_header.removeClass("white")
    }, 1e3), $j(".homepage_background_overlay").remove(), $j(".menu li.current_page_item").removeClass("current_page_item"), $j(".menu li#menu-item-98").addClass("current_page_item")
  });
  var contactTransitions = !1,
    onOpenContact = function () {
      contactTransitions || (contact.velocity({
        width: "50%"
      }), contact_line.velocity({
        width: "50%"
      }), about.velocity({
        left: "50%",
        backgroundColor: "#2C2C2C",
        backgroundColorAlpha: 1
      }), stills_slider.velocity({
        opacity: 1
      }), about_title.velocity({
        color: blackHex
      }), about_line.velocity({
        opacity: 0
      }), demo.velocity({
        backgroundColor: blackHex,
        backgroundColorAlpha: 1
      }), demo_title.velocity({
        color: "#2C2C2C"
      }), demo_line.velocity({
        backgroundColor: "#2C2C2C"
      }), homepage_logo.velocity({
        opacity: 0
      }))
    },
    onCloseContact = function () {
      contactTransitions || (contact.velocity({
        width: "33.33%"
      }, {
        duration: 50
      }), contact_line.velocity({
        width: "40px"
      }, {
        duration: 50
      }), stills_slider.velocity({
        opacity: 0
      }, {
        duration: 50
      }), about.velocity({
        left: "33.33%",
        backgroundColor: "rgba(255,255,255,0)",
        backgroundColorAlpha: 0
      }, {
        duration: 50
      }), about_title.velocity({
        color: whiteHex
      }, {
        duration: 50
      }), about_line.velocity({
        opacity: 1
      }, {
        duration: 50
      }), demo.velocity({
        backgroundColor: "rgba(255,255,255,0)",
        backgroundColorAlpha: 0
      }, {
        duration: 50
      }), demo_title.velocity({
        color: whiteHex
      }, {
        duration: 50
      }), demo_line.velocity({
        backgroundColor: whiteHex
      }, {
        duration: 50
      }), homepage_logo.velocity("reverse"))
    };
  contact_title.hover(onOpenContact, onCloseContact), contact_title.click(function () {
    contactTransitions = !0, homepage_contact_content.load("contact #content", function () {
      $j.ajaxSetup({
        cache: !0
      }), $j.getScript("/static/js/dist/contact.js"), $j(".mobile_homepage").remove(), window.history.pushState({
        ajaxPage: !0,
        pageName: "contact"
      }, "contact", "contact")
    }), contact.css("z-index", 13), contact_line.velocity({
      width: "80px"
    }, {
      complete: function () {
        contact_line.add(contact_title).velocity({
          opacity: 0
        }, {
          complete: function () {
            contact.velocity({
              width: "100%"
            }, {
              duration: 100
            }, {
              easing: "easeInCubic"
            }), homepage_contact_content.velocity({
              translateX: "0%"
            }, {
              delay: 300,
              complete: function () {
                $j("body").addClass("animate")
              }
            })
          }
        })
      }
    }), setTimeout(function () {
      main_header.removeClass("white")
    }, 1e3), $j(".homepage_background_overlay").remove(), $j(".menu li.current_page_item").removeClass("current_page_item"), $j(".menu li#menu-item-100").addClass("current_page_item")
  });
  var w = !1,
    onOpenDemo = function () {
    demo_background_video.show()
      w || (contact.velocity({
        backgroundColor: blackHex,
        backgroundColorAlpha: 1
      }), contact_title.velocity({
        color: "#2C2C2C"
      }), contact_line.velocity({
        backgroundColor: "#2C2C2C"
      }), demo_background_video.velocity({
        opacity: 1
      }, {
        duration: 50
      }), about.velocity({
        left: "16.66%",
        backgroundColor: "#2C2C2C",
        backgroundColorAlpha: 1
      }), about_title.velocity({
        color: blackHex
      }), about_line.velocity({
        opacity: 0
      }), demo.velocity({
        width: "50%",
        left: "50%"
      }), demo_line.velocity({
        width: "50%"
      }), homepage_logo.velocity({
        opacity: 0
      }))
    },
    onCloseDemo = function () {
      w || (contact.velocity({
        backgroundColor: "rgba(255,255,255,0)",
        backgroundColorAlpha: 0
      }, {
        duration: 50
      }), demo_background_video.velocity({
        opacity: 0
      }, {
        complete: function() {
          demo_background_video.hide()
        },
        duration: 50
      }), contact_title.velocity({
        color: whiteHex
      }, {
        duration: 50
      }), contact_line.velocity({
        backgroundColor: whiteHex
      }, {
        duration: 50
      }), about.velocity({
        left: "33.33%",
        backgroundColor: "rgba(255,255,255,0)",
        backgroundColorAlpha: 0
      }, {
        duration: 50
      }), about_title.velocity({
        color: whiteHex
      }, {
        duration: 50
      }), about_line.velocity({
        opacity: 1
      }, {
        duration: 50
      }), demo.velocity({
        width: "33.33%",
        left: "66.66%"
      }, {
        duration: 50
      }), demo_line.velocity({
        width: "40px"
      }, {
        duration: 50
      }), homepage_logo.velocity("reverse"))
    };
  demo_title.hover(onOpenDemo, onCloseDemo), demo_title.click(function () {
    w = !0, homepage_demo_content.load("motion #content", function () {
      $j.ajaxSetup({
        cache: !0
      }), $j.getScript("https://vjs.zencdn.net/7.6.5/video.js"),
          $j(".mobile_homepage").remove(), window.history.pushState({
        ajaxPage: !0,
        pageName: "motion"
      }, "motion", "motion")
    }), demo.css("z-index", 13), demo_line.velocity({
      width: "80px"
    }, {
      complete: function () {
        demo_line.add(demo_title).velocity({
          opacity: 0
        }, {
          complete: function () {
            demo_background_video.velocity({
              translateX: "0px"
            }, function() {
              demo.velocity({
                width: "100%",
                left: 0
              }, {
                duration: 1e3,
                easing: "easeInCubic",
                complete: function () {
                  homepage_demo_content.velocity({
                    translateX: "0%"
                  }, {
                    delay: 300
                  })
                }
              });
            });
          }
        })
      }
    }), setTimeout(function () {
      main_header.removeClass("white")
    }, 1e3), $j(".homepage_background_overlay").remove(), $j(".menu li.current_page_item").removeClass("current_page_item"), $j(".menu li#menu-item-102").addClass("current_page_item")
  })
});
var $j = jQuery.noConflict();
$j(document).ready(function () {
  $j("body").hasClass("page-template-contact") && $j("body").addClass("animate"), $j(".contact_videos").mousewheel(function (t, e) {
    this.scrollLeft -= e, t.preventDefault()
  });
  var t = function () {
      $j(this).find("video")[0].play(), $j(this).find(".contact_thumbnail").fadeTo(800, 0), $j(this).find(".contact_overlay").fadeTo(800, 1)
    },
    e = function () {
      var t = $j(this);
      $j(this).find(".contact_thumbnail").fadeTo(300, 1, function () {
        t.find("video")[0].pause(), t.find("video")[0].currentTime = 0
      }), $j(this).find(".contact_overlay").fadeTo(800, 0)
    };
  $j(".contact_video_container").hover(t, e);
  var i = $j("#current_video_name"),
    o = $j("#current_video_position"),
    a = $j("#total_videos"),
    n = $j(".contact_videos .contact_video_container"),
    l = $j(window).width() / 2,
    r = $j(".contact_videos .contact_video_container:first-child"),
    c = r.attr("data-name"),
    s = r.attr("data-position");
  i.text(c), o.text(s), a.text(n.length);
  var d = !1,
    u = !1;
  $j(".contact_videos").scroll(function () {
    r.offset().left >= l ? d || ($j(".contact_page_title h1").fadeTo(300, 0, function () {
      d = !1
    }), d = !0) : u || ($j(".contact_page_title h1").fadeTo(300, 1, function () {
      u = !1
    }), u = !0), n.each(function () {
      var t = $j(this).attr("data-position"),
        e = $j(this).attr("data-name"),
        a = $j(this).offset().left;
      a > 0 && a < l && (i.text(e), o.text(t))
    })
  })
});
var $j = jQuery.noConflict();
$j(document).ready(function () {
  $j(".main_header .menu_button_container").click(function () {
    $j(".main_header .header_right").hasClass("menu_active") ? ($j(".main_header .header_right").removeClass("menu_active"), $j(".homepage_background_overlay").removeClass("menu_active")) : ($j(".main_header .header_right").addClass("menu_active"), $j(".homepage_background_overlay").addClass("menu_active"))
  });
  var t = $j(".mobile_header .menu_button_container"),
    e = $j(".mobile_menu"),
    i = $j(".close_mobile_menu");
  t.click(function () {
    e.addClass("active")
  }), i.click(function () {
    e.removeClass("active")
  }), $j(".carousel_slider").flexslider({
    animation: "slide",
    controlNav: !1,
    directionNav: !0,
    prevText: "",
    nextText: "",
    slideshowSpeed: 2e3,
    slideshow: !1,
    useCSS: !1,
    animationLoop: !1,
    itemWidth: 800
  }), $j('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').wrap("<div class='video_embed'/>"), $j(".video_embed").fitVids()
});
var mq = window.matchMedia("(min-width: 1024px)");
mq.matches && $j(".demo_grid").mousewheel(function (t, e) {
  this.scrollLeft -= e, t.preventDefault()
}), mq.addListener(function (t) {
  t.matches ? $j(".demo_grid").mousewheel(function (t, e) {
    this.scrollLeft -= e, t.preventDefault()
  }) : $j(".demo_grid").unbind("mousewheel")
}), $j("#show_hide_filter").click(function () {
  $j(".demo_top_container").hasClass("filter_hidden") ? ($j("#show_hide_filter_text").text("Hide Menu"), $j(".demo_bottom_left_hidden_button").fadeOut(1e3)) : ($j("#show_hide_filter_text").text("Show Menu"), $j(".demo_bottom_left_hidden_button").fadeIn(1e3)), $j(".demo_top_container").toggleClass("filter_hidden")
});
var moveGridRight = function () {
    var t = $j(".demo_grid")[0].scrollWidth;
    $j(".demo_grid").animate({
      scrollLeft: t
    }, 5e3, "linear")
  },
  moveGridLeft = function () {
    $j(".demo_grid").animate({
      scrollLeft: 0
    }, 5e3, "linear")
  },
  stopGridScroll = function () {
    $j(".demo_grid").stop()
  };
$j("#demo_scroll_right").hover(moveGridRight, stopGridScroll), $j("#demo_scroll_left").hover(moveGridLeft, stopGridScroll), $j("#demo_mixitup").mixItUp();
var filterButton = $j(".mobile_demo_filter_header button"),
  filterTitle = $j(".mobile_filter_title"),
  filterDrawer = $j(".mobile_demo_filter .mixitup_filters"),
  filterItem = $j(".mobile_demo_filter li");
filterButton.on("click", function () {
  filterDrawer.hasClass("open") ? filterDrawer.removeClass("open") : filterDrawer.addClass("open")
}), filterItem.on("click", function () {
  var t = $j(this).attr("data-filter");
  if ("all" !== t) var t = $j(this).attr("data-filter").slice(1);
  else var t = $j(this).attr("data-filter");
  filterTitle.text(t), filterDrawer.removeClass("open")
});
var updateLightboxInfo = function (t) {
    var e = $j('.image_container[data-image="' + t + '"]'),
      i = e.attr("data-image-download"),
      o = e.attr("data-name"),
      a = e.attr("data-location");
    $j("#lightbox_image_name").text(o), o && a ? $j("#lightbox_image_location").text("// " + a) : $j("#lightbox_image_location").text(a), $j("#lightbox_image_download").attr("href", i)
  },
  visibleImages = [];
mq.matches && $j(".image_container").click(function () {
  var t = $j(this).attr("data-image");
  $j(this).attr("data-image-download"), $j(this).attr("data-name"), $j(this).attr("data-location");
  $j(".lightbox_image").attr("src", t), updateLightboxInfo(t), $j(".demo_lightbox").fadeIn(500), visibleImages = [], $j(".image_container").each(function () {
    var t = $j(this).attr("data-image");
    $j(this)[0].hasAttribute("style") && visibleImages.push(t)
  })
});
var crossFadeInProgress = !1,
  crossFade = function (t) {
    crossFadeInProgress = !0, $j(".lightbox_image_container").prepend('<img class="lightbox_image incoming_image" src="' + t + '" />'), $j(".lightbox_image_container .lightbox_image:first-of-type").fadeTo(800, 1), $j(".lightbox_image_container .lightbox_image:last-of-type").fadeTo(800, 0, function () {
      $j(".lightbox_image_container .lightbox_image:last-of-type").remove(), $j(".lightbox_image_container .lightbox_image.incoming_image").removeClass("incoming_image"), crossFadeInProgress = !1
    })
  };
$j(".lightbox_next").click(function () {
  var t, e = $j(".lightbox_image").attr("src"),
    i = visibleImages.indexOf(e),
    o = i + 1;
  t = i + 1 === visibleImages.length ? visibleImages[0] : visibleImages[o], crossFadeInProgress || (crossFade(t), updateLightboxInfo(t))
}), $j(".lightbox_prev").click(function () {
  var t, e = $j(".lightbox_image").attr("src"),
    i = visibleImages.indexOf(e),
    o = i - 1,
    a = visibleImages.length - 1;
  t = 0 === i ? visibleImages[a] : visibleImages[o], crossFadeInProgress || (crossFade(t), updateLightboxInfo(t))
}), $j(".lightbox_exit, .lightbox_exit_container").click(function () {
  $j(".demo_lightbox").fadeOut(500, function () {
    $j(".lightbox_next").fadeIn(), $j(".lightbox_prev").fadeIn()
  })
});