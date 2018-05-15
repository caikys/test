/**
 * 题目管理导航组件
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
    <div class="navtop">
        <ul class="nt-ul">
            <li v-for="tap in taps" class="nt-li" :class="{ 'class-border': border }">
                <router-link :to="tap.url" exact>{{tap.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name:'Navtop',
        props:{
            taps: {
                type:Array,
                default: []
            },
        }
  }


</script>

<style lang="sass" scoped>
    .navtop{
        width: 1006px;
        height: 50px;
        background-color:#fff;
        ul{
            width: 100%;
            height:50px;
            border-bottom: 1px solid #dedede;
            li{
                width: 100px;
                height: 49px;
                float:left;
                position: relative;
                margin-bottom: 9px;
                line-height:50px;
                text-align:center;
                color: #000;
                float:left;
                border-right:1px solid #dedede;
                border-bottom:1px solid #dedede;
                img{position: absolute
                ;top: 9px;left: 21px;}
                span{position: absolute
                ;top: 14px;left: 59px;}
                a{color:#000;display:inline-block;width:100%;height:50px;}
            }
            li:first-child{height:47px;border-top:3px solid #cc614f;border-bottom:none;

            }
            .first-nav{
                background-color: #fff0eb;
                border-shadow:0 0 10px #fff0eb;
            }
        }
    }
</style>