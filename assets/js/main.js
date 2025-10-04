(function ($) {
  "use strict";

  // offcanvas
  $(".tp-header-toogle").on("click", function () {
    $(".tp-offcanvas").addClass("tp-offcanvas-open");
    $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
  });

  $(".tp-offcanvas-close-button,.tp-offcanvas-overlay").on(
    "click",
    function () {
      $(".tp-offcanvas").removeClass("tp-offcanvas-open");
      $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
    }
  );
  document.querySelectorAll("[data-bg-img]").forEach(function(el) {
    let bg = el.getAttribute("data-bg-img");
    el.style.backgroundImage = "url('" + bg + "')";
  });

  // data bg img
  $("[data-bg-img]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")");
  });

  // data border color
  $("[data-border-color]").each(function () {
    $(this).css("border-color", $(this).attr("data-border-color"));
  });

  // data bg color
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  // data bg color
  $("[data-color]").each(function () {
    $(this).css("color", $(this).attr("data-color"));
  });

  // $(".popup-image").magnificPopup({
  //   type: "image",
  //   // other options
  // });

  // $(".popup-video").magnificPopup({
  //   type: "iframe",
  //   // other options
  // });

// tptestimonial slider
var swiper = new Swiper(".tptestimonial-slider-active", {
  slidesPerView: 3,
  spaceBetween: 30,
  
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
 


  // tptext slider
  var swiper_text = new Swiper(".tpcauses-text-slider-active", {
    slidesPerView: "auto",
    spaceBetween: 40,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });

  $(".tpcauses-text-slider-active").on(
    "hover",
    function () {
      swiper_text.autoplay.stop();
    },
    function () {
      swiper_text.autoplay.start();
    }
  );
})(jQuery);
