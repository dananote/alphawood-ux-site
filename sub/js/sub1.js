
$(document).ready(function () {
    
    $('#header .gnb_btn').on('click',function () {
        $('#header .gnb_btn .gnb_sub02').addClass('on');
    });

    $('#header .gnb_btn').on('click',function () {
        $('#header .gnb_btn .gnb_sub02').removeClass('on');
    });

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


    $('#scene01 .img_wrap .scene01_img01').addClass('on');
    $('#scene01 .img_wrap .scene01_img02').addClass('on');
    $('#scene01 .view_btn').addClass('on');


    $('#scene01 .title_wrap .title01').addClass('on');
    $('#scene01 .title_wrap .title02').addClass('on');
    $('#scene01 .title_wrap .title03').addClass('on');

    $('#header .menu_btn').addClass('on');
    $('#menu-pop').addClass('on');

    $('#header .menu_btn').on('click',function () {
        $('#header .menu_btn .gnb_sub02').toggleClass('on');
        $('#menu-pop').toggleClass('on');
    });

    $('#scene02 .section01 .hover .hover_box').on('click',function () {
        $('.pop-up').fadeIn();
        $('.pop-up .pop-right-box').addClass('active');
        $('.pop-up .pop-left-box').addClass('active');
    });

    $('.pop-up .pop-close-btn').on('click',function () {
        $('.pop-up .pop-right-box').removeClass('active');
        $('.pop-up .pop-left-box').removeClass('active');

       $('.pop-up').fadeOut();
    });

    $('#scene02 .section02 .hover .hover_box').on('click',function () {
        $('.pop-up').fadeIn();
        $('.pop-up .pop-right-box').addClass('active');
        $('.pop-up .pop-left-box').addClass('active');
    });

    $('.pop-up .pop-close-btn').on('click',function () {
        $('.pop-up .pop-right-box').removeClass('active');
        $('.pop-up .pop-left-box').removeClass('active');

       $('.pop-up').fadeOut();
    });

    $('#scene02 .section03 .hover .hover_box').on('click',function () {
        $('.pop-up').fadeIn();
        $('.pop-up .pop-right-box').addClass('active');
        $('.pop-up .pop-left-box').addClass('active');
    });

    $('.pop-up .pop-close-btn').on('click',function () {
        $('.pop-up .pop-right-box').removeClass('active');
        $('.pop-up .pop-left-box').removeClass('active');

       $('.pop-up').fadeOut();
    });

    



    // $('#scene01 .visual .main-center-img').slidesjs({
	// 	width:1562,
	// 	height:760,
	// 	play: {
	// 		active: false, // play/stop 버튼활성화 , true= 활성화, false= 비활성
	// 		interval: 1000, // 대기시, 1000=1초,
	// 		effect: "slide", // 효과, slide/fade
	// 		auto: true, // 자동시작
	// 		pauseOnHover: false, // 마우스 오버시 멈츰
	// 		restartDelay: 2500 // 마우스 아웃시 재동작 시작
	// 	},
	// 	navigation: {// 이전/다음 버튼
	// 		active: false, // 버튼 활성화/비활성화
	// 		effect: "slide"
	// 	},
	// 	pagination: {// 페이지네이션, 현재 선택된 슬라이드 표시, 전체 갯수 표시
	// 		active: false,
	// 		effect: "slide"
	// 	},
	// 	effect: { // 효과 옵션
	// 		fade: {
	// 			speed: 800
	// 		},
	// 		slide: {
	// 			speed: 1600
	// 		}
	// 	}
	// });


    $(".pop-up .pop-left-box .img_box .img_bg .img_wrap").slick({
        dots: false, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.pop-up .pop-left-box .img_box .img_bg .prv_btn'), //이전 화살표
        nextArrow: $('.pop-up .pop-left-box .img_box .img_bg .next_btn'), //다음 화살표
        autoplay: false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:1,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
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
         if (a >= 400) {
            $("#scene02 .section01").addClass("on");
        } else {
            // $("").removeClass("on");
        }


        if (a >= 400) {
            $("#scene02 .section02").addClass("on");
        } 

        if (a >= 400) {
            $("#scene02 .section03").addClass("on");
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