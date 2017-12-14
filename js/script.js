(function($) {
    $(document).ready(function() {
        /* Появление кнопки прокрутка наверх */
        
        var windowHeight = $(window).height(),
            pageHeightHalf = $(document).outerHeight(true)/2,
            isGoUpVisible = false;
        
        $(document).scroll(function() {
            if (($(window).scrollTop() + windowHeight > pageHeightHalf) && !isGoUpVisible) {
                $(".footer__goUp").addClass("footer__goUp--visible").css({
                    right: "37px",
                    bottom: "51px"
                });
                isGoUpVisible = true;
            } else if (($(window).scrollTop() + windowHeight < pageHeightHalf) && isGoUpVisible) {
                $(".footer__goUp").removeClass("footer__goUp--visible").css({
                    right: "-100px",
                    bottom: "-100px"
                });
                isGoUpVisible = false;
            }
            
        });
        
         /* Кнопка прокрутки наверх */
        
        $('.footer__goUp').click(function () {

            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
        
})(jQuery);