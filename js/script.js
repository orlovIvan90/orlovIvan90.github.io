(function($) {
    $(document).ready(function() {
               
          $('.order__select').styler();
		  
		  $("#order__promo-button").on("click", function(e) {
			  e.preventDefault();
			  $(this).css("display", "none");
			  $("#order__promo-input-button").css("display", "block");
		  });
		  

		  $(".popover-1").webuiPopover({content:'Возьми еще один абонемент и получи скидку 20%!', trigger:'click', placement:"top"});
		  
		
		  var $nextButtonStep1 = $("#next-button-step1"),
			  $buttonStep1 = $("#button-step-1"),
			  $step2MakeOrder = $("#step2-make-order"),
			  $step2Address = $("#step2-address"),
			  $nextButtonStep2 = $("#next-button-step2"),
			  $buttonStep2 = $("#button-step-2"),
			  $step3Pay = $("#step3-pay"),
			  $step3Order = $("#step3-order"),
			  $buttonStep3 = $("#button-step-3"),
			  $nextButtonStep3 = $("#next-button-step3"),
			  $thanksYa = $("#thanks-ya"),
			  $order = $("#order"),
			  $loaderWrap = $("#loader-wrap"),
			  $loader = $("#loader"),
			  $thanksYaOrder = $("#thanks-ya-order"),
			  timer1,
			  timer2;
			  
			  
		  $nextButtonStep1.on("click", function(e) {
			  e.preventDefault();
			  $buttonStep1.css("display", "none");
			  
			  $step2MakeOrder.css("display", "block");
			  $step2Address.css("display", "block");
		  });
		  
		
		$nextButtonStep2.on("click", function(e) {
			e.preventDefault();
			$buttonStep2.css("display", "none");
			
			$step3Pay.css("display", "block");
			$step3Order.css("display", "block");
		});
		
		function showLastScreen() {
			$loader.removeClass("loader-rotate");
			$loaderWrap.css("display", "none");
			
			$thanksYaOrder.css("display", "block");
		};
		
		$nextButtonStep3.on("click", function(e) {
			e.preventDefault();
			
			$step2MakeOrder.css("display", "none");
			$step2Address.css("display", "none");
			
			$step3Pay.css("display", "none");
			$step3Order.css("display", "none");
			
			$buttonStep3.css("display", "none");
			
			$order.css("display", "none");
			
			$thanksYa.css("display", "block");
			
			timer1 = setTimeout(function() {
				$thanksYa.css("display", "none");
				$loader.addClass("loader-rotate");
				$loaderWrap.css("display", "block");
				
				timer2 = setTimeout(showLastScreen, 2000);
			}, 2000);
		});
		
		/* Отображение элементов способов доставки в зависимости от выбора в селекте */
		
		function checkSelectValue(value) {
			if (value == 0) {
				$("#address__input").css("display", "block");
				$("#address__textarea").css("display", "block");
				$("#address__text").css("display", "none");
			} else {
				$("#address__input").css("display", "none");
				$("#address__textarea").css("display", "none");
				$("#address__text").css("display", "block");
			}
		};
		
		checkSelectValue($("#order__select--address").val());
		
		$("#order__select--address").on('change', function() {
			checkSelectValue(this.value);
		});
		

		/* Анимация плейсхолдеров */
		$(".input").focus(function(){
			$(this).siblings(".input__wrap-placeholder").stop(true, false).animate({ top: "-8px", fontSize: "13px" }, 300);
			$(this).css("paddingLeft", "13px");
		});
		$(".input").blur(function() {
			$(this).siblings(".input__wrap-placeholder").stop(true, false).animate({ top: "14px", fontSize: "15px" }, 300);
			$(this).css("paddingLeft", "165px");
		});
		

    });
        
})(jQuery);