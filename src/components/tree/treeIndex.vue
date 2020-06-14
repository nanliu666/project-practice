<template>
  <div class="">
    <ul>
      <Item :model="treeData"></Item>
    </ul>
  </div>
</template>
<script>
  import Item from './treeItem'
  export default {
    name: 'Tree',
    components: {
      Item
    },
    data() {
      return {
        treeData: {
          title: '王华丽',
          children: [{
              title: '王华丽1',
            },
            {
              title: 'wang',
              children: [{
                title: 'wang1'
              }]
            }
          ]
        }
      }
    }
  }
</script>
<style scoped lang='scss'>

</style>
