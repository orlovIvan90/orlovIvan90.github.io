(function($) {
    $(document).ready(function() {
        
        $('.footer__goUp').click(function () {

            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
        
})(jQuery);