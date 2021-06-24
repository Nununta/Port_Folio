$(function () {
  $(function () {
    $(".special-list").slick({
      // infinite: true,
      slidesToShow: 3,
      centerMode: true,
      autoplay: false,
      speed: 3000,
      // variableWidth: true,
      centerPadding: "0px",
      arrows: true,
      prevArrow:
        '<img src="http://kasumiblog.xsrv.jp/codepen/images/arrow_lft.png" class="slide-arrow prev-arrow">',
      nextArrow:
        '<img src="http://kasumiblog.xsrv.jp/codepen/images/arrow_rig.png" class="slide-arrow next-arrow">',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
});
//$(function())で括らないとhtmlよりも先にjsが動いてしまう

//クリック時Fadein,FadeOut
$(function () {
  $("#nav-btn").on("click", function () {
    $(this).toggleClass("-active");
    // $("#nav-list").animate({ width: "toggle" });
    if ($("#nav-list").css("margin-left") == "0px") {
      $("#nav-list").animate(
        { "margin-left": "-385px" },
        { duration: 700, easing: "swing" }
      );
    } else {
      $("#nav-list").animate(
        { "margin-left": "0" },
        { duration: 700, easing: "swing" }
      );
    }
  });
});

//WOWアニメーション
$(function () {
  new WOW().init();
});

//スムーズスクロール
$(function () {
  $('a[href^="#"]').click(function () {
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top;
    const speed = 500;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });
});

$(function () {
  $(".top, top-section").vegas({
    slides: [
      { src: "./image/Top-1.jpg" },
      { src: "./image/Top-2.jpg" },
      { src: "./image/Top-3.jpg" },
    ],
    delay: 5000,
    timer: false,
    transition: "fade",
  });
});

//ハンバーガーメニュー
// $(function () {
//   $("#nav-btn").on("click", function () {
//     $(this).toggleClass("-active");
//     // $("#nav-list").animate({ width: "toggle" });
//     if ($("#nav-list").css("margin-left") == "0px") {
//       $("#nav-list").animate(
//         { "margin-left": "-385px" },
//         { duration: 700, easing: "swing" }
//       );
//     } else {
//       $("#nav-list").animate(
//         { "margin-left": "0" },
//         { duration: 700, easing: "swing" }
//       );
//     }
//   });
// });
