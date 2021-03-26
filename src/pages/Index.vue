<template>
    <div class="page">
        <div class="title">商品对比</div>
        <CompareTable :data="data" :columns="columns"/>

    </div>
</template>

<script>
  import CompareTable from '../components/CompareTable'
  import data from '../config/data'

  export default {
    name: 'IndexPage',
    components:{
      CompareTable
    },
    data(){
      return {
        data:[],
        columns: [
          {
            title: "商品1",
            processCode: "工序编码",
            processName: "工序简称",
            sam: "SAM",
            processDesc: "工序描述",
            gradeValue: "等级"
          },
          {
            title: "商品2",
          },
          {
            title: "商品3",
          },

        ],
      }
    },
    methods:{
      /*
   * @params Array promiseList Promise列表
   * 对比数据 数据差异
   * */
      async comparisonData(promiseList) {
        const result = await Promise.all(promiseList)

        if (result.length < 2) {
          console.log('只有一组数据')
          return false
        }

        //获取数据长度列表
        const lenList = result.map((list) => {
          return list.length
        })

        //获取最大长度
        const maxLen = Math.max(...lenList)
        console.log('最大长度=' + maxLen)

        for (let i = 0; i < maxLen; i++) {
          let props = []
          result.forEach((list, index) => {
            const p = Object.getOwnPropertyNames(result[index][i] || {})
            props = Array.from(new Set([...props, ...p]))
          })

          props.forEach(e => {
            const i1 = result[0][i]
            const i2 = result[1][i]
            if (!i1 || !i2) {
              return
            }
            const r1 = result[0][i][e]
            const r2 = result[1][i][e]

            let r3 = null
            if (result.length === 3) {
              if (!result[2][i]) {
                return
              }
              r3 = result[2][i][e]
            }

            if (r3) {
              if (r1 === r2 && r1 === r3 && r2 === r3) {
                //数据是一样的
              } else {
                //不一样
                result.forEach((list, index) => {
                  if (!result[index][i]) {
                    return
                  }
                  //给属性添加className
                  if (result[index][i]['cellClassName']) {
                    result[index][i]['cellClassName'][e] = 'highlight'
                  } else {
                    result[index][i]['cellClassName'] = {}
                    result[index][i]['cellClassName'][e] = 'highlight'
                  }
                })
              }
            } else {
              if (r1 === r2) {
                //数据是一样的
              } else {
                //不一样
                result.forEach((list, index) => {
                  if (!result[index][i]) {
                    return
                  }
                  //给属性添加className
                  if (result[index][i]['cellClassName']) {
                    result[index][i]['cellClassName'][e] = 'highlight'
                  } else {
                    result[index][i]['cellClassName'] = {}
                    result[index][i]['cellClassName'][e] = 'highlight'
                  }
                })
              }
            }
          })
        }
        return result
      },
    },
    async mounted() {
      const res =await  this.comparisonData(data)
      this.data=res
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .page {
        font-size: 14px;

        a {
            color: #FF0000;
        }
    }
    .title{
      text-align: center;
      font-size: 20px;
      padding-bottom: 20px;
    }

</style>
