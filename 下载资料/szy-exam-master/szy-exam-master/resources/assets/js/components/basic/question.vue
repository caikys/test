/**
 *
 * 用户管理
 * @description
 * @author 何翠香
 * @date 2017/2/8
 *
 */

<template>
<div>
	<div class="user-right">
		<div class="user-tag">
			<ul>
				<li>题库管理</li>
			</ul>
		</div>
		<div class="user-content">
			<div class="seek">
				<ul class="seek-ul">
					<li class="test-time">
						<span></span>
						<img src="images/times.png" alt="">
					</li>
					<li class="search">
						<input type="text" placeholder="输入关键字进行搜索">
					</li>
					<li class="refer">
						<button>搜索</button>
					</li>
					<li class="new-add">
					<button>新增</button>
					</li>
				</ul>
			</div>
			<div class="list-tab">
				<table class="table-inner">
					<thead>
						<tr>
							<th name="qusname">题目名称</th>
							<th name="queicon">题库图标</th>
							<th name="intr">说明</th>
							<th name="alltime">总时间</th>
							<th name="newtime">创建时间</th>
							<th name="operation">操作</th>
						</tr>
					</thead>
					
						<tbody>
							<tr v-for="item in list">
								<td>{{item.qusname}}</td>
								<td>{{item.queicon}}</td>
								<td>{{item.intr}}</td>
								<td>{{item.alltime}}</td>
								<td>{{item.newtime}}</td>
								<td>

							<!-- 查看题型模块 -->
									<span @click="getType('typeShow')">查看题型</span>

									<em>|</em>
									<span @click="getType('editShow')">新增题目</span>
									<em>|</em>
									<span @click="getType('editShow')">修改</span>
									<em>|</em>
									<span class="delete" @click="getType('deletShow')">删除</span>
								</td>
							</tr>
						</tbody>
					
				<tfoot>
					<tr>
						<td colspan="6">
							<button>批量删除</button>
						</td>
					</tr>
				</tfoot>
			</table>

		</div>
	</div>
</div>

<!-- 点击任意处关闭 -->
<div class="maskLayer" v-if="typeShow" @click="getType('typeShow')"></div>
<!-- 查看题型遮罩层 -->
<div class="ques-type-pop" v-if="typeShow"></div>
<!-- 查看题型弹窗 -->
<div class="tab-type" v-if="typeShow">
<table class="tab">
	<thead>
		<tr>
			<th colspan="6">总共题型6类</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>单选题</td>
			<td>单选题总共有<span>20题</span></td>
		</tr>
		<tr>
			<td>多选题</td>
			<td>多选题总共有<span>10题</span></td>
		</tr>
		<tr>
			<td>填空题</td>
			<td>多选题总共有<span>5题</span></td>
		</tr>
		<tr>
			<td>编程题</td>
			<td>编程题总共有<span>1题</span></td>
		</tr>
		<tr>
			<td>问答题</td>
			<td>问答总共有<span>1题</span></td>
		</tr>
	</tbody>
</table>
</div>


<!-- 点击任意处关闭 -->
<div class="maskLayer" v-if="editShow" @click="getType('editShow')"></div>
<!-- 新增题库遮罩层 -->
<div class="ques-type-pop" v-if="editShow"></div>
<!-- 新增题库弹窗 -->
<div class="tab-new" v-if="editShow">
<table class="tab">
	<thead>
		<tr>
			<th>新增题库</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<label>题目名称:</label>
				<input type="text" placeholder="前端">
			</td>
		</tr>
		<tr>
			<td>
				<label>题库图标:</label>
				<input type="text" placeholder="1">
			</td>
		</tr>
		<tr>
			<td>
				<label class="indx-tow">说明:</label>
				<input type="text" placeholder="前端笔试">
			</td>
		</tr>
		<tr>
			<td>
				<label class="indx-three">总时间:</label>
				<input type="text" placeholder="1:30">
			</td>
		</tr>
		<tr>
			<td>
				<label>创建时间:</label>
				<input type="text" placeholder="10:52">
			</td>
		</tr>
	</tbody>
	<tfoot>
		<td>
			<button class="save">保存</button>
			<button class="cancle" v-if="editShow" @click="getType('editShow')">取消</button>
		</td>
		
	</tfoot>
</table>
</div>

