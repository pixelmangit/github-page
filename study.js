$(document).ready(function()
{
	$(".triangle").click(function(event) {
		var clickEvent = $(this).data('event');
		var effect = $(this).data('effect');
		var thisActive = $(".page.active");

		$(".container").removeClass().addClass('container').addClass(effect);
		if( clickEvent == 'back' && !thisActive.hasClass('start')){
			$(".page").removeClass('trans');
			$(".page.active").addClass('trans').prev().addClass('active');
			thisActive.removeClass('active');
		}
		else if( clickEvent == 'forward' && !thisActive.hasClass('end')){
			$(".page").removeClass('trans');
			$(".page.active").addClass('trans').next().addClass('active');
			thisActive.removeClass('active');
		}
	});
});