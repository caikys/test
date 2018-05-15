<template>
	<div class="footer">
		<el-row class="footer-wrap">
			<el-col :span="3" class="copyright">Copyright©2016</el-col>
			<el-col :span="17">&nbsp;&nbsp;</el-col>
			<el-col :span="4"><a href="http://wemings.com/" target="_blank">技术支持：深圳威明斯科技有限公司</a></el-col>
		</el-row>
	</div>
</template>
<script>
export default{
	name: 'MyFooter'
}	
</script>
<style lang="less">
@import '../styles/public.less';
.footer{
	.footer-wrap{
		padding: 20px 0;
		border-top: 1px solid @borderColor;
		font-size: 14px;
		.copyright{
			padding-left: 20px;
		}
		a{
			&:hover{
				color: @mainColor;
			}
		}
	}
}
</style>