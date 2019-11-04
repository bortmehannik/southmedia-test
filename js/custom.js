$(document).ready(function() {

    let counter = 0;

    let colorTheme = true;
    setTimeout(() => {
        $('.header__logo > svg').css('fill', 'white');
        if(colorTheme) {
            $('.header__btn > button').addClass('color-theme');
        }
    }, 4000);

    $("#phone").mask("+ 7 (999) 999-99-99");

    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        sectionSelector: '.vertical-scrolling',
        anchors: ['firstPage', 'secondPage'],
        onLeave: function(origin, destination, direction) {
            if (destination === 1) {
                $('.header__logo').removeClass('hide');
                $('.header__btn > button').addClass('color-theme');
            } else {
                colorTheme = false;
                $('.header__logo').addClass('hide');
                $('.header__btn > button').removeClass('color-theme');
            }
        }
    });

    $(".single-range-slider").ionRangeSlider({
        skin: "big",
        min: 0,
        max: 100,
        step: 1,
        prefix: "на все ",
        postfix: "%",
        hide_min_max: true
    });

    $(".double-range-slider").ionRangeSlider({
        skin: "big",
        type: "double",
        min: 0,
        max: 60,
        step: 1,
        hide_min_max: true,
        force_edges: true,
        postfix: " мин."
    });

    $('.open-menu').click(function() {
        $('nav, .bg').addClass('show');
    });

    $('.close').click(function() {
        $('nav, .bg').removeClass('show');
    });

    // Easter Egg :)
    $('.footer-logo').click(function() {
        ++counter === 10 ? alert('Мне понравилось Ваше тестовое задание. Мне было приятно его выполнять и я бы очень хотел продолжить работать с Вами!') : '';
    })

});

var body = document.getElementById('head'),
    elem = document.getElementsByClassName('grains')[0],
    startX = Math.round(window.innerWidth / 100 * 15),
    startY = -5,
    w = document.documentElement.offsetWidth,
    h = document.documentElement.offsetHeight;

body.addEventListener('mousemove', function(evt){
    const posX = startX + Math.round(evt.clientX / w * 10);
    const posY = startY + Math.round(evt.clientY / h  * 10);
    elem.style.backgroundPosition = posX + 'px ' + posY + 'px'
});

