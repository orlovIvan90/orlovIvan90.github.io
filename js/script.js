(function($) {
    $(document).ready(function() {
        /* Parallax */
		
//		$('.parallax-window').parallax({
//			imageSrc: '../img/people-2605526.jpg',
//			naturalWidth: 600,
//			naturalHeight: 400
//		  });
	
        /* Sidr Menu */
		$('#sidr-menu').sidr({
			side: 'right'
		});
		
		
        var scrollrObject = {},
            controller = {},
            controllerDestroyed = true,
            scrollrInitialized = false;
        
        function makeScrollr() {
            scrollrObject = skrollr.init({
				smoothScrolling: true,
				mobileDeceleration: 0.004,
				forceHeight: false
			});

			setTimeout(function () {
			  skrollr.get().refresh();

			}, 0);
			
        };
        
		
		
        function destroyScrollr() {
            scrollrObject.destroy();
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
			
			
			/* Parallax */
			
//			var parallax1scene = new ScrollMagic.Scene({
//				triggerElement: '#master',
//				triggerHook: "onEnter",
//				duraton: '200%'
//			}).setTween(TweenMax.from('.parallax1', {y: '80%', ease: Power0.easeNone})).addTo(controller);
			
			new ScrollMagic.Scene({triggerElement: '#banner__nail-trigger', triggerHook: "onEnter", duration: "200%"})
					.setTween(".parallax1", {y: "80%", ease: Power0.easeNon})
					.addTo(controller);
			
//			var parallax1 = new TimelineMax().add([TweenMax.to(".parallax1", 1, {backgroundPosition: "0 40%", ease: Linear.easeNone})]);
//			
//			var parallaxScene1 = new ScrollMagic.Scene({triggerElement: "#banner", duration: 2000, offset: 450}).setTween(parallax1).setPin("#banner").addTo(controller);
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
				
			   if (!scrollrInitialized) {
				   makeScrollr();
				   
				   scrollrInitialized = true;
			   };
            };
			
			if (skel.breakpoint("large").active || skel.breakpoint("medium").active || skel.breakpoint("small").active || skel.breakpoint("xsmall").active) {
				
				if (scrollrInitialized) {
					destroyScrollr();
					
					scrollrInitialized = false;
				};
				
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
        
//		makeScrollr();
                
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

		
		
		//	Кнопка возврата наверх
		
		$(document).scroll(function() {
			
			var pageHeight = $(document).height(),
				curScroll = $(this).scrollTop();
			
			if (pageHeight/2 <= curScroll) {
				$("#back-to-top").addClass("showTopButton");
				$("#back-to-top").removeClass("hideTopButton");
				
				setTimeout(function() {
					$("#back-to-top").css("display", "block");
				}, 500);
				
			} else {
				$("#back-to-top").removeClass("showTopButton");
				$("#back-to-top").addClass("hideTopButton");
				
				setTimeout(function() {
					$("#back-to-top").css("display", "none");
				}, 500);
				
			}
			
		});
        
    });
        
})(jQuery);