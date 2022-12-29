$(document).ready(function () {
  $(".header__slider").slick({
    dots: true,
    arrows: false,
  });

  $(".products__fitler-dropdown-top").click(function () {
    $(".products__fitler-dropdown").toggleClass("open");
    $(".products__fitler-dropdown-content").slideToggle(100);
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
    $(".modal").css({
      display: "none",
    });
  });

  $(".header__user").click(function () {
    $(".modal").css({
      display: "none",
    });
    $(modalRegistration).css({ display: "block" });
  });

  $(modalRegistrationTrigger2).click(function () {
    $(".modal").css({
      display: "none",
    });
    $(modalRegistration).css({ display: "block" });
  });

  $(modalLoginTrigger).click(function () {
    $(".modal").css({
      display: "none",
    });
    $(modalLogin).css({ display: "block" });
  });

  $(modalResetTrigger).click(function () {
    $(".modal").css({
      display: "none",
    });
    $(modalReset).css({ display: "block" });
  });

  $(window).click(function (e) {
    if (e.target == modalRegistration) {
      $(".modal").css({
        display: "none",
      });
    }
    if (e.target == modalLogin) {
      $(".modal").css({
        display: "none",
      });
    }
    if (e.target == modalReset) {
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
});
