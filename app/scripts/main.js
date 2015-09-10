$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href === window.location.href) {
            $(this).addClass("active");
        }
    });
    $('.navLinks ul li a').click(function() {
        if ($(this).hasClass('active')) {
            $(this).css('color', '#BEBABA');
        }
    });

});