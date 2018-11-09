<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1" />
	<title>某个容器到底加载</title>
</head>
<style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	.content{
		width: 300px;
		height: 500px;
		overflow: auto;
		border: 1px solid red;
		position: absolute;
		top: 50px;
		right: 100px;
	}
	.content .inner div{
		text-align: center;
		height: 100px;
		line-height: 100px;
		border-bottom: 1px solid #000;
		background: #eee;

	}
</style>
<body>
	<div class="content">
		<div class="inner"></div>
	</div>
</body>
<script type="text/javascript" src="jquery-1.12.0.js"></script>
<script type="text/javascript">
	$(function() {
		// 到底加载下一页思路
		// 1.首先将请求数据的函数封装到一个方法，参数：当前页码；
		// 2.监听滚动条的变化，当滚动条距离浏览器底部还有一定的距离的时候，执行封装好的函数，传下一页的参数

		var num=0

		var page=1;
		// 封装函数
		var getData=function(){
			// setTimeout()防止到底一次加载多页
			setTimeout(function(){
				$.getJSON("data.json",{curpage:page},function(res){
					var html="";
					for(var i=0;i<res.length-1;i++){
						num++
						html+="<div>我的名字："+res[i].commentName+num+'</div>';
					}
					$(".inner").append(html);
					page++;
				})
			})
		}

		// 首次加载
		getData(1);
		

		// 到底加载下一页
		var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
	    var nScrollTop = 0;  //滚动到的当前位置
	    var nDivHight = $(".content").height();
		$(".content").on("scroll",function(){
			nScrollHight = $(this)[0].scrollHeight;
		    nScrollTop = $(this)[0].scrollTop;
		    if(nScrollTop + nDivHight >= nScrollHight){
		      	// alert("滚动条到底部了");
		      	getData(page);
		    }
		})


	})
</script>
</html>