var slideImgMax = 200;
var slideImgMin = 150;

var $carousel = '';       // элементы карусели
var $center_li = '';      // центральный элемент карусели
var $slide_desc = '';     // описание элемента карусели
var $blackout_image = ''; // затемнение элементов
var addingCntView = 0;    // количество выбранного параметра "Вид надстройки"
var addingCntDilers = 0;  // количество выбранного параметра "Дилеры"

var conf_descr_height = 0;  // высота описания во всплывающем окне конфигуратора
var on_main_light_show = false;   // был ли уже показан лайтбокс на главной (конфигуратор)
var conf_table_height = 0; // высота таблицы во всплывающем окне конфигуратора

var browser_name = getBrowserName();

$(document).ready(function(){

    /* вертикальное выравниванмие */
    $('.spec_xls, .spec_pdf').parents('td').prevAll('td').addClass('vert-middle');

    /* выбор даты */
    /*
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
        'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
        'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        dateFormat: 'dd-mm-yy',
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $( ".datepicker" ).datepicker();
    */
    
	/* поиск */
	$('.search-inptxt').each(function() {
	     var default_value = $(this).val();
		 $(this).css("color", "#4c4c4c");
	     $(this).focus(function(){
			$(this).css("color", "#000");
	        if($(this).val() == default_value) {
	           $(this).val('');
	        }
	     });
	     $(this).blur(function(){
	        if($(this).val()  == '') {
	           $(this).val(default_value);
	        }
			var change_value = $(this).val();

		     	   if(default_value != change_value ){
		     	   	$(this).css("color", "#000");

		           } else {
		           	 $(this).css("color", "#4c4c4c");
		           }
	     });
	});

    /* меню */
    var padd = 10;
     $('#nav li').hover(
        function () {
             $('ul', this).stop().css({
                "height": "auto",
                "paddingTop": padd,
                "paddingBottom": padd
              });
            $('ul', this).slideDown(300);

        },
        function () {
            $('ul', this).stop().css({
                "height": "auto",
                "paddingTop": padd,
                "paddingBottom": padd
              });
            $('ul', this).slideUp(100);
        }
    );

    /***********************************************/
    /*карусель */
    /***********************************************/

    $carousel = $('#carousel-items li');                // элементы карусели
    $center_li = $carousel.eq(1);                       // центральный элемент карусел
    $slide_desc = $('.slide-desc', $carousel);          // описание элемента карусели
    $blackout_image = $('.blackout_image', $carousel);  // затемнение элементов

    /* вычисляем высоту наибольшего элемента карусели */
    var maxHeight = 0;
    $carousel.each(function(indx, element){

        var height = '';
        height = $(this).height() - 15;

        if(height > maxHeight) {
            maxHeight = height;
        }

    });

    /* значение по умолчанию */
    if(maxHeight == 0) {
        maxHeight = 190;
    }

    /* скрываем описание всех элементов карусели */
    $slide_desc.hide();

    /* показываем описание центрального элемента карусели */
    $center_li.find('.slide-desc').show();

    /* скрываем затемнение центральной картинки карусели */
    $center_li.find('.blackout_image').hide();

//    /* инициализируем карусель */
//    $('#carousel-items').carouFredSel({
//		auto: {
//            play: true,
//            delay: 3,
//            duration: 600,
//            timeoutDuration: 3000,
//            start: -1
//        },
//		prev: {
//            button: '#prev-carous',
//            onBefore: beforeClick,
//            onAfter:  afterClick
//        },
//		next: {
//            button: '#next-carous',
//            onBefore: beforeClick,
//            onAfter:  afterClick
//        },
//		//pagination: '#carous-pager',
//        pagination: {
//        container:"#carous-pager",
//        items: 1
//      },
//		mousewheel: true,
//		swipe: {
//			onMouse: true,
//			onTouch: true
//		},
//        scroll : {
//            items : 1,
//            onAfter : afterScroll
//        },
//        items : {
//            height: maxHeight  /* высота карусели */
//        }
//	});

    viewCenterSlide();

//    // окна pdf
//	$(".view-file").colorbox({inline:true, width:"920px"});
//
//    $('a[rel="gallery"]').colorbox({"maxWidth" : "100%", "maxHeight" : "100%", "rel" : "gallery", current:""});
//
//    $('a[rel="zoom"]').colorbox({"maxWidth" : "100%", "maxHeight" : "100%", "rel" : "nofollow", current:""});
//
//	$('.image').colorbox({"maxWidth" : "100%", "maxHeight" : "100%", current:""});
//
//    // галерея с группировкой
//    $('http://www.hino.ru/bitrix/templates/.default/js/a.gal').colorbox({width:"970px",    current:"Фото {current} из {total}"});
//
//    // окна галереи
//    $("gallery a").colorbox({"maxWidth" : "100%", "maxHeight" : "100%", "rel" : "gallery", current:""});
//
    /* внешний вид select */
    $("select").selectbox();
//
//    // окна авто
//    $(".view-solution").colorbox({inline:true, width:"969px", current:""});
//
//    // окна авто c фото
//    $(".view-solution-gal").colorbox({inline:true, width:"969px",   current:"Фото {current} из {total}"});
//	
//	// окно формы
//    $(".view-form").colorbox({inline:true, width:"640px", current:""});
//
//   
//
//    // окна галереи
//    $(".view-photo").colorbox({inline:true, width:"970px", className: "gallery-colorbox", current:"Фото {current} из {total}"});
//
//    // конфигуратор
//
//    $('body').on('click', '.link-configurator, a[href="#popup_series"]', function(e){
//        /* при вызове colorbox на главной странице возникает конфликт из-за скриптов для слайдера, поэтому при нахождении на главной устраняем конфликт */
//        if(typeof is_main !== "undefined" && !on_main_light_show && $.inArray(browser_name, ["Internet Explorer", "Opera"]) == -1) {
//            $.noConflict();
//            on_main_light_show = true;
//        }
//
//        $.colorbox({
//            width:"1185px",
//            html: $('.for-configurator-hide').html(),
//            onOpen: function() {
//                /* скрываем слайдер при вызове colorbox из IE */
//                if(browser_name == 'Internet Explorer') {
//                    $('#slider').hide();
//                }
//            },
//            onComplete: function(){
//
//                if(conf_descr_height == 0 || conf_table_height == 0) {
//
//                    /* выравниваем кнопку "Конфигуратор" и таблицу в описании */
//                    var element_height;
//
//                    $('.configurator-hide .conf-descr, .configurator-hide .conf-descr-table').each(function() {
//
//                        element_height = $(this).height();
//                        if($(this).hasClass('conf-descr')) {
//                            conf_descr_height = conf_descr_height > element_height ? conf_descr_height : element_height;
//                        } else if($(this).hasClass('conf-descr-table')) {
//                            conf_table_height = conf_table_height > element_height ? conf_table_height : element_height;
//                        }
//                    });
//
//                    /* устанавливаем высоту всем описаниям одинаковой */
//                    if(conf_descr_height > 0) {
//                        $('.configurator-hide .conf-descr').height(conf_descr_height);
//                    }
//
//                    /* устанавливаем высоту всем таблицам в описании одинаковой */
//                    if(conf_table_height > 0) {
//                        $('.configurator-hide .conf-descr-table').height(conf_table_height);
//                    }
//                    if($(this).hasClass('link-configurator')){
//                        $('#cboxLoadedContent .conf-button a').css('background-image', 'url(/bitrix/templates/.default/images/button-conf.jpg)');
//                    }
//                    else {
//                        $('#cboxLoadedContent .conf-button a').css('background-image', 'url(/bitrix/templates/.default/images/button-choice.jpg)');
//                    }
//                }
//            },
//            onClosed: function(){
//                /* снова отображаем слайдер при закрытии colorbox из IE */
//                if(browser_name == 'Internet Explorer') {
//                    $('#slider').show();
//                }
//            }
//        });
//        return false;
//    });

   /* $('#cboxClose, #cboxOverlay').click(function() {*/
    /*$('body').on('click', '#cboxClose, #cboxOverlay', function(e){
        if(browser_name == 'Internet Explorer') {
            $.colorbox.close();
            $('#colorbox, #cboxOverlay').hide();
            $('#slider').show();
        }
    });*/

    /* ячейка таблицы  */
    //$('.red_link').parent().addClass('red');

	// группы фото для спецификации
	$(".red_link").click(function(){
		var rel = $(this).attr('rel');
		$("."+ rel +"-start").click();
        return false;
	});


    /* маска телефона в форме рассчета стоимости */
    $(".client_phone").mask("999-99-99", {placeholder:" "});
    $(".client_phone_code").mask("999", {placeholder:" "});

    /* при внесении в поле кода номера телефона трех цифр курсор автоматически переходит в поле самого номера */
    var phoneCodeVal;
     $(".client_phone_code").bind('textchange', function (event, previousText) {
        /* убираем лишние пробелы */
        phoneCodeVal = $.trim($(this).val());
        if(phoneCodeVal.length == 3) {
            $(this).next('.client_phone').focus();
        }
     });


    /* в форме расчета стоимости можно выбрать не более 3-х видов надстройки */
    $('body').on('change', '.column-check input[type="checkbox"]', function(e){
        limitChecbox($(this), 'Вы можете выбрать максимум 3 надстройки.', 3, 'view');
    });

    /* в форме расчета стоимости можно выбрать не более 3-х дилеров */
    $('body').on('change', '.reg_diler_left input[type="checkbox"]', function(e){
        limitChecbox($(this), 'Вы можете выбрать не более одного дилера.', 1, 'dilers');
    });

//    /* высплывающее окно в преимуществах */
//     $('.list-arrow-column a').colorbox({
//        inline:true, 
//        width: 'auto', 
//        height: 'auto', 
//        current:"", 
//        "rel" : "advantage",
//        onOpen: function() {
//            $( ".advantage" ).each(function( index ) {
//                var img_width = $( this ).find('img').width();
//                $( this ).width(img_width); 
//            }); 
//        },
//    }); 

    /* настраиваем одинаковую ширину ячеек */
    var descr_td = $('.advantage-descr tr td');
    var width_td = 100/descr_td.length;

    descr_td.each(function() {
        $(this).css('width', width_td + '%');
        /* добавляем отступы */
        $(this).wrapInner("<div class='td_padd'></div>");
    });

    /* верхний слайдер */
    if (window.devicePixelRatio > 1) {
        /* изображения под ретину */
        var lowresImages = $('#top-slider img');
        lowresImages.each(function(i) {
            var lowres = $(this).attr('src');
            var highres = lowres.replace(".jpg", "@2x.jpg"/*tpa=http://www.hino.ru/bitrix/templates/.default/js/@2x.jpg*/);
            $(this).attr('src', highres);
        });

    }
/*
    $('#top-slider').carouFredSel({
        auto: 7000,
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        },
        prev: '#prev-slide',
        next: '#next-slide',
        pagination: "#slide-pager",
        scroll : {
        items : 1,    
         
        duration :  600
        }
    });
*/
    var link_name = "Подробнее"; 
    /* блок подробнее */
    if ($(".detailed_info")){
        $('.detailed_info').each(function(i,elem) {
            var hidden_text = $(this).html();            
            if($(this).attr('name')) link_name = $(this).attr('name');
            $(this).html('');
            $(this).show();
            $('<div class="hidden_text">' + hidden_text + '</div>').appendTo(this);
            $('<a href="" class="show_detailed">' + link_name + ' ▼</a>').appendTo(this);
        }); 
    }
    $('body').on('click', '.show_detailed', function(e){ 
        $(this).parent().children(".hidden_text").slideToggle( "slow", function() {
            if($(this).is(':visible') ) { 
                 $(this).next('.show_detailed').html('Свернуть ▲')
            } else { 
                 $(this).next('.show_detailed').html(link_name + ' ▼')
            }
        });
        return false;
    });


    /* таблица с выпадающими строками */
    /*$('.expansion-row').each(function(i,elem) {
           // var height = $(this).height();            
             //$(this).css('height', height + 'px');
    }); */    
    $('body').on('click', '.expansion-link', function(e){ 
        
        //$(this).nextUntil('.expansion-link', 'tr.expansion-row').toggleClass('show-tr');

         


        if(browser_name == "Internet Explorer"){
          $(this).nextUntil('.expansion-link', 'tr.expansion-row').toggle("slow");      
        } else {
          $(this).nextUntil('.expansion-link', 'tr.expansion-row').fadeToggle("slow");        
        }

        
        $(this).toggleClass('open');
        return false;
    });
    

});

