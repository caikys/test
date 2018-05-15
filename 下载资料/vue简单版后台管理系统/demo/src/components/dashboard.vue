<template>
  <div class="dashboard">
  	  <div class="crumbs">
	  	  <el-breadcrumb separator="/">
			  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>主面板</el-breadcrumb-item>
		  </el-breadcrumb>
  	  </div>
	  <div class="wrapper">
	    <el-button type="danger">
	    	<el-badge :value="8" class="item">
				<span>紧急</span>
	    	</el-badge>
	    	
	    </el-button>
	    <el-button type="warning">
	    	<el-badge :value="3" class="item">
				<span>普通</span>
	    	</el-badge>
	    </el-button>
	    <el-button type="success">
	    	<el-badge :value="3" class="item">
				<span>结束</span>
	    	</el-badge>
	    </el-button>
	    <el-button type="info">
	    	<el-badge :value="3" class="item">
				<span>所有</span>
	    	</el-badge>
	    </el-button>
	  </div>
	  <div class="search">
	  	<el-input placeholder="请输入内容" v-model="input5">
		    <el-button slot="append" icon="search"></el-button>
		</el-input>
	  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      
    }
  }
</script>
<style lang="less">
@import '../styles/public.less';
.dashboard {
	background-color: @white;
	padding-bottom: 380px;
	.wrapper{
		text-align: center;
		padding: 40px 0;
	    margin: 15px;
	    border: 1px solid #ddd;
	    border-radius: 3px;
		button{
			width: 20%;
			height: 100px;
			font-size: 36px;
			transition: .3s all;
			&:hover{
				transform:scale(1.03);
			}
		}
	}
	.search{
		padding: 150px 0;
		.el-input{
			width: 50%;
			margin: 0 auto;
			height: 42px;
			input{
				height: 42px;
			}
		}
	}
	
}
</style>