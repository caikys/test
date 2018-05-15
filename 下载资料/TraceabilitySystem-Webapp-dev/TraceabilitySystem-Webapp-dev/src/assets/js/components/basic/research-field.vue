/**
 * 研究领域组件
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
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
    <span>
      {{item.table_type | table_name}}
    </span>
</template>

<script>
  export default {
    name:'ResearchField',
    props:{
        item: {
            type: Object,
            default () {
                return null
            }
        }
    },
    filters : {
        table_name (value) {
            if(value == 'fertilize'){
                return '施肥';
            }else if(value == 'spray') {
                return '病虫害';
            }else if(value == 'detect') {
                return '检验检测';
            }else {
                return '农事';
            }
        }
    }
  }


</script>