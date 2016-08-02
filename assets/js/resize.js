$(document).ready(function() {

    if ($(window).width() <= 768) {
        //footer hide and show / link 
        $(".links").find('a').css('display', 'none');
        $(".links").find('a').first().css('display', '').attr('href', 'https://www.mymusic.net.tw/ux/m/main');
        $(".links").find('a').eq(7).css('display', '');
        // $(".links").find('a').last().css('display', '');

        S_changeText("#LEE_buttons", ['more', '8/5 開賣', '9/30 19:30 線上直播'])
        S_changeText("#YO_buttons", ['more', '9/16 開賣', '11/19 19:30 線上直播']);
        S_changeText("#WANG_buttons", ['more', '10/14 開賣', '12/17 19:30 線上直播']);

        //change logo
        // $(".logo").attr('src', 'build/img/logo2.png');




    } else {

    }



});

/**
 * @param  {[type]} btn [description]點擊觸發的按鈕 
 * @param  {[type]} d   [description]要去的目的地
 */
function scroll(btn, d) {
    btn.click(function() {
        $('html,body').animate({
            scrollTop: (d.offset().top) - 70
        }, 600);
    });
}

function S_changeText(group, contents) {
    for (var i = 0; i < contents.length; i++) {
        $(group).find('a h3').eq(i).html(contents[i]);
        $(group).find('a h3').eq(i).css('font-weight', 'bold');
    }
}
