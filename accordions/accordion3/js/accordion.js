$(document).ready(function(){
  $('.navi .plus').on('click', function() {
      var $this = $(this),
          $navi = $this.closest('.navi'),
          $opened = $navi.find('.opened');

      if ($this.parent().hasClass('opened')) {
          $opened.removeClass('opened').children('.plus').text('+');
          return;
      } else if ($opened.length > 0) {
          $opened.removeClass('opened').children('.plus').text('+');
      }

      $this.text('-').parent().addClass('opened');
  });
  $('.navi').each(function() {
        $(this).find('.plus').first().click();
    });
});
