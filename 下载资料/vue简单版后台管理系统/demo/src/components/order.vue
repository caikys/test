<template>
	<div class="caser out order">
		<div class="crumbs">
	  	  	<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>订单</el-breadcrumb-item>
		  	</el-breadcrumb>
  	  	</div>
  	  	<div class="caser-wrap">
  	  		<h3 class="title-wrap">订单跟踪</h3>
  	  		<div class="caser-main">
  	  			<div class="caser-search">
  	  				<el-input placeholder="请输入搜索内容" v-model="input5">
					    <el-button slot="append" icon="search"></el-button>
					</el-input>
  	  			</div>
  	  			<div class="caser-tables">
  	  				<div class="caser-tables-filter">
  	  					<el-row>
							<el-col :span="2">已选择{{activeNum}}个订单</el-col>
							<el-col :span="3">
								<el-select v-model="currentType" placeholder="请选择订单状态">
								    <el-option v-for="item in options" :label="item.label" :value="item.value">
								    </el-option>
								</el-select>
							</el-col>
							<el-col :span="19">
								<el-button type="danger" icon="delete">删除</el-button>
								<el-button @click="dialogFormVisible = true"><i class="el-icon-plus"></i>&nbsp;新建订单</el-button>
							</el-col>
  	  					</el-row>
  	  					<div class="caser-add">
  	  						<el-dialog title="新建出货单" v-model="dialogFormVisible">
							  	<el-form :model="form">
							    	<el-form-item label="型号" :label-width="formLabelWidth" class="changeIptWidth">
								      	<el-input v-model="form.name" auto-complete="off"></el-input>
								    </el-form-item>
							    	<el-form-item label="单价" :label-width="formLabelWidth" class="changeIptWidth">
								    	<el-input v-model="form.name" auto-complete="off"></el-input>
								    </el-form-item>
								    <el-form-item label="数量" :label-width="formLabelWidth" class="changeIptWidth">
								      <el-input v-model="form.name" auto-complete="off"></el-input>
								    </el-form-item>
								    <el-form-item label="品牌" :label-width="formLabelWidth" class="changeIptWidth">
								      <el-input v-model="form.name" auto-complete="off"></el-input>
								    </el-form-item>
								    <el-form-item label="需求交期" :label-width="formLabelWidth" class="changeIptWidth">
								      <el-input v-model="form.name" auto-complete="off"></el-input>
								    </el-form-item>
								    <el-form-item label="封装" :label-width="formLabelWidth" class="changeIptWidth">
								      <el-input v-model="form.name" auto-complete="off"></el-input>
								    </el-form-item>
								    <el-form-item label="新增讨论" :label-width="formLabelWidth">
								    	<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="addDiscussion"></el-input>
								    </el-form-item>
								    <el-form-item label="上传图片" :label-width="formLabelWidth">
								    	<el-upload action="//jsonplaceholder.typicode.com/posts/" type="drag" :multiple="true" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="handleSuccess" :on-error="handleError" :default-file-list="fileList">
										  <i class="el-icon-upload"></i>
										  <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
										  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2048kb</div>
										</el-upload>
								    </el-form-item>
								    <el-form-item label="状态" :label-width="formLabelWidth">
										<el-radio class="radio" v-model="radio" label="1">普通</el-radio>
	  									<el-radio class="radio" v-model="radio" label="2">结束</el-radio>
	  									<el-radio class="radio" v-model="radio" label="3">紧急</el-radio>
								    </el-form-item>
								    <el-form-item label="处理时间" :label-width="formLabelWidth">
									    <el-date-picker v-model="handleTime" style="width:30%" type="datetime" placeholder="选择日期时间"></el-date-picker>
								    </el-form-item>
							  </el-form>
							  <div slot="footer" class="dialog-footer">
							    <el-button @click="dialogFormVisible = false">取 消</el-button>
							    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
							  </div>
							</el-dialog>
  	  					</div>
  	  				</div>
  	  				<div class="caser-content">
	  	  				<el-table :data="filterTableData" selection-mode="multiple" style="width: 100%" @select-all="selectall" @select="select">
					        <el-table-column type="selection" width="40"></el-table-column>
					        <el-table-column inline-template label="型号" width="200">
						      <el-popover trigger="hover" placement="top">
						        <p>料号: {{ row.title }}</p>
						        <div slot="reference" class="name-wrapper">
						          {{ row.title }}
						        </div>
						      </el-popover>
						    </el-table-column>
					        <el-table-column property="brand" width="70" label="品牌" align="center"></el-table-column>
					        <el-table-column inline-template label="数量" width="80" align="center">
						      <el-popover trigger="hover" placement="top">
						        <p>数量: {{ row.number }}</p>
						        <div slot="reference" class="name-wrapper">
						          {{ row.number }}
						        </div>
						      </el-popover>
						    </el-table-column>
						    <el-table-column inline-template label="单价" width="80" align="center">
						      <el-popover trigger="hover" placement="top">
						        <p>单价: {{ row.price }}</p>
						        <div slot="reference" class="name-wrapper">
						          {{ row.price }}
						        </div>
						      </el-popover>
						    </el-table-column>
					        <el-table-column property="wrap" width="110" label="封装" align="center"></el-table-column>
					        <el-table-column property="demandCycle" width="110" label="需求周期" align="center"></el-table-column>
					        <el-table-column property="from" label="FROM" width="90" align="center"></el-table-column>
					        <el-table-column property="addTime" label="添加时间" width="160" align="center"></el-table-column>
					        <el-table-column property="to" label="TO" width="80" align="center"></el-table-column>
					        <el-table-column property="status" label="状态" width="100" align="center"></el-table-column>
					        <el-table-column property="replyPeople" label="回复人" width="100" align="center"></el-table-column>
					        <el-table-column property="endTime" label="最后回复时间" width="160" align="center"></el-table-column>
					        <el-table-column label="操作" inline-template  align="center">
						      <template property="id">
						        <el-button size="small" @click="viewThis($index, row)">查看</el-button>
						        <el-button size="small" type="danger" @click="">删除</el-button>
						        <el-button size="small" type="success" @click="">发货</el-button>
						      </template>
						    </el-table-column>
				      </el-table>
  	  				</div>
  	  				<div class="pages">
					    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="10" layout="prev, pager, next, jumper" :total="100">
					    </el-pagination>
  	  				</div>
  	  				<MyFooter></MyFooter>
  	  			</div>
  	  		</div>
  	  	</div>
	</div>
