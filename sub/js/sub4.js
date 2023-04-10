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

    $('#scene01 .black_box').addClass('on');
    $('#scene01 .title_wrap .title01').addClass('on');
    $('#scene01 .title_wrap .title02').addClass('on');
    $('#scene01 .title_wrap .title03').addClass('on');
    $('#scene01 .chair_img').addClass('on');
    $('#scene01 .title_wrap .black_box2').addClass('on');

    $('#scene04 .pop_circle01').on('click',function () {
        $('#scene04 .pop_up').toggleClass('active');
    });

    $('#scene04 .pop_circle02').on('click',function () {
        $('#scene04 .pop_up2').toggleClass('active');
    });


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
        
     
        if (a >= 500) {
            $('#scene02 .title_wrap .text01').addClass('on');
        }

        if (a >= 510) {
            $('#scene02 .title_wrap .text02').addClass('on');
        }

        if (a >= 510) {
            $('#scene02 .title_wrap .text03').addClass('on');
        }

        if (a >= 682) {
            $('#menu-pop').removeClass('on');
        }

        if (a >= 700) {
            $('#scene02 .scene02_bg').addClass('on');
        }

        if (a >= 1950) {
            $('#scene03 .title_wrap > div').addClass('on');
        }

        if (a >= 2400) {
            $('#scene04 .scene04_bg').addClass('on');
        }

        if (a >= 3000) {
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