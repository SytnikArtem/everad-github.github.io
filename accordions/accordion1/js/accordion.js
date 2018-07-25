$(document).ready(function(){
  $('.block7-composition-btn').click(function() {
        $(this).parent().toggleClass('active');
        var text = $(this).text();
        if (text == "+") {
            $(this).text("-")
        }
        else {
            $(this).text("+")
        }
    });
});
