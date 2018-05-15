/**
 * tap组件
 * @description 
 * @author 何翠香
 * @date 2016/2/8
 * 
 * Props:
 * 
 * @param  taps 
 * 类型：Array
 * 是否必填：false
 * 默认值：[]
 * 
 * 
 */
<template>
    <div class="navbar">
        <ul class="nt-ul">
            <li v-for="tap in taps" class="nt-li">
                <img src="images/nav-icon1.png" alt="">
                <router-link :to="tap.url" exact>{{tap.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Navbar',
        props:{
            taps: {
                type:Array,
                default: []
            },
        }
    }


</script>

<style lang="sass" scoped>
    .navbar{
        width: 162px;
        height: 669px;
        padding-left: 6px;
        padding-top: 16px;
        border: 1px solid #e8e8e8;
        border-top: 3px solid #c1604d;
        background-color: #fff;
        float:left;
        ul{
            width: 100%;
            li{
                width: 146px;
                height: 45px;
                position: relative;
                margin-bottom: 9px;
                line-height:45px;
                text-align:center;
                color: #000;
                img{position: absolute
                ;top: 9px;left: 21px;}
                span{position: absolute
                ;top: 14px;left: 59px;}
                a{color:#000;display:inline-block;width:100%;height:100px;}
            }
            .first-nav{
                background-color: #fff0eb;
                border-shadow:0 0 10px #fff0eb;
            }
        }
    }
</style>