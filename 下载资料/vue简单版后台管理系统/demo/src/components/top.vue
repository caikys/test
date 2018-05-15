<template>
	<header>
		<el-row class="header">
			<el-col :span="6" class="logo">后台管理系统</el-col>
			<el-col :span="15">
				<div class="greet">
					欢迎您 : {{user.Username}}
				</div>
			</el-col>
			<el-col :span="3" class="nav">
				<el-menu theme="dark" default-active="1" class="menu" mode="horizontal" @select="menuSelect">
				  <el-menu-item index="1">首页</el-menu-item>
				  <el-submenu index="2" >
				    <template slot="title">管理</template>
				    <el-menu-item index="3">用户</el-menu-item>
				    <el-menu-item index="4">退出</el-menu-item>
				  </el-submenu>
				</el-menu>
			</el-col>
		</el-row>
	</header>
</template>
<script>
export default {
	name:'top',
	data () {
	    return {
	      user: ''
	    }
  	},
  	mounted(){
  		this.setUser()
  	},
	methods: {
  		setUser(){
  			this.user = JSON.parse(sessionStorage.getItem("user"));
  		},
  		menuSelect(key, keyPath){
  			if(key == 3){
  				this.$router.push('/home/user');
  			}
  			if(key == 4){
		        this.$confirm('是否要退出?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          this.$store.commit('logout',false);
		          this.$message({
		            type: 'success',
		            message: '已退出!'
		          });
		          window.location.reload();
		        }).catch(() => {
		              
		        });
  			}
  		}
	}
}
</script>
<style lang="less">
@import '../styles/public.less';
.header{
	height: 60px;
	background-color: @hearderBg;
	.logo{
		color: @white;
		height: 60px;
		line-height: 60px;
	}
	.greet{
		color: @white;
		height: 60px;
		line-height: 60px; 
	}
	.nav{
		.menu{
			border-radius: 0px;
		}
	}
	
}
</style>