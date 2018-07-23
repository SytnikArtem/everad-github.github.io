$(document).ready(function () {

  $('.doctor__my-slider .my-slider__main').on('afterChange', function(event, slick, currentSlide){
      $('.doctor__my-slider .my-slider__nav span').text(currentSlide + 1);
  });


  $('.report__my-slider .my-slider__main').slick({
  	asNavFor: '.my-slider__report_js',
  	slidesToShow: 1,
  	arrows: true,
  	appendArrows: '.report__my-slider .my-slider__nav',
  	nextArrow: '<svg class="my-slider__arrow_next" width="10" height="13" viewBox="0 0 14 26"><defs><path class="icon--next" id="333" d="M1075.58 8065.73a.9.9 0 0 1-.66.27.92.92 0 0 1-.65-1.57l11.5-11.43-11.5-11.43a.91.91 0 0 1 0-1.3.93.93 0 0 1 1.3 0l12.16 12.08c.36.36.36.94 0 1.3z"/></defs><g><g transform="translate(-1074 -8040)"><use fill="#fff" xlink:href="#333"/></g></g></svg>',
  	prevArrow: '<svg class="my-slider__arrow_prev" width="10" height="13" viewBox="0 0 14 26"><defs><path class="icon--prev" id="222" d="M1075.58 8065.73a.9.9 0 0 1-.66.27.92.92 0 0 1-.65-1.57l11.5-11.43-11.5-11.43a.91.91 0 0 1 0-1.3.93.93 0 0 1 1.3 0l12.16 12.08c.36.36.36.94 0 1.3z"/></defs><g><g transform="translate(-1074 -8040)"><use fill="#fff" xlink:href="#222"/></g></g></svg>',
  	infinite: false
  });

  $('.report__my-slider .my-slider__capture').slick({
  	asNavFor: '.my-slider__report_js',
  	slidesToShow: 1,
  	arrows: false,
  	speed: 450,
  	infinite: false
  });

  $('.my-slider__size').slick({
  	asNavFor: '.my-slider__report_js',
  	slidesToShow: 3,
  	arrows: false,
  	infinite: false,
  	responsive: [
  	    {
  	      breakpoint: 2000,
  	      settings: {
  	        slidesToShow: 3,
  	        slidesToScroll: 1
  	      },
  	    },
  	    {
  	      breakpoint: 992,
  	      settings: {
  	        slidesToShow: 1,
  	        slidesToScroll: 1
  	      }
  	    }
    	]
  });

  $('.report__my-slider .my-slider__main').on('afterChange', function(event, slick, currentSlide){
      $('.report__my-slider .my-slider__nav span').text(currentSlide + 1);
  });

  $('.review__wrap').slick({
  	slidesToShow: 4,
  	arrows: true,
  	infinite: false,
  	appendArrows: '.review__my-nav',
  	nextArrow: '<svg class="my-slider__arrow_next" width="10" height="13" viewBox="0 0 14 26"><defs><path class="icon--next" id="555" d="M1075.58 8065.73a.9.9 0 0 1-.66.27.92.92 0 0 1-.65-1.57l11.5-11.43-11.5-11.43a.91.91 0 0 1 0-1.3.93.93 0 0 1 1.3 0l12.16 12.08c.36.36.36.94 0 1.3z"/></defs><g><g transform="translate(-1074 -8040)"><use fill="#fff" xlink:href="#555"/></g></g></svg>',
  	prevArrow: '<svg class="my-slider__arrow_prev" width="10" height="13" viewBox="0 0 14 26"><defs><path class="icon--prev" id="444" d="M1075.58 8065.73a.9.9 0 0 1-.66.27.92.92 0 0 1-.65-1.57l11.5-11.43-11.5-11.43a.91.91 0 0 1 0-1.3.93.93 0 0 1 1.3 0l12.16 12.08c.36.36.36.94 0 1.3z"/></defs><g><g transform="translate(-1074 -8040)"><use fill="#fff" xlink:href="#444"/></g></g></svg>',
  	responsive: [
  	    {
  	      breakpoint: 2000,
  	      settings: {
  	        slidesToShow: 4,
  	        slidesToScroll: 1
  	      },
  	    },
  	    {
  	      breakpoint: 1200,
  	      settings: {
  	        slidesToShow: 3,
  	        slidesToScroll: 1
  	      }
  	    },
  	    {
  	      breakpoint: 992,
  	      settings: {
  	        slidesToShow: 1,
  	        slidesToScroll: 1
  	      }
  	    }
    	]
  });

});
