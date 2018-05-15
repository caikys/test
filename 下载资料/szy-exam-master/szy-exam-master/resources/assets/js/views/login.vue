<template>
    <div>
        <header>
            <div class="logo">
                <img src="images/logo.png" alt="">
            </div>
            <div class="right">
                <ul>
                    <li><a href="#">首页</a></li>
                    <li><a href="#">联系我们</a></li>
                    <li><a href="#">人才招聘信息</a></li>
                </ul>
            </div>
        </header>
        <div class="main" style="background: url(images/bg-1.png) no-repeat">
            <div class="user-box">
                <div class="userinner">
                    <form>
                
                        <p class="userlogin">用户登录</p>
                        <p v-if="isError" class="err-tip">用户名或密码错误</p>
                        <p class="user">
                            <label class="label">用户名:</label>
                            <input 
                            v-validate="'required|alpha_num'" 
                            :class="{'input': true, 'is-danger': errors.has('alpha_num') }" 
                            name="alpha_num" 
                            type="text" data-vv-as="用户名">
        <span v-show="errors.has('alpha_num')" class="help is-danger">{{ errors.first('alpha_num') }}</span>        
                        </p>
                        <p class="psd">
                            <label>密&nbsp;码:</label>
                            <input 
                            v-validate="'required|alpha_num'" 
                            :class="{'input': true, 'is-danger': errors.has('password') }" 
                            name="password" 
                            type="text" data-vv-as="密码">
        <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>        
                        </p>
                        <p class="rmb">
                            <input type="checkbox">
                            <label>记住用户密码</label>
                        </p>
                        <p class="btn-login">
                            <button>登录</button>
                            <a href="#">忘记密码？</a>
                        </p>
                        <p class="regs">
                            <button>立即免费注册</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        <div class="intr">
            <ul>
                <li>
                    <dl>
                        <dt><img src="images/listincon1.png" alt=""></dt>
                        <dd>过程</dd>
                    </dl>
                    <p>PC一站式的完成全部过程，全程清晰明了，答题方便</p>
                </li>
                <li>
                    <dl>
                        <dt><img src="images/listincon2.png" alt=""></dt>
                        <dd>题库</dd>
                    </dl>
                    <p>在线笔试题库可以自定义题型更灵活的系统</p>
                </li>
                <li>
                    <dl>
                        <dt><img src="images/listincon3.png" alt=""></dt>
                        <dd>客户端</dd>
                    </dl>
                    <p>客户端，可以在此完成试题题目，也可以在此答试题</p>
                </li>
                <li>
                    <dl>
                        <dt><img src="images/listincon4.png" alt=""></dt>
                        <dd>时间</dd>
                    </dl>
                    <p>时间就是生命。从这一刻开始，珍惜时间！</p>
                </li>
            </ul>
        </div>
        <footer class="bottom">
            <ul>
                <li><a href="">关于我们</a></li>
                <li><a href="">联系我们</a></li>
                <li><a href="">帮助中心</a></li>
                <li><a href="">网站声明</a></li>
                <li><a href="">友情链接</a></li>
                <li><a href="">©版权所有1999-2016年生之园网络科技有限公司&npsb;沪ICP备05014672号</a></li>
            </ul>
        </footer>
    </div>
</template>

<style lang="sass" scoped>
    body{
      width: 100%;
      min-width: 1920px;
      font-size:16px;
      font-family: "宋体";
    }

    header{
        width:1920px;height: 112px;
        .logo{float: left;}
        .right{float:right}
        .logo{width:354px;height:65px;margin-top: 23px;margin-left: 353px;}
        .right{
            width:680px;height:20px;margin-top: 54px;
            ul{
                width:680px;height:20px;
                li{
                    float:left;border-right: 2px solid #666666;
                    a{display: inline-block;padding-left: 26px;padding-right: 26px;color: #060606;}
                }
                li:last-child{border-right:none}
            }
        }
    }

    .main{
        width:1920px;height:538px;
        .user-box{
            width:342px;height:353px;margin-top:81px;margin-right:198px;padding:11px 11px;background:#cddfed;float:right;
            .userinner{
                width:273px;height:350px;background:#fff;border:2px solid #d7d7d7;padding-left:33px;padding-right:33px;
                p{
                    width:273px;
                    span{color:red;margin-left:48px;}
                }
                .userlogin{height:93px;line-height:93px;text-align:center;color:#319ff6;font-size:22px;font-weight: bold;}
                .user{margin-bottom:8px;}
                .user input,.psd input{width:216px;height:32px;border:1px solid #c9c9c9;}
                .rmb{
                    height:44px;position: relative;
                    input{position: absolute;top:13px;left:45px;}
                    label{position: absolute;top:16px;left:67px;}
                }
                .btn-login{
                    height:31px;line-height:31px;margin-bottom:46px;
                    button{width:77px;height:29px;border:1px solid #c5c5c5;border-radius: 5px;margin-left:48px;background:#efefef;cursor: pointer;outline:none}
                    a{color:#0a9bf2}
                }
                .regs{
                    height:41px;
                    button{width:285px;height:41px;background:#f8b62a;border:none;border-radius:5px;cursor: pointer;color:#fff;font-size:21px;font-weight:bold}
                }

            }
        }

    }
    .intr{
        width:1390px;height:148px;padding-left:530px;padding-top: 38px;
        ul{
            width:903px;height:110px;color:#717171;
            li{
                width:159px;height:110px;float:left;padding-left:33px;padding-right:33px;border-right:1px solid #e7e7e7;
                dl{
                    height:33px;width:137px;margin-bottom:17px;padding-left:21px;
                    dt,dd{float:left;}
                    dd{margin-left:13px;font-size:19px;line-height:38px;}
                }
                p{clear: both;width:158px;line-height:27px;font-size:12px;}
            }
            li:last-child{border-right:none}
        }
    }
    .bottom{
        width:1335px;height:148px;padding-left:580px;padding-top: 38px;
        ul{
            width:903px;height:16px;color:#949494;
            li{
                height:16px;float:left;border-right:2px dashed #e7e7e7;
                a{display:inline-block;padding-left:16px;padding-right:16px;color:#949494}
            }
            li:last-child{border-right:none;padding-right:none;}
        }
    }        

</style>

<script>

    import Vue from 'vue'

    export default{
        name:'login',
        data () {
            return {
                // 用户名表单验证出错的标志
                isNameError: false,
            }
        }
    }
</script>
