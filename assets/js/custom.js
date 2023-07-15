$(document).ready(function () {
  $(".first-screen-slider").slick({
    dots: true,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 757,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  Fancybox.bind("[data-fancybox]", {
    loop: true,
    buttons: ["zoom", "slideShow", "fullScreen", "close"],
    animationEffect: "fade",
    transitionEffect: "slide",
    animationDuration: 600,
  });
});
