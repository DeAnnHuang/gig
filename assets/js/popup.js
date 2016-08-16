var livemusicWrap = $('.livemusicWrap');

$('.Live').click(function(event) {
    event.preventDefault();

    // switch ($('.Live').index(this)) {
    //     case 0:
    //         $(".livemusicWrap .LiveMusic").attr('src', 'https://www.youtube.com/embed/MWM_uwdmUGs');
    //         break;
    //     case 1:
    //         $(".livemusicWrap .LiveMusic").attr('src', '#');
    //         break;
    //     case 2:
    //         $(".livemusicWrap .LiveMusic").attr('src', '#');
    //         break;
    // }
    // not use now, if need it to use it, it need to fix a blink bug !

    $('.livemusicWrap iframe').attr('src', 'https://www.youtube.com/embed/MWM_uwdmUGs');
    livemusicWrap.css({
        'top': '0',
        "transition": "all 0.3s ease-out",
        'opacity': '1'
    });

});

$('.livemusicWrap .close').click(function(event) {

    event.preventDefault();

    $('.livemusicWrap iframe').attr('src', null);

    livemusicWrap.css({
        'top': '-100%',
        'opacity': '0'
    });

});


$('.noData').click(function(event) {
    event.preventDefault();

    alert('目前尚未開放喔');
});
