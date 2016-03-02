$(document).ready(function() {
    $('.expandable').on('click', '.expandable__expander', function(event) {
        event.preventDefault();
        if ($(window).width() < 640) {
            $(this).parent().toggleClass('expandable_expanded');
        }
    });

    $('.header').on('click', '.header__btn_menu', function() {
        if ($(window).width() < 640) {
            $('.nav').toggleClass('nav_opened');
        }
    })
});
