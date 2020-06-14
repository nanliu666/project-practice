const FormTest = (resolve) => require(['../pages/form-test'], resolve)
const treeTest = (resolve) => require(['../pages/tree-test'], resolve)
export default [
  {
    path: '',
    redirect: '/treeTest'
  },
  {
    path: '/formTest',
    component: FormTest,
    name: 'FormTest'
  }, 
  {
    path: '/treeTest',
    component: treeTest,
    name: 'treeTest'
  },
]