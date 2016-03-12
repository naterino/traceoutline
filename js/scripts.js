$("body").on(
    "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
    function() {
        $(this).addClass("jeezy");
    }
);

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
  
    if (scroll >= 200) {
         $(".hidden").addClass("fears");
    } 
  
});