/**
 * 顶部模块左边按钮组件
 * @description 侧边栏按钮
 * @author 苏锐佳
 * @date 2017/02/08
 * 
 * Props:
 * 
 * @param  item 
 * 类型：Object
 * 是否必填：false
 * 默认值：null
 * 描述：单个列表项
 * 例子：
 * 
 */
<template>
    <div @click="clickEvent()" class="left-btn">
        <img :src="$img('slider.png')" alt="">
    </div>
</template>

<script>
  export default {
    name:'HeadLeftSlider',
    methods: {
        clickEvent () {
            this.$emit('clickEvent', 'slider')
        }
    }
  }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
    img {
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        width: pxToRem(20);
        height: pxToRem(20);
        margin: auto;
    }
</style>