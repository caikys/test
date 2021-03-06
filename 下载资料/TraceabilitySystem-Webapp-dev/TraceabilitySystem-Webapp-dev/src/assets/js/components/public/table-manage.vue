/**
 * 
 * 列表项信息管理组件
 * @description 包含搜索模块，新增模块，分页模块和列表项模块
 * @author 苏锐佳
 * @date 2017/02/08
 * 
 * 
 * Props:
 * 
 * @param  _key 
 * 类型：String
 * 是否必填：true
 * 默认值：''
 * 描述：显示此table-list的唯一标识
 * 
 * @param  component 
 * 类型：Object
 * 是否必填：true
 * 默认值：null
 * 描述：此prop传入的是一个包含“编辑模块”组件的对象，
 * 包含“新增/编辑弹窗”组件的属性名必须和_key完全一致；
 * 第一，如果每一列中的某个属性不是简单地显示字符串，可以给此prop对象添加新的属性，属性名与protos数组里的保持一致；
 * 例如：{planta: PopPlanta, area: AreaUnit}：
 * 其中'planta'属性名与_key完全一样，
 * 默认情况下新增和编辑会共用'planta'里面的组件，如果新增和编辑想用不同的组件，则使用new属性名，
 * 即{planta: PopPlanta, new: newPop, area: AreaUnit}：其中'planta'用于编辑，'new'用于新增；
 * 'area'属性名与protos数组里的某个值完全一样，
 * 这样遍历到此属性的时候，会用AreaUnit组件去显示而不是简单显示字符串
 * 第二，如果想要自定义每一行的操作按钮，则可以给此prop添加open属性，
 * open属性的值为自定义组件
 * 
 * @param  searchPlaceholder 
 * 类型：String
 * 是否必填：false
 * 默认值：''
 * 描述：搜索框的placeholder
 * 
 * @param  searchUrl 
 * 类型：String
 * 是否必填：true
 * 默认值：''
 * 描述：搜索的url
 * 
 * @param  params 
 * 类型：Object
 * 是否必填：false
 * 默认值：null
 * 描述：根url的参数
 * 
 * @param  excInit 
 * 类型：Boolean
 * 是否必填：false
 * 默认值：true
 * 描述：更新list的时候是否执行初始化函数
 * 
 * @param  theads 
 * 类型：Array
 * 是否必填：true
 * 默认值：['']
 * 描述：table的thead里每一列显示的名字，例如['种植区名称', '种植面积', '负责人']
 * 
 * @param  protos 
 * 类型：Array
 * 是否必填：true
 * 默认值：[]
 * 描述：属性，例如['name', 'area', 'director']
 * 
 * @param  widths 
 * 类型：Array
 * 是否必填：true
 * 默认值：[]
 * 描述：table除去前后两列后的每一列的宽（单位%），合计不超过73%，例如[32, 24, 17]
 * 
 * @param  showCheckbox 
 * 类型：Boolean
 * 是否必填：false
 * 默认值：true
 * 描述：是否显示每一行的checkbox
 * 
 */
<template xmlns:v-touchDelete="http://www.w3.org/1999/xhtml">
    <div>

        <!-- 搜索模块 -->
        <search
            :placeholder="searchPlaceholder"
            :searchUrl="searchUrl"
            :params="params"
            @callback="updateListByMore"
        >
            <slot name="search">
               <button @click="showNewPanel=true" class="stl-btn">新建</button> 
            </slot>
        </search>

        <!-- 新增模块 -->
        <template v-if="component != null && component[_key] != null">
            <component 
                :is="seleteComponent"
                v-if="showNewPanel"
                :edit="false"
                @callback="updateListByOne"
                @closeNew="showNewPanel=false"
            ></component>
        </template>
        

        <!-- 列表项模块 -->
        <table-list
            ref="tableList"
            :_key="_key"
            :component="component"
            :args="args"
            :theads="theads"
            :protos="protos"
            :widths="widths"
            :showOperate="showOperate"
            @getAllLists="getAllLists"
            @checkedBox="checkedBox"
            @selectAll="selectAll"
            @troggleEdit="troggleEdit"
            @longTouchEvent="longTouchDelete"
        >
            <component :is="batchButtons" slot="batchButtons"></component>
            <button v-if="!batchButtons" @click="showConfirmDialog(1)" slot="batchButtons" class="btn btn-del" type="button">删除</button>
        </table-list>
    

        <div class="paginator-module">
            <!-- 分页模块 -->
            <paginator
                ref="paginator"
                :total="total"
                :url="searchUrl + '/query'"
                :paginatorParams="params"
                @lastPageEvent="lastPageClicked"
                @nextPageEvent="nextPageClicked"
                @changePageEvent="$tableList.setShowList(false)"
                @result="updateListByMore"
            ></paginator> 
        </div>

        <!-- 确认模块 -->
        <confirm
                :show="showConfirm"
                @confirmAction="oneOrBatchdestroy"
                @cancelAction="showConfirm=false"
        ></confirm>

    </div>
