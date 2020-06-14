<template>
  <div class="notice-style">
    <h3>{{title}}</h3>
    <p>{{message}}</p>
  </div>
</template>
<script>
  export default {
    name: 'notice',
    props: {
      title: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: ''
      },
      duration: {
        type: Number,
        default: 1000
      },
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      show() {
        this.isShow = true
        setTimeout(this.hide, this.duration)
      },
      hide() {
        this.isShow = false
        this.remove()
      }
    }
  }
</script>
<style scoped lang='scss'>

</style>
