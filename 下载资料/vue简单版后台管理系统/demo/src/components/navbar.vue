<template>
	<div class="navbar">
	    <el-menu default-active="0" class="navbar-ul" @open="handleOpen" @click.native="" @close="handleClose">
	      <router-link to="/home/dashboard">
	      	<el-menu-item index="0"><i class="el-icon-menu"></i>主面板</el-menu-item>
	      </router-link>
	      <router-link to="/home/caser">
	      	<el-menu-item index="1"><i class="el-icon-date"></i>案例</el-menu-item>
	      </router-link>
	      <router-link to="/home/out">
	      	<el-menu-item index="2"><i class="el-icon-time"></i>出货</el-menu-item>
	      </router-link>
	      <router-link to="/home/order">
	      	<el-menu-item index="3"><i class="el-icon-document"></i>订单</el-menu-item>
	      </router-link>
	      <router-link to="/home/datas">
	      	<el-menu-item index="4"><i class="el-icon-setting"></i>数据</el-menu-item>
	      </router-link>
	    </el-menu>
	</div>
</template>
<script>
export default {
	name: 'navbar',
	methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      backDashboard(){
      	alert('ok')
      }
    }
}	
</script>
<style lang="less">
@import '../styles/public.less';
</style>