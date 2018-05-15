/**
 * 
 * 后台管理顶层组件
 * @description 
 * @author 何翠香
 * @date 2016/2/8
 * 
 */
<template>
    <div>
        <!-- tap模块 -->
        <navbar :taps="taps"></navbar>
        <!-- 列表模块 -->
        <router-view></router-view>

    </div>
</template>
<style>

</style>
<script>

    import {mapMutations} from 'vuex';
    import Navbar from '../components/basic/navbar.vue';

    export default{
        name: 'Basic',
        data(){
            return{
                title: '基础信息管理',
                taps:[
                    {name: '用户管理', url: '/basic/user'},
                    {name: '题库管理', url: '/basic/question'},
                    {name: '题目管理', url: '/basic/subject/submanage'},
                    {name: '岗位管理', url: '/basic/position'},
                ]
            }
        },
        computed: {

        },
        components:{
            Navbar
        },
        mounted () {
            
        },
        methods: {
            
        }
    }
</script>
