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
            var presentation__img1 = TweenMax.to("#presentation__img-1", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});

            var scene1 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#presentation__img-1-trigger", duration: "50%"}).setTween(presentation__img1).addTo(controller);



            var presentation__img2 = TweenMax.to("#presentation__img-2", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});

            var scene2 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#presentation__img-2-trigger", duration: "90%"}).setTween(presentation__img2).addTo(controller);



            var parallax4__title = TweenMax.to("#parallax4__title", 1, { opacity: 1, x: "200", ease: Linear.easeNone});

            var scene3 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#parallax4__title-trigger", duration: "20%"}).setTween(parallax4__title).addTo(controller);
            /* -------------- */

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
        
        /* Закрытие навигации после нажатия */
        $(".nav__link").on("click", function() {
            $("#navbarResponsive").collapse('hide');
        });
    });
        
})(jQuery);