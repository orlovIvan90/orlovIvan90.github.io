
function send_mail(email){ 
    if(email){ 
          $.ajax({
            url: '/mail/send_mail_presentation.php',
            type: "POST",
            data: 'USER_EMAIL='+email,
            dataType : 'html',
            success: function(html){  
                
              } 
          });  
    }
}
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
        scrollrObject = skrollr.init({
            smoothScrolling: false,
            mobileDeceleration: 0.004
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

            var scene1 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#banner__nail-trigger", duration: "60%"}).setTween(bannerNailText).addTo(controller);


//            var do__text1 = TweenMax.to("#do__text1", 1, { opacity: 1, y: "-100", ease: Linear.easeNone});
//
//            var scene2 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#do__text1-trigger", duration: "40%"}).setTween(do__text1).addTo(controller);
//
//
//
//            var do__green2 = TweenMax.to("#do__green2", 1, { opacity: 1, y: "-100", ease: Linear.easeNone});
//
//            var scene3 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#do__green2-trigger", duration: "30%"}).setTween(do__green2).addTo(controller);
//
//
//            var do__text2 = TweenMax.to("#do__text2", 1, { opacity: 1, y: "-100", ease: Linear.easeNone});
//
//            var scene4 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#do__text2-trigger", duration: "40%"}).setTween(do__text2).addTo(controller);
//
//
//
//            var do__green3 = TweenMax.to("#do__green3", 1, { opacity: 1, y: "-100", ease: Linear.easeNone});
//
//            var scene5 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#do__green3-trigger", duration: "30%"}).setTween(do__green3).addTo(controller);
//
//
//            var do__text3 = TweenMax.to("#do__text3", 1, { opacity: 1, y: "-100", ease: Linear.easeNone});
//
//            var scene6 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#do__text3-trigger", duration: "40%"}).setTween(do__text3).addTo(controller);
//
//
//
//            var do__green4 = TweenMax.to("#do__green4", 1, { opacity: 1, y: "-100", ease: Linear.easeNone});
//
//            var scene7 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#do__green4-trigger", duration: "30%"}).setTween(do__green4).addTo(controller);
//
//
//            var do__text4 = TweenMax.to("#do__text4", 1, { opacity: 1, y: "-100", ease: Linear.easeNone});
//
//            var scene8 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#do__text4-trigger", duration: "40%"}).setTween(do__text4).addTo(controller);
//
//
//
//            var do__green5 = TweenMax.to("#do__green5", 1, { opacity: 1, y: "-100", ease: Linear.easeNone});
//
//            var scene9 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#do__green5-trigger", duration: "30%"}).setTween(do__green5).addTo(controller);
//
//
//            var do__text5 = TweenMax.to("#do__text5", 1, { opacity: 1, y: "-100", ease: Linear.easeNone});
//
//            var scene10 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#do__text5-trigger", duration: "40%"}).setTween(do__text5).addTo(controller);
//            /* -------------- */    
//            
//            
//            
//            /* community animation */
//            var community__text1 = TweenMax.to("#community__text1", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});
//
//            var scene11 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#community__text1-trigger", duration: "20%"}).setTween(community__text1).addTo(controller);
//
//
//            var community__text2 = TweenMax.to("#community__text2", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});
//
//            var scene12 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#community__text2-trigger", duration: "20%"}).setTween(community__text2).addTo(controller);
//
//
//            var community__text3 = TweenMax.to("#community__text3", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});
//
//            var scene13 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#community__text3-trigger", duration: "20%"}).setTween(community__text3).addTo(controller);
//
//
//            var community__text4 = TweenMax.to("#community__text4", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});
//
//            var scene14 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#community__text4-trigger", duration: "20%"}).setTween(community__text4).addTo(controller);
//
//
//            var community__text5 = TweenMax.to("#community__text5", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});
//
//            var scene15 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#community__text5-trigger", duration: "20%"}).setTween(community__text5).addTo(controller);
//
//
//            var community__text6 = TweenMax.to("#community__text6", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});
//
//            var scene16 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#community__text6-trigger", duration: "20%"}).setTween(community__text6).addTo(controller);
//            /* -------------- */
//
//
//            /* banner-2 animation */
//
//            var banner__wrap2 = TweenMax.to("#banner-wrap2", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});
//
//            var scene17 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#banner2__trigger", duration: "80%"}).setTween(banner__wrap2).addTo(controller);
//
//
//
//            /* banner-3 animation */
//
//            var banner__wrap3 = TweenMax.to("#banner-wrap3", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});
//
//            var scene18 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#banner3__trigger", duration: "80%"}).setTween(banner__wrap3).addTo(controller);
//
//
//            /* banner-4 animation */
//
//            var banner__wrap4 = TweenMax.to("#banner-wrap4", 1, { opacity: 1, y: "-200", ease: Linear.easeNone});
//
//            var scene19 = new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement:"#banner4__trigger", duration: "80%"}).setTween(banner__wrap4).addTo(controller);
            
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
//        
//        
//        /* nav scrolly */
//        $('.scrolly').scrolly({
//				speed: 2000
//			});
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