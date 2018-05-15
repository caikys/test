/**
 * 侧边栏组件
 * @description 侧边栏上的顶层菜单点击后展开子菜单，目前只支持二级菜单，子菜单可以是一开始就定义好的，也可以点击父菜单后才从后端加载
 * @author 何翠香
 * @date 2017/2/7
 * 
 * Props:
 * 
 * @param  show 
 * 类型：Boolean
 * 是否必填：true
 * 默认值：true
 * 描述：显示或隐藏侧边栏的标志
 * 
 * 
 * 
 * Events:
 * 
 * @function hide
 * 返回：无
 * 必用：true
 * 描述：隐藏侧边栏
 * 
 * 
 * 
 */

<template>
	<div class="navbar">
		<ul>
			<li class="first-nav">
				<img src="images/nav-icon1.png" alt="">
				<span>用户管理</span>
			</li>
			<li>
				<img src="images/nav-icon2.png" alt="">
				<span>题库管理</span>
			</li>
			<li>
				<img src="images/nav-icon3.png" alt="" class="img-nav">
				<span>题目管理</span>
			</li>
			<li>
				<img src="images/nav-icon4.png" alt="">
				<span>岗位管理</span>
			</li>
		</ul>
	</div>
</template>

<style lang="sass" scoped="">
	.navbar{
		width: 162px;
		height: 669px;
		padding-left: 6px;
		padding-top: 16px;
		border: 1px solid #e8e8e8;
		border-top: 3px solid #c1604d;
		background-color: #fff;
		float:left;
		ul{
			width: 100%;
			li{
				float: left;
				width: 146px;
				height: 45px;
				position: relative;
				margin-bottom: 9px;
				img{position: absolute
				;top: 9px;left: 21px;}
				span{position: absolute
				;top: 14px;left: 59px;}
			}
			.first-nav{
				background-color: #fff0eb;
				border-shadow:0 0 10px #fff0eb;
			}
		}
	}
</style>


<script>

    export default {
        name:'SliderBar',
        props:{
            
        },
        data (){
            return {
                // vue实例
                self: this,
                // 用于记住展开哪个子菜单的下标
                subNavbarIndex: -1
            }
        },
        computed: {},

    }
</script>