/**
 * 商品详情相关
 * 选择加入购物车，立即购买，商品限购等操作
 * 2017-01-07 
<<<<<<< HEAD
 */
var goodsdatalist = [];
	var choosedata1=[];

$(function() {
	// 是否下架
	if ($("#is_sale").val() != 1) {
		$(".js-shelves").css("display","block");
		$(".js-bottom-opts").css("display","none");
	}
	echoSpecData();
	// 点击确定触发事件
	$('#submit_ok').bind("click",function() {
		if($("#uid").val() == null || $("#uid").val() == ""){
			window.location.href = __URL(APPMAIN+ "/login");
		}else{
			if($(this).hasClass("disabled")){
				return;
			}
			if ($("#hiddStock").val() == 0) {
				showBox("商品已售罄");
			} else {
				var trueId = "";
				var count = "";
				var $uiskuprop = $(".s-buy-ul .right button");
				var $uiskupropCount = $(".s-buy-ul .s-buy-li").length - 1;
				var flag = 0;
				$($uiskuprop).each(function() {
					flag = $(this).hasClass("current") ? flag + 1: flag; // 判断所有规格是否都选完整了
				});
				if ($uiskupropCount === flag) {
					var purchaseSum = $("#max_buy").val() * 1;
					var currentNum = $("#hidden_current_num").val() * 1;
					var num = $("#num").val() * 1;
					var nummax = $("#num").attr("max") * 1;
					if(currentNum!=0 && currentNum == purchaseSum){
						showBox("此商品限购，您最多可购买"+ purchaseSum+ "件");
						return;
					}
					if (num >= 1) {
						if (num <= nummax) {
							if (num <= purchaseSum|| purchaseSum == 0) {
								var cart_detail = new Object();
								cart_detail.trueId = $("#hiddPDetailID").val();
								cart_detail.count = $("#num").val();
								cart_detail.goods_name = $("#itemName").text();
								cart_detail.select_skuid = $("#hiddSkuId").val();
								cart_detail.shop_id = $("#hidden_shop_id").val();
								cart_detail.shop_name = $("#hidden_shop_name").val();
								cart_detail.select_skuName = $("#hiddSkuName").val();
								cart_detail.price = $("#hiddSkuprice").val();
								//没有SKU商品，获取第一个
								if(cart_detail.select_skuid==null||cart_detail.select_skuid==""){
									cart_detail.select_skuid = $("#goods_sku0").attr("skuid");
									cart_detail.select_skuName = $("#goods_sku0").attr("skuname");
									cart_detail.price = $("#goods_sku0").attr("price");
								}
								cart_detail.picture = $("#default_img").val();
								cart_detail.cost_price = $("#cost_price").text();
								var cart_tag = $("#submit_ok").attr("tag");
								if(cart_tag == "addCart"){
									$.ajax({
										url :  __URL(APPMAIN + "/goods/addcart"),
										type : "post",
										data : { "cart_detail" : JSON.stringify(cart_detail), "cart_tag" : cart_tag },
										success : function(data) {
											$('body').css("overflow", "auto");
											if (data == '-1') {
												showBox("只有会员登录之后才能购买，请进入会员中心注册或登录。");
												window.location.href = __URL(APPMAIN+ "/member");
											}else if(data == 0){
												showBox("该商品限购"+purchaseSum+"，请您检查购物车");
												$("#s_buy").slideUp();
												$("#mask").hide();
												$("#addcart_way").show();
												$("#addcart_way").addClass("addcart-way");
												$("#loading").hide();
												$(".js-bottom-opts").show();
												$("#global-cart").addClass("buy-cart-msg");
											}else {
												$("#s_buy").slideUp();
												$("#mask").hide();
												$("#addcart_way").show();
												$("#addcart_way").addClass("addcart-way");
												if ($("#submit_ok").attr("tag") == "addCart") {
													var new_count = $("#countcart").text()* 1+ cart_detail.count* 1;
													$("#icon_tip_code").show();
													$("#countcart").show();
													$("#countcart").text(new_count);
												}
												$("#loading").hide();
												$(".js-bottom-opts").show();
												$("#global-cart").addClass("buy-cart-msg");
												// 添加购物车
												if ($("#submit_ok").attr("tag") == "addCart") {
													if (purchaseSum != 0) {
														var tempCoun = purchaseSum - count;
														if (tempCoun == 0) {
															$("#purchaseSum").val(-1);
														} else {
															$("#purchaseSum").val(purchaseSum- count);
														}
													}
													$('#submit_ok').show();
													showBox("加入购物车成功");
												}
												$("#loading").hide();
											}
										}
									});
								}else{
									var skuid = $("#hiddSkuId").val();
									var num = $("#num").val();
									//没有SKU商品，获取第一个
									if(skuid==null||skuid=="")
									{
										skuid = $("#goods_sku0").attr("skuid");
									}
									//立即购买
									$.ajax({
										url : __URL(APPMAIN + "/order/ordercreatesession"),
										type : "post",
										data : { "tag" : "buy_now", "sku_id" : skuid, "num" :num },
										success : function(res){
											window.location.href = __URL(APPMAIN+"/order/paymentorder");
										}
									});
								}
							} else {
								if (purchaseSum <= 0) {
									purchaseSum = 0;
								}
								showBox("此商品限购，您最多可购买"+ purchaseSum+ "件");
							}
						} else {
							showBox("库存不足");
						}
					} else {
						showBox("商品的数量至少为1");
					}
				} else {
					showBox("请选择完整的商品规格");
				}
			}
		}
	});
   function checkid(a,b){
      var data =a.split(';');
       var c = data.indexOf(b);
       if(c>=0){
       	return true;
       }else{
       	return false;
       }
       
    }
   function getcanchoose(data,a){
        var flag='';
        var data2 =a;
   	   for(var i =0;i < data.length;i++){
   	   	   flag = a.indexOf(data[i]);
   	   	   if(flag <0){
   	   	   	 data2.push(data[i]);
   	   	   	
   	   	   }else{

   	   	   }
   	   }
   	   return data2;
   }
    console.log($('#specification > input').length);
	$("#addCart,#buyBtn1,#groupbuy").on("click",function(e) {
		if(goodsdatalist == ''){
          	 // console.log($(this).find('button').text());
          	$('.s-buy-li').each(function(){
          		choosedata1.push('');
          	}) 
          	 	   // console.log($(this).attr("id"));
          	 	
          	 	
              $('#specification > input').each(function(index,e){
        var goodsdatatype ={value:[],imgsrc:'',imgsrc:''};
                 	   if( $(this).attr("stock")>0){
                 	   	goodsdatatype.value =$(this).attr("value").split(";");
                 	   	//console.log(goodsdatatype);
          	 	  	 	goodsdatatype.price =$(this).attr("price");
          	 	  	 	goodsdatatype.imgsrc =$(this).attr("picture");       	 	  	 
          	 	  	 	// console.log(goodsdatatype);
          	 	  	 	goodsdatalist.push(goodsdatatype);
          	 	  	 }
              })

          	 	 
          	 
		}else{
            console.log(goodsdatalist);
		}
		// console.log(goodsdatatype,goodsdatalist);

		flag = parseInt($("#is_sale").val());
		$(".motify").css("opacity",0);
		$(".motify").fadeIn();
		$(".motify").fadeOut();
		if (flag == 1) {
			$("body").css({ overflow : "hidden"});
			$(".bar_wrap").hide();
			$("#mask").show();
			$("#s_buy").slideDown(300);
			$("#addcart_way").removeClass("addcart-way");
			$("#submit_ok").attr("tag",e.target.id);
			//库存等于0变成灰色
			if ($("#hiddStock").val() == 0) {
				$("#submit_ok").addClass("disabled");
			}
			// 加入购物车
			if (e.target.id == 'addCart') {
				$(".js-bottom-opts").hide();
				$("#submit_ok").text("加入购物车");
			} else {
				$(".js-bottom-opts").hide();
				$("#submit_ok").text("下一步");
			}
		} else {
			showBox("该商品已下架");
		}
	});
	
	$("#mask,#icon_close").on("click", function() {
		$("#s_buy").slideUp(300);
		$("#mask").hide();
		$('body').css("overflow", "auto");
		$(".js-bottom-opts").show();
	});
	

	$(".add").click(function() {
		var num = $("#num").val() * 1;
		var max_buy = $("#max_buy").val() * 1;
		var nummax = $("#num").attr('max') * 1;
		if (num >= max_buy && max_buy != 0) {
			var buy_num = max_buy;
			if (max_buy == -1) {
				buy_num = 0;
			}
			$(this).addClass("quantity-minus-disabled");
			showBox("此商品限购，您最多可购买" + buy_num + "件");
		} else if (num < nummax) {
			num = num + 1;
			$(this).removeClass("quantity-minus-disabled");
		}
		$(".reduce").removeClass("quantity-minus-disabled");
		$("#num").val(num);
	});
	
	/**
	 * 数量减少
	 */
	$(".reduce").click(function() {
		var num = $("#num").val() * 1;
		var min_buy = $("#min_buy").val() * 1;
		var count = min_buy != 0 ? min_buy : 1;
		// if(count){
		// 	showBox("此商品最少购买" + count + "件");
		// }
		if (num > count) {
			num -= 1;
			if (num == 1) {
				$(this).addClass("quantity-minus-disabled");
			}
		} else {
			$(this).addClass("quantity-minus-disabled");
		}
		$(".add").removeClass("quantity-minus-disabled");
		$("#num").val(num);
	});
	
	$("#num").bind("input propertychange", function() {
		if($(this).val().indexOf(".") != -1){
			$(this).val(1);
		}else{
			var num = $(this).val() * 1;
			var max_buy = $("#max_buy").val() * 1;
			var min_buy = $("#min_buy").val() * 1;
			var nummax = $(this).attr('max') * 1;
			if(min_buy !=0 && min_buy>num){
				showBox("此商品最少购买" + min_buy + "件");
				num = min_buy;
			}
				
			if (num >= max_buy && max_buy != 0) {
				showBox("此商品限购，您最多可购买" + max_buy + "件");
				num = max_buy;
			} else if (num > nummax) {
				num = nummax;
			}
			if (isNaN(num)) {
				num = 1;
			}
			$(this).val(num);
		}
	});
	
	$('#btnShare').bind("click",function() {
		var topheight = document.body.scrollTop;
		var scrollHeight = document.body.scrollHeight;
		$("#mask-bg").attr("style","height:" + (scrollHeight + topheight) + "px");
		$("#mask-content").attr("style","padding-top:" + topheight + "px");
		$("#mask-bg").show();
		$("#mask-content").show();
		document.addEventListener('touchmove',preventNo, false);
	});

	$('#mask-bg').bind("click",function() {
		$("#mask-bg").hide();
		$("#mask-content").hide();
		document.removeEventListener('touchmove',preventNo, false);
	});

	$('#mask-content').bind("click",function() {
		$("#mask-bg").hide();
		$("#mask-content").hide();
		document.removeEventListener('touchmove',preventNo, false);
	});

	// huxl
	$("#distribution-apply").click(function(event) {
		event.preventDefault();
		$("#distribution-tip").fadeIn();
		setTimeout(function() {
			$("#distribution-tip").fadeOut();
		}, 4000)
	});

	// close advertisement
	$("#advertisement-close").click(function() {
		$("#advertisement-apptip").hide();
		$("#fromesb-wechat").animate({ top : 0 });
	})

	// contact float
	$("#contFloat").click(function(event) {
		event.preventDefault();
		$("#contFloat-detail").show();
	})

	$("#contFloat-detail-close").click(function() {
		$("#contFloat-detail").hide();
	})

	$("#mask,#icon_close").click(function() {
		$("#s_buy").slideUp();
		$("#mask").hide();
		$('body').css("overflow", "auto");
	})

})

