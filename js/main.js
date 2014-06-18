$(document).ready(function() {
	$("iframe").css({
		top: $(document).height()/2 - $("iframe").height()/2,
		left: $(document).width()/2 - $("iframe").width()/2
	}).mouseover(function() {
		$("iframe").css({
			width: 640,
			height: 360
		});
		$("iframe").css({
			top: $(document).height()/2 - $("iframe").height()/2, // 50 for some reason :(
			left: $(document).width()/2 - $("iframe").width()/2
		});
	}).mouseout(function(){
		$("iframe").css({
			width: 64,
			height: 36
		});
		$("iframe").css({
			top: $(document).height()/2 - $("iframe").height()/2, // 50 for some reason :(
			left: $(document).width()/2 - $("iframe").width()/2
		});
	});
});