$(function () {

	$('#search .input-text, .search .input-text').click(function(){
		if($(this).val() == 'Поиск')
            $(this).val('');
	});

	$('.nav li').click(function(){
		if($(this).next().is(':hidden')){
			$('.sub').slideUp();
			$(this).next().slideToggle();
			return false;
		}
		if($(this).next().hasClass('sub') && $(this).next().is(':visible')){
			$(this).next().slideToggle();
			return false;
		}
	});

	$('.hidden-text-toggle').each(function(){
		$(this).click(function(){

			elemId = $(this).attr('href');

			hiddenCont = $(elemId);

			if(hiddenCont.is(':hidden'))
			{
				$(this).addClass('hidden-text-active-toggle');
			}
			else
			{
				$(this).removeClass('hidden-text-active-toggle');
			}
			hiddenCont.slideToggle('slow');
			return false;
		})
	});

});

$(document).ready(function() {
  /*  $('.seo').click(function(){
        window.location = 'http://www.aft.ru/uslugi/advertising/seo/';
    });
	*/
    $(".request a, a.request").fancybox({
		overlayOpacity:  0.8,
		overlayColor:    '#000'
	});

	var slideShow = false;
	var vSlideTimer = 0;
	var vSlideCurrent = 0;
	var vSlideNum = $(".seo-results li").length;

	function vSlide()
	{
		if(vSlideCurrent < vSlideNum)
		{
			vSlideCurrent++;
			$(".seo-results ul").animate({top:-(20 * vSlideCurrent)},500);
		}
		else
		{
			$("seo-results ul").css("top",0);
			vSlideCurrent = 0;
		}
	}

	var baseCD = setInterval(baseGo, 3000);
	function baseGo() {
		if(slideShow === false)
		{
			if(vSlideTimer < 1)
			{
				vSlideTimer++;
			}
			else
			{
				vSlideTimer = 0;
				vSlide();
			}
		}
	}

	$('.seo-results-next').click(vSlide);

	$('.tabs').delegate('li:not(.current)', 'click', function() {
		curHeight = $(this).parents('div.layout').find('http://www.aft.ru/js/div.box').eq($(this).index()).height();
		$(this).parents('div.layout').find('div.works').height(curHeight);
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.layout').find('http://www.aft.ru/js/div.box').hide().eq($(this).index()).fadeIn(150);
		$(window).scrollTo('.works', 200, {offset:-45});
	});

//    $('#content a[href*=".gif"], #content a[href*=".jpg"]').imageLinks();

	
	/* атрибуты отступов  изображений */
	$('#content img').each(function(){
    	var v_margin = $(this).attr('vspace');
    	var h_margin = $(this).attr('hspace');    	 
    	$(this).css({'marginTop': v_margin + 'px', 'marginBottom': v_margin + 'px' });
    	$(this).css({'marginLeft': h_margin + 'px', 'marginRight': h_margin + 'px' });
    })

});