function CheckInt(obj) {
	var pattern = /^[1-9]\d*|0$/; // 匹配非负整数
	if (!pattern.test(obj)) {
		return false;
	} else {
		return true;
	}
}

function preventNo(e) {
	e.preventDefault();
}

var specificationValueDatas = {};
var productDatas = {};
var obj = {
	Span0 : "",
	Span1 : "",
	Span2 : "",
	Span3 : "",
	Span4 : ""
};
// 样式选择事件
var click_id="";
function change(span,index) {
      choosedata1[index] = $(span).attr("id");
      choosedata2 =[];
      choosedata3 ={};
      var flag2 =''
      if(index==0){
      	flag2 = index+1;
      }else{
      	flag2 = index-1;
      }

     var flag1  = choosedata1.indexOf("");
    // if(flag1 < 0){
    	for( var i =0; i < goodsdatalist.length;i++){
       if($(span).attr("id")== goodsdatalist[i].type){
       	      
       var choosedata = goodsdatalist[i];
       }
   }
    // }else{
    	
    // }
     console.log(choosedata1);
    $('.s-buy-li button').attr("disabled",true);
    if(flag1 < 0){
         for(var m=0;m < choosedata1.length;m++){
         
            if(m!=index&&m!=flag2){
            	choosedata2.push(choosedata1[m]);
            }
         }	
          // console.log(choosedata2);
        for(var k=0;k<goodsdatalist.length;k++){
        	if(choosedata1[flag2] == goodsdatalist[k].type){
              choosedata3 = goodsdatalist[k];
        	}
        }
        for(var n =0;n<choosedata3.data.length;n++){
           for(var o =0 ;o<choosedata3.data[n].id.length;o++){
           	  if(choosedata3.data[n].id[o] !=choosedata3.type && choosedata3.data[n].id[o] !=choosedata2 ){
                    $('.s-buy-li button').each(function(index,e){
    		if($(this).attr("id")== choosedata3.data[n].id[o]){
    			$(this).attr("disabled",false);
    		}
    	})
           	  }else{

           	  }
           }
        }
    }
    // $('.s-buy-li').eq(index).find('button').attr("disabled",false);
    for(var j = 0 ; j <choosedata.canchoose.length;j++){
    	$('.s-buy-li button').each(function(index,e){
    		
    		if($(this).attr("id")== choosedata.canchoose[j]){
    			$(this).attr("disabled",false);
    			
    		}else{
    			
    		}
    	})
    }
	if($(span).hasClass("disabled")){
		console.log("即将返回")
		return;
	}
	$('button[name=' + $(span).attr('name') + ']').each(function() {
		$(this).removeClass("current");
	});
	$(span).addClass("current");
	// var index=$(span).closest('.s-buy-li').index();
	// 获取当前点击的标签Id
	click_id=$(span).attr("id");
	// $(".select").removeClass("disabled");

	// 循环input判断无主图并且无库存

	// $('button[name=' + $(span).attr('name') + ']').each(function() {
	// 	if($(this).hasClass("current")){
	// 	}
	// });
	
	//判断是否有SKU主图
	// if(parseInt($(span).attr("data-picture-id")) !=0){
	// 	$("#default_img").val($(span).attr("data-picture-id"));
	// 	$(".js-thumbnail").attr("src",$("#spec_picture_id" + $(span).attr("data-picture-id")).val());
	// }
	
	// echoSpecData();
	// var $barr = $(span).closest('.s-buy-li').siblings(".s-buy-li").find(".right button");
	// $barr.each(function(i){
	// })


}


