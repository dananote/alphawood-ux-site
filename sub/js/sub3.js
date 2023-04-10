$(document).ready(function () {


    $(".scrollBox").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    $('#header .menu_btn').addClass('on');
    $('#menu-pop').addClass('on');

    $('#header .menu_btn').on('click',function () {
        $('#header .menu_btn .gnb_sub02').toggleClass('on');
        $('#menu-pop').toggleClass('on');
    });
    

    $('#scene01 .visual .white_box').addClass('on');
    $('#scene01 .visual .title_wrap .title01').addClass('on');
    $('#scene01 .visual .title_wrap .title01 > p').addClass('on');
    $('#scene01 .visual .title_wrap .title02').addClass('on');
    $('#scene01 .visual .title_wrap .title02 > p').addClass('on');




});

$(function () {

    $(".naviJs > li > a, .topBtn").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");
        return false
    });
    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);





        // scroll event
     
        if (a >= 1750) {
            $('').addClass('on');
        }

  







        $(".wrap > div").each(function (c) {
            var d = 100;
            var b = $(".wrap > div:first").position().top;
            var e = $(this).position().top;
            if (a <= b - d) {
                $(".naviJs").each(function () {
                    $("li", this).removeClass("on").eq(0).addClass("on")
                })
            } else {
                if (a >= e - d) {
                    $(".naviJs").each(function () {
                        $("li", this).removeClass("on").eq(c).addClass("on")
                    })
                }
            }
        })
    })
});