/**
 * 果蔬产品新增/编辑组件
 * @description 
 * @author 李明村
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  letItem 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：产品对象
 * 
 * @param  edit 
 * 类型：Boolean
 * 是否必填：false
 * 默认值：false
 * 描述：表明此组件是用于新增还是编辑，true表示编辑，false表示新增
 * 
 * 
 * 
 * Events:
 * 
 * @function closeNew
 * 返回：无
 * 必用：true
 * 描述：隐藏新增组件
 * 
 * @function closeEdit
 * 返回：无
 * 必用：true
 * 描述：隐藏编辑组件
 * 
 * @function callback
 * 返回：product对象
 * 必用：true
 * 描述：
 * 
 * 
 * 
 */
<template>
    <form @submit.prevent="validateBeforeSubmit">
        <form-submit
            :letItem="letItem"
            :inputData="inputData"
            :edit="edit"
            @closeNew="cancelAdd"
            @closeEdit="cancelEdit"
            @thisSet="getThis"
            @getMsgDataId="getMsgDataId"
        ></form-submit>
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";

</style>

<script>

    export default {
        name: 'PopProduct',
        props: {
            letItem: {
                type: Object,
                default() {
                    return {
                        'id': '',
                        'plant_id':'',
                        'name': '',
                        'marque': '',
                        'specification': '',
                        'production_unit': '',
                        'place_origin': '',
                        'enforce_standard': '',
                        'memo': ''
                    }
                }
            },
            // 表示此模块是编辑模块还是新增模块的标志
            edit: {
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
                // 作为编辑组件时，用于临时备份父组件传递过来的数据，
                // 以便在修改了数据但不保存时可以复原数据
                tmp: {
                    'id': '',
                    'plant_id':'',
                    'name': '',
                    'marque': '',
                    'specification': '',
                    'production_unit': '',
                    'place_origin': '',
                    'enforce_standard': '',
                    'memo': ''
                },
                inputData: {
                    'plant_id':
                    {
                        'label': '所属果蔬',
                        'divfor': 'product_new_plant',
                        'placeholder': '必填',
                        'rules': 'required',
                        'protoBack': 'plant_id',
                        'select': '1',
                        'selectName':'plant_name',
                        'index': 0,
                        'data': []
                    },
                    'name':
                    {
                        'label': '产品名称',
                        'divfor': 'product_new_fullName',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'marque':
                    {
                        'label': '产品品牌',
                        'divfor': 'product_new_marque',
                        'placeholder': '必填',
                        'rules': 'required|max:255'
                    },
                    'specification': 
                    {
                        'label': '产品规格',
                        'divfor': 'product_new_specification',
                        'placeholder': '',
                        'rules': ''
                    },
                    'production_unit': 
                    {
                        'label': '生产单位',
                        'divfor': 'product_new_production_unit',
                        'placeholder': '',
                        'rules': ''
                    },
                    'place_origin': 
                    {
                        'label': '产地',
                        'divfor': 'product_new_place_origin',
                        'placeholder': '',
                        'rules': ''
                    },
                    'enforce_standard': 
                    {
                        'label': '执行标准',
                        'divfor': 'product_new_business_scope',
                        'placeholder': '',
                        'rules': ''
                    },
                    'memo': 
                    {
                        'label': '备注',
                        'divfor': 'product_new_note',
                        'placeholder': '',
                        'rules': ''
                    }
            },
            val:''
        }
        },
        mounted () {
            this.getAllData();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {
            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                let params = {
                    'id': this.letItem.id,
                    'field': 'name',
                    'type': 'plant',
                    'value': this.letItem.name
                };
                this.$unique(this.val, 'product', params, 'letItem.name').then(() => {
                    if(this.edit) {
                        this.$update(this.val, 'product', this.letItem).then((response) => {
                            for(let key of Object.keys(this.letItem)){
                                this.tmp[key] = this.letItem[key];
                            }
                            this.$alert('修改成功', 's');
                        }, (response) => {
                            if(response != false) {
                                this.$alert('连接出错', 'e');
                            }else {
                                return false;
                            }
                        });
                    }else {
                        this.$storeL(this.val, 'product', this.letItem).then((response) => {
                            this.letItem.id = response.body;
                            this.$emit('callback', this.letItem);
                            this.$alert('新增成功', 's');
                        }, (response) => {
                            if(response != false) {
                                this.$alert('连接出错', 'e');
                            }else {
                                return false;
                            }
                        });
                    }
                }, () => {
                    return false;
                }); 
            },
            //判断是新建还是编辑
            getIndex: function() {
                if (this.edit == false) {
                    this.inputData['plant_id']['index']=0;
                } else {
                    for(let index in this.inputData['plant_id']['data']) {
                        if(this.inputData['plant_id']['data'][index].plant_id== this.letItem.plant_id){
                            this.inputData['plant_id']['index']=parseInt(index);
                        }
                    }   
                }
            },
            getAllData () {
              this.$http.get(this.$adminUrl('harvest/query')).then((response)=>{
                  this.$set(this['inputData']['plant_id'],'data', response.body.harvests.data);
                  this.getIndex();
              }, (response)=>{

              });
            },
            getThis: function(val) {
                this.val=val;
            },
            getMsgDataId: function(msg) {
                this.letItem.plant_id=msg[1];
            },
            /**
            * 隐藏新增模块
            */
            cancelAdd: function() {
                this.$emit('closeNew');
            },  
            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEdit: function() {
                this.$emit('closeEdit');
            }
        },
        destroyed () {
            if(this.edit){
                for(let key of Object.keys(this.letItem)){
                    this.letItem[key] = this.tmp[key];
                }
            }
        },
    }

</script>
