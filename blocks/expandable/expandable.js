var FULL_DETAILS = 'Full Details';
var LESS_DETAILS = 'Less Details';

$(document).ready(function() {
    $('.expandable').on('click', '.expandable__expander', function(event) {
        event.preventDefault();

        $(this).closest('.expandable').toggleClass('expandable_expanded');
        $(this).siblings('.expandable__content').find('.expandable').removeClass('expandable_expanded');

        if ($(this).hasClass('expandable__expander_toggle-text')) {
            toggleText(this, FULL_DETAILS, LESS_DETAILS);
        }
    });

    function toggleText(element, firstValue, secondValue) {
        var currentText = $(element).text();
        $(element).text(function() {
            return currentText === firstValue ? secondValue : firstValue;
        });
    }
});

$(window).on('resize', function() {
    if (window.matchMedia('(max-width: 640px)').matches) {
        $('.expandable').each(function() {
            if ($(this).hasClass('expandable_expanded') && !$(this).hasClass('expandable_mobile')) {
                $(this).removeClass('expandable_expanded');
            }
        })
    } else if (window.matchMedia('(min-width: 641px)').matches) {
        $('.expandable_mobile').each(function() {
            if ($(this).hasClass('expandable_expanded')) {
                $(this).removeClass('expandable_expanded');
                $(this).find('.expandable__expander_toggle-text').text(FULL_DETAILS);
            }
        });
    }
});
