function getClientWidth(){
    return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientWidth:document.body.clientWidth;
}
function setIntroBanner(){
    var banner = document.getElementById('intro-photo');
    curWidth = getClientWidth();
    if (curWidth < 1258){
        banner.src = "images/intro-1024.jpg"/*tpa=http://www.avgust.com/js/images/intro-1024.jpg*/;
    }
    else if (curWidth > 1658){
        banner.src = "images/intro-1680.jpg"/*tpa=http://www.avgust.com/js/images/intro-1680.jpg*/;
    }
}

function noclickimg(){
        $('img').each(function() {            
           $(this)[0].oncontextmenu = function(){
                imgclass = $(this).attr('class');
                if(imgclass != 'blockprop'){
                    return false
                } 
            }
        });
     }

var check = false;
if (window.jQuery) {
    (function($){
        var vars = {counter:1,
                    resize_script:'http://www.avgust.com/images/resize.php'};
        var methods = {
            init : function(options) {
                if (!this.length) {
                    return 'Length';
                }
                var $imgs = this.find('img');
                if (!$imgs.length) {
                    return 'no img';
                }
                if ($('.noslideshow').length) {
                    return 'no slideshow';
                }
                this.find('img').remove();
                this.prepend('<div id="slideshow"><div class="img_wrapper"></div></div>');
                var $slideshow_wrapper = this.find('#slideshow');
                $imgs.each(function(i)
                {         

                    var $img = $($imgs[i]).removeAttr('vspace')
                        .removeAttr('hspace')
                        .removeAttr('style')
                        .removeAttr('align')
                        .removeAttr('border')
                        .removeAttr('class')
                        //.removeAttr('width')
                        .removeAttr('height');
                    //alert($img[i].attr('width'));
                    if (!i) {
                        $img = $img.removeClass('hidden').addClass('visible');
                    } else {
                        $img = $img.removeClass('visible').addClass('hidden');
                    }
                    var $src = $img.attr('src');
                    $img.attr('src', vars.resize_script + '?filename=' + $src + '&width=' + $img.attr('width'));                                         
                    var $title = $img.attr('title');
                    var $alt = $img.attr('alt');
                        //$src = $src.substr(0, ($src.length - 4));
                    //$img.css('width', $img.attr('width'));
                    //$img.css('margin', /*firstImageWidth + 'px'*/ '0 auto');
                    //$img.css('border', /*firstImageWidth + 'px'*/ 'none');
                    $slideshow_wrapper.find('.img_wrapper').append($img);
                    $slideshow_wrapper.find('img:last').wrap('<a title="' + $alt + '" href="' + $src + '" rel="gallery"></a>');
                });
                
                //alert($slideshow_wrapper.find('img:first').attr('width'));
                var firstImageWidth = $slideshow_wrapper.find('img:first').attr('width');
                if(firstImageWidth > 0)
                {
                   /*$('div#slideshow img:first').css('width', /*firstImageWidth + 'px' '200px');
                   $('div#slideshow img:first').css('margin', /*firstImageWidth + 'px'*'0 auto');
                   $('div#slideshow img:first').css('border', /*firstImageWidth + 'px' 'none');*/
                   $('div#slideshow a').css('outline-color', 'white');
                   $('div#slideshow a').css('outline-width', '0');
                   //$('div#slideshow').css('width', firstImageWidth + 'px');
                }

                var total = $('#slideshow img').length;
                var title = $('#slideshow img').eq(0).attr('title');
                $slideshow_wrapper.prepend('<div id="control"><div id="scroll_left" class="no_show_l"></div><div id="scroll_right"></div><span></span></div>');
                //$slideshow_wrapper.append('<div id="slide_title">' + title + '</div>');
                $('#slideshow #control span').html('Изображение ' + vars.counter + ' из ' + total);
                $slideshow_wrapper.find('a').colorbox({'scalePhotos':true,'maxWidth':$(window).width(),'maxHeight':$(window).height(),
                	onComplete:function(){
						noclickimg();
					}
            	});
                
        
        if(vars.counter == total){
          $('#scroll_right').addClass('no_show_r');
        }
            
                $('#slideshow #scroll_left').click(function(){
                    if (!$('#slideshow img.visible').parent().prev().length) {
            $('#scroll_left').addClass('no_show_l');
                        return false;
                    }
                    $('#scroll_right').removeClass('no_show_r');
                                           
                    vars.counter--;
            
            /* Скрытие левой стрелки */
            if(vars.counter == 1){//вправо
              $('#scroll_left').addClass('no_show_l');
            }           
            
                    $('#slideshow img.visible').removeClass('visible').addClass('hidden').parent().prev().find('img').removeClass('hidden').addClass('visible');
                    $('#slideshow #control span').html('Изображение ' + vars.counter + ' из ' + total);
                    var title = $('#slideshow img').eq(vars.counter - 1).attr('title');
                    $('#slideshow #slide_title').html(title);
                    return false;
                });
                $('#slideshow #scroll_right').click(function(){
                    if (!$('#slideshow img.visible').parent().next().length) {
            $('#scroll_right').addClass('no_show_r');
                        return false;
                    }
                    $('#scroll_left').removeClass('no_show_l');
                                        
                    vars.counter++;
            
            /* Скрытие правой стрелки */    
            if(vars.counter==total){//вправо
              $('#scroll_right').addClass('no_show_r');
            }           
            
                    $('#slideshow img.visible').removeClass('visible').addClass('hidden').parent().next().find('img').removeClass('hidden').addClass('visible');
                    $('#slideshow #control span').html('Изображение ' + vars.counter + ' из ' + total);
                    var title = $('#slideshow img').eq(vars.counter - 1).attr('title');
                    $('#slideshow #slide_title').html(title);
                    return false;
                });
                return true;
            }
        };
        $.fn.aftSlideshow = function(method) {
            if ( methods[method] ) {
                return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
            } else if ( typeof method === 'object' || ! method ) {
                return methods.init.apply( this, arguments );
            } else {
                $.error( 'Метод ' +  method + ' в плагине не существует' );
            }    
        };
    })(jQuery);
    
    
    (function($){
        
        
        if(location.href.indexOf('avgust.com/en/') > 1 || location.href.indexOf('avgust.com/pr/') > 1 || location.href.indexOf('avgust.com/esp/') > 1) {
            var vars = {counter:1,
            resize_script:'http://www.avgust.com/images/resize2.php',
            panorama_resize_script:'http://www.avgust.com/images/resize4.php'};
        }
        else {
            var vars = {counter:1,
            resize_script:'http://www.avgust.com/images/resize2.php',
            panorama_resize_script:'http://www.avgust.com/images/resize3.php'};
        }
        

        var methods = {
            init : function(options) {
                if (!this.length) {
                    return false;
                }

                /* если есть блок из которого не нужно обрабатывать фотки,  перемещаем его ниже */
                if ($('.text-after').length) {                    
                    $("<div class='f-block'></div>").insertAfter($(".content-wrapper"));                
                    $('.f-block').append( $('.text-after') );
                }

                if ($('.text-before').length) {                    
                    $("<div class='f-block'></div>").insertBefore($(".content-wrapper"));                
                    $('.f-block').append( $('.text-before') );
                }
                
                var $imgs = this.find('img');
                var $imgsPanorama = this.find('img.panorama');
                if (!$imgs.length) {
                    return false;
                }
                if ($('.noslideshow').length) {
                    return false;
                }
                this.find('img').remove();
                this.wrapInner('<div class="slideshowTextWrapper"></div>');
                this.prepend('<div id="slideshowCol"></div>');
                if ($imgsPanorama.length) {
                    this.prepend('<div id="slideshowPanorama"></div>');
                }
                var $slideshow_wrapper = this.find('#slideshowCol');
                var $panorama_wrapper = this.find('#slideshowPanorama');
                $imgs.each(function(i){
                    if ($($imgs[i]).hasClass('panorama')) {
                        var $wrapper = $panorama_wrapper;
                        var script = vars.panorama_resize_script;
                    } else {
                        var $wrapper = $slideshow_wrapper;
                        var script = vars.resize_script;
                    }
                    var $img = $($imgs[i]).removeAttr('vspace')
                                          .removeAttr('hspace')
                                          .removeAttr('style')
                                          .removeAttr('align')
                                          .removeAttr('class')
                                          .removeAttr('border');
                                          /*.removeAttr('width')
                                          .removeAttr('height');*/
                    if (!i) {
                        $img = $img.removeClass('hidden').addClass('visible');
                    } else {
                        $img = $img.removeClass('visible').addClass('hidden');
                    }
                    var $src = $img.attr('src');
                    $img.attr('src', script + '?filename=' + $src);
                    var $title = $img.attr('title');

                    $wrapper.append($img);
                    $wrapper.find('img:last').wrap('<a href="' + $src + '" rel="gallery"></a>');
                });
                var total = $('#slideshowCol img').length;
                var title = $('#slideshowCol img').eq(0).attr('title');
                this.find('a[rel="gallery"]').colorbox({'scalePhotos':true,'maxWidth':$(window).width(),'maxHeight':$(window).height(),
                onComplete:function(){
					noclickimg();
				}
            });
                
                return true;
            }
        };
        $.fn.aftSlideshowCol = function(method) {
            if ( methods[method] ) {
                return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
            } else if ( typeof method === 'object' || ! method ) {
                return methods.init.apply( this, arguments );
            } else {
                $.error( 'Метод ' +  method + ' в плагине не существует' );
            }    
        };
    })(jQuery);
    
    $(document).ready(function(){
        if ($('.vertical-slideshow').length) {
            $('.content-wrapper').aftSlideshowCol();
        } else {
	  if (!$('.noslideshow').length) {
            $('.content-wrapper').aftSlideshow();
	  } 
        }
        
     // $('a[rel="gallery"]').colorbox();  


     
     noclickimg();

     // ie menu
     var lang_menu_w = $('ul.lang-nav').width();
     if(lang_menu_w > 262){ 
        lang_menu_w = lang_menu_w +10;
        $('ul.add-nav').css('right', lang_menu_w + 'px');
     }

    });
}

$(document).bind('cbox_complete', function(){

    if($("#cboxTitle").text().length > 0) {
    	if ($("#colorbox").width() < 350) {
    		$.colorbox.resize({ width: $("#colorbox").width() + $("#cboxTitle").text().length * 8});
    	}
    	else {
        	$.colorbox.resize({ width: $("#colorbox").width() + $("#cboxTitle").text().length * 5});
    	}
	}
	
});
 