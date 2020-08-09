
(function($) { 
//Switch light/dark

$("#switch").on('click', function () {
	if ($("body").hasClass("dark")) {
		$("body").removeClass("dark");
		$("#switch").removeClass("switched");
		$("body").addClass("bg-light");
	
	}
	else {
		$("body").addClass("dark");
		$("#switch").addClass("switched");
		$("body").removeClass("bg-light");

	}
});  

})(jQuery); 