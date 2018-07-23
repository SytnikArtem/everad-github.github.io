$(document).ready(function(){
  $('.review-block').slick({
  		  slidesToShow: 3,
  		  dots: true,
  		  slidesToScroll: 1,
  		  autoplay: false,
  		  autoplaySpeed: 4000,
  		  responsive: [{
  			  breakpoint: 991,
  			  settings: {
  			    slidesToShow: 2,
  			    arrows:false,
  			  }
  		  	},
  		  	{
  			  breakpoint: 767,
  			  settings: {
  			    slidesToShow: 1,
  			    arrows: false,
  			  },
  			}
  		  ]
  		});
    var textReview = $('.review-block__text');
	  for (var i = 0; i < textReview.length; i++ ){
	  	if (textReview.eq(i).height() > 210){
	  		textReview.eq(i).parent().append('<a href="" class="review-block__more more">+</a>');
	  	}
	  	textReview.eq(i).height(210);
	  }
    $('.review-block__more').on('click', function (e) {
	  	e.preventDefault();
	  	$(this).parent().toggleClass('review-block__main_shadow');
	  	var thisText = $(this).parent().find('.review-block__text');
	  	thisText.toggleClass('review-block__text_full');
	  	if (thisText.hasClass('review-block__text_full'))
	  		$(this).text('-');
	  	else
	  		$(this).text('+');
	  });
});
