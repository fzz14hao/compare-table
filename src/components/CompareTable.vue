/*
* 商品对比表格模板
*/
<template>
  <div class="table-wrap">
    <div class="table-container" :style="{'width':594*data.length+'px' }">
      <div class="table" v-for="(list,index) in data" :key="index">
        <div class="table-header">
          <div class="table-title"> {{ columns[index].title || columns[0].title }}</div>
          <div class="table-row">
            <div class="table-item"></div>
            <div class="table-item">{{ columns[index].processCode || columns[0].processCode }}</div>
            <div class="table-item">{{ columns[index].processName || columns[0].processName }}</div>
            <div class="table-item">{{ columns[index].sam || columns[0].sam }}</div>
            <div class="table-item">{{ columns[index].processDesc || columns[0].processDesc }}</div>
            <div class="table-item">{{ columns[index].gradeValue || columns[0].gradeValue }}</div>
          </div>
        </div>
        <div class="table-body">
          <div class="table-row" v-for="(item,indexItem) in list" :key="indexItem">
            <div class="table-item">{{ indexItem }}</div>
            <div class="table-item"
                 :class="item.cellClassName?item.cellClassName.processCode:''">{{ item.processCode }}
            </div>
            <div class="table-item"
                 :class="item.cellClassName?item.cellClassName.processName:''">{{ item.processName }}
            </div>
            <div class="table-item"
                 :class="item.cellClassName?item.cellClassName.sam:''">{{ item.sam }}
            </div>
            <div class="table-item"
                 :class="item.cellClassName?item.cellClassName.processDesc:''">{{ item.processDesc }}
            </div>
            <div class="table-item"
                 :class="item.cellClassName?item.cellClassName.gradeValue:''">{{ item.gradeValue }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  // 组件的名称
  name: "CompareTable",
  // props 可以是数组或对象，用于接收来自父组件的数据
  props: {
    data: Array, //表格数据
    columns: Array //表头数据

  },
  // 数据绑定
  data() {
    return {}
  },
  // 组件
  components: {},
  // 方法
  methods: {},

  // 计算属性
  computed: {},

  // 监听
  watch: {},
  created() {
  },
  // 完成挂载，相当于dom ready
  mounted() {

  },

  // 销毁，可以做一些定时器的销毁,缓存的清除等操作
  destroyed() {

  }
};
</script>
<style lang="less" scoped>
.table-wrap {
  width: 100%;
  overflow-x: auto;
  margin-bottom: 100px;
}

.table-container {
  display: flex;
}

.table {
  flex: 1;
  border: 1px solid #afb2b7;
  font-size: 12px;


  .table-title {
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }

  .table-header {
    .table-item {
      font-weight: bold;
    }
  }

  .table-row {
    display: flex;
  }

  .table-row:not(:first-of-type) {
    margin-top: -1px;
  }

  .table-item {
    padding: 10px 5px;
    border: 1px solid #afb2b7;
    border-left: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .table-item:not(:first-of-type) {
    //margin-left: -1px;
  }

  .highlight {
    background: #D2E9FF !important;
  }
}

.table:not(:first-of-type) {
  margin-left: -2px;
}
</style>

