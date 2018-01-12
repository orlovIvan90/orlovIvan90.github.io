var errorRequired = '<div class="err_req">Заполните обязательные поля.</div>';
var errorEmail = '<div class="err_email">Введите корректный email.</div>';
check_first = false; // проверяем обязательные поля по мере заполнения только если уже была попытка отправки

var full_mass_keys;

var formParams = new Array();

function alertObj(obj) {
    var str = "";
    for(k in obj) {
        str += k + ": " + obj[k] + "\r\n";
    }
    alert(str);
}


$(document).ready(function() {
    //$('#select_type_chassis').change();

    /* так как значение полной массы у нас всегда одинаково и в объекте values присутствует только один раз, то получаем ключ этого значения */
    fullMassDefault();

    $('#form-calculation .spec_text').keyup(updateField());

    $('body').on('change', '#select_type_chassis', function(e){

        var id = $(this).attr('id');
        var value = $(this).val();
        var index = false;
        var field_val = '';

        $.each(values.select_type_chassis, function(i, val){ if(val == value) { index = i; return false; } });

        $.each(values, function(i, val) {

            if (i != id) {

                if(index) {
                    field_val = val[index];

                    /* если поле "Полная масса" и ее значение только одно, то подставляем его */
                    if(i == 'text_full_mass' && full_mass_keys.length == 1) {
                        field_val = val[full_mass_keys[0]];
                    }
                }

                $('input[name="text[' + i + ']"]').val(field_val);
            }
        });

        updateField();
    });


    /* подсказки у полей */
    $("a.i-question").hover(
       function() {
          $(this).next('.i-answer').show(); 
          $(this).next('.i-answer').css("display", "inline-block")
       },
       function() {
           $(this).next('.i-answer').hide(); 
       }
    );


    /* поиск */

        var start_param = ''; // параметр с которого начали поиск
        //var start_param_val = '';
        var default_value;
        var ar_nums = new Array(); // номера значений которые нужно подгрузить в других селектах по всем параметрам

        

        /* подгрузка селектов в зависимости от выбора */  
        $('body').on('change', '.chassi-params select', function(e){
            var change_param_name = $(this).attr('id'); // название изменяемого параметра
            var change_param_val = $(this).val(); // значение изменяемого параметра

           if(change_param_val.length > 0){

              /* если сбросили параметр с которого начали обнуляем все настройки */
              if(change_param_val == '' && change_param_name == start_param){                    
                   reset_params(); 
                   start_param = '';
                   ar_nums = new Array();
              }
              
              var start_param_name;
              var count_val = 0; // кол-во заполненных селектов
              var count_select = 0; // кол-во   селектов
              /* проверяем заполнены ли только один селект */
              $(".chassi-params select").each(function(){ 

                  count_select++;
                  
                  var param_val = $(this).val();

                  if(param_val != ''){ 
                     count_val++;   
                     start_param_name = $(this).attr('id');  
                  } 
              }); 

              /* если только один селект то ничего не генерируем */
              if(count_select < 2) { return false; }
             
              /* если изменен только один параметр то запиминаем  его как первый   */ 
              if(count_val == 1) {

                 /* сохраняем значение параметра с которого пользователь начал поиск  */
                  start_param = start_param_name;
                  start_param_val = $('select#' + start_param_name).val();
              }              

              /* выставляем другие параметры в зависимости от выбора значения*/
              var first_param = values[change_param_name]; // объект со значениями первого выбранного параметра              
             
              var current_ar_nums = new Array(); // номера значений которые нужно подгрузить в других селектах только по текущему параметру
             
              /* если значения параметра есть в массиве */
              if(first_param){  

                /* собираем id значний (10,20,30) в соответствии с которыми подставляются другие значения */
                $.each(first_param, function(i, val) { 
                      
                     if(val == change_param_val){ 
                        //alert(val + '===' + change_param_val + '++' + i);
                        if(count_val == 1) {    
                            current_ar_nums.push(i); 
                        } else {
                            
                          if(in_array(i, ar_nums) ===  true){
                            current_ar_nums.push(i); 
                          } 
                        } 
                     }
                });

              } else { return false;}
              
              /* перезаписываем массив ar_nums */
              ar_nums.length = 0;
              $.each(current_ar_nums, function(i, v) { 
                    ar_nums.push(v)  ;
              });            

              /* устанавливаем заначения селектов все параметров, делаем некативные те которые не входят в данные значения */
              $.each(ar_nums, function(i, num_param) { 
                    //alert(i + '-' + num_param); 
              });
              
              var p_val;
              var p_name;
              var values_param;
              $(".chassi-params select").each(function(){  
              
                  p_val = $(this).val();
                  p_name = $(this).attr('id');

                  //alert('p_name' + p_name);

                  /* если это не параметр с которого начали перестраиваем выпадающие списки */
                  

                  values_param = values[p_name];

                  var ar_activ_values = new Array('- Выберите -');  // массив активных значений
                  var count_activ_values = 0; // кол-во актиыных значений (без - Выберите -)
                  /* проходим по значениям данного типа значений  */
                  $.each(values_param, function(i, val) { 

                      if(in_array(i, ar_nums) ===  true){
                          //alert('true!!' + val);

                          if(in_array(val, ar_activ_values) ===  false) { 
                              ar_activ_values.push(val); 
                              count_activ_values ++;
                          } 
                      } 
                  });
                  /* выставляем значения select где активен один параметра*/
                  if(count_activ_values == 1){ 
                    $(this).children('option').each(function(i,elem){
                      if($(elem).attr('value') == ar_activ_values[1]){
                         //alert(i); 
                         $(elem).attr('selected', true);
                      }
                    });
                    var format_val = num_format(ar_activ_values[1]);
                    $(this).next('div.sbHolder').children('a.sbSelector').text(format_val);
                  }
                  $.each(ar_activ_values, function(i, vv) {             
                     // alert('ar_activ_values: ' + i + '-=-' + vv);
                      
                  }); 

                  /* проходим по значениям селектов, списков li */
                  var select_link_text = '';
                  var select_link_rel = '';
                  
                  $(this).next('div.sbHolder').children('ul.sbOptions').children('li').each(function(){
                      select_link_text = $(this).children('a').text();
                      select_link_rel = $(this).children('a').attr('rel');
                      //alert('rel ' + select_link_rel)
                      if( in_array(select_link_rel, ar_activ_values) ===  false ){

                        $(this).children('a').css('display','none'); 
                        $(this).children('span').remove();
                        $('<span>' + select_link_text + '</span>').appendTo(this);
                      }
                  }); 
              }); 
               

              /* ПОИСК */ 
              var rezult_id; 
              var e = 0;
              /* проходим по id */
              $.each(groups, function(i, val) {             

                  var count_true = 0; // верные совпадения по модели
                  var empty = 0; // кол-во незаполненных значений
                  var all_count = 0;
                  /* проходим по выбранным select шасси */
                  $(".chassi-params select").each(function(){ 
                      all_count++;
                      var param_name = $(this).attr('id');
                      var param_val = $(this).val();

                      if(val[param_name] == param_val){                         
                         count_true ++;     
                      }     
                      if(param_val.length == 0){ 
                          empty ++;
                      }  
                  });
                 
                  if(count_true > 0) count_true = count_true + empty;
                  if(all_count == count_true) {
                      rezult_id = i;
                  }            
              }); 
              var count_empty_val = 0;
              $(".chassi-params select").each(function(){ 
               var p_val = $(this).val();     
                  if(p_val.length == 0){  
                      count_empty_val++; 
                  }  
              });
               
              if(count_empty_val == 0){
                $("input#text_type_chassis").val(values.text_type_chassis[rezult_id]);
              } 
            }  
        }); 

    $("#request_form").submit(function() {

        $('.message_success').remove();
        check_first = true;
        $('.error').removeClass('error');
        $('.error_field_text').removeClass('error_field_text');

        var $fieldAgree = $('#field_agree');

        var errors = new Array();
        var error_empty = false;
        var ch_error = new Object();


        $(this).find('.req_field').each(function(indx, element){

            /* проверяем поля "Вид надстройки" */
            if($(this).attr('type') == 'checkbox') {

                ch_name = $(this).attr('name').replace("[]","");
                if(ch_error[ch_name] == undefined) {
                    ch_error[ch_name] = true;
                }

                if($(this).attr('checked') == 'checked') {
                    /* имя checkbox */
                    ch_error[ch_name] = false;
                }
            }

            if($(this).val() == '') {

                if(/*$(this).attr('id') == 'client_region'*/ $(this).is('select')) {
                    $(this).next().addClass('error');
                }

                $(this).addClass('error');
                if(!error_empty) {
                    errors.push(errorRequired);
                    error_empty = true;
                }
            }

            /* если значение не пустое то в случае email проверяем на корректность */
            else if($(this).hasClass('email')) {
                if(!checkEmail($(this).val())) {
                    $(this).addClass('error');
                    errors.push(errorEmail);
                }
            }
        });

        /* выводим ошибки checkbox */
         for(err in ch_error) {
            if(ch_error[err]) {
                $('input[name ="' + err + '[]"]').parents('.field-ch').find('.fn-text').addClass('error_field_text');
                if(!error_empty) {
                    errors.push(errorRequired);
                    error_req = true;
                    error_empty = true;
                }
            }
        }

        if(!$fieldAgree.is(':checked')) {
            if(!error_empty) {               
                errors.push(errorAgree);
            }

            $fieldAgree.closest('.for_checkbox').next('span').addClass('error');
        }



        if(errors.length > 0) {
            $('body,html').animate({scrollTop: $('#form-calculation').offset().top }, "fast");
            $('.block_error .error_message_padd').html(errors.join('')).closest('.block_error').show();
            return false;
        }
    });

    $(".req_field").bind('textchange', function (event, previousText) {

        /* если форма была отправлена, то есть выделены все ошибки */
        if(check_first) {

            var error_req = false;
            var error_mail = false;

            if($(this).val() != '') {

                /* если email, то проверяем на валидность */
                if($(this).hasClass('email')) {
                    if(!checkEmail($(this).val())) {
                        $(this).addClass('error').closest('.for_input').addClass('field_error');
                    } else {
                        $(this).removeClass('error').closest('.for_input').removeClass('field_error');
                    }
                } else {
                    $(this).removeClass('error').closest('.for_input').removeClass('field_error');
                }
            }

            else {
                $(this).addClass('error').closest('.for_input').addClass('field_error');
            }

            // проверяем заполнены ли все обязательные поля
            $('.req_field').each(function(indx, element){
                if($(this).val() == '') {
                    error_req = true;
                }
                // если email, то проверяем на валидность
                else if($(this).hasClass('email')) {
                    if(!checkEmail($(this).val())) {
                        error_mail = true;
                    }
                }

                if(error_req && error_mail) {
                    return false;
                }
            });

            errorContent = $('.block_error .error_message_padd').html();

            /* выводим/скрываем сообщения об ошибках */
            if(!error_req) {
                $('.err_req').remove();
            } else if(!$(".err_req").length) {
                $('.block_error .error_message_padd').html(errorContent + errorRequired).closest('.block_error').show();
            }

            if(!error_mail) {
                $('.err_email').remove();
            } else if(!$(".err_email").length) {
                $('.block_error .error_message_padd').html(errorContent + errorEmail).closest('.block_error').show();
            }
        }
    });

    $('#full-mass-list').change(function() {

        var section_id_new = $(this).val();

        $.ajax({
            url: 'http://www.hino.ru/calc/region_ajax_render.php',
            type: "POST",
            data: 'section_id=' + section_id_new,
            async: false,
            success: function(result){
                if(result || result == '') {

                    $('#full-mass-unique').html(result);
                    $("select").selectbox();

                    /* так как значение полной массы у нас всегда одинаково и в объекте values присутствует только один раз, то получаем ключ этого значения */
                    fullMassDefault();

                    /* изменяем full_mass_id и section_id в action формы */
                    var action = $('#request_form').attr('action');

                    // заменяем на новый ID массы
                    action = changeFormActionIDs('full_mass_id', full_mass_id_new, action);

                    /* заменяем на новый ID раздела */
                    action = changeFormActionIDs('section_id', section_id_new, action);

                    if(formParams.length > 0) {
                        action = action + '&' + formParams.join('&');
                        formParams.length = 0;
                    }

                    $('#request_form').attr('action', action);

                    addingCntView = 0; // обнуляем количество подсчета выбора вида надстройки

                    $('#select_type_chassis').change();  // вызываем событие изменения "Модель шасси"
                }
            },
            dataType: 'html'
        });
    });
});

