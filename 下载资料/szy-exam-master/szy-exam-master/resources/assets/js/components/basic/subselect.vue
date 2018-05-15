/**
 * 新增选择题组件
 * @description 
 * @author 何翠香
 * @date 2016/2/8
 * 
 * 
 * 
 */

<template>
    <div class="qus-content">
        <div class="chk">
			<ul>
				<li>
					<label>选择题类型:</label>
					<select>
						<option value="单选题">单选题</option>
						<option value="多选题">多选题</option>
					</select>
				</li>
				<li>
					<label>题库:</label>
					<select>
						<option value="前端笔试">前端笔试</option>
						<option value="后台笔试">后台笔试</option>
						<option value="ui笔试">ui笔试</option>
					</select>
				</li>
			</ul>
		</div>
		<div class="content-list">
			<div class="ques">
				<label>输入题目:</label>
				<div class="txt-ques">
					<textarea type="text">请输入题目内容</textarea>
				</div>
			</div>
			<div class="ques-add">
				<label>题目补充:</label>
				<div class="txt-add">
					<textarea type="text">请输入题目内容</textarea>
					<div class="img-btn">
						<div class="img"></div>
						<button>图片补充</button>
					</div>
				</div>
			</div>
					
			<div class="answer">
				<label>选择模块</label>
				<div class="txt-answer">
					<textarea>请输入答案</textarea>
					<div class="num">
						<input type="text" placeholder="请输入编号">
						<button class="yes">对</button>
						<button class="no">错</button>
						<button class="sure">确定</button>
					</div>
				</div>
				<div class="options">
					<div class="answera">
						<p>
							<label>A:</label>
							<span></span>
						</p>
						<p>哈回复回复卡萨发货发货快速发货</p>
					</div>
					<div class="answerb">
						<p>
							<em>A:</em>
							<span></span>
						</p>
						<p>哈回复回复卡萨发货发货快速发货</p>
					</div>
					<div class="answerc">
						<p>
							<em>A:</em>
							<span></span>
						</p>
						<p>哈回复回复卡萨发货发货快速发货</p>
					</div>
					<div class="answerd">
						<p>
							<em>A:</em>
							<span></span>
						</p>
						<p>哈回复回复卡萨发货发货快速发货</p>
					</div>
				</div>
			</div>	
		</div>
    </div>
</template>
<style lang="sass" scoped>
	$border: 1px solid #dddddd;
	$borderTow: 2px solid #dddddd;
	.qus-content{
	width:911px;
	margin-left: 26px;
	textarea,input,select,button{
		outline:none;
	}
	textarea{
		resize : none;
		color:#cacaca;
	}
	.chk{
		width:911px;
		height:35px;
		margin-top: 10px;
		margin-bottom: 8px;
		ul{
			width:911px;
			height:35px;
			li{
				float: left;
				margin-right:34px;
				select{
					width:364px;
					height:33px;
					border:1px solid #cacaca;
					background-color:#fbfbfb;
				}
			}
		}
	}
	.content-list{
		width:911px;
		.ques,.ques-add,.answer{
			width:100%;
			margin-bottom: 18px;
			label{width:72px;text-indent:12px;line-height:21px;}
			label,div{
				float:left;
			}
			div{width:793px;}
			
		}
		.ques{
			min-height:349px;
			.txt-ques{
				textarea{
					width:793px;
					outline:none;
					min-height:349px;
				}
			} 
		}
		.ques-add{
			min-height:202px;
			.txt-add{
				border:$border;
				textarea,.img-btn{
					float:left;
				}
				textarea{
					width:555px;
					min-height:199px;
				}
				.img-btn{
					width:232px;
					.img,button{
						margin-bottom:3px;
						margin-left:3px;
					}
					.img{
						height:150px;
					}
					button{
						width:223px;
						height:40px;
						background-color:#dd4e2c;
						border:none;
						color:#fff;
						font-size:24px;
					}
				}
			}
		}
		.answer{

			.txt-answer{
				textarea,.num{
					float:left;
				}
				.num{
					width:84px;height:77px;
					padding-left: 2px;
					padding-top: 4px;
					border:$border;
					input,button{
						margin-bottom:2px;
					}
					input{
						width:80px;height:22px;
						border:$borderTow;
					}
					.yes,.no{
						width:37px;
						height:22px;
						border:$border;

					}
					.yes{
						background-color:#3997cb;
						margin-right:2px;
					}
					.no{background-color:#dcdde1;}
					.sure{
						width:82px;height:21px;
						border:$borderTow;
					}
				}
				textarea{
					min-height:81px;
					width:697px;
				}
			}
			.options{
				margin-left:72px;
				.answera{
					width:793px;height:80px;
					border:$border;
					margin-top: 12px;
					p:first-child{
						background-color:#f2f2f2;
						border-bottom: $borderTow;
						height:30px;
						label{width:39px;text-align:center;line-height:30px;}
						span{display: inline-block;margin-top: 5px;width:22px;height:22px;background:#309bcf;}
					}
					p:last-child{
						text-indent:3px;
					}
				}
			}
		}
	}
}
</style>
<script>
	export default {
	    name: 'Subselect',
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