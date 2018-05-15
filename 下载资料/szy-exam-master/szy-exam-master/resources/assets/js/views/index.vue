<template>
    <div>
        <!-- 顶部 -->
        <my-header></my-header>
        <div class="mian">
            <!-- 子路由 -->
            <router-view></router-view>

        </div>
        
    </div>
</template>
<script>

    import {mapState} from 'vuex';
    import {mapMutations} from 'vuex';
    import MyHeader from '../components/public/header.vue';
    import Basic from '../views/basic.vue';


    export default{
        name:'Index',
        data () {
            return {
                msg: 'Hello! Here is index'
            }
        },
        //局部注册组件
        components: {
            MyHeader,
            Basic,
        }
    }
</script>

<style lang="sass" scoped>
    body{
        width: 100%;
        min-width: 1920px;
    }
    .mian{
        width: 1560px;
        min-height: 709px;
        background: #f3f3f3;
        padding-left: 360px;
        padding-top: 12px;
    }
</style>
