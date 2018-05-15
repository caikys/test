<template>
    <div>
        <header>
            <div class="logo">
                <img src="images/logo.png" alt="">
            </div>
            <div class="right">
                <ul>
                    <li>已有账号,<a href="#">马上登录</a></li>
                    <li><a href="#">返回首页</a></li>
                </ul>
            </div>
        </header>
        <div class="main">
            <div class="main-inner">
                <div class="regs">注册</div>
                <form>
                    <p class="txt-three">
                        <label>用户名:</label>
                        <input 
                        type="text" placeholder="请输入你的姓名" 
                        name="username" 
                        v-validate="'required|between:{6},{20}'"
                        :class="{'input': true, 'is-danger': errors.has('username') }"
                        data-vv-as="用户名">
                        <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
                    </p>
                    <p class="txt-four">
                        <label>真实姓名:</label>
                        <input 
                        type="text" 
                        placeholder="请输入你的姓名" 
                        name="name"
                        v-validate="'required'"
                        :class="{'input': true, 'is-danger': errors.has('name') }"
                        data-vv-as="真实姓名">
                        <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                    </p>
                    <p>
                        <label>邮箱:</label>
                        <input 
                        type="email" 
                        placeholder="请输入你的邮箱" 
                        v-validate="'required|email'" 
                        :class="{'input': true, 'is-danger': errors.has('email') }" 
                        name="email"
                        data-vv-as="邮箱">
                        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                    </p>
                    <p>
                        <label>岗位:</label>
                        <select>
                            <option value="前端开发">前端开发</option>
                            <option value="后端开发">后端开发</option>
                        </select>
                    </p>
                    <p>
                        <label>性别:</label>
                        <select>
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>
                    </p>
                    <p>
                        <label>密码:</label>
                        <input type="password" placeholder="请输入密码" name='password' v-validate="'required|min:{6}'" :class="{'input': true, 'is-danger': errors.has('password') }"
                        data-vv-as="密码">
                        <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                    </p>
                    <p class="txt-four">
                        <label>确定密码:</label>
                        <input 
                        type="password" 
                        placeholder="确定输入密码" 
                        name='password_confirmation' 
                        v-validate="'required|confirmed:password'"
                        :class="{'input': true, 'is-danger': errors.has('password_confirmation') }"
                        data-vv-as="确认密码">
                        <span v-show="errors.has('password_confirmation')" class="help is-danger">{{ errors.first('password_confirmation') }}</span>
                    </p>
                    <div class="validate">
                        <div class="validate-inner" style="background: url(images/j.png) no-repeat">
                            <img src="images/f.png" alt="" class="lock">
                            <img src="images/g.png" alt="" class="slider">
                            <img src="images/h.png" alt="" class="puzzle">
                        </div>
                    </div>
                    <p class="rmg">
                        <input type="checkbox">
                        <label>我已经阅读并接受<a href="">版权声明</a>和<a href="">隐私保护</a>条款</label>
                    </p>
                    <p class="immediate-regs">
                        <a @click="loginMethods" class="btn">登录</a>
                    </p>
                </form>
            </div>
        </div>
        
    </div>
</template>

<script>

    import {mapState} from 'vuex';
    import {mapMutations} from 'vuex';

    export default{
        name:'register',
        data () {
            return {
                user: {
                    username: '',
                    password: '',
                }
            }
        },
        
        //局部注册组件
        components: {

        },
        mounted () {

        },
        methods: {
            // register () {

            //     axios.post('reg',this.user).then((response)=>{
            //         console.log(333);
            //     }).catch(function (error) {
                    
            //     });
                
            // }
            loginMethods:function () {
                var self = this;
                /**
                 * 验证目标表单元素。
                 * true:验证所有
                 */
                self.$validate(true,function () {
                    /*如果所有条件都是false*/
                    if(!self.$validatorMethod.invalid){
                        alert("注册成功");
                    }
                })
            }
        },
        computed:{
            
        }
    }
</script>

<style lang="sass" scoped>
    body{
      width: 100%;
      min-width: 1920px;
      font-size:16px;
    }
    header{
        width:1199px;height: 76px;margin: 0 auto;margin-top: 25px;
        .logo{float: left;}
        .right{float:right}
        .logo{width:354px;height:65px;}
        .right{
            width:204px;height:20px;margin-top: 22px;
            ul{
                width:680px;height:20px;
                li{
                    float:left;border-right: 2px solid #666666;
                    a{display: inline-block;padding-left: 9px;padding-right: 9px;color: #f0ad2c;}
                }
                li:last-child{border-right:none}
            }
        }
    }
    .main{
        width:1199px;margin: 0 auto;border: 2px solid #dedede;
        .main-inner{
            width:100%;
            .regs{width:682px;height:97px;font-size:22px;line-height:97px;margin-left:177px;font-weight:bold}
            form{
                margin:0 auto;width:545px;color:#505050;font-size:14px;
                p{
                    margin-bottom:16px;width:545px;text-indent:30px;
                    input,select{width:471px;height:46px;border:1px solid #a0a0a0;}
                    select{
                        color:#aaa8a8;
                    }
                    span{margin-left:72px;margin-top:10px;color:red}
                }
                .txt-three{
                    text-indent: 16px;
                }
                .txt-four{
                    text-indent: 0;
                }
                .rmg{
                    position: relative;height:16px;
                    input{width:16px;height:16px;position: absolute;top:0px;left:65px;z-index: 2}
                    label{
                        height:16px;position: absolute;top:3px;left:55px;line-height:16px;
                        font-size:9px;
                        a{color:#f0ad2c;}
                    }
                }
                .validate{
                    height:145px;
                    .validate-inner{
                        margin:0 auto;width:285px;height:141px;position: relative;
                        img{position: absolute;}
                        .puzzle{top:37px;left:14px;}
                        .slider{top:115px;left:14px;}
                        .lock{bottom:0px;right:0px;}

                    }

                }
                .immediate-regs{
                    height:41px;width:545px;
                    .btn{display:inline-block;width:473px;height:41px;background:#f8b62a;border:none;border-radius:5px;color:#fff;font-size:21px;font-weight:bold;float:right;}
                
                }

            }
        }
    }
</style>
