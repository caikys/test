<template>
	<div class="datas">
		<div class="crumbs">
	  	  	<el-breadcrumb separator="/">
			  	<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>订单</el-breadcrumb-item>
		  	</el-breadcrumb>
  	  	</div>
  	  	<div class="datas-wrap">
  	  		<h3 class="title-wrap">案例讨论</h3>
			<div class="datas-main">
				<h3>将Excel表格导入数据库</h3>
				<div class="datas-upload">
					<el-upload action="//jsonplaceholder.typicode.com/posts/" type="drag" :multiple="true" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="handleSuccess" :on-error="handleError" :default-file-list="fileList">
					  <i class="el-icon-upload"></i>
					  <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
					  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>
				</div>
				<div class="upload-warn">
					<p>使用说明：</p>
					<ol>
						<li>
							请严格按照Part 、Mfg 、Description、 MPQ 、MOQ 、L/T、 Stock、 Price（共8列）的顺序制作Excel 。<span title="点击查看">示例</span>
						</li> 
						<li>数据放在文件的sheet1表中。</li> 
						<li>保留表头，第二行起为数据。</li> 
						<li>某行数据格式存在问题，则该行即该行之后的数据不会被导入数据库，请根据提示修改该行数据格式并重新导入数据。</li> 
						<li>导入数据操作会将当前用户之前所有导入数据清空！</li>
					</ol>
				</div>
			</div>
  	  	</div>
	</div>
</template>
<script>
export default{
	name: 'datas'
}	
</script>
<style lang="less">
@import '../styles/public.less';
.datas{
	background-color: @white;
	padding-bottom: 30px;
	.datas-wrap{
		border-left: solid 1px @borderColor;
		border-right: solid 1px @borderColor;
		border-bottom: solid 1px @borderColor;
		margin: 15px;
		border-top-left-radius: 4px;
    	border-top-right-radius: 4px;
		.title-wrap{
			border-left: none;
			border-right: none;
		}
		.datas-main{
			padding: 50px 0;
			h3{
				text-align: center;
			}
			.datas-upload{
				display: -ms-flex;
				display: flex;
				ms-flex-pack: center;
    			justify-content: center;
    			-ms-flex-align: center;
    			align-items: center;
				.el-upload{
					margin-top: 50px;
				}
			}
			.upload-warn{
				width: 50%;
			    margin: 60px auto;
			    padding: 30px;
			    border: 1px solid #f90;
			    border-radius: 4px;
			    p{
			    	color: #f90;
    				font-size: 16px;
    				margin-bottom: 20px;
			    }
			    ol li{
			    	font-size: 14px;
				    padding: 10px 0;
				    list-style: decimal!important;
			    }
			}
		}
	}
}
</style>