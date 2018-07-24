$(document).ready(function(){
  $('.content__bottom').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 0,
        infinite: false,
        centerMode: true,
        touchMove: false,
        draggable: false,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true
                }
            }
        ]

    });

    $('.content__bottom').on('afterChange', function (event, slick, currentSlide) {
        var curSlide = $('.content__bottom').slick('slickCurrentSlide');
        $('.top__item').removeClass('active');

        var clas = $('.top__item').eq(curSlide).hasClass('active');
        if (!clas) {
            $('.top__item').eq(curSlide).addClass('active');
        }
    });

    var curSlide = $('.content__bottom').slick('slickCurrentSlide');
    $('.top__item').eq(curSlide).addClass('active');


    $('.content__top .top__item').click(function () {
        var index = $(this).index();
        var clas = $('.top__item').eq(index).hasClass('active');
        $('.top__item').not(this).removeClass('active');
        $('.content__bottom').slick('slickGoTo', index);
        if (!clas) {
            $('.top__item').eq(index).addClass('active');
        }
    });


    $('.content__bottom').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var tablet = ($(window).width()) < 1024;
        var mob640 = ($(window).width()) < 639;
        var mobile = ($(window).width()) < 768;
        if (tablet && !mobile) {
            $('.content__top').removeClass('active');
            $('.content__top').removeClass('active1');
            $('.content__top').removeClass('active2');
            $('.content__top').removeClass('active3');
            $('.content__top').removeClass('active4');
            if (currentSlide == 0 && nextSlide == 1) {
                $('.content__top').addClass('active');
            } else if (currentSlide == 0 && nextSlide == 2) {
                $('.content__top').addClass('active');
            } else if (currentSlide == 2 && nextSlide == 3) {
                $('.content__top').addClass('active');
            } else if (currentSlide == 1 && nextSlide == 2) {
                $('.content__top').addClass('active');
            } else if (currentSlide == 1 && nextSlide == 0) {
                $('.content__top').removeClass('active');
            } else if (currentSlide == 3 && nextSlide == 2) {
                if ($('.content__top').hasClass('active')) {
                    $('.content__top').removeClass('active');
                }
            } else if (currentSlide == 3 && nextSlide == 1) {
                if ($('.content__top').hasClass('active')) {
                    $('.content__top').removeClass('active');
                }
            } else if (currentSlide == 2 && nextSlide == 1) {
                if ($('.content__top').hasClass('active')) {
                    $('.content__top').removeClass('active');
                }
            }
            else if (currentSlide == 1 && nextSlide == 0) {
                $('.content__top').removeClass('active');
            }
            /*else if (currentSlide == 2) {
             $('.content__top').addClass('active');
             } else if (currentSlide == 3) {
             $('.content__top').addClass('active');
             }*/
        } else if (mobile && !mob640) {
            $('.content__top').removeClass('active');
            $('.content__top').removeClass('active1');
            $('.content__top').removeClass('active2');
            $('.content__top').removeClass('active3');
            $('.content__top').removeClass('active4');
            if (nextSlide == 0) {
                $('.content__top').addClass('active1');
            } else if (nextSlide == 1) {
                $('.content__top').addClass('active2');
            } else if (nextSlide == 2) {
                $('.content__top').addClass('active3');
            } else if (nextSlide == 3) {
                $('.content__top').addClass('active3');
            }
            /*else if (currentSlide == 2) {
             $('.content__top').addClass('active2');
             } else if (currentSlide == 3) {
             $('.content__top').addClass('active2');
             }*/
        } else if (mob640) {
            $('.content__top').removeClass('active');
            $('.content__top').removeClass('active1');
            $('.content__top').removeClass('active2');
            $('.content__top').removeClass('active3');
            $('.content__top').removeClass('active4');
            if (nextSlide == 0) {
                $('.content__top').addClass('active1');
            } else if (nextSlide == 1) {
                $('.content__top').addClass('active2');
            } else if (nextSlide == 2) {
                $('.content__top').addClass('active3');
            } else if (nextSlide == 3) {
                $('.content__top').addClass('active4');
            }
        }


    });
});
