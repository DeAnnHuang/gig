$(document).ready(function() {

    if ($(window).width() <= 768) {
        //footer hide and show / link 
        $(".links").find('a').css('display', 'none');
        $(".links").find('a').first().css('display', '').attr('href', 'https://www.mymusic.net.tw/ux/m/main');
        $(".links").find('a').eq(7).css('display', '');
        // $(".links").find('a').last().css('display', '');

        S_changeText("#LEE_buttons", ['MORE', '8/5 開賣', '9/30 19:30 線上直播'])
        S_changeText("#YO_buttons", ['MORE', '9/16 開賣', '11/19 19:30 線上直播']);
        S_changeText("#WANG_buttons", ['MORE', '10/14 開賣', '12/17 19:30 線上直播']);





    } else {

        S_hover("#LEE_buttons", ['MORE', '8/5 開賣', '9/30 19:30 線上直播']);
        S_hover("#YO_buttons", ['MORE', '9/16 開賣', '11/19 19:30 線上直播']);
        S_hover("#WANG_buttons", ['MORE', '10/14 開賣', '12/17 19:30 線上直播']);

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

// ===
function S_hover(group, contents) {
    for (var i = 0; i < contents.length; i++) {
        Hover($(group).find('a h3').eq(i), contents[i]);
    }
}

function Hover(who, content) {

    var origin = $(who).html();

    $(who).hover(
        function() {
            $(this).html(content);
            $(this).css('font-weight', 'bold');
        },
        function() {
            $(this).html(origin);
            $(this).css('font-weight', '500');
        }
    );

}
