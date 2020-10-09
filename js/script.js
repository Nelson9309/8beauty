$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
});

});
$(document).ready(function(){
	$('.modal_open').click(function(){
		$('.modal__window').slideToggle(400);
		return false;
	});
});
$(document).ready(function(){
	$('.shop').click(function(){
		$('.cart__window').slideToggle(300);
		return false;
	});
});
$(document).ready(function(){
	$('.login').click(function(){
		$('.login__window').slideToggle(300);
		return false;
	});
});
$(document).ready(function () {
    var t = $(".tabs > .active"),
        a = $(".tab__content"),
        o = a.find(".active"),
        c = o.outerHeight();
    o.show(), a.height(c), $(".tabs > li").on("click", function () {
        $(".tabs > li").removeClass("active"), $(this).addClass("active"), t = $(".tabs .active"), o.fadeOut(250, function () {
            $(".tab__content > li").removeClass("active");
            var e = t.index();
            $(".tab__content > li").eq(e).addClass("active"), o = $(".tab__content > .active"), c = o.outerHeight(), a.stop().delay(50).animate({
                height: c
            }, 500, function () {
                o.delay(50).fadeIn(250)
            })
        })
    })
});
$(document).ready(function(){var t=$(".tab > .active"),a=$(".tab__content"),o=a.find(".active"),c=o.outerHeight();o.show(),a.height(c),$(".tab > li").on("click",function(){$(".tab > li").removeClass("active"),$(this).addClass("active"),t=$(".tab .active"),o.fadeOut(250,function(){$(".tab__content > li").removeClass("active");var e=t.index();$(".tab__content > li").eq(e).addClass("active"),o=$(".tab__content > .active"),c=o.outerHeight(),a.stop().delay(50).animate({height:c},500,function(){o.delay(50).fadeIn(250)})})}),$(".colors li").on("click",function(){$(".colors > li").removeClass("active-color"),$(this).addClass("active-color");var t=$(this).attr("data-color");$(".bg-color").css("background-color",t),$(".text-color").css("color",t)})});
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
});