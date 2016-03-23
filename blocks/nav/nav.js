$(document).ready(function(){
    $('.header').on('click', '.header__btn_menu', function() {
        if (window.matchMedia('(max-width: 640px)').matches) {
            $('.nav').toggleClass('nav_opened');
        }
    })
});
