$(function(){
	$.extend($, {
		animationLeft: function (e) {
	        var t = {valve: ".animation-left", wrapper: ".nctouch-full-mask"};
	        var e = $.extend({}, t, e);

            // ----------------------------------------------------------
	        function a() {
	            $(e.valve).click(function () {
	                $(e.wrapper).removeClass("hide").removeClass("right").addClass("left");
	            });
	            $(e.wrapper).on("click", ".header-l > a", function () {
	                $(e.wrapper).addClass("right").removeClass("left")
	            })
	        }

	        return this.each(function () {
	            a()
	        })()
            // -----------------------------------------------------


	    },animationUp: function (e) {
	        console.log(e)
            var t = {
                valve: ".animation-up",
                wrapper: ".nctouch-bottom-mask",
                scroll: ".nctouch-bottom-mask-rolling",
                beforeclose: false,
                start: function () {
                },
                before : function(){
                },
                close: function () {
                }
            };
            var e = $.extend({}, t, e);

            // ----------------------------------------------------------
            function a() {
                e.start.call("start");
                $(e.wrapper).removeClass("down").addClass("up");
            }

            return this.each(function () {
            	console.log(111)
                if (e.valve != "") {
                    $(e.valve).on("click", function () {
                        a()
                    })
                } else {
                    a()
                }
                if(e.beforeclose){
                    $(e.wrapper).on("click", ".nctouch-bottom-mask-bg,.nctouch-bottom-mask-close", function () {
                    console.log(e);
                    e.before.call("before")
                })
                }else{
                    $(e.wrapper).on("click", ".nctouch-bottom-mask-bg,.nctouch-bottom-mask-close", function () {
                    $(e.wrapper).addClass("down").removeClass("up");
                    e.close.call("close")
                })
                }
            })()
            // -----------------------------------------------------
		}
	})
})
