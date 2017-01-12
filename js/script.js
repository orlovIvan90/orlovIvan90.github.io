(function($) {
    $(document).ready(function() {
        var video = document.getElementById("video"); 
        
        $("#content__button").on("click", function(e) {
            e.preventDefault();
            
            $("#content__title-1").css("display", "none");
            $("#content__title-2").css("display", "block");
            
            $("#content__caption-1").css("display", "none");
            $("#content__caption-2").css("display", "block");
            
            $("#content__form").css("display", "none");
            
            $("#footer__caption").css("display", "none");
            
            $("#social").css("display", "block");
            
            video.play();
        });
        
    });
        
})(jQuery);