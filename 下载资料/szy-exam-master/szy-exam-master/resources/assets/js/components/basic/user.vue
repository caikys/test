/**
 *
 * 用户管理
 * @description
 * @author 何翠香
 * @date 2017/2/7
 *
 */

<template>
	<div class="user-right">
		<div class="user-tag">
			<ul>
				<li>用户管理</li>
			</ul>
		</div>
		<div class="user-content">
			<div class="seek">
				<ul class="seek-ul">
					<li>
						<select>
							<option value="岗位">岗位</option>
							<option value="前端笔试">前端笔试</option>
							<option value="后台笔试">后台笔试</option>
							<option value="ui笔试">ui笔试</option>
						</select>
					</li>
					<li>
						<select>
							<option value="是否完成笔试">是否完成笔试</option>
							<option value="是">是</option>
							<option value="否">否</option>
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
							<th name="username">姓名</th>
							<th name="postbox">邮箱</th>
							<th name="position">岗位</th>
							<th name="bit">是否完成笔试</th>
							<th name="startime">笔试开始时间</th>
							<th name="overtime">笔试完成时间</th>
							<th name="operation">操作</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>王宝强</td>
							<td>455024545@qq.com</td>
							<td>后台开发</td>
							<td><img src="images/finish.png" alt="" class="img"></td>
							<td>10:30</td>
							<td>11:35</td>
							<td>
								<span class="over">结束笔试</span>
								<em>|</em>
								<span class="look">查看</span>
							</td>
						</tr>
						<tr>
							<td>王宝强</td>
							<td>455024545@qq.com</td>
							<td>后台开发</td>
							<td><img src="images/finish.png" alt="" class="img"></td>
							<td>10:30</td>
							<td>11:35</td>
							<td>
								<span class="over">结束笔试</span>
								<em>|</em>
								<span class="look">查看</span>
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
					width: 100%;
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
	}
</style>

<script>
	export default {
	    name: 'User',
	    data() {
	        return {

	        }
	    },
	    components: {
	      
	    },
	    computed: {
	        
	       
	    },
	}
</script>
</script>
