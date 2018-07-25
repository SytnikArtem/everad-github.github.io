$(document).ready(function(){
  $('.question').click(function(){
    if ($(this).hasClass('open')) {
      $('.answer').slideUp();
      $(this).removeClass('open');
    }
    else {
      $('.answer').slideUp();
      $('.question').removeClass('open');
      $(this).parent().find('.answer').slideDown();
      $(this).addClass('open');
    }
  });
});
