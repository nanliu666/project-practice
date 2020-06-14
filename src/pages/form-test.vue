<template>
  <div class="form-test-style">
    <K-form :model="model" :rules="rules" ref="loginForm">
      <form-item label="用户名" prop='usename'>
        <form-input v-model="model.usename" autocomplete="off" placeholder="请输入用户名"></form-input>
      </form-item>
      <form-item label="确认密码" prop='password'>
        <form-input type="password" v-model="model.password" autocomplete="off"></form-input>
      </form-item>
      <form-item>
        <button @click="submit('loginForm')">登陆</button>
      </form-item>
    </K-form>
  </div>
</template>
<script>
  import Kform from '@/components/form'
  import formItem from '@/components/formItem'
  import formInput from '@/components/formInput'
  import create from '@/util/create'
  import Notice from '@/components/notice'
  export default {
    name: 'form-test',
    data() {
      return {
        model: {
          usename: '王华丽',
          password: ''
        },
        rules: {
          usename: [{
            required: true,
            message: '请输入用户名'
          }],
          password: [{
            required: true,
            message: '请输入密码'
          }],
        }
      }
    },
    components: {
      "K-form": Kform,
      formItem,
      formInput,
    },
    created() {},
    methods: {
      submit(form) {
        this.$refs[form].validate(value => {
          this.noticeFun(value)
        })
      },
      noticeFun(value) {
        const notice = create(Notice, {
          title: '验证结果',
          message: value ? '校验失败' : '校验失败',
          duration: 1000,
        })
        notice.show()
      }
    },
  }
</script>
<style scoped lang='scss'>

</style>
