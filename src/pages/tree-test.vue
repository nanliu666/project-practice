<template>
  <div class="">
    <treeIndex></treeIndex>
    <div @click="clickFun">点击测试debounce</div>
    <div @click="throlleFun">点击测试throlle</div>
  </div>
</template>
<script>
  import treeIndex from '@/components/tree/treeIndex'
  import utilService from '@/util/util.js'
  export default {
    components: {
      treeIndex
    },
    name: '',
    data() {
      return {}
    },
    created() {
      console.log('斐波那契数列==', utilService.fibonacci(3))
    },
    methods: {
      throlleFun: utilService.throlle(function() {
        console.log('触发节流，在规定时间内才能触发一次')
      }),
      clickFun: utilService.debounce(function() {
        this.debounceFun()
      }),
      debounceFun() {
        console.log('进入目标函数')
      }
    }
  }
</script>
<style scoped lang='scss'>

</style>
