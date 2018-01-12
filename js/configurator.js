$(document).ready(function() {
    var addingCntView = 0;    // количество выбранного параметра "Вид надстройки"
    var addingCntDilers = 0;  // количество выбранного параметра "Дилеры"
    
    /* маска телефона в форме рассчета стоимости */
    $(".client_phone").mask('000-00-00');
    $(".client_phone_code").mask('000');
    
    /* при внесении в поле кода номера телефона трех цифр курсор автоматически переходит в поле самого номера */
    var phoneCodeVal;
     $(".client_phone_code").bind('input', function (event, previousText) {
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
});









