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
