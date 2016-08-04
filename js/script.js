
var delay = 0;
var socialIconsIsAnimated = false;
var mouseOnSocial = false;
var timerForMouse = null;

$(document).ready(function() {
    $(".social").on("mouseenter", function() {
        clearTimeout(timerForMouse);
        timerForMouse = null;
        
        $(".social__list").css("display", "block");
        
        if(!socialIconsIsAnimated) {
            
            $(".social__link").each(function(i,elem) {
                
                if (i == 5) {
                    socialIconsIsAnimated = true;
                }
                
                var timer = setTimeout(function() {
                    $(elem).css({
                        "top" : 70,
                        "left" : 0,
                        "width" : 1,
                        "height" : 1,
                        "display": "inline-block"
                    }).animate({
                        "top" : "-10",
                        "width" : 60,
                        "height" : 60,
                    }, {
                        duration: 200,
                        specialEasing:  {
                            "right": "swing"
                        }
                    }).animate({
                        "top" : 0,
                        "width" : 50,
                        "height" : 50,
                    }, {
                        duration: 100,
                        specialEasing: {
                            "right" : "swing"
                        }
                    });
                }, delay);
                delay = delay + 50;
            });
        }
        
    });
    
    $(".social").on("mouseleave", function() {
            timerForMouse = setTimeout(function(){
                if (socialIconsIsAnimated) {
                    $(".social__list").css({
                        "display" : "none"
                    })
                    $(".social__link").css({
                        "display" : "none"
                    })
                    socialIconsIsAnimated = false;
                    delay = 0;
                }
            }, 2000);
    });
    
    $(".social__link").on("mouseenter", function(){
        $(this).animate({
            "width": 55,
            "height": 55,
            "top": "-5",
            "left": "-2.5"
        }, {
            duration: 100
        });
    }).on("mouseleave", function(){
        $(this).animate({
            "width": 50,
            "height": 50,
            "top": 0,
            "left": 0
        }, {
            duration: 100
        });
    });
    
});

