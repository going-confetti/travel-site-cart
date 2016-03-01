$(document).ready(function() {
    $('.expandable').on('click', '.expandable__expander', function(event) {
        event.preventDefault();
        if ($(window).width() < 640) {
            $(this).parent().toggleClass('expandable_expanded');
        }
    });
});
