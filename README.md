# チャットワークでシェア ブックマークレット
## 概要
表示中のページをチャットワークで簡単にシェアするためのブックマークレットです。「チャットワークでシェア」ボタンと同じウインドウを開きます。

## 使い方
次のコードをブックマークに追加します。

* ChatWorkを利用している場合：
```javascript:(function(){"use strict";var title=encodeURIComponent(document.title),url=encodeURIComponent(window.location),popupURL="https://www.chatwork.com/packages/share/login.php?url="+url+"&title="+title,w=600,h=500,l=screen.width/2-w/2,t=screen.height/2-h/2;window.open(popupURL,"ChatWorkShare","resizable,scrollbars,status,width="+w+",height="+h+",left="+l+",top="+t);})()```
* KDDI ChatWorkを利用している場合：
```javascript:(function(){"use strict";var title=encodeURIComponent(document.title),url=encodeURIComponent(window.location),popupURL="https://kcw.kddi.ne.jp/packages/share/login.php?url="+url+"&title="+title,w=600,h=500,l=screen.width/2-w/2,t=screen.height/2-h/2;window.open(popupURL,"ChatWorkShare","resizable,scrollbars,status,width="+w+",height="+h+",left="+l+",top="+t);})()```

