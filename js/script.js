//서브메뉴슬라이드



$(function(){
	$(".nav>li").mouseenter(function(){
		$(".sub").stop().slideDown();
	});
	$(".nav>li").mouseleave(function(){
		$(".sub").stop().slideUp();
	});
	
});