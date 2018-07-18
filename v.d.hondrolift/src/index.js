import 'normalize.css';
import './libs/bootstrap/bootstrap.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

import 'animate.css';
import 'wowjs';

import './libs/everad/everad.js';
import './libs/everad/post.js';

import './sass/main.sass';

new WOW().init();


(function() {

    $(document).ready( function() {
        $('.add-review__button').on('click', function(e) {
            e.preventDefault();

            function closePopupReviews() {
                $('.add-review__wrap').fadeOut('slow');
            };

            var input = $('.add-review__input')[0];
            var val = input.value;

            if (val !== '') {
                input.value = '';

                $('.add-review__msg').css('display', 'none');

                $('.add-review__wrap').fadeIn('slow');
                setTimeout(closePopupReviews, 3500);

                $('.add-review__close').on('click', function() {
                    closePopupReviews();
                });

            } else {
                $('.add-review__msg').css('display', 'block');
            }

        });

    });


	$('.add-review__btn button').on('click', function(e) {
		e.preventDefault();
	});

    $('.hidden-1').slideUp(10);
    $('.hidden-2').slideUp(10);
    $('.hidden-3').slideUp(10);

    $('.slider-compare__btn').on('click', function() {

        var id = $(this).data('id');
        $('.hidden-' + id).slideToggle(400);
        $(this).toggleClass('review-fixed');

    });


	$(document).ready(function() {
        $('#slider-compare').owlCarousel({
            loop: true,
            nav: false,
            smartSpeed: 1000,
            autoplay: false,
            autoplayTimeout: 4000,
            responsive: {
                0:{
                    items:1
                },
                639: {
                	items: 2
                },
                999:{
                    items:3
                },
                1200: {
                	items: 4
                }
            }
        });
    });

    $(document).ready(function() {
        $('#slider-review').owlCarousel({
            loop: false,
            nav: true,
            smartSpeed: 1000,
            autoplay: false,
            autoplayTimeout: 4000,
            responsive: {
                0:{
                    items:1
                },
                767: {
                    items: 2
                },
                1000 :{
                    items: 2
                },
                1001: {
                    items: 3
                }
            }
        });
    });

var result = 70;
// var buyers = 12;
var buyers = 12;

function editCounter() {

    // var elem = $('#count__text_2').text() + $('#content__text_3').text(); // '12'
    var lastpack = +$('.lastpack').first().text();
    var local = localStorage.getItem('sa');
    if (local) {
        buyers = +localStorage.getItem('sa');
    } else {
        localStorage.setItem('sa', buyers)
    }

    if (lastpack < result) {
        result = lastpack;
        buyers++;
        localStorage.setItem('sa', buyers);

        $('#count__text_2').text(Math.floor(buyers / 10));
        $('#count__text_3').text(buyers % 10);
    }



};

setInterval(editCounter, 5000);



/* safari */

var err =  $('.use .doctor__circle');

var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
  if (ua.indexOf('chrome') > -1) {
    // Chrome

  } else {
    // Safari

      err.css('content', 'none');

    if(window.matchMedia('(max-width: 767px)').matches)
    {
      // do functionality on screens smaller than 767px


      $('.compare .doctor').css('flex-direction', 'column');
      $('.compare .doctor__photo').css('margin', 'auto')
      $('.compare .doctor__photo').css('margin-bottom', '20px')
      err.css('left', '43%');
    }


  }
}



})();
