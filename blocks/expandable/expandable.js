$(document).ready(function() {
    $('.expandable').on('click', '.expandable__expander', function(event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).closest('.expandable').toggleClass('expandable_expanded');

        if ($(this).hasClass('expandable__expander_toggle-text')) {
            var currentText = $(this).text();
            $(this).text(function() {
                return currentText === 'Full Details' ? 'Less Details' : 'Full Details';
            });
        }
    });
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
           }
        })
    }
});
