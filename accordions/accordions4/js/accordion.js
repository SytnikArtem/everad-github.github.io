$(document).ready(function(){
  if($(window).width() > 767) {
        var item = $('.help-item');
          item.click(function () {

              if ($(this).hasClass('active-bg')) {
                  $(this).removeClass('active-bg')
              }
              else {
                  item.removeClass('active-bg');
                  $(this).addClass('active-bg')
              }
          });
      }
      else
      {
          var item = $('.help-item');
          item.click(function () {
            item.removeClass('active-bg');
      });
      }
});
