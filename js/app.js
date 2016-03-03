$(document).ready(function() {
    $('.expandable').on('click', '.expandable__expander', function(event) {
        event.preventDefault();

        if ($(window).width() < 640) {
            $(this).closest('.expandable').toggleClass('expandable_expanded');

            if ($(this).hasClass('expandable__expander_toggle-text')) {
                var currentText = $(this).text();
                $(this).text(function() {
                    return currentText === 'Full Details' ? 'Less Details' : 'Full Details';
                });
            }
        }
    });

    $('.header').on('click', '.header__btn_menu', function() {
        if ($(window).width() < 640) {
            $('.nav').toggleClass('nav_opened');
        }
    })
});