function updateField(){
    $('#form-calculation .spec_text').each(function(){
        var val = $(this).val();
        if($.isNumeric(val)) {
            val = val.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').replace('.', ',');
            $(this).val(val);
        }
    });

    
}

function alertObj(obj) {
    var str = "";
    for(k in obj) {
        str += k + ": " + obj[k] + "\r\n";
    }
    alert(str);
}

function fullMassDefault() {
    full_mass_keys = new Array();
    for(key in values.text_full_mass) {
        full_mass_keys.push(key);
    }
}

/* изменяем id в action формы конфигуратора */
function changeFormActionIDs(id_name, id_new, string) {

    id_name = id_name || 'full_mass_id';
    string = string || '';

    if(string != '' && id_new) {

        id_name_values = string.match(new RegExp(id_name + '=([0-9]+)'));

        if(id_name_values != null) {
            id_name_value = id_name_values[1];
            /* заменяем на новый ID */
            string = string.replace(id_name + '=' + id_name_value, id_name + '=' + id_new);
        } else {
            formParams.push(id_name + '=' + id_new);
        }
    }

    return string;
}

    function num_format(text){
        if($.isNumeric(text)) {
           var new_text = text.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').replace('.', ',');
           return new_text;
        } else {
           return text;
        } 
    }     

    function in_array(val, arr){
        var result = false;
        $.each(arr, function(i, v) {             
             if(val == v){
                result = true;
             }             
        }); 
        return result; 
    }

    /* функция обнуляет значения селектов параметров формы */
    function reset_params(){
        $(".chassi-params select").each(function(){  
              $(this).children('option:selected').attr('selected', false);  
              $(this).children('option:first').attr('selected', true);
              default_value = $(this).children('option:first').text();
              $(this).next('div.sbHolder').children('a.sbSelector').text(default_value);

              /* делаем все li активрыни возвращем ссылкт */
              var li_span_val;
              $(this).next('div.sbHolder').children('ul.sbOptions').children('li').each(function(){ 
               
                $(this).children('a').css('display','block');
                $(this).children('span').remove();
                
              }); 
              
        });
        $("input#text_type_chassis").val('');

        return true; 
    }