//改变数据
function echoSpecData(){
	var specificationValueSelecteds = '';
	var spec_array = new Array();
	var $specificationValueSelected = $(".s-buy-ul .right button");
	$specificationValueSelected.each(function(i) {
		var $this = $(this);
		if ($this.hasClass("current")) {
			specificationValueSelecteds += $this.attr("id") + ";";
			spec_array.push($this.attr("id"));
		}
	});
	spec_array.sort();
	console.log(spec_array);


	
	var gg_num = 0;  //规格数
	var sel_num = 0; //选择数
	//判断规格总数
	$('.s-buy-li').each(function(){
		gg_num++;
	})
	//判断选了多少个
	for (var i = 0; i < spec_array.length; i++) {
		sel_num++;
	}


	// $('.sku-array').each(function(){  //循环input

	// }


	//最后一个规格的时候
	if((sel_num+1) == gg_num){
		$('.sku-array').each(function(){
			var value = $(this).val();
			var img=$(this).attr("picture");
			var stock =$(this).attr("stock");
			if(img=="" && value != "" && stock==0){
				var arr = $(this).val().split(';'); //获取每一个skuID
				if(arr_baohan(arr,spec_array)==true){  //是否包含数组
					for (var i = 0; i < arr.length; i++) {
						var count = 0;
						for (var j = 0; j < spec_array.length; j++) {
							if(arr[i]==spec_array[j]){
								count++;
							}
						}
						if(count==0){
							$('.select').each(function(){
								if($(this).attr('id')==arr[i]){
									$(this).addClass('disabled');
								}
							})
						}
					}
				}
			}
			
		})
	}else if(sel_num == gg_num){

		var data = new Array();
		var gg_arr = new Array(); //存放每一个规格的值
		var time_arr = new Array(); //存放每一个规格的值
		var sku_arr = new Array(); //存放每一个规格的值
		
		for (var i = 0; i < spec_array.length; i++) {

			sku_arr =[]; //初始化
			time_arr=[]; //初始化

			//复制一个数组
			for (var p = 0; p < spec_array.length; p++) {
				time_arr[p] = spec_array[p];
			}

			// console.log(time_arr);
			var arr2 = new Array(); //存放规则数组
			var gg = spec_array[i].split(':'); //存放切割后规格标识
			var k = 0; //存放量 
			$('.select').each(function(){ //循环规格
				console.log(2);
				var tt = $(this).attr('id').split(':'); //切割
				if(gg[0] == tt[0]){
					arr2[k] = $(this).attr('id');
					k++;
				}
				
			})
			console.log(arr2);
			//规格值拼接SKU组合
			for (var j = 0; j < arr2.length; j++) {

				time_arr[i] = arr2[j];
				console.log(time_arr);
				sku_arr[j] = new Array();
				for (var u = 0; u < time_arr.length; u++) {
					sku_arr[j][u] = time_arr[u];
				}
				// sku_arr[j] = time_arr;//存放sku组合			
			}
			// console.log(sku_arr);
			//数组转字符串
			var sku_array = new Array();
			for (var f = 0; f < sku_arr.length; f++) {
				sku_array[f] = sku_arr[f].join(";");
			}
			//具体ID
			for (var q = 0; q < sku_array.length; q++) {
				// console.log(q+123);
				console.log(sku_array[q]);
				$('.sku-array').each(function(){

					// console.log($(this).val());
					// console.log(sku_array[q]);
					var aa = $(this).val().split(';');
					var bb = sku_array[q].split(';');
					if(aa.sort().toString()==bb.sort().toString()){
						console.log(111);
						var img_= $(this).attr("picture"); //获取图片
						var stock_ = $(this).attr("stock"); //获取库存
						if(img_ == "" && stock_ == 0){ //没有图片，没有库存

							//灰掉按钮
							var o = 0;
							for (var c = 0; c < aa.length; c++) {
								for (var g = 0; g < spec_array.length; g++) {
									if(spec_array[g]==aa[c]){
										o++;
									}
								}	
								if(o==0){
									$('.select').each(function(){
										if($(this).attr('id')==aa[c]){
											$(this).addClass('disabled');
										}
									})
								}
							}
						}
					}
					
				})
			}
			// data[i] = sku_array;
			// console.log(data);
		}
		// console.log(sku_arr_);	
	}












	var unArr=new Array();
	var new_arr =new Array();
	var allsku=new Array();
	$(".sku-array").each(function(i) {
		var sku_array =new Array();
		
		var unsku_array =new Array();
		

		var $this = $(this);
		var value = $(this).val();
		var stock =$(this).attr("stock")


		if(value != ""){
			sku_array = value.split(";");
		}
		// sku_array.sort();//排序

		// var img=$(this).attr("picture");
		// if(img=="" && value != "" && stock==0){
		// 	var unValue =$(this).val();
		// 	unsku_array = unValue.split(";");
		// 	// allsku.push(unsku_array);
		// }
		// unsku_array.sort();
		
		// b = unsku_array.join(",");
		// var cc=unsku_array.toString();
		// var index=cc.indexOf(aa)
		// if(index != "-1"){

		// }


		if(JSON.stringify(sku_array) == JSON.stringify(spec_array)){
			select_skuid = $this.attr("skuid");
			select_skuName = $this.attr("skuname");
			stock = parseInt($this.attr("stock"));
			if(stock==0){
				$("#submit_ok").addClass("disabled");
				$("#num").val(1);
			}else{
				if(parseInt($("#num").val()) > stock){
					$("#num").val(stock);
				}
				$("#submit_ok").removeClass("disabled");
			}
			$("#Stock").text("剩余" + stock + "件");
			$("#num").attr("max", stock);
			$("#hiddStock").val(stock);
			$("#hiddSkuId").val(select_skuid);
			$("#hiddSkuName").val(select_skuName);
			active = $("#submit_ok").attr("tag");
			if (active == 'addCart' || active == 'buyBtn1') {
				price = $this.attr("price");
				var pro_img=$this.attr("picture");
				if(pro_img!=""){
					$(".js-thumbnail").attr("src",pro_img);
					$("#price").text("￥" + price);
				}
				$("#hiddSkuprice").val(price);
			} else if (active == "groupbuy") {
			} 
		}
		
	});
	// console.log(allsku)
	// for(var i=0;i<allsku.length;i++){
	// 	// console.log(allsku[i])
		
	// 	if($.inArray(click_id,allsku[i]) !=-1){
	// 		console.log(click_id)
	// 		console.log(i)
	// 		// console.log($.inArray(click_id,allsku[i]))
	// 		// console.log(allsku[i])
	// 		for(var j=0;j<allsku[i].length;j++){
	// 			console.log("in")
	// 			// console.log("当前点击id:"+click_id);
	// 			// console.log($.inArray(click_id, allsku[i]));
				
	// 			// console.log("进来")
	// 			// console.log(allsku[2][1]);
	// 			var disabled_id=document.getElementById(allsku[i][j]);
	// 			disabled_id.classList.add("disabled");
	// 			var now_id=document.getElementById(click_id);
	// 			now_id.classList.remove("disabled")
	// 			now_id.classList.add("current")
				
				
	// 			// console.log(disabled_id)
				
	// 			// disabled_id.className +="disabled";		
	// 			// $('[id^='+allsku[2][1]+']').addClass("disabled");
	// 			// co.nsole.log(allsku[i][j])
	// 		}
	// 	}
	// }
	
}
function arr_baohan(a, b){
	if(!(a instanceof Array) || !(b instanceof Array)) return false;
	if(a.length < b.length) return false;
	var aStr = a.toString();
	    // console.info(aStr);
	for(var i = 0, len = b.length; i < len; i++){
	        // console.info(aStr.indexOf(b[i]));
	if(aStr.indexOf(b[i]) == -1) return false;
	}
	return true;
}
function imgview() {
	var arr = $("#imgs").val();
	var c = arr.substring(0, arr.length - 1).split(',');
	var index = $("#imgpage").text().split('/') - 1;
	if (typeof window.WeixinJSBridge != 'undefined') {
		WeixinJSBridge.invoke("imagePreview", {
			current : c[index],
			urls : c
		});
	}
}
function showPic() {
	$("#content").html(hdata);
	$("#p-detailoff").hide();
	$("#p-detail").show();

};
window.onload = function() {
	if (typeof window.WeixinJSBridge != 'undefined') {
		document.addEventListener("WeixinJSBridgeReady", onWeixinReady, false);
	} else {
		$("#p-detailoff").show();
	}
}
function onWeixinReady() {
	WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
		WeixinJSBridge.log(e.err_msg);
		var state = e.err_msg.split(':')[1];
		if (state == "wifi") {
			$("#content").html(hdata);
			$("#p-detail").show();
		} else {
			$("#p-detailoff").show();
		}
	});
}