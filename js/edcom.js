function send_feedback(params){  
    if(params){ 
          $.ajax({
            url: '/mail/send_feedback.php',
            type: "POST",
            data: params,
            dataType : 'html',
            success: function(html){  
              } 
          });  
    }
}
(function($) {
    $(document).ready(function() {
        
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
        
            /* -------------- */
            /* presentation */
            var site__img1 = TweenMax.to("#site__img1", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});

            var scene1 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#site__img-trigger", duration: "70%"}).setTween(site__img1).addTo(controller);


            var site__img2 = TweenMax.to("#site__img2", 1, { opacity: 1, y: "-200", left: "10.4%", ease: Linear.easeNone});

            var scene2 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#site__img-trigger", duration: "80%"}).setTween(site__img2).addTo(controller);


            var site__img3 = TweenMax.to("#site__img3", 1, { opacity: 1, y: "-200", left: "66.2%", ease: Linear.easeNone});

            var scene3 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#site__img-trigger", duration: "90%"}).setTween(site__img3).addTo(controller);


            var site__img4 = TweenMax.to("#site__img4", 1, { opacity: 1, left: "10.8%", ease: Linear.easeNone});

            var scene4 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#site__img-trigger2", duration: "70%"}).setTween(site__img4).addTo(controller);

            var site__img5 = TweenMax.to("#site__img5", 1, { opacity: 1, top: "22px", ease: Linear.easeNone});

            var scene5 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#site__img-trigger2", duration: "70%"}).setTween(site__img5).addTo(controller);

            var site__img6 = TweenMax.to("#site__img6", 1, { opacity: 1, top: "115px", ease: Linear.easeNone});

            var scene6 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#site__img-trigger2", duration: "70%"}).setTween(site__img6).addTo(controller);

            var site__img7 = TweenMax.to("#site__img7", 1, { opacity: 1, left: "66.2%", ease: Linear.easeNone});

            var scene7 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#site__img-trigger2", duration: "70%"}).setTween(site__img7).addTo(controller);
            
            
            /* banner-3 animation */

            var banner__wrap3 = TweenMax.to("#banner-wrap3", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});

            var scene18 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#banner3__trigger", duration: "80%"}).setTween(banner__wrap3).addTo(controller);
            
        };        
        
        skel.breakpoints({
            xlarge: "(min-width: 993px)",
            large:  "(max-width: 992px)",
            medium: "(max-width: 768px)",
            small:  "(max-width: 544px)",
            xsmall: "(max-width: 480px)"
        });
            
        skel.on("change", function() {
       
            if (skel.breakpoint("large").active || skel.breakpoint("medium").active || skel.breakpoint("small").active || skel.breakpoint("xsmall").active) {
                if (!scrollrDestroyed) {
                    destroyScrollr();
                };
                
                if (!controllerDestroyed) {
                    destroyController();
                };
            };
            
            if (skel.breakpoint("xlarge").active) {
                
                $(".carousel-2").slick({
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      autoplay: true,
                      autoplaySpeed: 4000,
                      adaptiveHeight: false,
                      prevArrow: '<div class="left-wrap"><a class="left carousel-control"></a></div>',
                      nextArrow: '<div class="right-wrap"><a class="right carousel-control"></a></div>',
                      responsive: [{
                          breakpoint: 992,
                          settings: "unslick"}]
                });
                
                makeScrollr();
                
                makeController();
                makeControllerAnimations();
                
                
                
            };
            
        });
        
        
        
        /* nav scrolly */
        $('.scrolly').scrolly({
			speed: 2000
		});
        
       
        
        /* send__form validate */
        
        $("#banner-3__button").on("click", function(e) {
            
            e.preventDefault();
            
            $("#banner-2__title-hide").css("display", "none");
            $("#banner-2__text-hide").css("display", "none");
            $(this).css("display", "none");
            $("#send").css("display", "block");
                
            
        });
        
        
        $("#banner-3__thanks-ok").on("click", function(e) {
            
            e.preventDefault();
            
            $("#banner-3__thanks").css("display", "none");
            $("#banner-2__title-hide").css("display", "block");
            $("#banner-2__text-hide").css("display", "block");
            $("#banner-3__button").css("display", "block");    
            
        });
        
        var errorMesIsShownSend = false,
            errorTimerSend;
        
        $("#banner-2__thanks-ok").on("click", function(e) {
            
            e.preventDefault();
            
            $("#banner-2__title--content").css("display", "block");
            $("#banner-2__text--content").css("display", "block");
            $("#content__form").css("display", "block");
                
            $("#banner-2__thanks").css("display", "none");
            
        });
        
        
        $.validate({
            form: "#send__form",
            modules : 'security',
            onSuccess : function($form) {
                
                $("#send").css("display", "none");
                
                $("#banner-3__thanks").css("display", "block");
                
                /* отправка формы */
                var arParams = 'send__form=send';
                $( "#send__form input" ).each(function( index ) { 
                  arParams = arParams + '&' + $( this ).attr('id') +'='+ $( this ).val(); 
                }); 
                send_feedback(arParams); 
                
              return false; // Will stop the submission of the form
            },
            
            onError : function($form) {

                      clearTimeout(errorTimerSend); //очищается интервал через который убирается сообщение об ошибке

                      $( "#data-send-error-dialog" ).fadeIn( "slow", function() {
                            errorTimerSend = setTimeout(function() { //интервал исчезновения обновляется
                                $( "#data-send-error-dialog" ).fadeOut("slow");
                            }, 3000);
                      });

            },
            onValidate : function($form) {
                clearTimeout(errorTimerSend); //очищается интервал
                    
                    $( "#data-send-error-dialog" ).fadeOut("slow"); //и сообщене об ошибке исчезает
            }
        });
        
        /* carousels */
        
        $(".carousel-1").slick({
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 4000,
              adaptiveHeight: false,
              prevArrow: '<div class="left-wrap"><a class="left carousel-control"></a></div>',
              nextArrow: '<div class="right-wrap"><a class="right carousel-control"></a></div>'
        });

        /* Закрытие навигации после нажатия */
        $(".nav__link").on("click", function() {
            $("#navbarResponsive").collapse('hide');
        });
    });
        
})(jQuery);