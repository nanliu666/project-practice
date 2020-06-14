const FormTest = (resolve) => require(['../pages/form-test'], resolve)
export default [
  {
    path: '',
    redirect: '/formTest'
  },
  {
    path: '/formTest',
    component: FormTest,
    name: 'FormTest'
  }
]