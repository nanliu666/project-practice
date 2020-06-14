<template>
  <div class="">
    <input type="text" :value="value" @input="inputFun" v-bind="$attrs">
  </div>
</template>
<script>
  export default {
    inheritAttrs: false,
    name: '',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
      }
    },
    methods: {
      inputFun(e) {
        this.$emit('input', e.target.value)
        this.$parent.$emit('validate')
      }
    },
  }
</script>
<style scoped lang='scss'>

</style>