/* действия после прокрутки карусели */
function afterScroll() {
    $slide_desc.hide();
    $('.blackout_image', $carousel).show();
   // $carousel.find('.bg-image').css('height', '100');
    $('.one_item_dop', $carousel).css({'width' : slideImgMin + 'px', "height" : "100px", "marginTop" : "16px"});

    /*elementBW($('#carousel-items li').eq(0));*/

    viewCenterSlide();
}

/* внешний вид центрального элемента карусели */
function viewCenterSlide() {

    var $center_elem = $('#carousel-items li').eq(1);

    $center_elem.find('.slide-desc').show();
    $center_elem.find('.blackout_image').hide();

    /* возвращаем центральному элементу цвет */
    /*elementColor($center_elem);*/

    /* параметры для изменения внешнего вида центрального элемента */
    var newParams = {
        width : slideImgMax + "px",
        height : "133px",
        marginTop : "0px"
    };

    var $element_change = $center_elem.find('.one_item_dop');

    /* если браузер Safari, то просто изменяем css, если же нет, то изменяем при помощи анимации (в Safari изменение при помощи анимации не заработало) */
    if(browser_name == 'Safari') {
        $element_change.css(newParams);
    } else {
        $element_change.animate(newParams, 150);
    }

}

/* проверка email на валидность */
function checkEmail(email) {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if(!pattern.test(email)){
        return false;
    }

    return true;
}

