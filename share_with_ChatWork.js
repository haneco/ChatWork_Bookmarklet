function() {
    "use strict";
    var title = encodeURIComponent(document.title);
    var url = encodeURIComponent(window.location);
    var popupURL = 'https://www.chatwork.com/packages/share/login.php?url=' + url + '&title=' + title;
    var w = 600,
        h = 500,
        l = screen.width / 2 - w / 2,
        t = screen.height / 2 - h / 2;
    window.open(popupURL, "ChatWorkShare", "resizable,scrollbars,status,width=" + w + ",height=" + h + ",left=" + l + ",top=" + t);
}()
