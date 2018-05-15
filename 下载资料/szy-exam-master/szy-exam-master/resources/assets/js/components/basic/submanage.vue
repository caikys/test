/**
 *
 * 用户管理
 * @description
 * @author 何翠香
 * @date 2017/2/7
 *
 */

<template>
	<div>
		<div class="user-content">
			<div class="seek">
				<ul class="seek-ul">
					<li>
						<select>
							<option value="岗位">题型选择</option>
							<option value="前端笔试">前端笔试</option>
							<option value="后台笔试">后台笔试</option>
							<option value="ui笔试">ui笔试</option>
						</select>
					</li>
					<li>
						<select>
							<option value="是否完成笔试">题库选择</option>
							<option value="是">前端开发题目</option>
							<option value="否">后端开发题目</option>
							<option value="否">ui设计题目</option>
						</select>
					</li>
					<li class="test-time">
						<span></span>
						<img src="images/times.png" alt="">
					</li>
					<li class="refer">
						<button>查询</button>
					</li>
					<li class="search">
						<input type="text" placeholder="输入关键字进行搜索">
					</li>
					<li class="refer">
						<button>搜索</button>
					</li>
				</ul>
			</div>
			<div class="list-tab">
				<table class="table-inner">
					<thead>
						<tr>
							<th name="username">题目</th>
							<th name="postbox">题型</th>
							<th name="position">所属题库</th>
							<th name="bit">创建时间</th>
							<th name="startime">修改时间</th>
							<th name="operation">操作</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>前端笔试</td>
							<td>单选题</td>
							<td>前端开发题目</td>
							<td>1:30</td>
							<td>10:52</td>
							<td>
								<span class="over" @click="getType('editShow')">修改</span>
								<em>|</em>
								<span class="look" @click="getType('deletShow')">删除</span>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="7"></td>
						</tr>
					</tfoot>
				</table>
			</div>
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
							<label>题目:</label>
							<input type="text" placeholder="前端">
						</td>
					</tr>
					<tr>
						<td>
							<label>题型:</label>
							<input type="text" placeholder="1">
						</td>
					</tr>
					<tr>
						<td>
							<label class="indx-tow">所属题库:</label>
							<input type="text" placeholder="前端笔试">
						</td>
					</tr>
					<tr>
						<td>
							<label class="indx-three">创建时间:</label>
							<input type="text" placeholder="1:30">
						</td>
					</tr>
					<tr>
						<td>
							<label>修改时间:</label>
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
				<button>确定</button>
				<button v-if="deletShow" @click="getType('deletShow')">取消</button>
			</p>
		</div>
	</div>
</template>

<style lang="sass" scoped>
	.user-content{
		width: 959px;
		height: 612px;
		margin-top: 9px;
		margin-left: 23px;
		.seek{
				width: 959px;
				height: 37px;
				.seek-ul{
					width: 959px;
					height: 37px;
					li{
						height:37px;
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
				}
			}
		.list-tab{
			width:961px;
			.table-inner{
				width:956px;font-size:13px;
				thead{border:1px solid #e5e5e5}
				th{
					height:49px;
					background:#f7f7f7;
					line-height:49px;
					text-align:center;
				}
				th[name="username"] {
				    width: 13%;
				}
				th[name="postbox"] {
				    width: 16%;
				}
				th[name="position"] {
				    width: 12%;
				}
				th[name="bit"] {
				    width: 16%;
				}
				th[name="startime"] {
				    width: 13%;
				}
				th[name="overtime"] {
				    width: 16%;
				}
				th[name="operation"] {
				    width: 14%;
				}
				tbody{
					tr{
						border:1px solid #e9e9e9;}
					td{
						height:45px;
						line-height:45px;
						text-align:center;
						span{cursor:pointer}
						.over{
							color:#3a6c9d;
						}
						.look{
							color:#b05735;
						}
						.img{
							vertical-align: middle;
						}
					}
				}
			}
			
		}
	}
	.maskLayer{
		width:1920px;
		height:940px;
		position: absolute;
		top:0;
		left:0;
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
	.tab-new{
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
			border:1px solid #b7b7b7;width:100%;border-spacing:0;height:417px;
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
						border:none;text-align:center;font-size:17px;
						text-indent: 14px;border:1px solid #bebebe;
						span{
							color:#b50a17;
						}
						.indx-tow{
							margin-left:34px;
						}
						.indx-three{
							margin-left:17px;
						}
						input{width:325px;height:33px;}
					}
					td:first-child{
						width:91px;
						height:54px;
						border: 1px solid #dcdcdc;
						line-height:54px;
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
	    name: 'Submanage',
	    data() {
	        return {
	        	show: false,
	        	deletShow: false,
	        	editShow: false,
	        }
	    },
	    methods: {
	    	//选择弹窗状态
			getType: function(val) {
				if(val=='deletShow') {
					this.deletShow=!this.deletShow;
				}
				else {
					this.editShow=!this.editShow;
				}
				
			}
	    },
	    components: {
	    	  
	    },
	    computed: {
	        
	       
	    },
	}
</script>
