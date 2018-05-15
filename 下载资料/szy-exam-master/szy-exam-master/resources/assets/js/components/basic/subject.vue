<template>
    <div class="user-right">
        <!-- tap模块 -->
        <navtop :taps="taps"></navtop>
        <!-- 列表模块 -->
        <router-view></router-view>

    </div>
</template>
<style>
    .user-right{
        width: 1007px;
        min-height: 686px;
        float: left;
        margin-left: 20px;
        background-color: #fff;
        border: 1px solid #dedede;
        border-shadow:0 0 10px #dedede;
    }
    
</style>
<script>

    import {mapMutations} from 'vuex';
    import Navtop from '../basic/navtop.vue';

    export default{
        name: 'navTop',
        data(){
            return{
                taps:[
                    {name: '题目管理', url: '/basic/subject/submanage'},
                    {name: '新增选择题', url: '/basic/subject/subselect'},
                    {name: '新增填空题', url: '/basic/subject/subfill'},
                    {name: '新增编辑题', url: '/basic/subject/subedit'},
                    {name: '新增问答题', url: '/basic/subject/subask'},
                ],
            }
        },
        computed: {

        },
        components:{
            Navtop
        },
        mounted () {
            
        },
        methods: {
            
        }
    }
</script>