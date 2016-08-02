S_hover("#LEE_buttons", ['more', '8/5 開賣', '9/30 19:30 線上直播']);
S_hover("#YO_buttons", ['more', '9/16 開賣', '11/19 19:30 線上直播']);
S_hover("#WANG_buttons", ['more', '10/14 開賣', '12/17 19:30 線上直播']);


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
