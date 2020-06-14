<template>
  <div class="">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'k-form',
    provide() {
      return {
        form: this
      }
    },
    props: {
      model: {
        type: Object,
        required: true,
      },
      rules: {
        type: Object,
      },
    },
    data() {
      return {
      }
    },
    methods: {
      validate(cb) {
        let tasks = this.$children
          .filter(item => item.prop)
          .map(item => item.validate())

        // 所以任务都通过，才算通过
        Promise.all(tasks)
          .then(() => cb(true))
          .catch(() => cb(false))
        
      }
    }
  }
</script>
<style scoped lang='scss'>

</style>
