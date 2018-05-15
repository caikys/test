//重置宽度
(function (doc, win) {
    var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                //var clientWidth = docEl.clientWidth;
                var real_clientWidth = docEl.clientWidth;
                var clientHeight = docEl.clientHeight;
                var bili = 1136/640;
                if(real_clientWidth > clientHeight || clientHeight < 480){
                    var clientWidth = real_clientWidth;
                } else{
                    var clientWidth = clientHeight / bili;
                }
                if (!clientWidth) return;
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


$(function()
{
//设置加载页面高度   
    setTimeout(function()
    {
        $(".newContent").css("height",$(window).height()-$("footer").height()+'px'); 
    },10)
    //切换自适应
    $(window).resize(function()
    {
        $(".newContent").css("height",$(window).height()-$("footer").height()+'px');
    })
})