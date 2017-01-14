(function($) {
    $(document).ready(function() {
//        var video = document.getElementById("video"); 
//            video.play();
        var isShown = false;

        $("#content__logo").on("click", function(e) {
            if (isShown) {
                e.preventDefault();
            
                $("#content__title-1").css("display", "block");
                $("#content__title-2").css("display", "none");

                $("#content__caption-1").css("display", "block");
                $("#content__caption-2").css("display", "none");

                $("#content__form").css("display", "block");

                $("#footer__caption").css("display", "block");

                $("#social").css("display", "none");
                
                isShown = false;
            } 
        });
        
        $.validate({
            modules : 'security',
            onSuccess : function($form) {
                
                $("#content__title-1").css("display", "none");
                $("#content__title-2").css("display", "block");

                $("#content__caption-1").css("display", "none");
                $("#content__caption-2").css("display", "block");

                $("#content__form").css("display", "none");

                $("#footer__caption").css("display", "none");

                $("#social").css("display", "block");
                
                isShown = true;

            }
        });
    });
        
})(jQuery);