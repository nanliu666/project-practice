<template>
  <div class="">
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errMassage">{{errMassage}}</p>
  </div>
</template>
<script>
  import Schema from 'async-validator'
  export default {
    name: '',
    inject: ['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    data() {
      return {
        errMassage: ''
      }
    },
    mounted() {
      this.$on('validate', this.validate)
    },
    methods: {
      validate() {
        const value = this.form.model[this.prop]
        const rules = this.form.rules[this.prop]
        const desc = {[this.prop]: rules}
        const schema = new Schema(desc)
        // return的是一个promise对象
        return schema.validate({[this.prop]: value}, error => {
          if(error) {
            this.errMassage = error[0].message
          } else {
            this.errMassage = ''
          }
        })
      }
    }
  }
</script>
<style scoped lang='scss'>

</style>
