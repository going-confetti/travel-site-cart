$(document).ready(function() {
    console.log(1);

    $('.expandable').on('click', '.expandable__expander', function(event) {
        event.preventDefault();
        if ($(window).width() < 640) {
            $(this).parent().toggleClass('expandable_expanded');
        }
    });
});
