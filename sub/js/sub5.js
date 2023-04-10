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


    $('#scene01 .circle .text_wrap > div > p').addClass('on');
    $('#scene01 .circle .text_wrap .text04 > p').addClass('on');


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
     


        if (a >= 240) {
            $('#scene02 .title_wrap > div > p').addClass('on');
        }

        if (a >= 682) {
            $('#menu-pop').removeClass('on');
        }

        if (a >= 700) {
            $('#scene02 .white_box').addClass('on');
        }

        if (a >= 700) {
            $('#scene02 .right_text .text01 > p').addClass('on');
        }

        if (a >= 700) {
            $('#scene02 .right_text .text02 > p').addClass('on');
        }

        if (a >= 1400) {
            $('#scene03').addClass('on');
        }

        if (a <= 2400) {
            $("#scene04 .title_wrap").css({
                position: 'absolute',
                top : '0',
            });
        }

        if (a >= 2400 && a <= 3500) {
            $("#scene04 .title_wrap").css({
                position: 'fixed',
                top : '335px',
                opacity: '1',
            });

        } else if (a >= 3500) {
            $("#scene04 .title_wrap").css({
                position: 'absolute',
                top : '1100px',
            });
        }

        if (a >= 2200) {
            $('#scene04 .img01').addClass('on');
        }

        if (a >= 2500) {
            $('#scene04 .img02').addClass('on');
        }

        if (a >= 3000) {
            $('#scene04 .img03').addClass('on');
        }

        if (a >= 3735) {
            $('#scene05 .img_wrap .scene01_img01').addClass('on');
            $('#scene05 .img_wrap .scene01_img02').addClass('on');
        }

        if (a >= 3735) {
            $('#scene05 .content01_text .title > p span').addClass('on');
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