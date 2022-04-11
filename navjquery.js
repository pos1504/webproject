
$(function(){
	"use strict";

	// Navigation
	megaMenu();

	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});


});

(function ($) {
    "use strict";
	 var header = $("#header");
    $(window).scroll(function () {

	if ($(this).scrollTop() > 50) {
		header.addClass("sticky");
            $(".navbar").addClass("fixed");
	}
			else {
				 header.removeClass("sticky");
            $(".navbar").removeClass("fixed");
			}
    });


})(jQuery);
