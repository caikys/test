<template>
	<div class="user">
		<div class="crumbs">
	  	  	<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>用户管理</el-breadcrumb-item>
		  	</el-breadcrumb>
  	  	</div>
  	  	<div class="user-wrap">
  	  		<h3 class="title-wrap">用户管理</h3>
  	  		<div class="user-filter">
  	  			<el-input placeholder="请输入用户名" v-model="input5" style="width: 300px;">
				    <el-button slot="append" icon="search"></el-button>
				</el-input>
  	  		</div>
  	  		<div class="user-users">
  	  			<el-table :data="tableData" border style="width: 100%">
				    <el-table-column prop="date" label="添加日期"  sortable></el-table-column>
				    <el-table-column prop="name" label="用户名" sortable></el-table-column>
				    <el-table-column prop="companyName" label="公司名称"></el-table-column>
				    <el-table-column prop="address" label="地址"></el-table-column>
				    <el-table-column prop="tel" label="邮编"></el-table-column>
				    <el-table-column inline-template :context="_self" label="操作">
				      <span>
				        <el-button @click="" type="text" size="small">删除用户</el-button>
				        <el-button type="text" size="small">重置密码</el-button>
				      </span>
				    </el-table-column>
				  </el-table>
  	  		</div>
  	  		<div class="pages">
			    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="10" layout="	prev, pager, next, jumper" :total="100">
			    </el-pagination>
  			</div>
  	  		<MyFooter></MyFooter>
  	  	</div>
	</div>
</template>
<script>
import MyFooter from '../components/footer.vue'
export default{
	name: 'user',
	methods: {
	    handleSizeChange(val) {
	    	console.log(`每页 ${val} 条`);
	    },
    	handleCurrentChange(val) {
        	this.currentPage = val;
        	console.log(`当前页: ${val}`);
    	}
    },
    components:{
		MyFooter
	},
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '周杰伦',
          companyName: '北京百度股份有限公司',
          address: '上海市普陀区金沙江路 1518 弄',
          tel: 13888888888
        }, {
          date: '2016-05-02',
          name: '王杰',
          companyName: '深圳腾讯有限公司',
          address: '上海市普陀区金沙江路 1518 弄',
          tel: 13888888888
        }, {
          date: '2016-05-04',
          name: '张泽富',
          companyName: '杭州阿里巴巴有限公司',
          address: '上海市普陀区金沙江路 1518 弄',
          tel: 13888888888
        }, {
          date: '2016-05-01',
          name: '周润发',
          companyName: '深圳十方通信息技术股份有限公司',
          address: '上海市普陀区金沙江路 1518 弄',
          tel: 13888888888
        }, {
          date: '2016-05-06',
          name: '周星驰',
          companyName: '大连万达集团',
          address: '上海市普陀区金沙江路 1518 弄',
          tel: 13888888888
        }]
      }
    }
}	
</script>
<style lang="less">
@import '../styles/public.less';
.user{
	background-color: @white;
	padding-bottom: 200px;
	.user-wrap{
		border-left: solid 1px @borderColor;
		border-right: solid 1px @borderColor;
		border-bottom: solid 1px @borderColor;
		margin: 15px;
		border-top-left-radius: 4px;
    	border-top-right-radius: 4px;
    	.user-filter{
    		padding: 100px 0;
    		.el-input{
    			width: 40%!important;
    			margin: 0 auto;
    		}
    	}
    	.user-users{
    		margin-bottom: 100px;
    	}
    	.title-wrap{
			border-left: none;
			border-right: none;
		}
		.pages{
			padding: 50px 0;
			text-align: center;
		}
	}
}	
</style>