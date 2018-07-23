$(document).ready(function(){
   // console.log('ready');
   //slider rew
  (function(){
    var textContainer = $($('#reviews-slider-text__current-review')[0]);
    var slides = $('.reviews-slider-author__item');
    var photos = $('.reviews-slider-author__photo span');
    var buttonPrewSlide = $('.reviews-slider-button_left');
    var buttonNetSlide = $('.reviews-slider-button_right');

    //меняет слайд
    function changeSlide(){
      var newSlideContent = $($('.reviews-slider-author__item_active .reviews-slider-author__text div')[0]).clone();
      textContainer.html(newSlideContent);
      // console.log(newSlideContent);
    }

    //меняет классы, подготавливает слайдер к изменению слйда
    function changeClass(data, e){

      var currentSlide = $('.reviews-slider-author__item_active');
      var next = (data==='next');
      var nextSlide = (next)? currentSlide.next():currentSlide.prev();

      slides.removeClass('reviews-slider-author__item_active');

      //если кликнуле не по кнопке а по слайду
      if (data === 'slide') {
        $(e.currentTarget).addClass('reviews-slider-author__item_active');;
        changeSlide();
      }else if(data==='next' || data==='prev'){
        if(nextSlide[0]){
          // console.log(nextSlide);
          $(nextSlide).addClass('reviews-slider-author__item_active');
        }else if(next){
          // console.log('дальше пусто');
          $(slides[0]).addClass('reviews-slider-author__item_active');
        }else{
          $(slides[slides.length-1]).addClass('reviews-slider-author__item_active');
        }
      }
      changeSlide();
    }

    buttonPrewSlide.click(function(){changeClass('prev');});
    buttonNetSlide.click(function(){changeClass('next');});
    slides.click(function(e){changeClass('slide', e)})
    changeSlide();
  })();

});
