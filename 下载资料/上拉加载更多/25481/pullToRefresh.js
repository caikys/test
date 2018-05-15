/*!
 * pull to refresh v2.0
 *author:wallace
 *2015-7-22
 */
var refresher = {
	info: {
		"pullUpLable": "上拉查看更多",
		"pullingUpLable": "松手加载更多",
		"loadingLable": "加载中..."
	},
	init: function(parameter) {
		var wrapper = document.getElementById(parameter.id);
		var div = document.createElement("div");
		div.className = "scroller";
		wrapper.appendChild(div);
		var scroller = wrapper.querySelector(".scroller");
		var list = wrapper.querySelector("#" + parameter.id + " ul");
		scroller.insertBefore(list, scroller.childNodes[0]);
		var loader = document.createElement("div");
		loader.className = "loader";
		for (var i = 0; i < 4; i++) {
			var span = document.createElement("span");
			loader.appendChild(span);
		}
		var pullUp = document.createElement("div");
		pullUp.className = "pullUp";
		var loader = document.createElement("div");
		loader.className = "loader";
		for (var i = 0; i < 4; i++) {
			var span = document.createElement("span");
			loader.appendChild(span);
		}
		pullUp.appendChild(loader);
		var pullUpLabel = document.createElement("div");
		pullUpLabel.className = "pullUpLabel";
		var content = document.createTextNode(refresher.info.pullUpLable);
		pullUpLabel.appendChild(content);
		pullUp.appendChild(pullUpLabel);
		scroller.appendChild(pullUp);
		var pullUpEl = wrapper.querySelector(".pullUp");
		var pullUpOffset = pullUpEl.offsetHeight;
		this.scrollIt(parameter, pullUpEl, pullUpOffset);
	},
	scrollIt: function(parameter, pullUpEl, pullUpOffset) {
		eval(parameter.id + "= new iScroll(parameter.id,{useTransition: true,vScrollbar: false,onRefresh: function () {refresher.onRelease(pullUpEl);},onScrollMove: function () {refresher.onScrolling(this,pullUpEl,pullUpOffset);},onScrollEnd: function () {refresher.onPulling(pullUpEl,parameter.pullUpAction);},})");
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
	},
	onScrolling: function(e, pullUpEl, pullUpOffset) {
		if (e.y > -(pullUpOffset)) {
			e.minScrollY = -pullUpOffset;
		}
		if (e.scrollerH < e.wrapperH && e.y < (e.minScrollY - pullUpOffset) || e.scrollerH > e.wrapperH && e.y < (e.maxScrollY - pullUpOffset)) {
			pullUpEl.style.display = "block";
			pullUpEl.classList.add("flip");
			// pullUpEl.querySelector('.pullUpLabel').innerHTML = refresher.info.pullingUpLable;
		}
		if (e.scrollerH < e.wrapperH && e.y > (e.minScrollY - pullUpOffset) && pullUpEl.id.match('flip') || e.scrollerH > e.wrapperH && e.y > (e.maxScrollY - pullUpOffset) && pullUpEl.id.match('flip')) {
			pullUpEl.querySelector('.pullUpLabel').innerHTML = refresher.info.pullUpLable;
		}
	},
	onRelease: function(pullUpEl) {
		if (pullUpEl.className.match('loading')) {
			pullUpEl.classList.toggle("loading");
			pullUpEl.querySelector('.pullUpLabel').innerHTML = refresher.info.pullUpLable;
			pullUpEl.querySelector('.loader').style.display = "none"
			pullUpEl.style.lineHeight = pullUpEl.offsetHeight + "px";
		}
	},
	onPulling: function(pullUpEl, pullUpAction) {
		if (pullUpEl.className.match('flip') ) {
			pullUpEl.classList.add("loading");
			pullUpEl.classList.remove("flip");
			pullUpEl.querySelector('.pullUpLabel').innerHTML = refresher.info.loadingLable;
			pullUpEl.querySelector('.loader').style.display = "block"
			pullUpEl.style.lineHeight = "20px";
			if (pullUpAction) pullUpAction();
		}
	}
}