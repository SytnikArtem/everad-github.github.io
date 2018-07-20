$(window).load(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        // startPosition: 2,
        dots: false,
        responsiveClass: true,
        URLhashListener: true,
        nav: false,
        animateIn: true,
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
                mouseDrag: true
            },
            768: {
                items: 3,
                touchDrag: false,
                mouseDrag: false,
                margin: 10
            },
            1170: {
                items: 5,
                nav: true,
                touchDrag: false,
                mouseDrag: false,
                margin: 10
            }
        }
    })

    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $('.new-owl-control__btn.next').click(function () {
        owl.trigger('next.owl.carousel');
        changeSliderItmes()
    })
    $('.new-owl-control__btn.prev').click(function () {
        owl.trigger('prev.owl.carousel');
        changeSliderItmes()
    })
    function changeSliderItmes() {
        $('.responsive__carousel .item .text-container').removeClass('opa rotate');
        $('.owl-stage-outer, .slider, .btn-c, .text-container, .new-owl-control__btn').removeClass('show1 rotate');
        $('.owl-item').removeClass('lvl-2');
        $('.owl-item').removeClass('lvl-3');
        $('.owl-item.active.center').next().addClass('lvl-2').next().addClass('lvl-3');
        $('.owl-item.active.center').prev().addClass('lvl-2').prev().addClass('lvl-3');
    }

    changeSliderItmes()

    setTimeout(function () {
        $('.btn-c').click(function() {
            $(this).parent().children('.text-container').toggleClass("opa");
            $(this).toggleClass("rotate");
        });
    },1);
});
