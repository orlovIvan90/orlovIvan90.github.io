var errorAgree = '<div class="err_agree">Вы не дали согласие на обработку персональных данных.</div>';
var errorRequired = '<div class="err_req">Заполните обязательные поля.</div>';
var errorEmail = '<div class="err_email">Введите корректный email.</div>';
var check_first = false;  // проверяем обязательные поля по мере заполнения только если уже была попытка отправки

var error_req = false;   // ошибка заполненности обязательных полей
var error_mail = false;  // ошибка поля email
var req_empty = false;   // есть незаполненные обязательные поля

var $block_error = '';   // блок для показа ошибок

$(document).ready(function () {
    $("#feedback_diler, #add_question").submit(function() {

        var errors = new Array();                // массив сообщений об ошибках
        var error_empty = false;                 // установлено ли общее сообщение о незаполненности обязательных полей
        var $fieldAgree = $('#field_agree');     // checkbox соглашения на обработку персональных данных
        $block_error = $('.block_error');        // блок для показа ошибок

        check_first = true;                      // происходит первая проверка формы

        $('.message_success').remove();
        $('.error').removeClass('error');

        /* проверяем все обязательные поля */
        $(this).find('.required').each(function() {

            var $element = $(this);
            var elementVal = $element.val();

            if(elementVal == '') {

                $element.addClass('error');

                if(!error_empty) {
                    errors.push(errorRequired);
                    error_empty = true;
                }
            }

            /* если значение не пустое то в случае email проверяем на корректность */
            else if($element.hasClass('email') && !checkEmail(elementVal)) {
                $element.addClass('error');
                errors.push(errorEmail);
            }

        });

        /* проверяем поле согласия на обработку персональных данных
        выводим сообщение только если не выведено общее сообщение об ошибке
         */
        if(!$fieldAgree.is(':checked')) {
            if(!error_empty) {
                errors.push(errorAgree);
            }

            $fieldAgree.closest('.for_checkbox').next('span').addClass('error');
        }

        /* показываем сообщения об ошибках */
        if(errors.length > 0) {
            $block_error.find('.error_message_padd').html(errors.join(''));
            $block_error.show();
            return false;
        }
    });



    /* заявка на лизинг */
    $("#order_leazing").submit(function() {

        var errors = new Array();                // массив сообщений об ошибках
        var error_empty = false;                 // установлено ли общее сообщение о незаполненности обязательных полей 
        $block_error = $('.block_error');        // блок для показа ошибок

        check_first = true;                      // происходит первая проверка формы

        $('.message_success').remove();
        $('.error').removeClass('error');

        /* проверяем все обязательные поля */
        $(this).find('.required').each(function() {

            var $element = $(this);
            var elementVal = $element.val();

            if(elementVal == '') {

                $element.addClass('error');

                if($element.is('select')) {
                    $(this).next().addClass('error');
                }

                if(!error_empty) {
                    errors.push(errorRequired);
                    error_empty = true;
                }
            }

            /* если значение не пустое то в случае email проверяем на корректность */
            else if($element.hasClass('email') && !checkEmail(elementVal)) {
                $element.addClass('error');
                errors.push(errorEmail);
            }

        });

        

        /* показываем сообщения об ошибках */
        if(errors.length > 0) {
            $block_error.find('.error_message_padd').html(errors.join(''));
            $block_error.show();
            return false;
        }
    });


    /* выделение checkbox button */
    $('input[type="checkbox"]').closest('.for_checkbox').next('span').click(function() {
        var $button = $(this).prev('.for_checkbox').find('input[type="checkbox"]');

        if($button.is(":checked")) {
            $button.removeAttr("checked").change();
        } else {
            $button.attr("checked","checked").change();
        }
    });

    /* выделение radio button */
    $('input[type="radio"]').next('.for_radio_title').click(function() {
        var $button = $(this).prev('input[type="radio"]');
        if(!$button.is(":checked")) {
            $button.attr("checked","checked");
        }
    });

    /* при снятии поля "Я согласен на обработку моих персональных данных" выдаем предупреждение */
    $('#field_agree').change(function() {

        var $agree = $(this).closest('.for_checkbox').next('span');
        var $errAgree = $('.err_agree');
        var errorContent;

        req_empty = false;

        checkRequired();  // проверяем на заполненность все обязательные поля

        if(!$(this).is(":checked")) {
            $agree.addClass('error');

            /* проверяем  err_agree, так как сообщение могло быть выведено ранее при попытке отправки формы*/
            /* если есть общее сообщение об ошибке, то не выводим сообщение о соглашении */
            if(!$errAgree.length && (!window.req_empty && check_first || !check_first)) {
                errorContent = $('.block_error .error_message_padd').html();
                $('.block_error .error_message_padd').html(errorContent + errorAgree).closest('.block_error').show();
            }

        } else {
            $agree.removeClass('error');
            $errAgree.remove();

            if(!window.req_empty) {
                $('.err_req').remove();
            }
        }
    });


    /* при заполнении обяательных полей убираем сообщения об ошибке */
    $(".required").bind('textchange', function (event, previousText) {

        var fieldVal = $(this).val();
        var $errReq = $('.err_req');

        /* если форма была отправлена, то есть выделены все ошибки */
        if(check_first) {

            error_req = false;
            error_mail = false;
            req_empty = false;

            if(fieldVal != '') {

                /* если email, то проверяем на валидность */
                if($(this).hasClass('email') && !checkEmail(fieldVal)) {
                    $(this).addClass('error').closest('.for_input').addClass('field_error');
                } else {
                    $(this).removeClass('error').closest('.for_input').removeClass('field_error');
                }

            } else {
                $(this).addClass('error').closest('.for_input').addClass('field_error');
            }

            checkRequired(); // проверяем на заполненность все обязательные поля

            errorContent = $('.block_error .error_message_padd').html();

            /* выводим/скрываем сообщения об ошибках */
            if(!error_req) {
                $errReq.remove();
            } else if(!$errReq.length) {

                $block_error.find('.error_message_padd').html(errorContent + errorRequired);
                $block_error.show();

                /* если выводим обшее сообщение об ошибке, то убираем сообщение о соглашении */
                $(".err_agree").remove();
            }

            /* выводим/скрываем сообщение об email */
            if(!error_mail) {
                $('.err_email').remove();
            } else if(!$(".err_email").length) {
                $block_error.find('.error_message_padd').html(errorContent + errorEmail);
                $block_error.show();
            }
        }
    });
});

function checkRequired() {

    var checkReqValue;

    // проверяем заполнены ли все обязательные поля
    $('.required').each(function(){

        /* если есть хотя бы одно незаполненное поле, то устанавливаем переменные для отобраджения сообщения об ошибке */
        checkReqValue = $(this).val();

        /* преобразовываем дополнительно значение поля USER_PHONE, так как оно заполняется по маске */
        if($(this).attr('name') == 'USER_PHONE') {
            checkReqValue = $.trim(checkReqValue.replace(/-/g,""));
        }

        if(checkReqValue == '') {
            error_req = true;
            req_empty = true;
        }

        // если email, то проверяем на валидность
        else if($(this).hasClass('email')) {
            if(!checkEmail(checkReqValue)) {
                error_mail = true;
            }
        } else if(checkReqValue == 'on') {
            if(!$(this).is(":checked")) {
                error_req = true;
            }
        }

        /* если все три переменные установлены, то выходим из цикла */
        if(error_req && error_mail && req_empty) {
            return false;
        }
    });
}