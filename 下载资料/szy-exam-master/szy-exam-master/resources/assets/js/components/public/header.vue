/**
 * 顶部栏组件
 * @author 何翠香
 * @date 2017/2/7
 * 
 * Props:
 * 
 * @param  title 
 * 类型：String
 * 是否必填：false
 * 默认值：''
 * 描述：标题
 * 
 
 */
<template>
    <header class="header">
        <div class="logo">
			<img src="images/logo.png" alt="">
		</div>
		<div class="right">
			<ul>
				<li><a href="#">联系我们</a></li>
				<li>用户名:<a href="#">{{username}}</a></li>
			</ul>
		</div>
    </header>
</template>

<script>
  export default {
    name:'MyHead',
    props:{
        username:{
            type:String,
            default:'王宝强'
        }
    }
  }
</script>

<style lang="sass" scoped>
	@import "../../../sass/reset.css";

    .header{
		width: 1195px;
		height: 64px;
		padding: 22px 371px 26px 354px;
		background-color: #fff;
		.logo{
			float: left;
			width: 354px;
			height: 65px;
		}
		.right{
			float:right;
			width: 204px;
			height: 20px;
			margin-top: 22px;
			ul{
				width: 680px;
				height: 20px;
				li{
					float: left;
					border-right: 2px solid #666666;
					padding-left: 9px;
					padding-right: 9px;
					font-size: 15px;
					a{
						display: inline-block;
						color: #000;
						font-size: 15px;
					}
				}
				li:last-child{
					border-right: none;
				}
			}
		}
	}

</style>