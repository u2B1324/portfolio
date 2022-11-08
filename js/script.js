// dom 로드 시 실행.
$(document).ready(function () {
    // 모바일 메뉴 관련
    let mbNav = $('.mb-nav');
    let mbBt = $('.mb-bt');

    mbBt.click(function () {
        mbNav.toggleClass('mb-nav-active');
        if (mbNav.hasClass('mb-nav-active')) {
            mbBt.find('span').text('close');
        } else {
            mbBt.find('span').text('menu');
        }
    });

    $(window).resize(function () {
        let winW = $(window).width();
        if (winW > 680) {
            mbNav.removeClass('mb-nav-active');
            mbBt.find('span').text("menu");
        }
    });

    // progressbar
    let barHTML = new ProgressBar.Circle(html, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015C97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let barCSS = new ProgressBar.Circle(css, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015C97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let barJS = new ProgressBar.Circle(js, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015C97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let barJQUERY = new ProgressBar.Circle(jquery, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015C97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let barFIGMA = new ProgressBar.Circle(figma, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015C97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let barPHOTOSHOP = new ProgressBar.Circle(photoshop, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015C97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let barILLUST = new ProgressBar.Circle(illust, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015C97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let barGITHUB = new ProgressBar.Circle(github, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015C97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    // 스크롤 시 메뉴 포커싱
    let mbGnbATag = $(".mb-gnb a");
    let gnbATag = $(".gnb a");
    // 체크 될 div
    let divTag = [
        $('#wrap'),
        $('#profile'),
        $('#skill'),
        $('#portfolio'),
        $('#life'),
        $('#vision'),
        $('#contact')
    ];

    // 포커스 클래스
    let activeColor = 'menu-active-color'
    // 포커스 번호
    mbGnbATag.eq(0).addClass(activeColor);
    gnbATag.eq(0).addClass(activeColor);

    $.each(divTag, function(index){
        new Waypoint({
            element: $(this),
            handler: function (direction) {
                if (direction == 'down') {
                    gnbATag.removeClass(activeColor);
                    mbGnbATag.removeClass(activeColor);
                    gnbATag.eq(index).addClass(activeColor);
                    mbGnbATag.eq(index).addClass(activeColor);
                } else if (direction == 'up') {
                    gnbATag.removeClass(activeColor);
                    mbGnbATag.removeClass(activeColor);
                    gnbATag.eq(index-1).addClass(activeColor);
                    mbGnbATag.eq(index-1).addClass(activeColor);
                }
            },
            offset: '50%'
        });
    });

    new Waypoint({
        element: $('#skill'),
        handler: function (direction) {
            if (direction == 'down') {
                barHTML.animate(0.9);
                barCSS.animate(0.9);
                barJS.animate(0.5);
                barJQUERY.animate(0.6);
                barFIGMA.animate(1.0);
                barPHOTOSHOP.animate(0.7);
                barILLUST.animate(0.5);
                barGITHUB.animate(0.5);
            } else if (direction == 'up') {
                barHTML.animate(0);
                barCSS.animate(0);
                barJS.animate(0);
                barJQUERY.animate(0);
                barFIGMA.animate(0);
                barPHOTOSHOP.animate(0);
                barILLUST.animate(0);
                barGITHUB.animate(0);
            }
        },
        offset: '50%'
    });

    // 메뉴 부드럽게
    let mbGnbA = $(".mb-gnb a");
    let gnbA = $(".gnb a");

    $.each(mbGnbA, function () {
        $(this).click(function (e) {
            e.preventDefault();
            let target = $(this).attr("href");
            let posY = $(target).offset().top;
            $("html, body").animate({
                scrollTop: posY
            });
        });
    });

    $.each(gnbA, function (e) {
        $(this).click(function (e) {
            e.preventDefault();
            let target = $(this).attr("href");
            let posY = $(target).offset().top;
            $("html, body").animate({
                scrollTop: posY
            });
        });

    });

    let visualIntroBt = $(".visual-intro-bt")
    visualIntroBt.click(function () {
        let posY = $('#portfolio').offset().top;
        $("html, body").animate({
            scrollTop: posY
        });
    });

    let goTop = $(".gotop i")
    goTop.click(function () {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        });
    });

    // 고정 메뉴 기능
    new Waypoint({
        element: $('#profile'),
        handler: function (direction) {
            if (direction == 'down') {
                $('.fix-menu').addClass('fix-menu-active')
            } else if (direction == 'up') {
                $('.fix-menu').removeClass('fix-menu-active')
            }
        },
        offset: '0%'
    });

});

// 멀티미디어 리소스 다운로드 시 실행
window.onload = function () {
    // // portfolio
    // $(".ns2").niceScroll();
    // $(".ns1").niceScroll();
    
    // lift swiper
    let swLifeSlide = new Swiper('.sw-life', {
        loop: true,
        spaceBetween: 54,
        slidesPerView: 3,
        speed: 1000,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        }
    });
    let swLife = $('.sw-life');
    swLife.mouseenter(function () {
        swLifeSlide.autoplay.stop();
    });
    swLife.mouseleave(function () {
        swLifeSlide.autoplay.start();
    });

    AOS.init();
    
};