</template>

<script>

    import { mapState, mapMutations } from 'vuex';
    import Search from './search.vue';
    import Paginator from './paginator.vue';
    import confirm from './confirm.vue';

    export default {
        name: 'List',
        props: {
            _key: {
                type: String,
                required: true,
                default: ''
            },
            // 弹出框
            component: {
                type: Object,
                default () {
                    return null
                }
            },
            // 传递给component的参数
            args: {
                type: Object,
                default () {
                    return {edit: true}
                }
            },
            // 搜索框的placeholder
            searchPlaceholder: {
                type: String,
                default: ''
            },
            // 搜索的url
            searchUrl: {
                type: String,
                required: true,
                default: ''
            },
            // url参数
            params: {
                type: Object,
                default () {
                    return null;
                }
            },
            // 更新list的时候是否执行初始化函数
            excInit: {
                type: Boolean,
                default: true
            },
            // thead 
            theads: {
                type: Array,
                required: true,
                default () {
                    return ['']
                }
            },
            // 属性
            protos: {
                type: Array,
                required: true,
                default () {
                    return []
                }
            },
            // 列表th的宽：%
            widths: {
                type: Array,
                required: true,
                default () {
                    return []
                }
            },
            // 是否显示checkbox
            showCheckbox: {
                type: Boolean,
                default: true
            },
            // 是否显示操作按钮
            showOperate: {
                type: Boolean,
                default: true
            },
            // 底部批量操作模块
            batchButtons: {
                type: Object,
                default() {
                    return null
                }
            }
        },
        data () {
            return {
                // 是否显示新增模块
                showNewPanel: false,
                // 分页的总页数
                total: 1,
                // 搜索的参数对象
                searchParams: {
                    'query_text': '',
                    'List_id': 0,
                    '_sort': 'id',
                    'order': ''
                },
                // 临时记录待删除的列表项信息
                deleteList: {'id':0, 'index': 0, 'flag': null},
                // 单个删除或批量删除
                oneOrBatch: 0,
                // 是否显示确认模块
                showConfirm: false,
                // 无法删除时的提示信息
                tipMsg: '被使用，无法删除'
            }
        },
        computed: {
            seleteComponent () {
                return this.component.new ? this.component.new : this.component[this._key]
            }
        },
        components: {
            Paginator,
            Search,
            confirm
        },
        watch: {
            searchUrl: function(val) {
                this.getAllLists()
            }
        },
        mounted() {
            this.getAllLists();
        },
        methods: {

            /**
             * 获取所有列表项信息
             */
            getAllLists () {
                if(this.excInit) {
                    this.$refs.tableList.init();
                    this.$tableList.setShowList(false);
                }
                this.$tableList.setSlideList('slide-fade-right');
                this.$tableList.setSlideListItem('slide-up');

                this.$index(this, this.searchUrl, this.params).then((response) => {
                    let data = response.body[this.searchUrl + 's'];
                    this.$emit('getAllLists', data);
                    this.$tableList.setList(data.data);
                    this.$tableList.setShowList(true);
                    this.total = data.last_page;
                    this.$refs.paginator.init();
                },(error) => {
                    if(error.status == 401) {
                        this.$router.push('/webapp/login/401')
                    }else {
                       this.$alert('连接出错', 'e'); 
                    }
                });
            },

            /**
             * 将选中的checkbox信息存入SelectedLists
             */
            checkedBox ({item, index}) {
                let checkedMsg = {id: item.id, index:index, flag:this.getAllState(item)}
                for(let index of Object.keys(this.selectedLists)) {
                    if(this.selectedLists[index].id == item.id) {
                        this.$tableList.spliceSelectedLists(index);
                        return true;
                    }
                }
                this.$tableList.pushSelectedLists(checkedMsg);
            },

            /**
            * 全选或取消全选
            * @param e
            */
            selectAll (isAllCheck) {
                if(isAllCheck) {
                    for(let index of this.list.keys()) {
                        this.$tableList.pushSelectedLists({'id':this.list[index].id, 'index':index, 'flag':this.getAllState(this.list[index])});
                    }
                }
            },

            /**
            * 单个删除
            */
            destroy() {
                this.$destroyL(this, this.searchUrl, this.deleteList.id).then((response) => {
                    this.$tableList.spliceList(this.deleteList.index);
                    this.deleteList = {'id':0, 'index': 0};
                    this.showConfirm = false;
                    this.$alert('删除成功');
                },(response) => {
                    this.$alert('连接出错', 'e');
                });
            },
 
            /**
            * 批量删除
            */
            batchDestroy () {
                if(this.selectedLists.length != 0){
                    let ids = [];
                    for(let deleteList of this.selectedLists) {
                        ids.push(deleteList.id);
                    }
                    this.showConfirm = false;
                    this.$batchDestroy(this, this.searchUrl, ids).then((response) => {
                        this.$tableList.reverseSelectedLists('index');
                        for(let deleteList of this.selectedLists) {
                            this.$tableList.spliceList(deleteList.inde);
                        }
                        this.$tableList.setSelectedLists([]);
                        this.$alert('成功删除'+response.body+'条');
                    },(response) => {
                        this.$alert('连接出错', 'e');
                    });
                }else {
                    this.$alert('请选择列表项');
                }
                
            },

            /**
             * 判断调用单个删除或批量删除
             */
            oneOrBatchdestroy () {
                this.$tableList.setSlideListItem('slide-up');
                if(this.oneOrBatch == 0) {
                    this.destroy();
                }else {
                    this.batchDestroy();
                }
            },

            /**
            * 显示确认窗口
            * @param flag
            * @param id
            * @param index
            */
            showConfirmDialog (flag, id=0, index=0) {
                for(let deleteList of this.selectedLists) {
                    let flag = deleteList.flag;
                    let canDelete = flag.every(function(item, index) {
                        return item == null
                    })
                    if(!canDelete) {
                        this.$alert(this.tipMsg);
                        return false;
                    }
                }
                if(flag == 1 &&this.selectedLists.length == 0){
                    this.$alert('请选择列表项');
                }else {
                    this.oneOrBatch = flag;
                    this.deleteList.id = id;
                    this.deleteList.index = index;
                    this.showConfirm = true;
                }

            },

            /**
            * 更新list中的一个
            * @param List
            */
            updateListByOne(newOne) {
                this.showNewPanel = false;
                this.$tableList.setSlideListItem('slide-up');
                this.$tableList.unshiftList(newOne);
            },

            /**
            * 更新list中的多个
            * @param List
            */
            updateListByMore(newList) {
                this.$tableList.setShowList(true);
                this.$refs.tableList.init();
                this.$tableList.setList(newList.data)
                this.total = newList.last_page;
                if(newList.query_text != undefined){
                   this.searchParams.query_text = newList.query_text; 
                }
                
            },

            /**
             * 点击上一页
             */
            lastPageClicked () {
                this.$tableList.setSlideList('slide-fade-left');
                this.$tableList.setShowList(false);
            },

            /**
             * 点击下一页
             */
            nextPageClicked () {
                this.$tableList.setSlideList('slide-fade-right');
                this.$tableList.setShowList(false);
            },
 
            /**
             * 关闭新增弹窗
             */
            closeNew () {
                this.showNewPanel=false;
            }, 

            /**
             * 每行操作按钮的点击事件回调
             */
            troggleEdit(result) {
                if(result) {
                    this.$tableList.setSlideListItem();
                }else {
                    this.$tableList.setSlideListItem('slide-up');
                }
                
            },

            /**
             * 从item中获取所有含有“state”字段的属性
             * @param  {Object} item 
             * @return {Array}
             */
            getAllState (item) {
                let stateArr = new Array();
                for(let proto in item) {
                    if(proto.indexOf('_state') != -1 && proto != 'deleted_state') {
                        stateArr.push(item[proto])
                    }
                }
                return stateArr
            },

            /**
             * 长按删除
             */
            longTouchDelete({item, index}) {
                let flag = this.getAllState(item);
                let canDelete = flag.every(function(item, index) {
                    return item == null
                })
                if(canDelete) {
                    this.showConfirmDialog(0, item.id, index);
                }else {
                    this.$alert(this.tipMsg);
                }
                
            }

        }
    }
</script>
