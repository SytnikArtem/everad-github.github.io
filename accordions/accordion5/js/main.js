// click question
var toggle = 1;
$(".plus_review, .hide_view_name").click(function(){
  $(".more_question").slideToggle("slow");
    if (toggle == 1) {
      $(".plus_review").text("-");
      $(".hide_view_name").text("Скрыть");
    toggle--;
    }
    else if (toggle == 0) {
      $(".plus_review").text("+");
      $(".hide_view_name").text("Показать все");
      toggle++;
    }
});

function checkResize() {
  var width = $(window).width();
  $('.question').off('click');

  if (width < 768) {
    $('.question').on('click', function() {
      var $this = $(this);
      var thisAnswer = $(this).next().slideToggle();
      $(".answer").not($(this).next()).slideUp(500);
    });
  } else {
    $('.answer').slideDown(0);
  }
}

checkResize();

$(window).on('resize', checkResize);