<!-- 点击任意处关闭 -->
<div class="maskLayer" v-if="editShow" @click="getType('editShow')"></div>
<!-- 修改遮罩层 -->
<div class="ques-type-pop" v-if="editShow"></div>
<!-- 修改弹窗 -->
<div class="tab-new" v-if="editShow">
<table class="tab">
	<thead>
		<tr>
			<th>修改题型</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<label>题目名称:</label>
				<input type="text" placeholder="前端">
			</td>
		</tr>
		<tr>
			<td>
				<label>题库图标:</label>
				<input type="text" placeholder="1">
			</td>
		</tr>
		<tr>
			<td>
				<label class="indx-tow">说明:</label>
				<input type="text" placeholder="前端笔试">
			</td>
		</tr>
		<tr>
			<td>
				<label class="indx-three">总时间:</label>
				<input type="text" placeholder="1:30">
			</td>
		</tr>
		<tr>
			<td>
				<label>创建时间:</label>
				<input type="text" placeholder="10:52">
			</td>
		</tr>
	</tbody>
	<tfoot>
		<td>
			<button class="save">保存</button>
			<button class="cancle" v-if="editShow" @click="getType('editShow')">取消</button>
		</td>
		
	</tfoot>
</table>
</div>


<!-- 点击任意处关闭 -->
<div class="maskLayer" v-if="deletShow" @click="getType('deletShow')"></div>
<!-- 删除遮罩层 -->
<div class="ques-delet-pop" v-if="deletShow"></div>
<!-- 删除弹窗 -->
<div class="tab-delete" v-if="deletShow">
<p class="tips">
	<span>提示信息</span>
	<img src="images/del.png" alt="" v-if="deletShow" @click="getType('deletShow')">
</p>
<p class="alert-delt">
	<img src="images/alert.png" alt="">
	<span>您确定要删除信息吗</span>
</p>
<p class="btn">
	<button v-on:click="remove($index)">确定</button>
	<button v-if="deletShow" @click="getType('deletShow')">取消</button>
</p>
</div>
</div>
	

	
</template>