/* две функции ниже необходимы для реализации остановки автопрокрутки после первого клика по стрелкам скроллера */
/* воспользоваться $('#carousel-items').trigger("configuration", ["auto", false]); не получилось, так как в этом случае прыгает экран при клике на стрелку */

/* по клику на стрелку активизируем скроллер */
function beforeClick() {
    $("#carousel-items").trigger("play", true);
}

/* после клика останавливаем скроллер и выполняем действия по преобразования центрального элемента */
function afterClick() {
    $("#carousel-items").trigger("pause", true);
    afterScroll();
}

function alertObj(obj) {
    var str = "";
    for(k in obj) {
        str += k + ": " + obj[k] + "\r\n";
    }
    alert(str);
}

function elementColor(element) {
    element.find('.img_color').show();
    element.find('.img_bw').hide();
}

function elementBW(element) {
    element.find('.img_color').hide();
    element.find('.img_bw').show();
}


function limitChecbox(element, message, count, type) {

    addingCnt = (type == 'view') ? addingCntView : addingCntDilers;

    if(element.attr("checked") == "checked") {
        addingCnt++;
    } else {
        addingCnt--;
    }

    if(addingCnt > count) {
        element.removeAttr("checked");
        alert(message);
        addingCnt = count;
    }

    if(type == 'view') {
         addingCntView = addingCnt;
    } else {
        addingCntDilers = addingCnt;
    }
}

function getBrowserName() {
    // получаем данные userAgent
    var ua = navigator.userAgent;

    /* проверяем наличие текста,
    соответствующие тому или иному браузеру */
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/(MSIE)|(Trident)/) > 0) return 'Internet Explorer';

    return 'Не определен';
}