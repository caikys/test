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
					<li>岗位管理</li>
					<li class="search">
						<input type="text" placeholder="请输入你想要搜索的内容">
						<img src="images/search.png" alt="">
					</li>
				</ul>
			</div>
			<div class="user-content">
				<div class="list-tab">
					<table class="table-inner">
						<thead>
							<tr>
								<th name="pstname">岗位名称</th>
								<th name="quename">题库名称</th>
								<th name="operation">操作</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>前端笔试</td>
								<td>前端题目</td>
								<td>
									<span>选择题库</span>
									<em>|</em>
									<span>修改</span></span>
									<em>|</em>
									<span class="delete" @click="getType">删除</span>
								</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="6">
									<button>批量删除</button>
									<button>新增</button>
								</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		</div>

		<!-- 点击任意处关闭 -->
		<div class="maskLayer" v-if="deletShow" @click="getType()"></div>
		<!-- 删除遮罩层 -->
		<div class="ques-delet-pop" v-if="deletShow"></div>
		<!-- 删除弹窗 -->
		<div class="tab-delete" v-if="deletShow">
			<p class="tips">
				<span>提示信息</span>
				<img src="images/del.png" alt="" v-if="deletShow" @click="getType()">
			</p>
			<p class="alert-delt">
				<img src="images/alert.png" alt="">
				<span>您确定要删除信息吗</span>
			</p>
			<p class="btn">
				<button>确定</button>
				<button v-if="deletShow" @click="getType()">取消</button>
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
					border-bottom: none;
				}
				.search{
					width: 210px;
					border:none;
					float:right;
					margin-right:27px;
					position: relative;
					input{
						width:210px;
						height:36px;
						border:none;
						background-color:#f3f3f3;
						margin-top:6px;
						outline:none
					}
					img{
						position: absolute;
						top:15px;
						right:18px;
					}
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
					tr{border:1px solid #e5e5e5}
					th{
						height:49px;
						background:#f7f7f7;
						text-align:center;
					}
					th[name="pstname"] {
					    width: 14%;
					}
					th[name="quename"] {
					    width: 66%;
					}
					th[name="operation"] {
					    width: 20%;
					}
					tbody{
						tr{border:1px solid #e9e9e9;}
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
								outline:none;
								margin-left:7px;
							}
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
	    name: 'position',
	    data() {
	        return {
	        	show: false,
	        	deletShow: false,
	        }
	    },
	    methods: {
	    	//选择弹窗状态
            pop (){
                if(this.show=true){
                    this.show=false;
                }
            },
			getType:function(){
	          if(this.deletShow==true){
	            this.deletShow=false;
	          }else{
	            this.deletShow=true
	          }
	        }
	    },
	    components: {
	    	  
	    },
	    computed: {
	        
	       
	    },
	}
</script>
</script>
