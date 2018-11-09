<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1" />
	<title>这个页面到底加载</title>
</head>
<style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	/*.content{
		width: 300px;
		height: 500px;
		overflow: auto;
		border: 1px solid red;
		position: absolute;
		top: 50px;
		right: 100px;
	}*/
	.content div{
		text-align: center;
		height: 100px;
		line-height: 100px;
		border-bottom: 1px solid #000;
		background: #eee;

	}
</style>
<body>


	<div class="content">
		
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
					console.log(111)
					console.log(res);
					var html="";
					for(var i=0;i<res.length-1;i++){
						num++
						html+="<div>我的名字："+res[i].commentName+num+'</div>';
					}
					$(".content").append(html);
					page++;
				})
			})
		}

		// 首次加载
		getData(1);
		

		// 到底加载下一页
		$(window).on("scroll",function(){
			// 当前滚动条高度
			var scrollTop = $(window).scrollTop();


			// 底部再加载，scrollTop >= $(document).height() - $(window).height() - 100该式子是滚动条表示距离底部还有100px的时候
			if (scrollTop >= $(document).height() - $(window).height() - 100) {
				getData(page);
			}
		})


	})
</script>
</html>