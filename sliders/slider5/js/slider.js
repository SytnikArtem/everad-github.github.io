$(document).ready(function(){
  $('.slider2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: false,
  arrows: true,
  touchMove: false,
  infinite: false,
  asNavFor: '.slider1',
  responsive: [
    {
      breakpoint: 1000,
      settings: {
				infinite: true,
				adaptiveHeight: true
      }
    }
    ]
});

$('.slider1').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    centerMode: false,
    focusOnSelect: true,
    asNavFor: '.slider2',
    dots: false,
    touchMove: false,
		infinite: false,
		prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
				arrows: false,
				infinite: true
      }
    }
    ]
});
});
