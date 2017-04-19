(function($) {
    $(document).ready(function() {
        
//        $("#personal__photo").change(function(){
//             var filename = $(this).val().replace(/.*\\/, "");
//             $("#personal__result").html(filename);
//        });
//        
//        $("#work__logo").change(function(){
//             var filename = $(this).val().replace(/.*\\/, "");
//             $("#work__result").html(filename);
//        });
        
          $('.order__select').styler();
		  
		  $("#order__promo-button").on("click", function() {
			  $(this).css("display", "none");
			  $("#order__promo-input-button").css("display", "block");
		  });
		  
//		  $("#popover").webuiPopover({url:'#popover-1', closeable:true, trigger:'hover', placement="top"});
//		  $("#popover").webuiPopover({title:'Title',content:'Content'});
//        
//        $("#avatar__sex").styler();
//        
//        $("#avatar__city").styler();
//        
//        $("#avatar__trade-network").styler();
//        
//        $("#avatar__trade-address").styler();
    });
        
})(jQuery);