var delay = 20;
var socialIconsIsAnimated = false;
var mouseOnSocial = false;

$(document).ready(function() {
    $(".social__list").on("mouseenter", function() {
        mouseOnSocial = true;
        
        if(!socialIconsIsAnimated) {
            
            $(".social__link").each(function(i,elem) {
                
                if (i == 5) {
                    socialIconsIsAnimated = true;
                }
                
                var timer = setTimeout(function() {
                    $(elem).css({
                        "right" : 70,
                        "top" : 25,
                        "width" : 1,
                        "height" : 1,
                        "display": "inline-block"
                    }).animate({
                        "right" : "-10",
                        "width" : 60,
                        "height" : 60,
                        "top" : 0
                    }, {
                        duration: 200,
                        specialEasing:  {
                            "right": "swing"
                        }
                    }).animate({
                        "right" : 0,
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
    $(".social__list").on("mouseleave", function() {
        mouseOnSocial = false;
        
            var timer = setTimeout(function(){
                if (socialIconsIsAnimated && !mouseOnSocial) {
                    $(".social__link").css({
                        "display" : "none"
                    })
                    socialIconsIsAnimated = false;
                }
            }, 2000);
    });
});
