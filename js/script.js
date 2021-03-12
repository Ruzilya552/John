$(document).ready(function () {
    $('.b-header__burger').click(function (event) {
        $('.b-header__burger, .b-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});