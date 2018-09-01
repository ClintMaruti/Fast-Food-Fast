var i = 1;
$('.right').click(function () {
    if (i < $("#container ul li").length) {
        $("#box" + i).animate({
            left: '-50%'
        }, 400, function () {
            var $this = $("#box" + i);
            $this.css('left', '150%')
                .appendTo($('.container'));
        });
        $("#box" + i).next().animate({
            left: '50%'
        }, 400);
        i++;
    }
});
$('.left').click(function () {

    if (i > 1) {
        $("#box" + i).animate({
            left: '150%'
        }, 400, function () {
            var $this = $("#box" + i);
            $this.css('right', '-150%')
                .appendTo($('.container'));
        });
        $("#box" + i).prev().animate({
            left: '50%'
        }, 400);
        i--;
    }
});