</template>
<script>
import MyFooter from '../components/footer.vue'
export default{
	name: 'order',
	components:{
		MyFooter
	},
	data() {
        return {
           currentPage: 1,
           activeNum: 0,
           currentType: '',
           selectItems: [],
           dialogFormVisible: false,
           formLabelWidth: '100px',
           addDiscussion: '',
           radio: '1',
           handleTime: '',
           form: {
	          name: '',
	          price: '2',
	          order: '',
	          region: '',
	          date1: '',
	          date2: '',
	          delivery: false,
	          type: [],
	          resource: '',
	          desc: ''
	        },
           tableData: [
           	{
	            id: '001',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            brand: 'TI',
	            number: '3600+3600+3600',
	            price: 'DBP=$1.646',
	            wrap: 'UFQFPN',
	            demandCycle: '6-18周',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '未结束',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          	},
          	{
	            id: '002',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            brand: 'TI',
	            number: '3600+3600+3600',
	            price: 'DBP=$1.646',
	            wrap: 'UFQFPN',
	            demandCycle: '6-18周',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '已结束',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          	},
          	{
	            id: '003',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            brand: 'TI',
	            number: '3600+3600+3600',
	            price: 'DBP=$1.646',
	            wrap: 'UFQFPN',
	            demandCycle: '6-18周',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '待回复',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          	},
          	{
	            id: '004',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            brand: 'TI',
	            number: '3600+3600+3600',
	            price: 'DBP=$1.646',
	            wrap: 'UFQFPN',
	            demandCycle: '6-18周',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '已回复',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          	},
          	{
	            id: '005',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            brand: 'TI',
	            number: '3600+3600+3600',
	            price: 'DBP=$1.646',
	            wrap: 'UFQFPN',
	            demandCycle: '6-18周',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '未结束',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          	},
          	{
	            id: '006',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            brand: 'TI',
	            number: '3600+3600+3600',
	            price: 'DBP=$1.646',
	            wrap: 'UFQFPN',
	            demandCycle: '6-18周',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '已结束',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          	},
          	{
	            id: '007',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            brand: 'TI',
	            number: '3600+3600+3600',
	            price: 'DBP=$1.646',
	            wrap: 'UFQFPN',
	            demandCycle: '6-18周',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '未结束',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          	},
          	{
	            id: '008',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            brand: 'TI',
	            number: '3600+3600+3600',
	            price: 'DBP=$1.646',
	            wrap: 'UFQFPN',
	            demandCycle: '6-18周',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '已结束',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          	},
          	{
	            id: '009',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            brand: 'TI',
	            number: '3600+3600+3600',
	            price: 'DBP=$1.646',
	            wrap: 'UFQFPN',
	            demandCycle: '6-18周',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '未结束',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          	},
          	{
	            id: '010',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            brand: 'TI',
	            number: '3600+3600+3600',
	            price: 'DBP=$1.646',
	            wrap: 'UFQFPN',
	            demandCycle: '6-18周',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '已回复',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          	}
         	],
         	 options: [
         	 	{
		          value: '全部',
		          label: '全部'
		        },
         	 	{
		          value: '未结束',
		          label: '未结束'
		        },{
		          value: '已结束',
		          label: '已结束'
		        },{
		          value: '待回复',
		          label: '待回复'
		        },{
		          value: '已回复',
		          label: '已回复'
		        }]
	      }
      	},
	    computed:{
	        filterTableData: function () {
	          const type = this.currentType;
	          return this.tableData.filter(function (data) {
	            if(type == '全部'|| type == '' ){
	              return true
	            }else{
	              return data.status == type
	            }
	          })
	        }
	    },
	    methods:{
		    handleSizeChange(val) {
		    	console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		        this.currentPage = val;
		        console.log(`当前页: ${val}`);
		    },
		    selectall(selection){
		    	this.activeNum = selection.length
		    	const vm = this
		    	vm.selectItems = []
		    	selection.forEach(function(value){
		    		vm.selectItems.push(value.id)
		    	})
		    	console.log(vm.selectItems)
		    },
		    select(selection,row){ //选择单个checkbox
		    	this.activeNum = selection.length
		    	const vm = this
		    	vm.selectItems = []
		    	selection.forEach(function(value){
		    		vm.selectItems.push(value.id)
		    	})
		    	console.log(vm.selectItems)
		    },
		    handleRemove:function(){
		        var tableData = this.tableData;
		        this.selectItems.forEach(function (id) {
		          tableData.forEach(function (data) {
		              if(id == data.id){
		                tableData.splice(tableData.indexOf(data),1)
		              }
		          })
		        });
		        this.selectItems = [];
		    },
		    viewThis(index,row){
		    	console.log(index)
		    	console.log(row.id)
		    }
	    }
}	
</script>
<style lang="less">
@import '../styles/public.less';
.out{
	.el-dialog--small{
		top: 5%!important;
	}
	.changeIptWidth{
		width: 60%;
	}
	.el-table{
		.cell{
			white-space: normal;
    		word-break: normal ;
		}
	}
}
</style>