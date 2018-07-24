$(document).ready(function(){
  $('.owl-carousel').owlCarousel({

		dots: false,
		responsiveClass: true,
		URLhashListener: true,
		onResize: openItem,
		responsive: {
			0: {
				items: 1,
				smartSpeed: 1000,
				loop: true,
				slideTransition: 3000,
				center: false,
				margin: 10

			},
			768: {
				items: 3,
				loop: true,
				dots: true,

				smartSpeed: 1000,
				center: true

			},
			1201: {
				items: 3,
				nav: true,

				smartSpeed: 1000,
				margin: 25,
				loop: true,
				center: true
			}
		}
	});
  var owl = $('.owl-carousel');
	owl.owlCarousel();

	// owl.on('')


	$('.new-owl-control__btn.next').click(function () {
		owl.trigger('next.owl.carousel');
		changeSliderItmes()
	})
	$('.new-owl-control__btn.prev').click(function () {
		owl.trigger('prev.owl.carousel');
		changeSliderItmes()
	})

	function changeSliderItmes() {
		$('.reviews-item .reviews-text').removeClass('open');
		$(".reviews-inner").removeClass("more");
		$(".plus").removeClass("rotate")
	}

	changeSliderItmes()

	function openItem() {
		setTimeout(function () {
			var owl = $('.owl-carousel');
			var collection = $(".reviews-text");
			var wrap = $(".reviews-inner");
			$('.plus').unbind('click');
			$('.plus').click(function () {

				owl.trigger('.plus');
				if ($(this).parent().children('.reviews-text').hasClass('open')) {
					$(this).parent().children('.reviews-text').toggleClass("open");
					$(this).toggleClass("rotate");
					$(".reviews-inner").removeClass("more")
					return;
				}
				collection.removeClass("open");
				wrap.removeClass("more");
				$(".plus").removeClass("rotate");
				$(this).parent().children('.reviews-text').toggleClass("open");
				$(this).toggleClass("rotate");
				$(".reviews-inner").toggleClass("more")
			});


		}, 1);
	}

	openItem();
});
