(function($) {
    $(document).ready(function() {
        /* Карусель */
        $(".reshenia-carousel__carousel").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 4000,
              adaptiveHeight: false,
              dots: true,
              arrows: false
        });
        
        $(".popup-carousel").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000,
            dots: false,
            adaptiveHeight: false,
            prevArrow: $(".popup-carousel__left-arrow"),
            nextArrow: $(".popup-carousel__right-arrow")
        });
        
        //слайды в попапах
        var curItemContainer = $(".popup-carousel__current-item"), //контайнер для значения слайда показанного в данный момент
            allItems = $(".popup-carousel").slick("getSlick").slideCount; //кол-во слайдов в попапе для контенйра всех слайдов
        
        $(".popup-carousel__all-items").html(allItems); //запись значения кол-ва всех слайдов
        
        $('.reshenia-carousel__popup-call').on("click", function() { // при клике на элемент карусели вызывается попап
            var slideNumber = $(this).attr("data-popup"); // берется значение атрибута чтобы знать какой слайд показывать
            $('.popup-carousel').slick('slickGoTo', slideNumber, false); //переключение слайдов в попапе на выбранный
        });
        
        $('.popup-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){ //при переключении слайда берется номер активного слайда и записывается в контейнер html
            var numberOfSlideForContainer = nextSlide+1;
            curItemContainer.html(numberOfSlideForContainer);
        });
        
        $('.variants__link').on("click", function() {
                
            var slideNumber = $(this).attr("data-popup");
            $('.popup-carousel').slick('slickGoTo', slideNumber, false);
        });
    });
        
})(jQuery);