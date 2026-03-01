$(function () {
    $("#btt").hide();

    $(window).scroll(function () {
        $("#pos").text($(this).scrollTop());
        if ($(this).scrollTop() > 700) {
            $("#btt").fadeIn();
        } else {
            $("#btt").fadeOut();
        }
    });
});