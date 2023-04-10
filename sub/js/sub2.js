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


    $('#scene01 .title_wrap .title01').addClass('on');
    $('#scene01 .title_wrap .title02').addClass('on');
    $('#scene01 .title_wrap .title03').addClass('on');
    $('#scene01 .title_wrap .title04').addClass('on');
    $('#scene01 .title_wrap .title05').addClass('on');


    $('#scene04 .item_wrap .hover').on('click',function () {
        setTimeout(()=>{
            location.href= '../sub/sub4.html';
        },200);
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
        if (a >= 682) {
            $('#menu-pop').removeClass('on');
        }

        if (a <= 720) {
            $(".table").css({
                position: 'absolute',
                top : '75px',
            });
        }

        if (a >= 720 && a <= 1700) {
            $(".table").css({
                position: 'fixed',
                top : '335px',
            });

        } else if (a >= 1700) {
            $(".table").css({
                position: 'absolute',
                top : '1050px',
            });
        }

        if (a >= 1750) {
            $('#scene03 .scene03_text .title > p span').addClass('on');
        }

        if (a >= 1850) {
            $('#scene03 .scene03_img').addClass('on');
        }

        if (a >= 2800) {
            $('#scene03 .scene03_bottom_img').addClass('on');
        }

        if (a >= 3000) {
            $('#scene04 .text .title01 > p span').addClass('on');
            $('#scene04 .text .black_box').addClass('on');
        }

        if (a >= 3800) {
            $('#scene04 .item_wrap .item01').addClass('on');
            $('#scene04 .item_wrap .item02').addClass('on');
            $('#scene04 .item_wrap .item03').addClass('on');
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