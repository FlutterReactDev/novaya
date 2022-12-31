$(document).ready(function () {
  $(".header__slider").slick({
    dots: true,
    arrows: false,
  });

  $(".products__fitler-dropdown-top").click(function () {
    $(".products__fitler-dropdown").toggleClass("open");
    $(".products__fitler-dropdown-content").slideToggle(100);
  });
  $(".product__image-view-main-mobile").slick({
    arrows: true,
    infinite: false,
    dots:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $(".complete__products").slick({
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:
      "<button type='button' class='slick-prev'><img src='images/one-page/arrow-left.svg'/></button>",
    nextArrow:
      "<button type='button' class='slick-next'><img src='images/one-page/arrow-right.svg'/></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  $(".phone-input").inputmask("+7(999) 999-99-99");

  const modalRegistration = document.querySelector("#modal-registration");
  const modalLogin = document.querySelector("#modal-login");
  const modalReset = document.querySelector("#modal-reset");

  const modalRegistrationTrigger2 =
    document.querySelector("#modalRegistration");
  const modalLoginTrigger = document.querySelector("#modalLogin");
  const modalResetTrigger = document.querySelector("#modalReset");

  $(".modal-close img").click(function () {
    $("body").removeClass("is-open");
    $(".modal").css({
      display: "none",
    });
  });

  $(".header__user").click(function () {
    $(".modal").css({
      display: "none",
    });
    $(modalRegistration).css({ display: "block" });
    $("body").addClass("is-open");
  });

  $(modalRegistrationTrigger2).click(function () {
    $(".modal").css({
      display: "none",
    });
    $(modalRegistration).css({ display: "block" });
    $("body").addClass("is-open");
  });

  $(modalLoginTrigger).click(function () {
    $(".modal").css({
      display: "none",
    });
    $(modalLogin).css({ display: "block" });
    $("body").addClass("is-open");
  });

  $(modalResetTrigger).click(function () {
    $(".modal").css({
      display: "none",
    });
    $(modalReset).css({ display: "block" });
    $("body").addClass("is-open");
  });

  $(window).click(function (e) {
    if (e.target == modalRegistration) {
      $("body").removeClass("is-open");
      $(".modal").css({
        display: "none",
      });
    }
    if (e.target == modalLogin) {
      $("body").removeClass("is-open");
      $(".modal").css({
        display: "none",
      });
    }
    if (e.target == modalReset) {
      $("body").removeClass("is-open");
      $(".modal").css({
        display: "none",
      });
    }
  });

  $(".input-password img").click(function () {
    let stateInput = $(".input-password input").attr("type");
    if (stateInput == "text") {
      $(".input-password input").attr("type", "password");
    } else {
      $(".input-password input").attr("type", "text");
    }
  });

  $(".header__hamburger span img").click(function () {
    $("body").addClass("is-open");
    $(".header-mobile-nav").addClass("open");
  });

  $(".header-mobile-nav-top img").click(function () {
    $("body").removeClass("is-open");
    $(".header-mobile-nav").removeClass("open");
  });
  $(".recommends__products-mobile").slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  });

  $(".footer-accordion__top").click(function () {
    const content = this.nextElementSibling;
    $(content).slideToggle(100);
  });
});
