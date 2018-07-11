
//function send_mail(email){ 
//    if(email){ 
//          $.ajax({
//            url: '/mail/send_mail_presentation.php',
//            type: "POST",
//            data: 'USER_EMAIL='+email,
//            dataType : 'html',
//            success: function(html){  
//                
//              } 
//          });  
//    }
//}
//function send_feedback(params){  
//    if(params){ 
//          $.ajax({
//            url: '/mail/send_feedback.php',
//            type: "POST",
//            data: params,
//            dataType : 'html',
//            success: function(html){  
//              } 
//          });  
//    }
//}

(function($) {
    $(document).ready(function() {
        var scrollrObject = skrollr.init({
            smoothScrolling: true,
            mobileDeceleration: 0.004,
			forceHeight: false
        });
        
		setTimeout(function () {
		  skrollr.get().refresh();
			
		}, 0);
		
	
        /* Sidr Menu */
		$('#sidr-menu').sidr({
			side: 'right'
		});
		
		
        var scrollrObject = {},
            controller = {},
            controllerDestroyed = true,
            scrollrDestroyed = true;
        
        function makeScrollr() {
            scrollrObject = skrollr.init({
                smoothScrolling: false,
                mobileDeceleration: 0.004
            });
            
            scrollrDestroyed = false;
        };
        
		
		
        function destroyScrollr() {
            scrollrObject.destroy();
            scrollrDestroyed = true;
        };
        
        
        function makeController() {
            controller = new ScrollMagic.Controller();
            controllerDestroyed = false;
        };
        
        function destroyController() {
            controller.destroy(true);
            controller = null;
            controllerDestroyed = true;
        };
 
        function makeControllerAnimations() {
        
            /* numbers animation */
            var bannerNailFront = TweenMax.to("#banner__nail-wrap", 1, { bottom: "50%", ease: Linear.easeNone});

            var scene1 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#banner__nail-trigger", duration: "50%"}).setTween(bannerNailFront).addTo(controller);
            
            var bannerNailText = TweenMax.to("#banner__nail-text", 1, { bottom: "45%", ease: Linear.easeNone});

            var scene2 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#banner__nail-trigger", duration: "60%"}).setTween(bannerNailText).addTo(controller);


            var socialText = TweenMax.to("#social__caption", 1, { opacity: 0, ease: Linear.easeNone});

            var scene3 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#social__trigger", duration: "30%"}).setTween(socialText).addTo(controller);



            var socialInst = TweenMax.to("#social__inst", 1, { opacity: 0, ease: Linear.easeNone});

            var scene3 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#social__trigger", duration: "30%"}).setTween(socialInst).addTo(controller);
            
            
            var socialVk = TweenMax.to("#social__vk", 1, { opacity: 0, x: "-70", ease: Linear.easeNone});

            var scene4 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#social__trigger", duration: "30%"}).setTween(socialVk).addTo(controller);
            
            
            var socialTw = TweenMax.to("#social__tw", 1, { opacity: 0, x: "70", ease: Linear.easeNone});

            var scene5 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#social__trigger", duration: "30%"}).setTween(socialTw).addTo(controller);


            var masterImg1 = TweenMax.to("#master__img-wrap-1", 1, { opacity: 1, top: "-400px", ease: Linear.easeNone});

            var scene6 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#master__animation-trigger", duration: "130%"}).setTween(masterImg1).addTo(controller);
            
            
            var masterImg2 = TweenMax.to("#master__img-wrap-2", 1, { opacity: 1, top: "100px", ease: Linear.easeNone});

            var scene7 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#master__animation-trigger", duration: "130%"}).setTween(masterImg2).addTo(controller);
            
            var masterPink1 = TweenMax.to("#master__img-wrap-4", 1, { opacity: 1, top: "430px", ease: Linear.easeNone});

            var scene8 = new ScrollMagic.Scene({triggerHook: "onCenter", triggerElement:"#master__animation-trigger", duration: "60%"}).setTween(masterPink1).addTo(controller);
            
            
            var masterPink2 = TweenMax.to("#master__img-wrap-5", 1, {rotation: 45, repeat: 2, yoyo: true, ease: Linear.easeNone});
            
            var scene9 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#master__animation-brush-trigger", duration: "120%"}).setTween(masterPink2).addTo(controller);
            
            var masterPink22 = TweenMax.to("#master__img-wrap-5", 1, {right: "800px", ease: Linear.easeNone});
            
            var scene10 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#master__animation-brush-trigger", duration: "120%"}).setTween(masterPink22).addTo(controller);
            
            
            
            var masterPink3 = TweenMax.to("#master__img-wrap-6", 1, { opacity: 1, top: "50px", ease: Linear.easeNone});

            var scene11 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#master__animation-trigger", duration: "100%"}).setTween(masterPink3).addTo(controller);

            
            var tubes = TweenMax.to("#tubes", 1, { opacity: 1, top: "0px", ease: Linear.easeNone});

            var scene12 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#tubes__trigger", duration: "10%"}).setTween(tubes).addTo(controller);
            
            var ad = TweenMax.to("#ad", 1, { opacity: 1, top: "60%", ease: Linear.easeNone});

            var scene13 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#tubes__trigger", duration: "60%"}).setTween(ad).addTo(controller);
            
            var adBig = TweenMax.to("#ad--big", 1, { opacity: 1, top: "280px", ease: Linear.easeNone});

            var scene14 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#ad--big__trigger", duration: "100%"}).setTween(adBig).addTo(controller);
            
            var scissors = TweenMax.to("#scissors", 1, { opacity: 1, bottom: "150px", ease: Linear.easeNone});

            var scene15 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#ad--big__trigger", duration: "70%"}).setTween(scissors).addTo(controller);
        };        
        
        skel.breakpoints({
            xlarge: "(min-width: 993px)",
            large:  "(max-width: 992px)",
            medium: "(max-width: 768px)",
            small:  "(max-width: 544px)",
            xsmall: "(max-width: 480px)"
        });
		
		skel.on("change", function() {
			if (skel.breakpoint("xlarge").active) {
                
               $.sidr('close', 'sidr');
            };
		});
//            
//        skel.on("change", function() {
//       
//            if (skel.breakpoint("large").active || skel.breakpoint("medium").active || skel.breakpoint("small").active || skel.breakpoint("xsmall").active) {
//                if (!scrollrDestroyed) {
//                    destroyScrollr();
//                };
//                
//                
//                if (!controllerDestroyed) {
//                    destroyController();
//                };
//            };
//            
//            if (skel.breakpoint("small").active) {
//                
//                makeScrollr();
//                
//                makeController();
//                makeControllerAnimations();
//            };
//            
//        });
        
		makeScrollr();
                
                makeController();
                makeControllerAnimations();
        
        $(".services__carousel").owlCarousel({
            items: 1,
            dots: false,
            loop: true
        });
        
        /* nav scrolly */
        $('.scrolly').scrolly({
			speed: 2000
		});
        
        
		
		
		
		/* Карусель для работ*/
		$('#slider').carouFredSel({
			width: '100%',
			align: false,
			items: 3,
			items: {
				width: $('#wrapper').width() * 0.15,
				height: 500,
				visible: 1,
				minimum: 1
			},
			prev: {
				button: $('#works__left')
			},
			next: {
				button: $('#works__right')
			},
			swipe: {
				onTouch: true,
				onMouse: true
			},
			scroll: {
				items: 1,
				timeoutDuration : 5000,
				onBefore: function(data) {
		
					//	find current and next slide
					var currentSlide = $('.slide.active', this),
					nextSlide = data.items.visible,
					_width = $('#wrapper').width(),
					smallScreen = false;
					
					// узнаем к какому типу экрана относится данный
					if (_width <= 1200) {
						smallScreen = true;
					} else {
						smallScreen = false;
					}

					//	resize currentslide to small version
					currentSlide.stop().animate({
						width: _width * 0.15
					});		
					currentSlide.removeClass( 'active' );
			
					//	hide current block
					data.items.old.add( data.items.visible ).find( '.slide-block' ).stop().fadeOut();					
			
					//	animate clicked slide to large size
					nextSlide.addClass( 'active' );
					
					// если экран маленький, поставить активному слайду размер равный экрану
					if (smallScreen) {
						nextSlide.stop().animate({
							width: _width
						});	
					} else {
						nextSlide.stop().animate({
							width: _width * 0.7
						});	
					}
										
				},
				onAfter: function(data) {
					//	show active slide block
					data.items.visible.last().find( '.slide-block' ).stop().fadeIn();
				}
			},
			onCreate: function(data){
			
				//	clone images for better sliding and insert them dynamacly in slider
				var newitems = $('.slide',this).clone( true ),
					_width = $('#wrapper').width(),
					smallScreen = false;
				
				// узнаем к какому типу экрана относится данный
				if (_width <= 1200) {
					smallScreen = true;
				} else {
					smallScreen = false;
				}
				
				$(this).trigger( 'insertItem', [newitems, newitems.length, false] );
			
				//	show images 
				$('.slide', this).fadeIn();
				$('.slide:first-child', this).addClass( 'active' );
				
				
				if (smallScreen) {
					$('.slide', this).width( _width );
					
					$('.slide:first-child', this).animate({
						width: _width
					});
				} else {
					$('.slide', this).width( _width * 0.15 );
			
					//	enlarge first slide
					$('.slide:first-child', this).animate({
						width: _width * 0.7
					});
				}
			
				//	show first title block and hide the rest
				$(this).find( '.slide-block' ).hide();
				$(this).find( '.slide.active .slide-block' ).stop().fadeIn();
			}
		});
			
		//	Handle click events
		$('#slider').children().click(function() {
			$('#slider').trigger( 'slideTo', [this] );
		});
			
		//	Enable code below if you want to support browser resizing
		$(window).resize(function(){
			
			var slider = $('#slider'),
			_width = $('#wrapper').width(),
			smallScreen = false;
			
			// узнаем к какому типу экрана относится данный
			if (_width <= 1200) {
				smallScreen = true;
			} else {
				smallScreen = false;
			}
			
			
			// если экран маленький, поставить активному слайду размер равный экрану
			if (smallScreen) {
				//	show images
				slider.find( '.slide' ).width(_width);
			} else {
				//	show images
				slider.find( '.slide' ).width( _width * 0.15 );
				//	enlarge first slide
				slider.find( '.slide.active' ).width( _width * 0.7 );
			}
			
			//	update item width config
			slider.trigger( 'configuration', ['items.width', _width * 0.15] );
			
		});

		
//        
//        /* content__form validate */
//        var errorMesIsShown = false,
//            errorTimer;
//        
//        $("#banner-2__thanks-ok").on("click", function(e) {
//            
//            e.preventDefault();
//            
//            $("#banner-2__title--content").css("display", "block");
//            $("#banner-2__text--content").css("display", "block");
//            $("#content__form").css("display", "block");
//                
//            $("#banner-2__thanks").css("display", "none");
//            
//        });
//
//        $("#content__button").on("click", function(e) {
//            var mail =  $("#content__input").val(); 
//            send_mail(mail); 
//        });
//        
//        $.validate({
//            form: "#content__form",
//            modules : 'security',
//            onSuccess : function($form) {
// 
//                
//                $("#banner-2__title--content").css("display", "none");
//                $("#banner-2__text--content").css("display", "none");
//                $("#content__form").css("display", "none");
//                
//                $("#banner-2__thanks").css("display", "block");
//                
//                
//                
//              return false; // Will stop the submission of the form
//            },
//            
//            onElementValidate : function(valid, $el, $form, errorMess) {
//
//                if (!valid) { //если инпут не проходит валидацию
//
//                      clearTimeout(errorTimer); //очищается интервал через который убирается сообщение об ошибке
//
//                      $( "#data-email-error-dialog" ).fadeIn( "slow", function() {
//                            errorTimer = setTimeout(function() { //интервал исчезновения обновляется
//                                $( "#data-email-error-dialog" ).fadeOut("slow");
//                            }, 1500);
//                      });
//                } else { //если инпут прошел валидацию
//                    clearTimeout(errorTimer); //очищается интервал
//                    
//                    $( "#data-email-error-dialog" ).fadeOut("slow"); //и сообщене об ошибке исчезает
//                }
//                  
//                
//            }
//        });
//        
//        /* send__form validate */
//        
//        $("#banner-3__button").on("click", function(e) {
//            
//            e.preventDefault();
//            
//            $("#banner-2__title-hide").css("display", "none");
//            $("#banner-2__text-hide").css("display", "none");
//            $(this).css("display", "none");
//            $("#send").css("display", "block");
//                
//            
//        });
//
//        /* если перешли по ссылке из письма */
//        var hash = window.location.hash; 
//        if( hash == '#parallax9'){
//            $("#banner-2__title-hide").css("display", "none");
//            $("#banner-2__text-hide").css("display", "none");
//            $("#banner-3__button").css("display", "none");
//            $("#send").css("display", "block");
//
//        }
//        
//        
//        $("#banner-3__thanks-ok").on("click", function(e) {
//            
//            e.preventDefault();
//            
//            $("#banner-3__thanks").css("display", "none");
//            $("#banner-2__title-hide").css("display", "block");
//            $("#banner-2__text-hide").css("display", "block");
//            $("#banner-3__button").css("display", "block");    
//            
//        });
//        
//        var errorMesIsShownSend = false,
//            errorTimerSend;
//        
//        $("#banner-2__thanks-ok").on("click", function(e) {
//            
//            e.preventDefault();
//            
//            $("#banner-2__title--content").css("display", "block");
//            $("#banner-2__text--content").css("display", "block");
//            $("#content__form").css("display", "block");
//                
//            $("#banner-2__thanks").css("display", "none");
//            
//        });
//        
//        
//        $.validate({
//            form: "#send__form",
//            modules : 'security',
//            onSuccess : function($form) {
//                
//                $("#send").css("display", "none");
//                
//                $("#banner-3__thanks").css("display", "block");
//
//                /* отправка формы */
//                var arParams = 'send__form=send';
//                $( "#send__form input" ).each(function( index ) { 
//                  arParams = arParams + '&' + $( this ).attr('id') +'='+ $( this ).val(); 
//                }); 
//                send_feedback(arParams); 
//                
//                
//                
//              return false; // Will stop the submission of the form
//            },
//            
//            onError : function($form) {
//
//                      clearTimeout(errorTimerSend); //очищается интервал через который убирается сообщение об ошибке
//
//                      $( "#data-send-error-dialog" ).fadeIn( "slow", function() {
//                            errorTimerSend = setTimeout(function() { //интервал исчезновения обновляется
//                                $( "#data-send-error-dialog" ).fadeOut("slow");
//                            }, 3000);
//                      });
//
//            },
//            onValidate : function($form) {
//                clearTimeout(errorTimerSend); //очищается интервал
//                    
//                    $( "#data-send-error-dialog" ).fadeOut("slow"); //и сообщене об ошибке исчезает
//            }
//        });
//        
//        /* Закрытие навигации после нажатия */
//        $(".nav__link").on("click", function() {
//            $("#navbarResponsive").collapse('hide');
//        });
        
    });
        
})(jQuery);