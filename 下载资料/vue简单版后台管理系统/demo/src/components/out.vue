<template>
	<div class="caser out">
		<div class="crumbs">
	  	  	<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>出货</el-breadcrumb-item>
		  	</el-breadcrumb>
  	  	</div>
  	  	<div class="caser-wrap">
  	  		<h3 class="title-wrap">出货跟踪</h3>
  	  		<div class="caser-main">
  	  			<div class="caser-search">
  	  				<el-input placeholder="请输入搜索内容" v-model="input5">
					    <el-button slot="append" icon="search"></el-button>
					</el-input>
  	  			</div>
  	  			<div class="caser-tables">
  	  				<div class="caser-tables-filter">
  	  					<el-row>
							<el-col :span="2">已选择{{activeNum}}个出货</el-col>
							<el-col :span="3">
								<el-select v-model="currentType" placeholder="请选择出货状态">
								    <el-option v-for="item in options" :label="item.label" :value="item.value">
								    </el-option>
								</el-select>
							</el-col>
							<el-col :span="19">
								<el-button type="danger" icon="delete">删除</el-button>
								<el-button @click="dialogFormVisible = true"><i class="el-icon-plus"></i>&nbsp;新建出货单</el-button>
							</el-col>
  	  					</el-row>
  	  					<div class="caser-add">
  	  						<el-dialog title="新建出货单" v-model="dialogFormVisible">
							  	<el-form :model="form">
							    	<el-form-item label="料号" :label-width="formLabelWidth" class="changeIptWidth">
								      	<el-input v-model="form.name" auto-complete="off"></el-input>
								    </el-form-item>
							    	<el-form-item label="单价" :label-width="formLabelWidth" class="changeIptWidth">
								    	<el-input v-model="form.price" auto-complete="off"></el-input>
								    </el-form-item>
								    <el-form-item label="数量" :label-width="formLabelWidth" class="changeIptWidth">
								      <el-input v-model="form.number" auto-complete="off"></el-input>
								    </el-form-item>
								    <el-form-item label="金额" :label-width="formLabelWidth" class="changeIptWidth">
								      <el-input v-model="form.money" auto-complete="off"></el-input>
								    </el-form-item>
								    <el-form-item label="送货地址" :label-width="formLabelWidth" class="changeIptWidth">
								      <el-input v-model="form.name" auto-complete="off"></el-input>
								    </el-form-item>
							    	<el-form-item label="委托单号" :label-width="formLabelWidth" class="changeIptWidth">
								    	<el-input v-model="form.order" auto-complete="off"></el-input>
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
					        <el-table-column type="selection" width="80"></el-table-column>
					        <el-table-column property="title" width="260" label="料号"></el-table-column>
					        <el-table-column property="number" width="80" label="数量" align="center"></el-table-column>
					        <el-table-column property="price" width="80" label="单价" align="center"></el-table-column>
					        <el-table-column property="money" width="100" label="金额" align="center"></el-table-column>
					        <el-table-column property="order" width="150" label="委托单号" align="center"></el-table-column>
					        <el-table-column property="from" label="FROM" width="100" align="center"></el-table-column>
					        <el-table-column property="addTime" label="添加时间" width="160" align="center"></el-table-column>
					        <el-table-column property="to" label="TO" width="80" align="center"></el-table-column>
					        <el-table-column property="status" label="状态" width="100" align="center"></el-table-column>
					        <el-table-column property="replyPeople" label="回复人" width="100" align="center"></el-table-column>
					        <el-table-column property="endTime" label="最后回复时间" width="160" align="center"></el-table-column>
					        <el-table-column label="操作" inline-template  align="center">
						      <template property="id">
						        <el-button size="small" @click="viewThis($index, row)">查看</el-button>
						        <el-button size="small" type="danger" @click="">删除</el-button>
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
	name: 'caser',
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
	          price: '',
	          order: '',
	          number: '',
	          money: '',
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
	            number: '30000',
	            price: '287.55',
	            money: '$12900',
	            order: 'C16121009-I',
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
	            number: '30000',
	            price: '287.55',
	            money: '$12900',
	            order: 'C16121009-I',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '未结束',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          		},
          		{
	            id: '003',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            number: '30000',
	            price: '287.55',
	            money: '$12900',
	            order: 'C16121009-I',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '未结束',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          		},
          		{
	            id: '004',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            number: '30000',
	            price: '287.55',
	            money: '$12900',
	            order: 'C16121009-I',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '未结束',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          		},
          		{
	            id: '005',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            number: '30000',
	            price: '287.55',
	            money: '$12900',
	            order: 'C16121009-I',
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
	            number: '30000',
	            price: '287.55',
	            money: '$12900',
	            order: 'C16121009-I',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '未结束',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          		},
          		{
	            id: '007',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            number: '30000',
	            price: '287.55',
	            money: '$12900',
	            order: 'C16121009-I',
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
	            number: '30000',
	            price: '287.55',
	            money: '$12900',
	            order: 'C16121009-I',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '未结束',
	            replyPeople: 'roy',
	            endTime: '2016-12-30 18:11'
          		},
          		{
	            id: '009',
	            title: 'LM2941GWRLQMLV（5962R9166704VYA）',
	            number: '30000',
	            price: '287.55',
	            money: '$12900',
	            order: 'C16121009-I',
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
	            number: '30000',
	            price: '287.55',
	            money: '$12900',
	            order: 'C16121009-I',
	            from: 'allen',
	            addTime: '2016-12-30 15:36',
	            to: 'roy',
	            status: '未结束',
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
}
</style>