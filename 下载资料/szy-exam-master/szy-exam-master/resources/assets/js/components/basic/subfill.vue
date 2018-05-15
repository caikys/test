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
					<textarea type="text">在HTTP1.0中，状态码401的含义是什么</textarea>
				</div>
				<div class="answer-sheet">
					<p>
						<input type="text" placeholder="1:">
						<input type="text" placeholder="2:">
					</p>
					<p>
						<input type="text" placeholder="3:">
						<input type="text" placeholder="4:">
					</p>
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
	font-size:14px;
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
				label{
					margin-left:30px;
				}
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
		.ques{
			width:100%;
			min-height:158px;
			margin-bottom: 18px;
			label{width:72px;line-height:32px;}
			label,div{
				float:left;
			}
			div{width:793px;}
			.txt-ques{
				textarea{
					width:793px;
					line-height:33px;
					text-indent:20px;
					outline:none;
					min-height:158px;
					color:#000;
					font-size:14px;
					span{
						display:inline-block;
						width:77px;
						height:20px;
						text-align:center;
						border:0;
						color:#000;
						border-bottom:2px solid #000;

					}
				}
			} 
		}
		.answer-sheet{
			width:100%;
			margin-left:73px;
			p{
				height:78px;
				input{
					width:346px;
					height:25px;
					margin-top:43px;
					border:0;
					color:#000;
					border-bottom:$borderTow;
				}
				input:first-child{margin-right:94px;}
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