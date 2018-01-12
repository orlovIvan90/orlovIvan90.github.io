$(document).ready(function(){
    /* Адаптивность карты */
    $('map').imageMapResize();
    
    /* плавный скролл к якорю */
    $.localScroll({
        duration: 1000,
        hash: true,
    });


    /* появление/исчезновение иконки города при наведении на саму иконку */
    $('body').on('mouseover', '.for_city_icon', function(e) {
        $(this).css("display", "block");
    });

    $('body').on('mouseout', '.for_city_icon', function(e) {
        $(this).css("display", "none");
    });

    /* появление/исчезновение иконки города при наведении на точку или название города */
    $('body').on('hover', '.city_name, .city_point', function(e) {
        $(this).prevAll(".for_city_icon").css("display", "block");
    });

    $('body').on('mouseout', '.city_name, .city_point', function(e) {
        $(this).prevAll(".for_city_icon").css("display", "none");
    });

    /* клик по городу на карте */
    $('body').on('click', '.city_icon, .city_name, .city_point', function(e) {

        /* закрываем lightbox */
        $.colorbox.close();

        /* выделяем выбранный город */
        $('.diler_tab td.hidden').removeClass('hidden');
        var diler = $(this).attr('href').replace(/#/g, ""),
            self = this;

        if(diler) {
            $('.diler_tab td').addClass('hidden');
            $('.d_' + diler).removeClass('hidden');
        }
        
        /* открываем выбранный город */
        $('.city__wrap').collapse('hide');
        $('#collapse_' + diler).collapse('show');
        
        /* перемещаемся в нужное место страницы */
        setTimeout(function() {
            var city_coord = $($(self).attr('href')).offset().top;

            $('body,html').animate({
                scrollTop: city_coord
            }, 800);
            return false;
        }, 500);
        

        return false;
    });

    /* интерактивная карта */

    /* выделение региона при наведении */
    var num_region = '';
    $('map[name="map"] area').hover(function() {
        num_region = $(this).attr('class').replace(/reg_/g, "");
        if(num_region) {
            $('#reg_hover_' + num_region).show();
        }
    }, function() {
        num_region = $(this).attr('class').replace(/reg_/g, "");
        if(num_region) {
            $('#reg_hover_' + num_region).hide();
        }
    });

    /* увеличенное изображение региона при клике */
    $('map[name="map"] area').click(function() {
        var lightbox_block = $(this).attr('class').replace(/reg_/g, "");
        if(lightbox_block) {
            var txt = $('.reg-image#region-' + lightbox_block).html();
            if(txt) {
                $.colorbox({"scrolling" : false, "rel" : "nofollow", current:"", "html" : $('.reg-image#region-' + lightbox_block).html()});
            }
        }
        
        /* Установка высоты открытой карты и расположения*/
        setTimeout(function() {
            var dilersMapHeight = $(".dilers_map_bg").height();
            var positionOfMap = $(".dilers_map_bg").offset().top;

            $("#colorbox").css("top", positionOfMap);
            $("#colorbox").outerHeight(dilersMapHeight);
            $("#cboxLoadedContent").outerHeight(dilersMapHeight);
            
            /* Прокрутка на середину карты при ее открытии */
            var forRegImageHeight = $(".for-reg-image img").height() / 4;
            var forRegImageWidth = $(".for-reg-image img").width() / 4;
            $("#cboxLoadedContent").scrollTop(forRegImageHeight);
            $("#cboxLoadedContent").scrollLeft(forRegImageWidth);
        },500);
        
        return false;
    })
    
});