(function($) {
    $(document).ready(function() {
        
        $(".carousel-1").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 4000,
              adaptiveHeight: false,
              prevArrow: '<div class="left-wrap"><a class="left carousel-control"></a></div>',
              nextArrow: '<div class="right-wrap"><a class="right carousel-control"></a></div>',
              responsive: [{
                  breakpoint: 736,
                  settings: "unslick"}]
        });
        
        $(".carousel-2").slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 4000,
              adaptiveHeight: false,
              prevArrow: '<div class="left-wrap"><a class="left carousel-control"></a></div>',
              nextArrow: '<div class="right-wrap"><a class="right carousel-control"></a></div>',
              responsive: [{
                  breakpoint: 736,
                  settings: "unslick"}]
        });
        
        $(".carousel-3").slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 4000,
              adaptiveHeight: false,
              prevArrow: '<div class="left-wrap"><a class="left carousel-control"></a></div>',
              nextArrow: '<div class="right-wrap"><a class="right carousel-control"></a></div>',
              responsive: [{
                  breakpoint: 736,
                  settings: "unslick"}]
        });
    });
})(jQuery);