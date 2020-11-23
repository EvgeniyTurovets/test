$(() => {
    $('.home__slider').slick({
        arrows: false,
        infinite: true,
        autoplay: true
    });

    $('.home__btn, .header__create-btn').click(function () {
        $('.modal').fadeIn();
    });
    $('.modal__close').click(function () {
        $('.modal').fadeOut();
    });

    $('.mini-menu').click(function () {
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $('.mobile-menu').css('right', '0');
            $('body').addClass('body-scroll-stop');
        } else {
            $('.mobile-menu').css('right', '');
            $('body').removeClass('body-scroll-stop');
        }
    });
});