<style lang="sass" scoped>
	.user-right{
		width: 1007px;
		height: 686px;
		float: left;
		margin-left: 20px;
		background-color: #fff;
		border: 1px solid #dedede;
		border-shadow:0 0 10px #dedede;
		.user-tag{
			width: 100%;
			height: 50px;
			ul{
				width: 100%;
				height: 50px;
				border-bottom: 1px solid #dedede; 
				li{
					width: 100px;
					height: 45px;
					float:left;
					text-align: center;
					line-height: 45px;
					border-top: 3px solid #c1604d;
					border-right: 1px solid #dedede; 
					border-bottom: 2px solid #fff;
				}
			}
		}
		.user-content{
			width: 959px;
			height: 612px;
			margin-left: 23px;
			margin-top: 9px;
			.seek{
				width: 100%;
				height: 37px;
				.seek-ul{
					width: 955px;;
					height: 37px;
					li{
						height:25px;
						float: left;
						margin-left:8px;
						select{
							width:119px;
							height:25px;
							border: 1px solid #bbbbbb;
							outline:none;

						}
					}
					li:first-child{margin-left:0;}
					.test-time{
						position: relative;
						width:119px;
						height:25px;
						border: 1px solid #bbbbbb;
						span,img{
							display: inline-block;
							position: absolute;
						}
						span{
							top:8px;
							left:0;
						}
						img{
							top:2px;
							right:4px;
						}
					}
					.refer{
						width:56px;
						height:25px;
						border: 1px solid #bbbbbb;
						button{
							width:56px;
							height:25px;
							background-color:#fff;
							border:none;
							outline:none;
						}
					}
					.search{
						input{
							width:188px;
							height:22px;
							border:none;
							border: 1px solid #bbbbbb;
							outline:none;
						}
					}
					.new-add{
						width:56px;
						height:25px;
						float:right;
						button{
							width:56px;
							height:25px;
							background-color:#de4e2c;
							border:none;
							outline:none;
						}
					}
				}
			}
			.list-tab{
				width:956px;
				height:572px;
				.table-inner{
					width:956px;font-size:13px;
					thead{border:1px solid #e5e5e5}
					th{
						height:49px;
						background:#f7f7f7;
						text-align:center;
					}
					th[name="qusname"] {
					    width: 18%;
					}
					th[name="queicon"] {
					    width: 15%;
					}
					th[name="intr"] {
					    width: 13%;
					}
					th[name="alltime"] {
					    width: 15%;
					}
					th[name="newtime"] {
					    width: 13%;
					}
					th[name="operation"] {
					    width: 26%;
					}
					tbody{
						tr{border:1px solid #e9e9e9}
						td{
							height:45px;
							line-height:45px;
							text-align:center;
							span{
								color:#3a6c9d;
								cursor:pointer
							}
							.delete{
								color:#b05735
							}
						}
					}
					tfoot{
						background-color:#f7f7f7;
						td{
							height:52px;
							button{
								width:115px;
								height:37px;
								background-color:#dddddd;
								border:none;
								outline:none
							}
						}
					}
				}
				
			}
		}
	}
	.ques-type-pop{
		width: 541px;
		height: 446px;
		position: fixed;
		top: 45.5%;
		left: 51%;
		margin-top:-223px;
		margin-left:-270px;
		background: #c9c7c7;
		padding:14px 19px 20px 14px;
		opacity: 0.6;
	}
	.maskLayer{
		width:1920px;
		height:940px;
		position: absolute;
		top:0;
		left:0;
	}
	.tab-type,.tab-new{
		width:511px;
		height:417px;
		position: fixed;
		top: 46.8%;
		left: 52%;
		margin-top:-208px;
		margin-left:-255px;
		opacity:1;
		z-index: 20px;
		.tab{
			width:100%;border-spacing:0;height:417px;
			thead{
				width:100%;
				height:78px;
				text-indent: 20px;
				background:#f3f3f3;
				line-height: 78px;
				th{
					color: #0fa9dd;
					font-size: 21px;
					font-weight: bold;
					text-align:left;
					border:1px solid #bebebe;
				}
				
			}
			tbody{
				width:100%;background-color: #fff;
				tr{
					height:54px;
					td{
						text-indent: 14px;border:1px solid #bebebe;
						span{
							color:#b50a17;
						}
					}
					td:first-child{
						width:91px;
						height:54px;
						border: 1px solid #dcdcdc;
						line-height:54px;
					}
				}
			}
		}

	}
	.tab-new{
		.tab{
			border:1px solid #b7b7b7;
			tbody{
				tr{
					td{
						border:none;text-align:center;font-size:17px;
						.indx-tow{
							margin-left:34px;
						}
						.indx-three{
							margin-left:17px;
						}
						input{width:325px;height:33px;}
					}
					td:first-child{
						border: none;
					}
				}
				
			}
			tfoot{
				td{height: 68px;}
				border-top:1px solid #c9c9c9;
				background:#fff;
				button{
					width:73px;
					height:24px;
					float:left;
				}
				.save{
					margin-left:288px;
					margin-right:6px;
					background:#e0492e;
					color:#000;
					border:1px solid #ce8572;
				}
				.cancle{
					background:#dadada;
					color:#fff;
					border:1px solid #d0d0d0;
				}
			}
		}
	}
	.ques-delet-pop{
		width:326px;
		height:186px;
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top:-163px;
		margin-left:-84px;
		background: #c9c7c7;
		padding:14px 19px 20px 14px;
		opacity: 0.6;
	}
	.tab-delete{
		width:289px;
		height:152px;
		position: fixed;
		top: 51.5%;
		left: 51.2%;
		margin-top:-144px;
		margin-left:-76px;
		z-index:20px;
		background:#fff;
		.tips{
			width:100%;
			height:28px;
			border-bottom:1px solid #ededed;
			line-height:28px;
			span{
				margin-left:19px;
				margin-right:192px
			}
			img{cursor:pointer}
		}
		.alert-delt{
			width:100%;
			height:80px;
			border-bottom:1px solid #ededed;
			line-height:80px;
			img{
				vertical-align:middle;
				margin-left:19px;
				margin-right:6px;
			}
		}
		.btn{
			width:100%;
			height:41px;
			line-height:41px;
			button{width:44px;height:23px;outline:none;border:none}
			button:first-child{
				margin-left:164px;
				margin-right:13px;
				background:#248dbd;
			}
			button:last-child{
				background:#cccdd2;
			}
		}


	}

	
</style>

<script>
	import {mapState} from 'vuex';
    import {mapMutations} from 'vuex';

	export default {
	    name: 'User',
	    data() {
	        return {
	        	show: false,
	        	typeShow: false,
	        	editShow: false,
	        	deletShow: false,
	        	list: [
	        		{
	        			qusname: '前端笔试',
		        		queicon: '-',
		        		intr: '前端开发题目',
		        		alltime: '1:30',
		        		newtime: '10:30'
	        		},{
	        			qusname: '后端笔试',
		        		queicon: '-',
		        		intr: '前端开发题目',
		        		alltime: '1:30',
		        		newtime: '10:30'
	        		},{
	        			qusname: 'UI笔试',
		        		queicon: '-',
		        		intr: '前端开发题目',
		        		alltime: '1:30',
		        		newtime: '10:30'
	        		}
	        	]
	        	
	        }
	    },
	    methods: {
	    	//选择弹窗状态
			getType: function(val) {
				if(val=='typeShow') {
					this.typeShow=!this.typeShow;
				}
				else if(val=='editShow') {
					this.editShow=!this.editShow;
				}
				else {
					this.deletShow=!this.deletShow;
				}
			},
			remove: function (index) {
				this.list.splice(index,1);
				this.deletShow = false;
			}
	    },
	    components: {
	    	  
	    },
	    computed: {
	        
	       
	    },
	}
</script>
</script>
